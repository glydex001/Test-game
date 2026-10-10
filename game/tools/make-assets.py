# Procedural asphalt + Glyde-X billboards / shop sign / loading logo.
import numpy as np, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT = '/home/claude/kidcars/game/www/tex'
RAW = '/home/claude/kidcars/tex/raw'
BRAND = '/root/.claude/skills/synced/8c97a987-7562-4f5d-a329-0fd453fd45a6_0674c9d6-394e-4b59-87be-b725cbd302a5/glydex-brand/assets/logo.png'
NAVY, GOLD, GOLD_DARK, OFFWHITE = (23, 40, 60), (208, 180, 108), (132, 104, 57), (248, 246, 240)
POPPINS = '/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf'
os.makedirs(OUT, exist_ok=True)

# ---------- asphalt (tileable by construction: noise generated in frequency space is periodic)
def periodic_noise(size, octaves, persistence=0.55, seed=1):
    rng = np.random.default_rng(seed)
    acc = np.zeros((size, size)); amp = 1.0; total = 0
    for o in range(octaves):
        n = 2 ** (o + 2)
        base = rng.random((n, n))
        # periodic bilinear upsample
        big = np.array(Image.fromarray((base * 255).astype(np.uint8)).resize((size, size), Image.BICUBIC)).astype(np.float32) / 255
        # make it wrap by blending with a rolled copy
        acc += amp * big; total += amp; amp *= persistence
    acc /= total
    return acc

size = 1024
rng = np.random.default_rng(7)
grain = rng.random((size, size))
grain = np.array(Image.fromarray((grain * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))).astype(np.float32) / 255
low = periodic_noise(size, 4, seed=3)
v = 0.30 + 0.10 * (low - 0.5) + 0.22 * (grain - 0.5)
# sparse brighter stone chips
chips = rng.random((size, size)) > 0.995
v = np.where(chips, v + 0.25, v)
v = np.clip(v, 0, 1)
asphalt = np.dstack([v * 255 * 0.98, v * 255, v * 255 * 1.03]).clip(0, 255).astype(np.uint8)
Image.fromarray(asphalt).save(f'{OUT}/asphalt.webp', quality=80)
print('asphalt')

# ---------- logo with transparent background (the approved file has a white background)
logo = Image.open(BRAND).convert('RGB')
la = np.asarray(logo).astype(np.int32)
# the file is flattened onto black: anything darker than the navy wordmark is background
dist = np.sqrt((la ** 2).sum(axis=2))
alpha = np.clip((dist - 18) / 40.0, 0, 1) * 255
logo_rgba = Image.fromarray(np.dstack([la.astype(np.uint8), alpha.astype(np.uint8)]), 'RGBA')
logo_rgba.save(f'{OUT}/logo.webp', quality=95)

def fit(im, w, h):
    r = max(w / im.width, h / im.height)
    im = im.resize((int(im.width * r) + 1, int(im.height * r) + 1), Image.LANCZOS)
    l = (im.width - w) // 2; t = (im.height - h) // 2
    return im.crop((l, t, l + w, t + h))

def billboard(photo_name, headline, sub, out):
    W, H = 1536, 768
    bb = Image.new('RGB', (W, H), OFFWHITE)
    photo = f'{RAW}/{photo_name}.png'
    if os.path.exists(photo):
        p = fit(Image.open(photo).convert('RGB'), W, H)
        bb.paste(p, (0, 0))
    # left white panel for the logo + copy (logo must sit on a light background)
    panel = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    pd = ImageDraw.Draw(panel)
    pd.rounded_rectangle((48, 48, 700, H - 48), radius=28, fill=(255, 255, 255, 235))
    bb = Image.alpha_composite(bb.convert('RGBA'), panel).convert('RGB')
    lg = logo_rgba.copy(); lg.thumbnail((560, 220))
    bb.paste(lg, (100, 110), lg)
    d = ImageDraw.Draw(bb)
    f1 = ImageFont.truetype(POPPINS, 64); f2 = ImageFont.truetype(POPPINS, 36)
    y = 380
    for line in headline.split('\n'):
        d.text((100, y), line, font=f1, fill=NAVY); y += 76
    d.rectangle((100, y + 10, 400, y + 14), fill=GOLD)
    d.text((100, y + 34), sub, font=f2, fill=GOLD_DARK)
    bb.save(out, quality=85)
    print('billboard', out)

billboard('recliner1', 'Comfort\nIn Motion', 'Factory direct  •  083 378 7864', f'{OUT}/billboard1.webp')
billboard('recliner2', 'Premium\nRecliners', 'Nationwide delivery', f'{OUT}/billboard2.webp')

# ---------- shop front: a Glyde-X showroom sign band to sit above the shop-front texture
W, H = 1024, 256
sign = Image.new('RGB', (W, H), NAVY)
d = ImageDraw.Draw(sign)
d.rectangle((0, H - 8, W, H), fill=GOLD)
lg = Image.new('RGB', (560, 220), 'white'); lgl = logo_rgba.copy(); lgl.thumbnail((520, 190)); lg.paste(lgl, ((560 - lgl.width) // 2, (220 - lgl.height) // 2), lgl)
lg = lg.resize((420, 165))
sign.paste(lg, (40, 45))
f = ImageFont.truetype(POPPINS, 54)
d.text((500, 70), 'SHOWROOM', font=f, fill=GOLD)
f3 = ImageFont.truetype(POPPINS, 30)
d.text((500, 140), 'Comfort In Motion', font=f3, fill=(255, 255, 255))
sign.save(f'{OUT}/shopsign.webp', quality=85)
print('shopsign')
