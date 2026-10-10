import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('www'); const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json' };
const server = http.createServer((req, res) => { const f = path.join(root, decodeURIComponent(req.url === '/' ? 'index.html' : req.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(8765);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 640, height: 320 } });
await page.goto('http://localhost:8765/'); await page.evaluate(() => localStorage.setItem('kidcars-v3', JSON.stringify({ car: 0, world: 'country', time: 'day', traffic: false, sound: false, tilt: false, cam: 0, controls: 'buttons' }))); await page.reload();
await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden'), null, { timeout: 180000 });
await page.dispatchEvent('#btnPlay', 'pointerdown'); await page.keyboard.down('ArrowUp'); await page.waitForTimeout(8000);
await page.keyboard.down('ArrowRight');
for (let i = 0; i < 4; i++) { await page.waitForTimeout(1500); console.log(await page.evaluate(() => { const b = window.__kidcars.body(); return `t${performance.now()|0} steer=${b.steer} yaw=${b.yawRate.toFixed(3)} h=${b.h.toFixed(3)} vf=${b.vf.toFixed(1)} x=${b.x.toFixed(1)} z=${b.z.toFixed(1)}`; })); }
await browser.close(); server.close();
