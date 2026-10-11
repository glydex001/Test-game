// Converts an OpenStreetMap XML export into the compact JSON the game's map mode uses.
// Usage: node tools/osm2map.mjs <map.osm> <out.json>
import fs from 'fs';

const [,, inFile, outFile] = process.argv;
const xml = fs.readFileSync(inFile, 'utf8');

// ---- projection (metres, x east, z south so that -z is north)
const bounds = /<bounds minlat="([^"]+)" minlon="([^"]+)" maxlat="([^"]+)" maxlon="([^"]+)"/.exec(xml);
const minlat = +bounds[1], minlon = +bounds[2], maxlat = +bounds[3], maxlon = +bounds[4];
const lat0 = (minlat + maxlat) / 2, lon0 = (minlon + maxlon) / 2;
const kx = 111320 * Math.cos(lat0 * Math.PI / 180), kz = 110574;
const proj = (lat, lon) => [Math.round((lon - lon0) * kx * 10) / 10, Math.round(-(lat - lat0) * kz * 10) / 10];

// ---- nodes
const nodes = new Map();          // id -> [x,z]
const nodeTags = new Map();       // id -> tags (only for tagged nodes)
const nodeRe = /<node id="(\d+)" lat="([^"]+)" lon="([^"]+)"[^>]*?(\/>|>([\s\S]*?)<\/node>)/g;
let m;
while ((m = nodeRe.exec(xml))) {
  const id = m[1]; nodes.set(id, proj(+m[2], +m[3]));
  if (m[5]) { const t = parseTags(m[5]); if (Object.keys(t).length) nodeTags.set(id, t); }
}
function parseTags(s) { const t = {}; const re = /<tag k="([^"]+)" v="([^"]*)"\/>/g; let q; while ((q = re.exec(s))) t[q[1]] = q[2].replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'"); return t; }

// ---- ways
const ROAD_W = { motorway: 11, motorway_link: 6, trunk: 11, trunk_link: 6, primary: 11, primary_link: 6, secondary: 9.5, secondary_link: 6, tertiary: 8.5, tertiary_link: 6, residential: 7, unclassified: 7, living_street: 6, service: 4.5, track: 4 };
const roads = [], buildings = [], areas = [], pois = [], rails = [], treeRows = [], suburbs = [], signs = [];
const usedNodes = new Map();      // node id -> index in nodeList
const nodeList = [];
const useNode = (id) => { let i = usedNodes.get(id); if (i === undefined) { i = nodeList.length; usedNodes.set(id, i); nodeList.push(nodes.get(id)); } return i; };
const wayRe = /<way id="(\d+)"[^>]*>([\s\S]*?)<\/way>/g;
while ((m = wayRe.exec(xml))) {
  const body = m[2]; const t = parseTags(body);
  const refs = []; const nr = /<nd ref="(\d+)"\/>/g; let q; while ((q = nr.exec(body))) if (nodes.has(q[1])) refs.push(q[1]);
  if (refs.length < 2) continue;
  const hw = t.highway;
  if (hw && ROAD_W[hw]) {
    roads.push({ n: refs.map(useNode), t: hw, w: ROAD_W[hw], name: t.name || '', one: t.oneway === 'yes' || hw === 'motorway' || hw === 'motorway_link' ? 1 : 0, lanes: +(t.lanes || 0), rb: t.junction === 'roundabout' ? 1 : 0 });
    continue;
  }
  if (t.railway === 'rail') { rails.push(refs.map((r) => nodes.get(r))); continue; }
  const closed = refs[0] === refs[refs.length - 1];
  if (t.boundary && t.name && closed && refs.length > 4) { suburbs.push({ name: t.name, p: refs.slice(0, -1).map((r) => nodes.get(r)) }); continue; }
  if (t.building && closed) {
    const pts = refs.slice(0, -1).map((r) => nodes.get(r));
    let h = +(t.height || 0) || (+(t['building:levels'] || 0) * 3.2) || (/house|residential|detached|hut/.test(t.building) ? 3.4 : /industrial|warehouse/.test(t.building) ? 7 : /retail|commercial|supermarket|mall/.test(t.building) ? 6 : /school|hospital|mosque|church|place_of_worship/.test(t.building) ? 5 : 4);
    const b = { p: pts, h: Math.round(h * 10) / 10, k: t.building, name: t.name || t.amenity || t.shop || '' };
    if (t.amenity) b.am = t.amenity; if (t.religion) b.rel = t.religion; if (t.shop) b.shop = t.shop; if (t['building:levels']) b.lv = +t['building:levels'];
    buildings.push(b);
    if (t.name) pois.push({ name: t.name, k: t.amenity || t.shop || t.building, c: centroid(pts) });
    continue;
  }
  if (closed) {
    const kind = t.landuse || t.leisure || t.natural || t.amenity;
    const keep = { residential: 'res', industrial: 'ind', commercial: 'com', retail: 'com', farmland: 'farm', grass: 'grass', park: 'park', pitch: 'pitch', water: 'water', wetland: 'wet', cemetery: 'grass', recreation_ground: 'grass', scrub: 'scrub', school: 'school', parking: 'park_lot', sports_centre: 'grass', quarry: 'quarry' }[kind];
    if (keep) { const pts = refs.slice(0, -1).map((r) => nodes.get(r)); areas.push({ k: keep, p: pts }); if (t.name && /school|mosque|park|mall/i.test(t.name + ' ' + kind)) pois.push({ name: t.name, k: kind, c: centroid(pts) }); }
    continue;
  }
  if (t.natural === 'tree_row') treeRows.push(refs.map((r) => nodes.get(r)));
}
// node POIs and single trees
const trees = [];
for (const [id, t] of nodeTags) {
  const p = nodes.get(id);
  if (t.natural === 'tree') { trees.push(p); continue; }
  if (t.highway === 'traffic_signals') signs.push([p[0], p[1], 'tl']);
  else if (t.highway === 'stop') signs.push([p[0], p[1], 'stop']);
  else if (t.highway === 'crossing' && t.crossing !== 'unmarked') signs.push([p[0], p[1], 'xing']);
  else if (/hump|bump|table/.test(t.traffic_calming || '')) signs.push([p[0], p[1], 'hump']);
  if (t.name && (t.amenity || t.shop)) pois.push({ name: t.name, k: t.amenity || t.shop, c: p });
}
function centroid(pts) { let x = 0, z = 0; for (const p of pts) { x += p[0]; z += p[1]; } return [Math.round(x / pts.length), Math.round(z / pts.length)]; }

// keep POIs that matter for a kid's map (landmarks)
const keepPoi = pois.filter((p) => /school|place_of_worship|mosque|mall|hospital|fuel|park|stadium|police|fire_station|supermarket|library|clinic/i.test(p.k + ' ' + p.name));

const out = { center: [lat0, lon0], extent: [proj(minlat, minlon), proj(maxlat, maxlon)], nodes: nodeList, roads, buildings, areas, pois: keepPoi, trees, treeRows, rails, suburbs, signs };
fs.writeFileSync(outFile, JSON.stringify(out));
console.log(`suburbs ${suburbs.length} signs ${signs.length} (${signs.filter((x) => x[2] === 'tl').length} traffic lights)`);
console.log(`nodes ${nodeList.length} roads ${roads.length} buildings ${buildings.length} areas ${areas.length} pois ${keepPoi.length} trees ${trees.length} rails ${rails.length} -> ${(fs.statSync(outFile).size / 1e6).toFixed(2)} MB`);
const mall = keepPoi.find((p) => /Trade Route Mall/i.test(p.name)); console.log('Trade Route Mall at', mall && mall.c);
