# Prepares generated textures for the game: tiles -> webp, cut-outs -> chroma-keyed webp with alpha.
import numpy as np, os, sys
from PIL import Image, ImageFilter

RAW = '/home/claude/kidcars/tex/raw'
OUT = '/home/claude/kidcars/game/www/tex'
os.makedirs(OUT, exist_ok=True)

TILES = {  # name: size
    'grass': 1024, 'sand': 1024, 'snow': 1024, 'pavement': 1024, 'asphalt': 1024,
    'facade_glass': 1024, 'facade_brick': 1024, 'facade_shops': 1024, 'house_front': 1024, 'precast_wall': 512, 'roof_tiles': 512,
    # Lenasia set (value = (size, crop fractions l,t,r,b))
    'house_brick': (1024, (0, 0.01, 1, 1)), 'house_arch': (1024, (0, 0.02, 1, 1)), 'house_modern': (1024, (0, 0.17, 1, 0.985)),
    'mosque_wall': (1024, (0, 0.04, 1, 1)), 'mall_facade': (1024, (0, 0.12, 1, 0.93)), 'shops_row': (1024, (0, 0.02, 1, 0.86)), 'flats_block': (1024, (0, 0.08, 1, 0.95)),
}
CUTOUTS = {  # name: (max width, crop box or None, soft, hard)
    'tree_oak': (768, None, 18, 60), 'tree_pine': (768, (60, 60, -20, -1), 18, 60), 'tree_snowpine': (768, None, 30, 90), 'cactus': (640, None, 30, 90),
    'leaf_oak': (512, 'frac:0,0.06,1,1', 30, 90), 'leaf_pine': (512, None, 30, 90), 'grass_tuft': (512, None, 30, 90), 'clouds': (2048, None, 40, 120, True),
    'palisade': (1024, None, 40, 120), 'tree_jacaranda': (768, None, 30, 90), 'tree_palm': (512, None, 30, 90),
    'hills_green': (2048, None, 30, 90, True), 'mesas_desert': (2048, 'frac:0,0.335,1,0.735', 30, 90, True), 'mountains_snow': (2048, None, 25, 80, True), 'skyline_city': (2048, None, 30, 90, True),
}

def key(img, soft, hard, top_only=False, extra=None):
    a = np.asarray(img.convert('RGB')).astype(np.float32)
    h, w, _ = a.shape
    # background colour = median of a border strip (top strip only for panoramas)
    border = a[:12].reshape(-1, 3) if top_only else np.concatenate([a[:12].reshape(-1, 3), a[-12:].reshape(-1, 3), a[:, :12].reshape(-1, 3), a[:, -12:].reshape(-1, 3)])
    bg = np.median(border, axis=0)
    d = np.sqrt(((a - bg) ** 2).sum(axis=2))
    if extra is not None:
        for col in extra: d = np.minimum(d, np.sqrt(((a - np.array(col, dtype=np.float32)) ** 2).sum(axis=2)))
    alpha = np.clip((d - soft) / (hard - soft), 0, 1)
    # despill: pull semi-transparent edge pixels away from the key colour
    rgb = a.copy()
    m = (alpha > 0) & (alpha < 1)
    rgb[m] = (a[m] - bg * (1 - alpha[m])[:, None]) / np.maximum(alpha[m][:, None], 0.2)
    rgb = np.clip(rgb, 0, 255)
    out = np.dstack([rgb, alpha * 255]).astype(np.uint8)
    return Image.fromarray(out, 'RGBA'), bg

for name, size in TILES.items():
    p = f'{RAW}/{name}.png'
    if not os.path.exists(p): print('missing', name); continue
    im = Image.open(p).convert('RGB')
    if isinstance(size, tuple):
        size, (l, t, r, b) = size; im = im.crop((int(l * im.width), int(t * im.height), int(r * im.width), int(b * im.height)))
    im = im.resize((size, int(size * im.height / im.width)) if im.width != im.height else (size, size), Image.LANCZOS)
    im.save(f'{OUT}/{name}.webp', quality=82)
    print('tile', name)

for name, cfg in CUTOUTS.items():
    maxw, crop, soft, hard = cfg[:4]; top_only = cfg[4] if len(cfg) > 4 else False; extra = cfg[5] if len(cfg) > 5 else None
    p = f'{RAW}/{name}.png'
    if not os.path.exists(p): print('missing', name); continue
    im = Image.open(p)
    if isinstance(crop, str):
        l, t, r, b = [float(v) for v in crop.split(':')[1].split(',')]; im = im.crop((int(l * im.width), int(t * im.height), int(r * im.width), int(b * im.height)))
    elif crop:
        l, t, r, b = crop; im = im.crop((l, t, im.width + r, im.height + b))
    ka, bg = key(im, soft, hard, top_only, extra)
    if name == 'mesas_desert_old':
        # clear everything above the rock silhouette (removes the setting sun and its halo)
        arr = np.asarray(ka).copy(); H_, W_ = arr.shape[:2]
        rgb = arr[:, :, :3].astype(np.int32)
        rock = (rgb[:, :, 0] > rgb[:, :, 1] + 15) & (rgb[:, :, 0] < 215) & (arr[:, :, 3] > 200)
        for x in range(W_):
            col = rock[:, x]; run = 0; cut = H_
            for y in range(H_):
                run = run + 1 if col[y] else 0
                if run >= 10: cut = y - 9; break
            arr[:cut, x, 3] = 0
        ka = Image.fromarray(arr, 'RGBA')
    if name == 'clouds':
        arr = np.asarray(ka).astype(np.float32); lum = arr[:, :, :3].mean(axis=2, keepdims=True)
        arr[:, :, :3] = np.clip(lum * 1.08 + 10, 0, 255); ka = Image.fromarray(arr.astype(np.uint8), 'RGBA')
    # trim fully transparent margins
    bbox = ka.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
    if bbox: ka = ka.crop(bbox)
    if ka.width > maxw: ka = ka.resize((maxw, int(ka.height * maxw / ka.width)), Image.LANCZOS)
    ka.save(f'{OUT}/{name}.webp', quality=85)
    print('cutout', name, ka.size, 'bg', bg.astype(int))

# ---------- asphalt normal + roughness maps from the asphalt tile
asp = np.asarray(Image.open(f'{OUT}/asphalt.webp').convert('L')).astype(np.float32) / 255
h = np.asarray(Image.fromarray((asp * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))).astype(np.float32) / 255
dx = np.roll(h, -1, axis=1) - np.roll(h, 1, axis=1); dy = np.roll(h, -1, axis=0) - np.roll(h, 1, axis=0)
strength = 6.0
nx = -dx * strength; ny = -dy * strength; nz = np.ones_like(h)
l = np.sqrt(nx * nx + ny * ny + nz * nz); nx /= l; ny /= l; nz /= l
nrm = np.dstack([(nx * 0.5 + 0.5) * 255, (ny * 0.5 + 0.5) * 255, (nz * 0.5 + 0.5) * 255]).astype(np.uint8)
Image.fromarray(nrm).save(f'{OUT}/asphalt_n.webp', quality=85)
low = np.asarray(Image.fromarray((asp * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))).astype(np.float32) / 255
rough = np.clip(0.55 + (low - low.mean()) * 2.5 + (asp - 0.5) * 0.3, 0.35, 0.95)
Image.fromarray((rough * 255).astype(np.uint8)).save(f'{OUT}/asphalt_r.webp', quality=80)
for f in ['lensflare0', 'lensflare3']:
    Image.open(f'{RAW}/{f}.png').convert('RGBA').save(f'{OUT}/{f}.webp', quality=90)
print('asphalt maps + flares')
