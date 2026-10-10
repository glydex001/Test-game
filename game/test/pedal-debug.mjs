import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('www'); const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json' };
const server = http.createServer((req, res) => { const f = path.join(root, decodeURIComponent(req.url === '/' ? 'index.html' : req.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(8768);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const context = await browser.newContext({ viewport: { width: 900, height: 420 }, hasTouch: true, isMobile: true });
const page = await context.newPage(); const cdp = await context.newCDPSession(page);
await page.goto('http://localhost:8768/'); await page.evaluate(() => localStorage.setItem('kidcars-v3', JSON.stringify({ car: 3, world: 'country', time: 'day', traffic: false, sound: false, tilt: false, cam: 0, controls: 'wheel' }))); await page.reload();
await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden') && window.__kidcars.roadReady(), null, { timeout: 240000 });
await page.evaluate(() => { window.__evs = []; for (const ev of ['pointerdown','pointerup','pointercancel','pointerleave','pointerout','touchstart','touchend','touchcancel']) document.getElementById('btnGas').addEventListener(ev, (e) => window.__evs.push(ev + ':' + (e.pointerId ?? '') + ':' + (e.pointerType ?? ''))); });
const play = await page.$eval('#btnPlay', (el) => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: play.x, y: play.y }] }); await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
await page.waitForFunction(() => window.__kidcars.state() === 'drive');
const gas = await page.$eval('#btnGas', (el) => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: gas.x, y: gas.y }] });
for (let i = 0; i < 5; i++) { await page.waitForTimeout(1500); console.log(await page.evaluate(() => JSON.stringify({ t: window.__kidcars.simTime().toFixed(1), in: window.__kidcars.inputs().gas, vf: window.__kidcars.body().vf.toFixed(1), evs: window.__evs.join(' ') }))); }
await browser.close(); server.close();
