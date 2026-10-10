// Touch-input test loop: drives the game through REAL touch events (via Chrome DevTools), exactly as a finger would,
// and checks that each on-screen control actually changes the car. Run: node test/controls.mjs
import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';

const root = path.resolve('www');
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json' };
const server = http.createServer((req, res) => { const u = req.url.split('?')[0]; const f = path.join(root, decodeURIComponent(u === '/' ? 'index.html' : u)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen(8767);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const context = await browser.newContext({ viewport: { width: 760, height: 360 }, hasTouch: true, isMobile: true });
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error' && !/404|cancelable=false|Failed to fetch|Couldn't load texture/.test(m.text())) errors.push('console: ' + m.text().slice(0, 200)); });
const cdp = await context.newCDPSession(page);
// multi-touch helper: finger 0 and finger 1 (ids 0/1), like a thumb on each side of the phone
const fingers = {};
async function sendTouch(type) { await cdp.send('Input.dispatchTouchEvent', { type, touchPoints: Object.entries(fingers).map(([id, p]) => ({ x: p.x, y: p.y, id: +id })) }); }
const touch = {
  async start(x, y, id = 0) { fingers[id] = { x, y }; await sendTouch('touchStart'); },
  async move(x, y, id = 0) { fingers[id] = { x, y }; await sendTouch('touchMove'); },
  async end(id = 0) { if (!(id in fingers)) return; const p = fingers[id]; delete fingers[id]; await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [{ x: p.x, y: p.y, id }] }); },
  async endAll() { for (const id of Object.keys(fingers)) await this.end(+id); },
};
const results = [];
function check(name, ok, detail) { results.push({ name, ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); }
const centre = async (sel) => page.$eval(sel, (el) => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height }; });
const car = () => page.evaluate(() => { const b = window.__kidcars.body(); return { h: b.h, vf: b.vf, steer: b.steer, x: b.x, z: b.z }; });
// sim-time aware wait: headless rendering is slow, so wait until the game has advanced N seconds of its own clock
const simWait = async (sec) => { await page.evaluate((sec) => new Promise((res) => { const t0 = window.__kidcars.simTime(); const iv = setInterval(() => { if (window.__kidcars.simTime() - t0 >= sec) { clearInterval(iv); res(); } }, 50); }), sec); };

async function boot(controls, world = 'country') {
  await page.goto('http://localhost:8767/?test=1');
  await page.evaluate(({ controls, world }) => localStorage.setItem('kidcars-v3', JSON.stringify({ car: 3, world, time: 'day', traffic: false, sound: false, tilt: false, cam: 0, controls })), { controls, world });
  await page.reload();
  await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden') && window.__kidcars.roadReady(), null, { timeout: 240000 });
  const play = await centre('#btnPlay'); await touch.start(play.x, play.y); await touch.end();
  await page.waitForFunction(() => window.__kidcars.state() === 'drive', null, { timeout: 10000 });
}
async function holdPedal(sel, sec) { const p = await centre(sel); await touch.start(p.x, p.y, 1); await simWait(sec); const s = await car(); await touch.end(1); return s; }

// ---------------- wheel mode
await boot('wheel');
// hit-test: is the wheel actually touchable?
const wheelHit = await page.evaluate(() => { const el = document.getElementById('wheel'); const r = el.getBoundingClientRect(); const hit = document.elementFromPoint(r.left + r.width * 0.5, r.top + r.height * 0.2); return !!(hit && el.contains(hit)); });
check('wheel is touchable (hit test)', wheelHit);
let s0 = await holdPedal('#btnGas', 4); check('GO pedal accelerates', s0.vf > 3, `speed ${(s0.vf * 3.6).toFixed(0)} km/h after 4 s`);
// keep accelerating while turning the wheel clockwise (right turn): second finger not needed — car keeps rolling
const w = await centre('#wheel'); const R = w.w * 0.42;
const arc = async (fromDeg, toDeg, steps = 12) => { const a0 = fromDeg * Math.PI / 180; await touch.start(w.x + Math.cos(a0) * R, w.y + Math.sin(a0) * R, 0); for (let i = 1; i <= steps; i++) { const a = (fromDeg + (toDeg - fromDeg) * i / steps) * Math.PI / 180; await touch.move(w.x + Math.cos(a) * R, w.y + Math.sin(a) * R, 0); await page.waitForTimeout(30); } };
const gas = await centre('#btnGas');
await touch.start(gas.x, gas.y, 1);                   // right thumb stays on GO
await arc(-90, 30);                                   // clockwise from the top: right turn
await simWait(1.5); const r1 = await car(); await touch.end(0);
check('wheel clockwise → steer right (steer > 0.5)', r1.steer > 0.5, `steer=${r1.steer.toFixed(2)}`);
check('wheel clockwise → car turns right (heading decreases)', r1.h < s0.h - 0.02, `heading ${s0.h.toFixed(3)} → ${r1.h.toFixed(3)}`);
await simWait(1.5); const r2 = await car();
check('wheel springs back when released (|steer| < 0.1)', Math.abs(r2.steer) < 0.1, `steer=${r2.steer.toFixed(2)}`);
await arc(-90, -210);                                  // anticlockwise: left turn
await simWait(1.5); const l1 = await car(); await touch.end(0); await touch.end(1);
check('wheel anticlockwise → steer left (steer < -0.5)', l1.steer < -0.5, `steer=${l1.steer.toFixed(2)}`);
check('wheel anticlockwise → car turns left (heading increases)', l1.h > r2.h + 0.02, `heading ${r2.h.toFixed(3)} → ${l1.h.toFixed(3)}`);
const bg = await holdPedal('#btnGas', 2); const b1 = await holdPedal('#btnBrake', 1.2); check('STOP pedal brakes', b1.vf < bg.vf - 1, `speed ${(bg.vf * 3.6).toFixed(0)} → ${(b1.vf * 3.6).toFixed(0)} km/h`);
// nothing stuck after all touches end
await touch.endAll(); await simWait(0.5);
const stuck = await page.evaluate(() => window.__kidcars.inputs());
check('no control stuck down after release', !stuck.gas && !stuck.brake && !stuck.left && !stuck.right, JSON.stringify(stuck));
// horn, boost, camera buttons respond without errors
for (const sel of ['#btnHorn', '#btnBoost', '#btnCam']) { const p = await centre(sel); await touch.start(p.x, p.y, 1); await page.waitForTimeout(80); await touch.end(1); }
check('horn/boost/camera taps cause no errors', errors.length === 0, errors.join(' | '));

// ---------------- buttons mode
await boot('buttons');
const g2 = await holdPedal('#btnGas', 4); check('[buttons] GO accelerates', g2.vf > 3, `speed ${(g2.vf * 3.6).toFixed(0)} km/h`);
const g2p = await centre('#btnGas'); await touch.start(g2p.x, g2p.y, 1);
const hold0 = async (sel, sec) => { const p = await centre(sel); await touch.start(p.x, p.y, 0); await simWait(sec); const s = await car(); await touch.end(0); return s; };
const rb = await hold0('#btnRight', 1.2); check('[buttons] ▶ turns right', rb.h < g2.h - 0.02, `heading ${g2.h.toFixed(3)} → ${rb.h.toFixed(3)}`);
const lb = await hold0('#btnLeft', 1.2); check('[buttons] ◀ turns left', lb.h > rb.h + 0.02, `heading ${rb.h.toFixed(3)} → ${lb.h.toFixed(3)}`);
await touch.endAll();

// ---------------- Lenasia loads and drives
await boot('wheel', 'lenasia');
const ln = await holdPedal('#btnGas', 4); check('[lenasia] drives', ln.vf > 2, `speed ${(ln.vf * 3.6).toFixed(0)} km/h`);
check('no page errors overall', errors.length === 0, errors.join(' | '));

process.on('unhandledRejection', (e) => { console.log('ERROR', e && e.message); });
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
await browser.close(); server.close();
process.exit(failed ? 1 : 0);
