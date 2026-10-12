import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('www');
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json' };
const server = http.createServer((req, res) => { const u = req.url.split('?')[0]; const f = path.join(root, decodeURIComponent(u === '/' ? 'index.html' : u)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(8769);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 480 } });
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
const spots = JSON.parse(process.argv[2]);
await page.goto('http://localhost:8769/');
await page.evaluate((w) => localStorage.setItem('kidcars-v3', JSON.stringify({ car: 0, world: w, time: 'day', traffic: false, sound: false, eco: false, cam: 0 })), spots.world);
await page.reload();
await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden') && window.__kidcars.roadReady(), null, { timeout: 240000 });
await page.dispatchEvent('#btnPlay', 'pointerdown');
for (const [name, x, z] of spots.pts) {
  await page.evaluate(([x, z]) => { const W = window.__kidcars.world(); const n = W.road.nearest(x, z, { skipMinor: true }); const lx = Math.cos(n.h), lz = -Math.sin(n.h); const px = n.px - lx * n.w / 4, pz = n.pz - lz * n.w / 4; window.__kidcars.body().h = n.h; window.__kidcars.teleport(px, pz); for (let i = 0; i < 4; i++) W.road.ensure(px, pz); }, [x, z]);
  await page.waitForTimeout(2500);
  console.log('tile build ms', JSON.stringify(await page.evaluate(() => { const W = window.__kidcars.world(); const b = window.__kidcars.body(); const out = []; for (let k = 0; k < 6; k++) { W.road.finishTiles && W.road.finishTiles(b.x, b.z); const t0 = performance.now(); W.road.ensure(b.x + k * 400, b.z); out.push(Math.round(performance.now() - t0)); } return out; })));
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `shots/lm-${name}.png`, timeout: 150000 });
}
await browser.close(); server.close();
