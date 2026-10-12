// Screenshot of the dua card and the start at the Engen (normal mode, eco on): node test/duashot.mjs
import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('www');
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => { const u = req.url.split('?')[0]; const f = path.join(root, decodeURIComponent(u === '/' ? 'index.html' : u)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(8775);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 480 } });
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
await page.goto('http://localhost:8775/?test=1');
await page.evaluate(() => localStorage.setItem('kidcars-v3', JSON.stringify({ car: 0, world: 'lenasia', time: 'day', traffic: true, sound: false, eco: true, cam: 0 })));
await page.goto('http://localhost:8775/');
await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden') && window.__kidcars.roadReady(), null, { timeout: 300000 });
await page.dispatchEvent('#btnPlay', 'pointerdown'); await page.waitForTimeout(1500);
await page.screenshot({ path: 'shots/dua.png', timeout: 120000 }); console.log('shot dua');
await page.dispatchEvent('#btnBismillah', 'pointerdown');
await page.waitForFunction(() => window.__kidcars.state() === 'drive', null, { timeout: 60000 }); await page.waitForTimeout(6000);
await page.screenshot({ path: 'shots/start-engen.png', timeout: 120000 }); console.log('shot start');
await browser.close(); server.close();
