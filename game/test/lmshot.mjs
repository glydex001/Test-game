// Orbit-style screenshots of landmarks: node test/lmshot.mjs '[["name", tx, tz, camx, camy, camz], ...]'
import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('www');
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => { const u = req.url.split('?')[0]; const f = path.join(root, decodeURIComponent(u === '/' ? 'index.html' : u)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(8774);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 480 } });
page.on('pageerror', (e) => console.log('PAGEERROR', e.message)); page.on('console', (m) => { if (m.type() === 'error' || /^LM |^cam/.test(m.text())) console.log('CONSOLE', m.text().slice(0, 300)); });
const spots = JSON.parse(process.argv[2]);
await page.goto('http://localhost:8774/?test=1');
await page.evaluate(() => localStorage.setItem('kidcars-v3', JSON.stringify({ car: 0, world: 'lenasia', time: 'day', traffic: false, sound: false, eco: false, cam: 0 })));
await page.reload();
await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden') && window.__kidcars.roadReady(), null, { timeout: 240000 });
await page.dispatchEvent('#btnPlay', 'pointerdown');
await page.waitForTimeout(1500);
for (const [name, tx, tz, cx, cy, cz, raw] of spots) {
  await page.evaluate(([tx, tz, cx, cy, cz, raw]) => { const K = window.__kidcars; const n = raw ? {} : K.world().road.nearest(cx, cz); const px = n.px != null ? n.px : cx, pz = n.px != null ? n.pz : cz; K.teleport(px, pz); K.lookAt(tx, tz, px, cy, pz); console.log('cam', px | 0, pz | 0); }, [tx, tz, cx, cy, cz, raw]);
  await page.waitForTimeout(4000);
  await page.evaluate(() => { const W = window.__kidcars.world(); const b = window.__kidcars.body(); W.road.finishTiles ? W.road.finishTiles(b.x, b.z) : W.road.ensure(b.x, b.z); });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `shots/lm-${name}.png`, timeout: 150000 });
  console.log('shot', name, JSON.stringify(await page.evaluate(() => { const W = window.__kidcars.world().road; return { steps: W.stepN, maxMs: +(W.stepMax || 0).toFixed(1), avgMs: +((W.stepSum || 0) / (W.stepN || 1)).toFixed(1), by: W.stepBy }; })));
}
await browser.close(); server.close();
