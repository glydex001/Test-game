# Clips a Google Open Buildings v3 tile (csv.gz) to the Lenasia map box and writes a compact JSON of polygons in game metres.
# Usage: python3 clip-buildings.py <tile.csv.gz> <out.json>   (streams; no pandas needed)
import sys, gzip, csv, json, math, re
src, out = sys.argv[1], sys.argv[2]
MINLAT, MINLON, MAXLAT, MAXLON = -26.41, 27.78, -26.29, 27.97     # same box as the OSM export
lat0, lon0 = (MINLAT + MAXLAT) / 2, (MINLON + MAXLON) / 2
kx, kz = 111320 * math.cos(math.radians(lat0)), 110574
polys = []; n = 0
with gzip.open(src, 'rt', newline='') as f:
    r = csv.reader(f); header = next(r)
    ilat, ilon, iarea, iconf, igeo = header.index('latitude'), header.index('longitude'), header.index('area_in_meters'), header.index('confidence'), header.index('geometry')
    for row in r:
        n += 1
        try:
            lat, lon = float(row[ilat]), float(row[ilon])
        except ValueError:
            continue
        if lat < MINLAT or lat > MAXLAT or lon < MINLON or lon > MAXLON: continue
        if float(row[iconf]) < 0.65: continue
        area = float(row[iarea])
        if area < 25: continue
        wkt = row[igeo]
        m = re.search(r'\(\(([^)]*)\)', wkt)
        if not m: continue
        pts = []
        for pair in m.group(1).split(','):
            x, y = pair.strip().split(' ')
            pts.append([round((float(x) - lon0) * kx, 1), round(-(float(y) - lat0) * kz, 1)])
        if len(pts) > 2 and pts[0] == pts[-1]: pts.pop()
        # thin out dense outlines (keep every point if small)
        if len(pts) > 12:
            step = len(pts) / 12.0; pts = [pts[int(i * step)] for i in range(12)]
        polys.append({'p': pts, 'a': round(area)})
json.dump({'n': len(polys), 'b': polys}, open(out, 'w'), separators=(',', ':'))
print('rows', n, 'kept', len(polys))
