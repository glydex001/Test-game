// Touch-input test loop: drives the game through REAL touch events (via Chrome DevTools), exactly as a finger would,
// and checks that each on-screen control actually changes the car. Run: node test/controls.mjs
import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';

const PART = process.env.PART || 'all';
const run = (name) => PART === 'all' || PART === name;
const root = path.resolve('www');
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json' };
const server = http.createServer((req, res) => { const u = req.url.split('?')[0]; const f = path.join(root, decodeURIComponent(u === '/' ? 'index.html' : u)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); }).listen({ all: 8767, wheel: 8771, goals: 8772, lenasia: 8773 }[PART] || 8767);

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
  await page.goto(`http://localhost:${server.address().port}/?test=1`);
  await page.evaluate(({ controls, world }) => localStorage.setItem('kidcars-v3', JSON.stringify({ car: 3, world, time: 'day', traffic: false, sound: false, tilt: false, cam: 0, controls })), { controls, world });
  await page.reload();
  await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden') && window.__kidcars.roadReady(), null, { timeout: 240000 });
  const play = await centre('#btnPlay'); await touch.start(play.x, play.y); await touch.end();
  await page.waitForFunction(() => window.__kidcars.state() === 'drive', null, { timeout: 10000 });
}
const sawGreat = async () => page.waitForFunction(() => /GREAT/.test(document.getElementById('toastbig').textContent) && !document.getElementById('toast').classList.contains('hidden'), null, { timeout: 9000 }).then(() => true).catch(() => false);
async function holdPedal(sel, sec) { const p = await centre(sel); await touch.start(p.x, p.y, 1); await simWait(sec); const s = await car(); await touch.end(1); return s; }

// ---------------- wheel mode
if (run('wheel')) {
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
// a long drag right round the wheel (300°) must keep steering the same way, not flip past half a turn
await arc(-90, 210, 40); await simWait(0.4); const rr = await car();
check('dragging more than half a turn keeps steering right (no flip)', rr.steer > 0.9, `steer=${rr.steer.toFixed(2)}`);
for (let i = 1; i <= 20; i++) { const a = (210 - 150 * i / 20) * Math.PI / 180; await touch.move(w.x + Math.cos(a) * R, w.y + Math.sin(a) * R, 0); await page.waitForTimeout(30); }   // wind back 150° without lifting: passes centre, turns left
await simWait(0.4); const rr2 = await car(); await touch.end(0);
check('winding back past centre steers left', rr2.steer < -0.1, `steer=${rr2.steer.toFixed(2)}`);
// all that full-lock driving may have banged the car up: repair (F) and get rolling again before the left-turn check
await touch.end(1); await page.keyboard.press('KeyF'); await simWait(0.3);
await touch.start(gas.x, gas.y, 1); await simWait(2); const l0 = await car();
await arc(-90, -210);                                  // anticlockwise: left turn
await simWait(1.5); const l1 = await car(); await touch.end(0); await touch.end(1);
check('wheel anticlockwise → steer left (steer < -0.5)', l1.steer < -0.5, `steer=${l1.steer.toFixed(2)}`);
check('wheel anticlockwise → car turns left (heading increases)', l1.h > l0.h + 0.02, `heading ${l0.h.toFixed(3)} → ${l1.h.toFixed(3)}`);
await page.keyboard.press('KeyF'); await simWait(0.3);   // repair in case the full-lock turns banged the car up
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

}
// ---------------- goals: stars, missions, sticker book
if (run('goals')) {
await boot('wheel');
const m0 = await page.evaluate(() => ({ text: document.getElementById('mtext').textContent, kind: window.__kidcars.missions.cur && window.__kidcars.missions.cur.kind, hidden: document.getElementById('mission').classList.contains('hidden') }));
check('a mission is shown when driving starts', !!m0.kind && m0.text.length > 3 && !m0.hidden, `${m0.kind}: "${m0.text}"`);
const stars0 = await page.evaluate(() => window.__kidcars.P.stars);
await page.evaluate(() => window.__kidcars.addStarAhead(4));
const sg = await holdPedal('#btnGas', 4);
const stars1 = await page.evaluate(() => window.__kidcars.P.stars);
check('driving through stars collects them', stars1 - stars0 >= 3, `${stars0} → ${stars1} (speed ${(sg.vf * 3.6).toFixed(0)} km/h)`);
// complete the current mission by force-feeding its counter, expect the reward toast and a new mission afterwards
const miss0 = await page.evaluate(() => window.__kidcars.P.missions);
await page.evaluate(() => { const m = window.__kidcars.missions.cur; m.have = m.need - 1; m.kind = 'horn'; });
await page.evaluate(() => { const ev = new KeyboardEvent('keydown', { code: 'KeyH' }); window.dispatchEvent(ev); });
const great1 = await sawGreat();
const miss1 = await page.evaluate(() => ({ n: window.__kidcars.P.missions }));
check('finishing a mission rewards and celebrates', miss1.n === miss0 + 1 && great1, JSON.stringify({ ...miss1, great1 }));
await simWait(4); const m2 = await page.evaluate(() => window.__kidcars.missions.cur); check('a new mission starts after the celebration', m2 && !m2.done, m2 && m2.text);
// photo button: flash, polaroid, counter
const ph0 = await page.evaluate(() => window.__kidcars.P.photos);
const phb = await centre('#btnPhoto'); await touch.start(phb.x, phb.y); await touch.end();
await page.waitForFunction((n) => window.__kidcars.P.photos > n, ph0, { timeout: 8000 }).catch(() => {});
const ph1 = await page.evaluate(() => ({ n: window.__kidcars.P.photos, shown: !document.getElementById('polaroid').classList.contains('hidden'), src: (document.getElementById('polaimg').src || '').slice(0, 22) }));
check('photo button takes a picture', ph1.n === ph0 + 1 && ph1.shown && /^data:image\/jpeg/.test(ph1.src), JSON.stringify(ph1));
// pause: car stops moving, resume continues
const gp = await centre('#btnGas'); await touch.start(gp.x, gp.y, 1); await simWait(1);
const pause = await centre('#btnPause'); await touch.start(pause.x, pause.y); await touch.end();
await page.waitForTimeout(300);
const pz = await page.evaluate(() => ({ st: window.__kidcars.state(), ov: !document.getElementById('pauseov').classList.contains('hidden'), t: window.__kidcars.simTime() }));
await page.waitForTimeout(800);
const pz2 = await page.evaluate(() => window.__kidcars.simTime());
check('pause stops the game and shows the overlay', pz.st === 'pause' && pz.ov && Math.abs(pz2 - pz.t) < 0.01, JSON.stringify(pz));
const rs = await centre('#btnResume'); await touch.start(rs.x, rs.y); await touch.end();
await simWait(1); const rsv = await car(); await touch.end(1);
check('resume continues driving', rsv.vf > 3, `speed ${(rsv.vf * 3.6).toFixed(0)} km/h`);
// garage from the pause overlay
await touch.start(pause.x, pause.y); await touch.end(); await page.waitForTimeout(200);
const gb = await centre('#btnGarage'); await touch.start(gb.x, gb.y); await touch.end();
await page.waitForFunction(() => window.__kidcars.state() === 'menu');
// sticker book opens in the garage
const bk = await centre('#btnBook'); await touch.start(bk.x, bk.y); await touch.end(); await page.waitForTimeout(200);
const book = await page.evaluate(() => ({ open: !document.getElementById('book').classList.contains('hidden'), n: document.querySelectorAll('#bookgrid .sticker').length, got: document.querySelectorAll('#bookgrid .sticker:not(.locked)').length }));
check('sticker book opens with stickers', book.open && book.n >= 20 && book.got >= 1, JSON.stringify(book));
const bc = await centre('#btnBookClose'); await touch.start(bc.x, bc.y); await touch.end();

}
// ---------------- Lenasia loads and drives
if (run('lenasia')) {
await boot('wheel', 'lenasia');
const ln = await holdPedal('#btnGas', 4); check('[lenasia] drives', ln.vf > 2, `speed ${(ln.vf * 3.6).toFixed(0)} km/h`);
const lm = await page.evaluate(() => { const m = window.__kidcars.missions.cur; return { kind: m.kind, text: m.text, target: window.__kidcars.missions.target() }; });
check('[lenasia] first mission is "drive to a place" with a target', lm.kind === 'goto' && !!lm.target, `${lm.kind}: ${lm.text}`);
if (lm.target) {
  await page.evaluate((t) => window.__kidcars.teleport(t[0], t[1]), lm.target);
  const g2 = await sawGreat();
  check('[lenasia] arriving at the place completes the mission', g2, '');
  await simWait(4);
  const dm = await page.evaluate(() => { const m = window.__kidcars.missions.cur; return { kind: m.kind, text: m.text, target: window.__kidcars.missions.target() }; });
  check('[lenasia] second mission is a recliner delivery', dm.kind === 'deliver' && !!dm.target, `${dm.kind}: ${dm.text}`);
  if (dm.kind === 'deliver') {
    await page.evaluate((t) => window.__kidcars.teleport(t[0], t[1]), dm.target); await simWait(0.5);
    const pk = await page.evaluate(() => ({ phase: window.__kidcars.missions.cur.phase, target: window.__kidcars.missions.target(), text: document.getElementById('mtext').textContent }));
    check('[lenasia] pickup at Glyde-X switches to the delivery leg', pk.phase === 1 && !!pk.target, pk.text);
    await page.evaluate((t) => window.__kidcars.teleport(t[0], t[1]), pk.target);
    const g3 = await sawGreat(); const dl = await page.evaluate(() => ({ d: window.__kidcars.P.deliveries }));
    check('[lenasia] delivery completes and counts', dl.d >= 1 && g3, JSON.stringify(dl));
  }
}
}
check('no page errors overall', errors.length === 0, errors.join(' | '));

process.on('unhandledRejection', (e) => { console.log('ERROR', e && e.message); });
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
await browser.close(); server.close();
process.exit(failed ? 1 : 0);
