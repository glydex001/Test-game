// Kid Cars — endless driving with real cars on a real winding road. No music, no people. Everything unlocked.
import * as THREE from 'three';
import { CARS, loadCar, hasCar, instantiate, disposeInstance, setNightLights, setEnvIntensity } from './cars.js';
import { createWorld } from './world.js';
import { LANES, ROAD_W, RAIL_OFF, DS } from './road.js';
import { CarBody, collideCars, collideCircle, collideBox } from './physics.js';
import { Sound } from './sound.js';
import { Rain, SkidMarks } from './fx.js';
import { P, saveP, STICKERS, newStickers, initStars, addStar, updateStars, clearStars, makeTargetMarker, makeRecliner, Missions } from './goals.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);
const randi = (a, b) => Math.floor(rand(a, b + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const SAVE_KEY = 'kidcars-v3';
let settings = { car: 0, color: 0, world: 'country', time: 'day', traffic: true, sound: true, tilt: false, cam: 0, controls: 'wheel', eco: true };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}')); } catch (e) { /* ignore */ }
if (!CARS[settings.car]) settings.car = 0;
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ } }

// ------------------------------------------------------------------ renderer / scene
const canvas = $('c');
const TEST = /[?&]test/.test(location.search);   // automated test mode: lowest graphics so the simulation runs fast
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !TEST, powerPreference: 'high-performance' });
renderer.setPixelRatio(TEST ? 0.35 : Math.min(window.devicePixelRatio || 1, settings.eco ? 1.0 : 1.5));
renderer.shadowMap.enabled = !TEST; renderer.shadowMap.type = settings.eco ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.5;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.3, 1400);
function resize() { const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); } }
window.addEventListener('resize', resize);
const W = createWorld(scene, renderer);
initStars(scene);
const marker = makeTargetMarker(scene);
const rain = new Rain(scene), skids = new SkidMarks(scene);
// garage turntable (shown under the car in the menu)
const turntable = new THREE.Group();
{ const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.9, 0.14, 56), new THREE.MeshStandardMaterial({ color: 0x1b2430, roughness: 0.25, metalness: 0.6, envMapIntensity: 1.2 })); disc.position.y = 0.07; disc.receiveShadow = true; turntable.add(disc);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(4.75, 0.07, 8, 64), new THREE.MeshStandardMaterial({ color: 0xd0b46c, roughness: 0.3, metalness: 0.8 })); rim.rotation.x = Math.PI / 2; rim.position.y = 0.14; turntable.add(rim);
  turntable.visible = false; scene.add(turntable); }
const missions = new Missions();
let recliner = null;

// ---- post-processing: soft bloom + vignette/grade (dropped automatically on slow phones)
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uVig: { value: 0.35 }, uSat: { value: 1.12 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5; float v = 1.0 - uVig * smoothstep(0.25, 0.75, dot(d, d) * 2.0); c.rgb *= v; gl_FragColor = c; }`,
};
let composer = null, bloomPass = null, usePost = !TEST && !settings.eco;
function buildComposer() {
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 2 });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloomPass = new UnrealBloomPass(new THREE.Vector2(256, 128), 0.18, 0.4, 1.6); composer.addPass(bloomPass);
  composer.addPass(new ShaderPass(GradeShader));
  composer.addPass(new OutputPass());
}
buildComposer(); resize();
// Eco mode (default on phones): cooler and longer battery — 30 fps, 1× resolution, lighter shadows, no bloom.
let frameCap = 0;
function applyQuality() {
  const eco = !!settings.eco;
  if (!TEST) { renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, eco ? 1.0 : 1.5)); usePost = !eco && quality > 1; }
  frameCap = eco && !TEST ? 1000 / 30 : 0;
  const sz = eco ? 1024 : 2048; if (W.sun.shadow.mapSize.x !== sz) { W.sun.shadow.mapSize.set(sz, sz); if (W.sun.shadow.map) { W.sun.shadow.map.dispose(); W.sun.shadow.map = null; } }
  renderer.shadowMap.type = eco ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap; renderer.shadowMap.needsUpdate = true;
  $('optEco').textContent = eco ? '🔋' : '✨'; $('optEco').classList.toggle('off', !eco);
  resize();
}
const COLORS = [0xd3121f, 0x1746c9, 0xf5c518, 0x159447, 0xf2f2f2, 0x15161a, 0xff6a13, 0x6d28d9, 0x1fb8c8];

// ------------------------------------------------------------------ loading
const loadEl = $('loading'), loadBar = $('loadfill'), loadTxt = $('loadtxt');
let loaded = 0, toLoad = 0;
function bump(label) { loaded++; loadBar.style.width = Math.round((loaded / toLoad) * 100) + '%'; if (label) loadTxt.textContent = label; }
async function preload() {
  const first = CARS[settings.car].id; toLoad = CARS.length + 1;
  await loadCar(first, false); bump('Polishing the ' + CARS[settings.car].name + '…');
  for (const c of CARS) { await loadCar(c.id, true); bump('Loading traffic…'); }
  loadTxt.textContent = 'Ready!';
  setTimeout(() => loadEl.classList.add('hidden'), 350);
  (async () => { for (const c of CARS) if (!hasCar(c.id, false)) { try { await loadCar(c.id, false); } catch (e) { console.warn(e); } if (state === 'menu' && CARS[settings.car].id === c.id) setPlayerCar(); } })();
}

// ------------------------------------------------------------------ smoke (damage)
const SMOKE_N = 60;
const smokeGeo = new THREE.BufferGeometry();
const smokePos = new Float32Array(SMOKE_N * 3), smokeSize = new Float32Array(SMOKE_N), smokeAlpha = new Float32Array(SMOKE_N), smokeCol = new Float32Array(SMOKE_N * 3);
smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3)); smokeGeo.setAttribute('aSize', new THREE.BufferAttribute(smokeSize, 1)); smokeGeo.setAttribute('aAlpha', new THREE.BufferAttribute(smokeAlpha, 1)); smokeGeo.setAttribute('aCol', new THREE.BufferAttribute(smokeCol, 3));
const smokeMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false,
  uniforms: { uColor: { value: new THREE.Color(0x777777) } },
  vertexShader: `attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; void main(){ vA = aAlpha; vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; float a = smoothstep(0.5, 0.1, d) * vA; gl_FragColor = vec4(vC, a); }`,
});
const smoke = new THREE.Points(smokeGeo, smokeMat); smoke.frustumCulled = false; scene.add(smoke);
const smokeP = []; for (let i = 0; i < SMOKE_N; i++) smokeP.push({ x: 0, y: -10, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, size: 1, r: 0.5, g: 0.5, b: 0.5 });
let smokeNext = 0;
function emitSmoke(x, y, z, strength, col) {
  const p = smokeP[smokeNext]; smokeNext = (smokeNext + 1) % SMOKE_N;
  if (col) { p.r = col[0]; p.g = col[1]; p.b = col[2]; } else { p.r = p.g = p.b = 0.45; }
  p.x = x + rand(-0.3, 0.3); p.y = y; p.z = z + rand(-0.3, 0.3);
  p.vx = rand(-0.4, 0.4); p.vy = rand(0.8, 1.6) * strength; p.vz = rand(-0.4, 0.4);
  p.life = 0; p.max = rand(0.9, 1.8); p.size = rand(0.5, 1.0) * strength;
}
function updateSmoke(dt) {
  for (let i = 0; i < SMOKE_N; i++) {
    const p = smokeP[i];
    if (p.life < p.max) { p.life += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; p.vy *= 0.98; }
    const t = p.life / p.max; const alive = p.life < p.max;
    smokePos[i * 3] = p.x; smokePos[i * 3 + 1] = p.y; smokePos[i * 3 + 2] = p.z;
    smokeSize[i] = alive ? p.size * (0.6 + t * 2.2) : 0; smokeAlpha[i] = alive ? (1 - t) * 0.55 : 0; smokeCol[i * 3] = p.r; smokeCol[i * 3 + 1] = p.g; smokeCol[i * 3 + 2] = p.b;
  }
  smokeGeo.attributes.position.needsUpdate = true; smokeGeo.attributes.aSize.needsUpdate = true; smokeGeo.attributes.aAlpha.needsUpdate = true; smokeGeo.attributes.aCol.needsUpdate = true;
}

// ------------------------------------------------------------------ player & traffic
let player = null, playerSpec = CARS[0], body = null, headlights = null;
const G = { s: 0, idx: 0, damage: 0, totaled: false, boostFuel: 1, boosting: false, shake: 0, dist: 0, menuAngle: 0.7, lastHitT: 0, spin: 0, combo: 0, lastStarT: -9, saveT: 0, missionT: 0 };
function setPlayerCar() {
  if (player) { scene.remove(player); disposeInstance(player); }
  playerSpec = CARS[settings.car];
  player = instantiate(playerSpec.id, !hasCar(playerSpec.id, false), COLORS[settings.color]);
  scene.add(player);
  headlights = new THREE.Group();
  for (const sx of [-1, 1]) {
    const s = new THREE.SpotLight(0xfff4d6, 0, 90, 0.55, 0.5, 1.0);
    s.position.set(sx * 0.65, 0.7, -playerSpec.len / 2 + 0.1); s.target.position.set(sx * 1.8, 0, -45); headlights.add(s, s.target);
  }
  player.add(headlights);
  body = new CarBody(playerSpec);
  applyTime(); applyDamageLook();
}

const traffic = [];
for (let i = 0; i < 6; i++) traffic.push({ mesh: null, spec: CARS[0], body: null, lane: 0, s: 0, target: 20, active: false, idx: 0 });
function spawnTraffic(t, ahead) {
  const lane = randi(0, 2);
  let s = ahead ? G.s + rand(120, 420) : G.s - rand(60, 90);
  for (let tries = 0; tries < 10; tries++) {
    let ok = true;
    for (const o of traffic) if (o !== t && o.active && o.lane === lane && Math.abs(o.s - s) < 50) ok = false;
    if (ok) break; s += 40;
  }
  if (t.mesh) { scene.remove(t.mesh); disposeInstance(t.mesh); }
  t.spec = pick(CARS); t.mesh = instantiate(t.spec.id, true, pick(COLORS)); scene.add(t.mesh);
  t.body = new CarBody(t.spec); t.lane = lane; t.s = s; t.target = ahead ? rand(14, 27) : rand(30, 40);
  const p = W.road.pointAt(s); t.body.x = p.x + p.rx * LANES[lane]; t.body.z = p.z + p.rz * LANES[lane]; t.body.h = p.h;
  t.body.vx = p.fx * t.target; t.body.vz = p.fz * t.target; t.idx = Math.floor(s / DS);
  t.active = true; t.mesh.visible = true; t.ahead = s > G.s;
}
function placeTraffic(t) { t.mesh.position.set(t.body.x, 0, t.body.z); t.mesh.rotation.y = t.body.h; }

// ------------------------------------------------------------------ time of day
function applyTime() {
  W.setTime(settings.time);
  setNightLights(W.night || W.rain); setEnvIntensity(W.night ? 0.5 : 1.0); rain.set(!!W.rain); Sound.rain = !!W.rain;
  if (player) { player.userData.paint.forEach((m) => (m.envMapIntensity = W.night ? 0.6 : 1.25)); headlights.children.forEach((c) => { if (c.isSpotLight) c.intensity = W.night ? 400 : 0; }); }
}

// ------------------------------------------------------------------ input
// Touch handling reads the raw touch list on every event and works out which finger is on which control.
// (Pointer events alone are unreliable with two thumbs down: the browser can treat the pair as a pinch and
// quietly drop the release of one finger, which leaves a button or the wheel stuck.)
const input = { left: false, right: false, gas: false, brake: false, boost: false, tilt: 0, wheel: 0 };
const ctlIds = ['btnLeft', 'btnRight', 'btnGas', 'btnBrake', 'btnBoost'];
const ctlKey = { btnLeft: 'left', btnRight: 'right', btnGas: 'gas', btnBrake: 'brake', btnBoost: 'boost' };
const wheelEl = $('wheel'), wheelImg = $('wheelimg');
let wheelAngle = 0, wheelDrag = null; const WHEEL_MAX = 120;
const touches = new Map();     // identifier -> { x, y, wheel: bool }
const mouseHeld = new Map();   // pointerId -> key (desktop mouse only)
function angleAt(x, y) { const r = wheelEl.getBoundingClientRect(); return Math.atan2(y - (r.top + r.height / 2), x - (r.left + r.width / 2)) * 180 / Math.PI; }
// The wheel follows the finger by ADDING each small movement (like a real wheel). Measuring from where the finger first
// touched would wrap after half a turn and suddenly steer the other way.
function turnWheel(x, y) {
  const a = angleAt(x, y); let da = a - wheelDrag.last; while (da > 180) da -= 360; while (da < -180) da += 360; wheelDrag.last = a;
  if (Math.abs(da) > 120) return;   // a jump across the hub: ignore
  wheelAngle = clamp(wheelAngle + da, -WHEEL_MAX, WHEEL_MAX); wheelImg.style.transform = `rotate(${wheelAngle}deg)`;
}
function inside(el, x, y) { const r = el.getBoundingClientRect(); return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom; }
function recomputeTouchInput() {
  const held = {};
  for (const id of ctlIds) held[ctlKey[id]] = false;
  for (const t of touches.values()) {
    if (t.wheel) continue;
    for (const id of ctlIds) if (inside($(id), t.x, t.y)) held[ctlKey[id]] = true;
  }
  for (const id of ctlIds) { const k = ctlKey[id]; const on = held[k] || mouseHeld.has(k); input[k] = on; $(id).classList.toggle('pressed', on); }
}
function onTouch(e) {
  if (e.cancelable) e.preventDefault();
  if (e.type === 'touchstart') { Sound.init(); Sound.resume(); }
  // reconcile with the browser's list of active touches: a finger that vanished without a touchend is released
  const live = new Set(Array.from(e.touches).map((t) => t.identifier));
  for (const id of Array.from(touches.keys())) if (!live.has(id) && !Array.from(e.changedTouches).some((t) => t.identifier === id)) { const rec = touches.get(id); touches.delete(id); if (rec && rec.wheel && wheelDrag && wheelDrag.id === id) wheelDrag = null; if (rec && rec.lock) lockEnd('reconcile ' + e.type); }
  for (const t of Array.from(e.changedTouches)) {
    const id = t.identifier;
    if (e.type === 'touchstart') {
      const onWheel = settings.controls === 'wheel' && state === 'drive' && inside(wheelEl, t.clientX, t.clientY) && !wheelDrag;
      touches.set(id, { x: t.clientX, y: t.clientY, wheel: onWheel, lock: state === 'menu' && inside($('btnLock'), t.clientX, t.clientY) });
      if (touches.get(id).lock) lockStart('touch');
      if (onWheel) wheelDrag = { id, last: angleAt(t.clientX, t.clientY) };
      if (state === 'drive' && inside($('btnHorn'), t.clientX, t.clientY)) { honk(); $('btnHorn').classList.add('pressed'); setTimeout(() => $('btnHorn').classList.remove('pressed'), 200); }
    } else if (e.type === 'touchmove') {
      const rec = touches.get(id); if (!rec) continue; rec.x = t.clientX; rec.y = t.clientY;
      if (rec.wheel && wheelDrag && wheelDrag.id === id) turnWheel(t.clientX, t.clientY);
    } else { // touchend / touchcancel
      const rec = touches.get(id); touches.delete(id);
      if (rec && rec.wheel && wheelDrag && wheelDrag.id === id) wheelDrag = null;
      if (rec && rec.lock) lockEnd('touchend ' + e.type);
    }
  }
  recomputeTouchInput();
}
for (const ev of ['touchstart', 'touchmove', 'touchend', 'touchcancel']) document.addEventListener(ev, onTouch, { passive: false });
// desktop mouse support (pointer events, ignored for touch which is handled above)
function bindMouse(id, key) {
  const el = $(id);
  el.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; e.preventDefault(); mouseHeld.set(key, true); recomputeTouchInput(); Sound.init(); Sound.resume(); });
  const up = (e) => { if (e && e.pointerType === 'touch') return; mouseHeld.delete(key); recomputeTouchInput(); };
  el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
}
ctlIds.forEach((id) => bindMouse(id, ctlKey[id]));
window.addEventListener('blur', () => { touches.clear(); mouseHeld.clear(); wheelDrag = null; lockEnd('blur'); recomputeTouchInput(); });
wheelEl.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; e.preventDefault(); wheelEl.setPointerCapture(e.pointerId); wheelDrag = { id: 'mouse', last: angleAt(e.clientX, e.clientY) }; });
wheelEl.addEventListener('pointermove', (e) => { if (e.pointerType === 'touch' || !wheelDrag || wheelDrag.id !== 'mouse') return; turnWheel(e.clientX, e.clientY); });
const mouseWheelUp = (e) => { if (e.pointerType === 'touch') return; if (wheelDrag && wheelDrag.id === 'mouse') wheelDrag = null; };
wheelEl.addEventListener('pointerup', mouseWheelUp); wheelEl.addEventListener('pointercancel', mouseWheelUp);
function honk() { Sound.horn(); P.horns++; missionEvent('horn'); }
$('btnHorn').addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; e.preventDefault(); Sound.init(); Sound.resume(); honk(); });
$('btnCam').addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; settings.cam = (settings.cam + 1) % 3; save(); });
$('btnFix').addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; repairCar(); });
// taps on the simple buttons (camera / fix / pause) via touch
document.addEventListener('touchend', (e) => {
  if (state !== 'drive') return;
  for (const t of Array.from(e.changedTouches)) {
    if (inside($('btnCam'), t.clientX, t.clientY)) { settings.cam = (settings.cam + 1) % 3; save(); }
    if (inside($('btnPhoto'), t.clientX, t.clientY)) takePhoto();
    if (!$('totaled').classList.contains('hidden') && inside($('btnFix'), t.clientX, t.clientY)) repairCar();
  }
}, { passive: false });
function updateWheel(dt) {
  if (!wheelDrag) { wheelAngle += (0 - wheelAngle) * Math.min(1, 9 * dt); if (Math.abs(wheelAngle) < 0.3) wheelAngle = 0; wheelImg.style.transform = `rotate(${wheelAngle}deg)`; }
  input.wheel = wheelAngle / WHEEL_MAX;
}
function applyControlsMode() {
  const wheel = settings.controls === 'wheel';
  $('leftpad').classList.toggle('hidden', wheel); $('wheel').classList.toggle('hidden', !wheel);
  $('rightpad').classList.toggle('pedals', wheel);
  $('optCtl').textContent = wheel ? '🎡' : '🕹️';
}
window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.left = true;
  if (e.code === 'ArrowRight' || e.code === 'KeyD') input.right = true;
  if (e.code === 'ArrowUp' || e.code === 'KeyW') input.gas = true;
  if (e.code === 'ArrowDown' || e.code === 'KeyS') input.brake = true;
  if (e.code === 'ShiftLeft' || e.code === 'Space') input.boost = true;
  if (e.code === 'KeyH') honk();
  if (e.code === 'KeyC') { settings.cam = (settings.cam + 1) % 3; save(); }
  if (e.code === 'KeyF') repairCar();
  if (e.code === 'KeyP') takePhoto();
  if (e.code === 'Escape') { if (state === 'drive') pauseGame(); else if (state === 'pause') resumeGame(); }
});
window.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.left = false;
  if (e.code === 'ArrowRight' || e.code === 'KeyD') input.right = false;
  if (e.code === 'ArrowUp' || e.code === 'KeyW') input.gas = false;
  if (e.code === 'ArrowDown' || e.code === 'KeyS') input.brake = false;
  if (e.code === 'ShiftLeft' || e.code === 'Space') input.boost = false;
});
window.addEventListener('deviceorientation', (e) => {
  if (e.beta == null) return;
  let v = e.beta / 22; const o = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
  if (o === 270 || o === -90) v = -v; input.tilt = clamp(v, -1, 1);
});

// ------------------------------------------------------------------ menu UI
const menu = $('menu'), hud = $('hud');
let state = 'menu';
function refreshMenu() {
  $('carname').textContent = CARS[settings.car].name;
  document.querySelectorAll('#worldRow .opt').forEach((b) => b.classList.toggle('on', b.dataset.world === settings.world));
  document.querySelectorAll('#timeRow .opt').forEach((b) => b.classList.toggle('on', b.dataset.time === settings.time));
  $('optTraffic').classList.toggle('off', !settings.traffic);
  $('optSound').classList.toggle('off', !settings.sound); $('optSound').textContent = settings.sound ? '🔊' : '🔇';
  $('optTilt').classList.toggle('off', !settings.tilt);
  document.querySelectorAll('.swatch').forEach((s, i) => s.classList.toggle('on', i === settings.color));
}
const colorsEl = $('colors');
COLORS.forEach((c, i) => {
  const s = document.createElement('button'); s.className = 'swatch'; s.style.background = '#' + c.toString(16).padStart(6, '0');
  s.addEventListener('pointerdown', () => { settings.color = i; save(); setPlayerCar(); refreshMenu(); });
  colorsEl.appendChild(s);
});
function changeCar(dir) {
  settings.car = (settings.car + dir + CARS.length) % CARS.length; save(); setPlayerCar(); refreshMenu(); G.menuAngle = 0.7;
  if (!hasCar(CARS[settings.car].id, false)) loadCar(CARS[settings.car].id, false).then(() => { if (state === 'menu' && CARS[settings.car].id === playerSpec.id) setPlayerCar(); });
}
$('prevCar').addEventListener('pointerdown', (e) => { e.preventDefault(); changeCar(-1); });
$('nextCar').addEventListener('pointerdown', (e) => { e.preventDefault(); changeCar(1); });
document.querySelectorAll('#worldRow .opt').forEach((b) => b.addEventListener('pointerdown', () => { settings.world = b.dataset.world; save(); W.setWorld(settings.world); clearStars(); applyTime(); refreshMenu(); }));
// ---- sticker book
function refreshBook() {
  $('bookstars').textContent = '⭐ ' + P.stars; $('starnum').textContent = P.stars;
  const got = Object.keys(P.stickers).length;
  $('bookstats').textContent = `${got} / ${STICKERS.length} stickers · ${P.km.toFixed(1)} km driven · ${P.missions} missions · ${P.deliveries} recliners delivered`;
  const grid = $('bookgrid'); grid.innerHTML = '';
  for (const s of STICKERS) { const d = document.createElement('div'); d.className = 'sticker' + (P.stickers[s.id] ? '' : ' locked'); d.innerHTML = `<span class="e">${s.e}</span><span class="n">${s.n}</span>`; grid.appendChild(d); }
}
$('btnBook').addEventListener('pointerdown', (e) => { e.preventDefault(); refreshBook(); $('book').classList.remove('hidden'); });
$('btnBookClose').addEventListener('pointerdown', (e) => { e.preventDefault(); $('book').classList.add('hidden'); });
// ---- toasts (big centred messages) + confetti
const toastQ = []; let toastBusy = false;
function toast(big, txt, confetti) {
  toastQ.push({ big, txt, confetti }); if (toastBusy) return;
  const show = () => {
    const t = toastQ.shift(); if (!t) { toastBusy = false; return; } toastBusy = true;
    const el = $('toast'); el.classList.remove('hidden'); $('toastbig').textContent = t.big; $('toasttxt').textContent = t.txt;
    el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    if (t.confetti) { const c = $('confetti'); const cols = ['#D0B46C', '#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#ffffff']; for (let i = 0; i < 36; i++) { const s = document.createElement('i'); s.style.left = Math.random() * 100 + '%'; s.style.background = pick(cols); s.style.animationDelay = Math.random() * 0.6 + 's'; s.style.animationDuration = 1.8 + Math.random() * 1.2 + 's'; c.appendChild(s); setTimeout(() => s.remove(), 3200); } }
    setTimeout(() => { el.classList.add('hidden'); setTimeout(show, 150); }, 2300);
  };
  show();
}
// ---- missions
function missionEvent(type, v) {
  if (state !== 'drive') return;
  const r = missions.event(type, v);
  if (r === 'pickup') { attachRecliner(); toast('GOT IT! 🛋️', missions.label().text); Sound.fanfare(); refreshMissionLabel(); }
  else if (r === 'done') missionDone();
}
function missionDone() {
  const m = missions.cur; P.stars += m.reward; P.missions++; if (m.kind === 'deliver') { P.deliveries++; detachRecliner(); }
  toast('GREAT JOB!', `+${m.reward} ⭐`, true); Sound.fanfare(true); $('starnum').textContent = P.stars; saveP();
  for (const s of newStickers()) toast('NEW STICKER!', `${s.e} ${s.n}`);
  G.missionT = 3.5;   // next mission after the celebration
}
function startMission() {
  missions.next({ isMap: !!W.road.isMap, road: W.road, x: body.x, z: body.z, maxKmh: playerSpec.maxKmh, traffic: settings.traffic, showroomAt: W.current.showroomAt });
  refreshMissionLabel(); toast(missions.cur.icon + ' ' + missions.cur.text, 'New mission!');
}
let lastLabel = '';
function refreshMissionLabel() { const l = missions.label(); const key = l.icon + l.text + l.prog; if (key === lastLabel) return; lastLabel = key; $('micon').textContent = l.icon; $('mtext').textContent = l.text; if (!missions.target()) $('mprog').textContent = l.prog; }
function attachRecliner() { if (!recliner) recliner = makeRecliner(); const box = new THREE.Box3().setFromObject(player); recliner.position.set(0, box.max.y - 0.05, -0.1); player.add(recliner); }
function detachRecliner() { if (recliner && recliner.parent) recliner.parent.remove(recliner); }
document.querySelectorAll('#timeRow .opt').forEach((b) => b.addEventListener('pointerdown', () => { settings.time = b.dataset.time; save(); applyTime(); refreshMenu(); }));
$('optTraffic').addEventListener('pointerdown', () => { settings.traffic = !settings.traffic; save(); refreshMenu(); });
$('optSound').addEventListener('pointerdown', () => { settings.sound = !settings.sound; save(); Sound.init(); Sound.setOn(settings.sound); refreshMenu(); });
$('optCtl').addEventListener('pointerdown', () => { settings.controls = settings.controls === 'wheel' ? 'buttons' : 'wheel'; save(); applyControlsMode(); });
$('optEco').addEventListener('pointerdown', () => { settings.eco = !settings.eco; save(); applyQuality(); });
$('optTilt').addEventListener('pointerdown', () => {
  settings.tilt = !settings.tilt; save(); refreshMenu();
  if (settings.tilt && typeof DeviceOrientationEvent !== 'undefined' && DeviceOrientationEvent.requestPermission) DeviceOrientationEvent.requestPermission().catch(() => {});
});
$('btnPlay').addEventListener('pointerdown', (e) => { e.preventDefault(); if (!W.road) return; Sound.init(); Sound.resume(); Sound.setOn(settings.sound); startDrive(); });
$('btnPause').addEventListener('pointerdown', (e) => { e.preventDefault(); pauseGame(); });
$('btnResume').addEventListener('pointerdown', (e) => { e.preventDefault(); resumeGame(); });
$('btnGarage').addEventListener('pointerdown', (e) => { e.preventDefault(); toMenu(); });
function pauseGame() {
  if (state !== 'drive') return;
  state = 'pause'; $('pauseov').classList.remove('hidden');
  for (const k in input) if (k !== 'tilt') input[k] = false; touches.clear(); mouseHeld.clear(); wheelDrag = null; recomputeTouchInput();
  if (Sound.engine) Sound.update(0, 1, false, false);
}
function resumeGame() { if (state !== 'pause') return; state = 'drive'; $('pauseov').classList.add('hidden'); clock.getDelta(); Sound.resume(); }
// ---- photo mode: grab the next rendered frame, show it as a polaroid, save it to the phone's gallery
let photoReq = false;
function takePhoto() { if (state !== 'drive' || photoReq) return; photoReq = true; }
function finishPhoto() {
  photoReq = false;
  try {
    const url = canvas.toDataURL('image/jpeg', 0.9);
    $('polaimg').src = url; $('polaroid').classList.remove('hidden'); setTimeout(() => $('polaroid').classList.add('hidden'), 2600);
    const fl = $('flash'); fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go');
    Sound.click(); vib(20); P.photos++; saveP();
    if (window.Android && window.Android.savePhoto) window.Android.savePhoto(url.split(',')[1]);
    for (const s of newStickers()) toast('NEW STICKER!', `${s.e} ${s.n}`);
  } catch (e) { console.warn('photo failed', e); }
}
$('btnPhoto').addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; takePhoto(); });
// ---- parent lock: hold the padlock for two seconds to lock or unlock the garage settings
let lockHeld = false, lockT0 = 0;
function applyLock() { settings.lock = false;   // parent lock parked for now (button hidden)
  $('options').classList.toggle('locked', !!settings.lock); $('btnLock').querySelector('span').textContent = settings.lock ? '🔒' : '🔓'; }
let lockCool = 0; const lockLog = [];
const llog = (m) => { lockLog.push(Math.round(performance.now()) + ' ' + m); if (lockLog.length > 40) lockLog.shift(); };
function lockStart(src) { llog('start ' + src + (lockHeld ? ' (ignored: held)' : performance.now() < lockCool ? ' (ignored: cool)' : '')); if (lockHeld || performance.now() < lockCool) return; lockHeld = true; lockT0 = performance.now(); $('btnLock').classList.add('holding'); }
function lockEnd(src) { if (lockHeld) llog('end ' + src); lockHeld = false; $('btnLock').classList.remove('holding'); }
function lockTick() { if (lockHeld && performance.now() - lockT0 >= 2000) { lockEnd('tick'); llog('toggle -> ' + !settings.lock); lockCool = performance.now() + 1500; settings.lock = !settings.lock; save(); applyLock(); vib(40); Sound.ping(4); } }
// belt and braces: both the raw touch list and pointer events start/stop the hold, so a lost touchend or a lost pointerup can't leave it held
$('btnLock').addEventListener('pointerdown', (e) => { e.preventDefault(); try { $('btnLock').setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } lockStart('pointer ' + e.pointerType); });
for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) $('btnLock').addEventListener(ev, () => lockEnd('pointer ' + ev));
document.addEventListener('contextmenu', (e) => e.preventDefault());
$('options').addEventListener('pointerdown', () => { if (settings.lock) { $('lockhint').classList.remove('hidden'); setTimeout(() => $('lockhint').classList.add('hidden'), 1800); } });

// ------------------------------------------------------------------ game state
function startDrive() {
  state = 'drive'; menu.classList.add('hidden'); hud.classList.remove('hidden'); turntable.visible = false;
  $('mapbox').classList.toggle('hidden', !W.road.isMap); streetEl.textContent = '';
  G.s = 40; G.idx = 10; G.dist = 0; G.boostFuel = 1; G.damage = 0; G.totaled = false; G.spin = 0;
  const p = W.road.isMap ? W.road.startPose() : W.road.pointAt(G.s);
  body = new CarBody(playerSpec); body.x = p.x; body.z = p.z; body.h = p.h;
  applyDamageLook(); $('totaled').classList.add('hidden');
  traffic.forEach((t) => { if (settings.traffic) (W.road.isMap ? spawnMapTraffic(t) : spawnTraffic(t, true)); else { t.active = false; if (t.mesh) t.mesh.visible = false; } });
  P.cars[playerSpec.id] = 1; $('starnum').textContent = P.stars; G.combo = 0; G.missionT = 0; detachRecliner(); skids.clear();
  for (const k of ['roll', 'pitch', 'heave']) { S[k].x = 0; S[k].v = 0; } S.prevVf = 0; S.wasOff = false;
  W.road.ensure(W.road.isMap ? body.x : G.idx, body.z);
  startMission();
}
function spawnMapTraffic(t) {
  if (t.mesh) { scene.remove(t.mesh); disposeInstance(t.mesh); }
  t.spec = pick(CARS); t.mesh = instantiate(t.spec.id, true, pick(COLORS)); scene.add(t.mesh);
  t.body = new CarBody(t.spec); t.body.mass = 60; t.agent = {};
  if (!W.road.spawnAgent(t.agent, body.x, body.z)) { t.active = false; t.mesh.visible = false; return; }
  W.road.advanceAgent(t.agent, 0); t.body.x = t.agent.x; t.body.z = t.agent.z; t.body.h = t.agent.h;
  t.active = true; t.mesh.visible = true;
}
function toMenu() {
  state = 'menu'; hud.classList.add('hidden'); menu.classList.remove('hidden'); $('totaled').classList.add('hidden'); $('pauseov').classList.add('hidden'); $('polaroid').classList.add('hidden');
  for (const k in input) if (k !== 'tilt') input[k] = false; touches.clear(); mouseHeld.clear(); wheelDrag = null; lockEnd('menu'); recomputeTouchInput();
  traffic.forEach((t) => { t.active = false; if (t.mesh) t.mesh.visible = false; });
  player.position.set(0, 0, 0); player.rotation.set(0, 0, 0); G.menuAngle = 0.7; G.damage = 0; G.totaled = false; applyDamageLook();
  if (Sound.engine) Sound.update(0, 1, false, false);
  detachRecliner(); marker.visible = false; $('toast').classList.add('hidden'); toastQ.length = 0; toastBusy = false;
  saveP(); refreshBook();
}
function repairCar() {
  if (state !== 'drive') return;
  G.damage = 0; G.totaled = false; G.spin = 0; $('totaled').classList.add('hidden');
  const near = W.road.nearest(body.x, body.z, G.idx);
  if (W.road.isMap) { body.x = near.px; body.z = near.pz; body.h = near.h; }
  else { const p = W.road.pointAt(near.s + 2); body.x = p.x + p.rx * LANES[1]; body.z = p.z + p.rz * LANES[1]; body.h = p.h; }
  body.vx = body.vz = 0; body.yawRate = 0;
  applyDamageLook(); Sound.whoosh();
}
function applyDamageLook() {
  if (!player) return;
  const d = G.damage / 100;
  player.userData.paint.forEach((m) => { m.color.setHex(COLORS[settings.color]).lerp(new THREE.Color(0x303030), d * 0.45); m.roughness = 0.32 + d * 0.5; });
  $('dmgfill').style.width = (100 - G.damage).toFixed(0) + '%';
  $('dmgfill').style.background = G.damage < 40 ? '#22c55e' : G.damage < 75 ? '#f59e0b' : '#ef4444';
}
function hit(closing) {
  if (closing < 1.5) return;
  const dmg = (closing - 1.5) * 4.2;      // ~10 m/s (36 km/h) knock = 36 damage → three of those total the car
  G.damage = Math.min(100, G.damage + dmg);
  G.shake = Math.max(G.shake, Math.min(1.2, closing * 0.08));
  Sound.bump(Math.min(1, closing / 12)); vib(Math.min(220, 30 + closing * 12)); S.heave.v -= Math.min(1.5, closing * 0.08); S.pitch.v -= Math.min(0.8, closing * 0.05);
  for (let i = 0; i < Math.min(12, closing); i++) emitSmoke(body.x, 0.9, body.z, 0.6);
  applyDamageLook(); missionEvent('hit');
  if (G.damage >= 100 && !G.totaled) { G.totaled = true; G.spin = (Math.random() < 0.5 ? -1 : 1) * 2.5; $('totaled').classList.remove('hidden'); }
}

// ------------------------------------------------------------------ main loop
const clock = new THREE.Clock();
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const speedEl = $('speedval'), distEl = $('dist'), boostFill = $('boostfill'), boostBtn = $('btnBoost'), streetEl = $('street');
// mini-map (map mode): roads within ~200 m, heading-up
const mmCanvas = $('minimap'), mmCtx = mmCanvas.getContext('2d');
let mmTick = 0;
function drawMiniMap() {
  if (++mmTick % 3) return;
  const R = mmCanvas.width / 2, SC = R / 210; const ctx = mmCtx; const rd = W.road; const N = rd.nodes;
  ctx.clearRect(0, 0, R * 2, R * 2);
  ctx.save(); ctx.beginPath(); ctx.arc(R, R, R - 2, 0, Math.PI * 2); ctx.clip();
  ctx.fillStyle = 'rgba(20,28,40,0.78)'; ctx.fillRect(0, 0, R * 2, R * 2);
  ctx.translate(R, R); ctx.rotate(body.h); ctx.scale(SC, SC); ctx.translate(-body.x, -body.z);
  const cx = Math.floor(body.x / rd.cell), cz = Math.floor(body.z / rd.cell); const seen = new Set();
  ctx.lineCap = 'round';
  for (let dx = -4; dx <= 4; dx++) for (let dz = -4; dz <= 4; dz++) { const l = rd.hash.get(rd.key(cx + dx, cz + dz)); if (!l) continue; for (const code of l) { if (seen.has(code)) continue; seen.add(code); const ri = Math.floor(code / 4096), i = code % 4096; const r = rd.roads[ri]; const a = N[r.n[i]], b = N[r.n[i + 1]]; ctx.strokeStyle = r.w > 9 ? '#ffd58a' : r.t === 'service' || r.t === 'track' ? '#8a93a3' : '#e8edf5'; ctx.lineWidth = r.w * 0.9; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); } }
  // landmarks
  const tx = Math.floor(body.x / 400), tz = Math.floor(body.z / 400);
  for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) for (const p of (rd.tilePois.get(rd.key(tx + dx, tz + dz)) || [])) { ctx.fillStyle = /school/i.test(p.k) ? '#60a5fa' : /worship|mosque/i.test(p.k) ? '#34d399' : /fuel/i.test(p.k) ? '#f97316' : '#f472b6'; ctx.beginPath(); ctx.arc(p.c[0], p.c[1], 7, 0, Math.PI * 2); ctx.fill(); }
  if (W.current.showroomAt) { ctx.fillStyle = '#D0B46C'; ctx.beginPath(); ctx.arc(W.current.showroomAt[0], W.current.showroomAt[1], 9, 0, Math.PI * 2); ctx.fill(); }
  const tg = missions.target();
  if (tg) { const pr = (9 + Math.sin(physTime * 5) * 3) / SC; ctx.strokeStyle = '#ffd54a'; ctx.lineWidth = 3 / SC; ctx.beginPath(); ctx.arc(tg[0], tg[1], pr, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = '#ffd54a'; ctx.beginPath(); ctx.arc(tg[0], tg[1], 4 / SC, 0, Math.PI * 2); ctx.fill(); }
  ctx.restore();
  // player arrow
  ctx.save(); ctx.translate(R, R); ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.moveTo(0, -9); ctx.lineTo(6, 7); ctx.lineTo(-6, 7); ctx.closePath(); ctx.fill(); ctx.restore();
}
let smokeAcc = 0, dustAcc = 0;
// suspension state: each axis is a spring-damper {x, v}
const S = { roll: { x: 0, v: 0 }, pitch: { x: 0, v: 0 }, heave: { x: 0, v: 0 }, prevVf: 0, wasOff: false };
function spring(s, target, dt, k = 90, c = 11) { s.v += ((target - s.x) * k - s.v * c) * dt; s.x += s.v * dt; }
// haptics (Android vibrates through the WebView)
function vib(ms) { if (settings.haptics === false || !navigator.vibrate) return; try { navigator.vibrate(ms); } catch (e) { /* ignore */ } }

function update(dt) {
  const spec = playerSpec; const maxSpeed = spec.maxKmh / 3.6;
  if (state === 'drive') {
    // ---- inputs
    const wantBoost = input.boost && G.boostFuel > 0.05 && !G.totaled;
    if (wantBoost && !G.boosting) { Sound.whoosh(); P.boosts++; missionEvent('boost'); }
    G.boosting = wantBoost;
    G.boostFuel = G.boosting ? Math.max(0, G.boostFuel - dt / 3) : Math.min(1, G.boostFuel + dt / 9);
    boostFill.style.width = (G.boostFuel * 100).toFixed(0) + '%'; boostBtn.classList.toggle('cooling', G.boostFuel < 0.05);
    let steer = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (settings.controls === 'wheel') { updateWheel(dt); if (steer === 0) steer = Math.sign(input.wheel) * Math.pow(Math.abs(input.wheel), 1.25); }
    if (settings.tilt && steer === 0) steer = input.tilt;
    if (G.totaled) { body.throttle = 0; body.brake = 0.4; body.steer = 0; body.yawRate = G.spin; G.spin *= Math.pow(0.4, dt); }
    else { body.throttle = input.gas ? 1 : 0; body.brake = input.brake ? 1 : 0; body.steer = steer; }

    // ---- road context
    const isMap = !!W.road.isMap;
    const near = W.road.nearest(body.x, body.z, G.idx);
    if (!isMap) { G.idx = near.i; G.s = near.s; }
    const absd = Math.abs(near.d);
    body.offRoad = isMap ? !near.onRoad : absd > ROAD_W / 2 + 0.6; body.surfaceGrip = (body.offRoad ? W.current.offroadGrip : 1) * (W.rain ? 0.7 : 1);
    if (isMap) streetEl.textContent = near.onRoad && near.name ? near.name : '';
    // a damaged car wanders and loses power
    const dmgF = G.damage / 100;
    if (dmgF > 0.5 && !G.totaled) { body.steer += Math.sin(clock.elapsedTime * 7) * (dmgF - 0.5) * 0.5; }
    body.update(dt, maxSpeed * (1 - dmgF * 0.45), spec.accel * (1 - dmgF * 0.5), spec.handling, G.boosting);
    G.dist += Math.max(0, body.vf) * dt;

    // ---- guardrail walls (country / desert / snow); the city uses buildings instead
    if (!isMap && (W.current.guardrail || W.current.poles)) {
      const lim = (W.current.guardrail ? RAIL_OFF : ROAD_W / 2 + 0.75) - 0.15;
      const n2 = W.road.nearest(body.x, body.z, G.idx);
      if (Math.abs(n2.d) + body.halfW > lim) {
        const side = Math.sign(n2.d); const pen = Math.abs(n2.d) + body.halfW - lim;
        body.x -= n2.rx * side * pen; body.z -= n2.rz * side * pen;
        const vn = body.vx * n2.rx * side + body.vz * n2.rz * side;   // speed into the wall
        if (vn > 0) { body.vx -= vn * n2.rx * side * 1.3; body.vz -= vn * n2.rz * side * 1.3; hit(vn); body.yawRate -= side * Math.min(1.5, vn * 0.1); }
        // scraping along the rail slows you
        body.vx *= 1 - 0.6 * dt; body.vz *= 1 - 0.6 * dt;
      }
    }
    // ---- static obstacles
    for (const o of (isMap ? W.road.obstaclesNear(body.x, body.z) : W.road.obstaclesNear(G.idx))) {
      if (Math.abs(o.x - body.x) > 40 || Math.abs(o.z - body.z) > 40) continue;
      const c = o.type === 'circle' ? collideCircle(body, o.x, o.z, o.r) : collideBox(body, o.x, o.z, o.hw, o.hl, o.h);
      if (c > 0) hit(c);
    }

    // ---- traffic
    for (const t of traffic) {
      if (!t.active) continue;
      if (isMap) {
        const ag = t.agent; const b = t.body;
        // slow down behind the player
        const dxp = body.x - b.x, dzp = body.z - b.z; const [tfx, tfz] = b.fwd(); const aheadD = dxp * tfx + dzp * tfz; const sideD = Math.abs(dxp * tfz - dzp * tfx);
        const blocked = aheadD > 0 && aheadD < 16 && sideD < 3;
        const target = blocked ? Math.max(0, Math.abs(body.vf) - 1) : ag.speed;
        const stepSpeed = ag.speed; ag.speed = target; W.road.advanceAgent(ag, dt); ag.speed = stepSpeed;
        b.x += (ag.x - b.x) * Math.min(1, 10 * dt); b.z += (ag.z - b.z) * Math.min(1, 10 * dt);
        let dh = ag.h - b.h; while (dh > Math.PI) dh -= Math.PI * 2; while (dh < -Math.PI) dh += Math.PI * 2; b.h += dh * Math.min(1, 10 * dt);
        b.vx = tfx * target; b.vz = tfz * target; b.vf = target;
        if (Math.hypot(dxp, dzp) > 420) { spawnMapTraffic(t); continue; }
        placeTraffic(t);
        for (const w of t.mesh.userData.wheels) { w.userData.spin.rotation.x -= (target * dt) / w.userData.radius; }
        t.mesh.traverse((o) => { if (o.isMesh) o.castShadow = Math.hypot(dxp, dzp) < 70; });
        const c = collideCars(body, b); if (c > 0) hit(c);
        continue;
      }
      const b = t.body; const tn = W.road.nearest(b.x, b.z, t.idx); t.idx = tn.i; t.s = tn.s;
      if (t.s < G.s - 120 || t.s > G.s + 520) { spawnTraffic(t, t.s < G.s); continue; }
      const nowAhead = t.s > G.s; if (t.ahead && !nowAhead && body.vf > 2) missionEvent('pass'); t.ahead = nowAhead;
      // steer toward a point ahead in its lane
      const ahead = W.road.pointAt(t.s + 14 + b.vf * 0.6);
      const tx = ahead.x + ahead.rx * LANES[t.lane], tz = ahead.z + ahead.rz * LANES[t.lane];
      const dx = tx - b.x, dz = tz - b.z;
      const wantH = Math.atan2(-dx, -dz);
      let dh = wantH - b.h; while (dh > Math.PI) dh -= Math.PI * 2; while (dh < -Math.PI) dh += Math.PI * 2;
      b.steer = clamp(-dh * 2.2, -1, 1);
      // keep distance from whoever is ahead in the lane (player or traffic)
      let gap = 1e9;
      const pn = Math.abs(near.d - LANES[t.lane]) < 2.4 ? G.s - t.s : 1e9; if (pn > 0 && pn < gap) gap = pn;
      for (const o of traffic) if (o !== t && o.active && o.lane === t.lane) { const g = o.s - t.s; if (g > 0 && g < gap) gap = g; }
      const want = gap < 12 ? 0 : gap < 30 ? Math.min(t.target, gap * 0.6) : t.target;
      b.throttle = b.vf < want ? 0.7 : 0; b.brake = b.vf > want + 2 ? 0.6 : 0;
      b.offRoad = Math.abs(tn.d) > ROAD_W / 2 + 0.6; b.surfaceGrip = b.offRoad ? 0.6 : 1;
      b.update(dt, 45, 7, 6, false);
      placeTraffic(t);
      for (const w of t.mesh.userData.wheels) { w.userData.spin.rotation.x -= (b.vf * dt) / w.userData.radius; if (w.userData.front) w.rotation.y = -b.steerAngle; }
      t.mesh.traverse((o) => { if (o.isMesh) o.castShadow = Math.abs(t.s - G.s) < 70; });
      const c = collideCars(body, b); if (c > 0) hit(c);
    }
    if (!isMap) for (let i = 0; i < traffic.length; i++) for (let j = i + 1; j < traffic.length; j++) if (traffic[i].active && traffic[j].active) collideCars(traffic[i].body, traffic[j].body);

    // ---- player visuals: suspension (roll in corners, dive/squat, bounce over bumps) on spring-dampers
    const aF = (body.vf - S.prevVf) / Math.max(dt, 1e-3); S.prevVf = body.vf;
    const aL = body.yawRate * body.vf;
    spring(S.roll, clamp(-aL * 0.011, -0.11, 0.11) - body.vl * 0.006, dt);
    spring(S.pitch, clamp(aF * 0.0055, -0.05, 0.05), dt);
    spring(S.heave, 0, dt);
    if (body.offRoad !== S.wasOff) { S.wasOff = body.offRoad; if (Math.abs(body.vf) > 3) { S.heave.v += 0.5; G.shake = Math.max(G.shake, 0.2); Sound.bump(0.25); vib(25); } }
    player.position.set(body.x, Math.max(-0.02, S.heave.x), body.z); player.rotation.y = body.h;
    player.rotation.z = S.roll.x; player.rotation.x = S.pitch.x;
    if (body.offRoad) {
      player.position.y += Math.abs(body.vf) > 2 ? Math.sin(clock.elapsedTime * 31) * 0.03 : 0; G.shake = Math.max(G.shake, clamp(Math.abs(body.vf) / 20, 0, 0.35));
      dustAcc += dt * clamp(Math.abs(body.vf) / 3, 0, 10);
      const dc = W.currentName === 'snow' ? [0.95, 0.97, 1.0] : W.currentName === 'desert' ? [0.78, 0.66, 0.45] : [0.55, 0.47, 0.32];
      while (dustAcc >= 1) { dustAcc -= 1; const [bx, bz] = body.fwd(); emitSmoke(body.x - bx * (spec.len / 2 - 0.5), 0.3, body.z - bz * (spec.len / 2 - 0.5), 0.9, dc); }
    }
    for (const w of player.userData.wheels) { w.userData.spin.rotation.x -= (body.vf * dt) / w.userData.radius; if (w.userData.front) w.rotation.y = -body.steerAngle; }
    player.userData.glow.material.opacity = G.boosting ? 0.8 : 0;
    // smoke from the bonnet when badly damaged
    smokeAcc += dt * (G.totaled ? 14 : G.damage > 40 ? (G.damage - 40) / 60 * 8 : 0);
    const [fx, fz] = body.fwd();
    while (smokeAcc >= 1) { smokeAcc -= 1; emitSmoke(body.x + fx * (spec.len / 2 - 0.6), 0.9, body.z + fz * (spec.len / 2 - 0.6), G.totaled ? 1.4 : 0.8); }

    // ---- skid marks + rain
    { const sp2 = Math.abs(body.vf); const slideS = body.offRoad ? 0 : Math.max(clamp((Math.abs(body.vl) - 2.2) / 5, 0, 1), body.brake && sp2 > 14 && !W.rain ? 0.45 : 0, G.totaled && sp2 > 3 ? 0.6 : 0);
      const [rx2, rz2] = body.right(); const bk = body.halfL * 0.62, side = body.halfW - 0.28;
      skids.update(slideS, [[body.x - fx * bk - rx2 * side, body.z - fz * bk - rz2 * side], [body.x - fx * bk + rx2 * side, body.z - fz * bk + rz2 * side]], rx2, rz2); }
    rain.update(dt, camera.position.x, camera.position.z, body.vx, body.vz);
    // ---- goals: stars, mission progress, target marker
    const got = updateStars(dt, [[body.x, body.z], [body.x + fx * 1.7, body.z + fz * 1.7]], (sx, sz) => { for (let i = 0; i < 5; i++) emitSmoke(sx, 1.0, sz, 0.5, [1.0, 0.85, 0.3]); });
    if (got) {
      G.combo = physTime - G.lastStarT < 1.6 ? G.combo + got : 0; G.lastStarT = physTime;
      P.stars += got; Sound.ping(G.combo); vib(12); $('starnum').textContent = P.stars; const sc = $('starcount'); sc.classList.remove('pop'); void sc.offsetWidth; sc.classList.add('pop');
      for (let i = 0; i < got; i++) missionEvent('star');
      for (const s of newStickers()) { toast('NEW STICKER!', `${s.e} ${s.n}`); Sound.fanfare(); }
    }
    const stepM = Math.max(0, body.vf) * dt; const kmh = Math.abs(body.vf) * 3.6;
    P.km += stepM / 1000; P.worlds[W.currentName] = (P.worlds[W.currentName] || 0) + stepM / 1000; if (W.night) P.nightKm += stepM / 1000;
    if (kmh > P.bestKmh) P.bestKmh = kmh;
    missionEvent('dist', stepM); missionEvent('speed', kmh); missionEvent('pos', [body.x, body.z]);
    if (G.missionT > 0) { G.missionT -= dt; if (G.missionT <= 0) startMission(); }
    if (missions.cur && !missions.cur.done) {
      refreshMissionLabel();
      const tg = missions.target();
      if (tg) {
        marker.visible = true; marker.position.set(tg[0], 0, tg[1]); marker.userData.tick(dt, physTime);
        const dxT = tg[0] - body.x, dzT = tg[1] - body.z; const distT = Math.hypot(dxT, dzT);
        let rel = Math.atan2(-dxT, -dzT) - body.h; while (rel > Math.PI) rel -= Math.PI * 2; while (rel < -Math.PI) rel += Math.PI * 2;
        $('marrow').classList.remove('off'); $('marrow').style.transform = `rotate(${-90 - rel * 180 / Math.PI}deg)`; $('mprog').textContent = distT < 1000 ? Math.round(distT / 10) * 10 + ' m' : (distT / 1000).toFixed(1) + ' km';
      } else { marker.visible = false; $('marrow').classList.add('off'); }
    } else { marker.visible = false; $('marrow').classList.add('off'); }
    G.saveT += dt; if (G.saveT > 10) { G.saveT = 0; saveP(); for (const s of newStickers()) { toast('NEW STICKER!', `${s.e} ${s.n}`); Sound.fanfare(); } }

    // ---- world upkeep
    if (isMap) { W.road.ensure(body.x, body.z); drawMiniMap(); } else W.road.ensure(G.idx);
    W.follow(body.x, body.z, fx, fz);
    speedEl.textContent = Math.round(Math.abs(body.vf) * 3.6);
    distEl.textContent = (G.dist / 1000).toFixed(1) + ' km';

    // ---- camera: 0 chase, 1 close chase, 2 bonnet
    const sp = clamp(Math.abs(body.vf) / maxSpeed, 0, 1);
    const [rx, rz] = body.right();
    if (settings.cam === 0) {
      const back = 7.2 + sp * 1.8 + spec.len * 0.2;
      camPos.set(body.x - fx * back + rx * body.vl * 0.08, 2.7 + sp * 0.5, body.z - fz * back + rz * body.vl * 0.08);
      camLook.set(body.x + fx * 10, 1.0, body.z + fz * 10);
      camera.position.lerp(camPos, Math.min(1, 6 * dt));
    } else if (settings.cam === 1) {
      const back = 4.8 + sp * 0.8 + spec.len * 0.15;
      camPos.set(body.x - fx * back, 1.8 + sp * 0.2, body.z - fz * back);
      camLook.set(body.x + fx * 10, 0.9, body.z + fz * 10);
      camera.position.lerp(camPos, Math.min(1, 8 * dt));
    } else {
      camPos.set(body.x + fx * (spec.len / 2 - 0.9), 1.15, body.z + fz * (spec.len / 2 - 0.9));
      camLook.set(body.x + fx * 40, 0.9, body.z + fz * 40);
      camera.position.copy(camPos);
    }
    camera.fov = lerp(camera.fov, 60 + sp * 14 + (G.boosting ? 8 : 0), Math.min(1, 4 * dt)); camera.updateProjectionMatrix();
    G.shake = Math.max(0, G.shake - dt * 1.8);
    const sh = G.shake * 0.12 + sp * sp * 0.01 + (G.boosting ? 0.02 : 0);
    camera.position.x += (Math.random() - 0.5) * sh; camera.position.y += (Math.random() - 0.5) * sh;
    camera.lookAt(camLook); camera.rotation.z += -body.yawRate * 0.04 * clamp(Math.abs(body.vf) / 20, 0, 1);
    Sound.update(Math.abs(body.vf), maxSpeed, !!body.throttle, G.boosting, body.vl, body.offRoad, dt);
  } else {
    // garage turntable on the road
    G.menuAngle += dt * 0.3;
    if (!W.road) return;   // map still loading
    const p0 = W.road.isMap ? W.road.startPose() : W.road.pointAt(40);
    if (W.road.isMap) { p0.fx = -Math.sin(p0.h); p0.fz = -Math.cos(p0.h); }
    player.position.set(p0.x, 0.14, p0.z); player.rotation.y = p0.h + G.menuAngle; player.rotation.x = player.rotation.z = 0;
    turntable.visible = true; turntable.position.set(p0.x, 0, p0.z); turntable.rotation.y = p0.h + G.menuAngle;
    const r = 4.2 + playerSpec.len * 0.5;
    camera.position.set(p0.x + Math.sin(0.8) * r, 1.7 + playerSpec.len * 0.08, p0.z + Math.cos(0.8) * r);
    camera.lookAt(p0.x, 0.7, p0.z);
    camera.fov = lerp(camera.fov, 42, Math.min(1, 4 * dt)); camera.updateProjectionMatrix();
    for (const w of player.userData.wheels) if (w.userData.front) w.rotation.y = lerp(w.rotation.y, 0, dt * 3);
    player.userData.glow.material.opacity = 0;
    if (W.road.isMap) W.road.ensure(p0.x, p0.z); else W.road.ensure(10);
    W.follow(p0.x, p0.z, p0.fx, p0.fz);
    if (Sound.engine) Sound.update(0, maxSpeed, false, false);
    rain.update(dt, camera.position.x, camera.position.z, 0, 0);
  }
  updateSmoke(dt);
}

// Auto quality: if the phone can't keep up, drop resolution and shadow detail once.
let fpsAcc = 0, fpsN = 0, quality = 3;
function autoQuality(dt) {
  if (state !== 'drive') return;
  fpsAcc += dt; fpsN++; if (fpsAcc < 4) return;
  const fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0;
  if (fps < 26 && quality > 0) {
    quality--;
    if (quality === 2) { usePost = false; }
    else if (quality === 1) { renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.0)); W.sun.shadow.mapSize.set(1024, 1024); if (W.sun.shadow.map) { W.sun.shadow.map.dispose(); W.sun.shadow.map = null; } }
    else { renderer.setPixelRatio(0.8); renderer.shadowMap.enabled = false; }
    resize();
  }
}
let physTime = 0, lastFrameT = 0;
function frame(now) {
  requestAnimationFrame(frame);
  if (frameCap && now - lastFrameT < frameCap - 1) return;   // eco: 30 fps
  lastFrameT = now;
  const dt = Math.min(0.05, clock.getDelta()); if (state !== 'pause') physTime += dt;
  lockTick();
  if (player && (W.road || state === 'menu')) {
    if (state !== 'pause') { update(dt); autoQuality(dt); }
    if (usePost && composer) composer.render(); else renderer.render(scene, camera);
    if (photoReq) finishPhoto();
  }
}

// ------------------------------------------------------------------ boot
W.setWorld(settings.world);
applyControlsMode(); applyQuality();
preload().then(() => { setPlayerCar(); refreshMenu(); toMenu(); refreshBook(); }).catch((e) => { loadTxt.textContent = 'Something went wrong: ' + e; console.error(e); });
camera.position.set(6, 3, 7);
frame(0);
document.addEventListener('visibilitychange', () => { if (document.hidden) { input.gas = input.brake = input.boost = false; pauseGame(); saveP(); } else { Sound.resume(); clock.getDelta(); } });
applyLock();
window.__kidcars = { G, P, settings, missions, state: () => state, hasCar, body: () => body, simTime: () => physTime, roadReady: () => !!W.road, inputs: () => ({ ...input }), world: () => W, toast,
  // test hooks
  addStarAhead: (n) => { const [fx, fz] = body.fwd(); for (let k = 0; k < n; k++) addStar(body.x + fx * (8 + k * 4), body.z + fz * (8 + k * 4), 'test'); },
  teleport: (x, z) => { body.x = x; body.z = z; body.vx = body.vz = 0; },
  lockDbg: () => ({ held: lockHeld, heldFor: lockHeld ? Math.round(performance.now() - lockT0) : 0, state, lock: settings.lock, touches: Array.from(touches.values()), log: lockLog.slice() }),
  // Android back button: pause while driving, garage while paused, exit from the garage
  back: () => { if (state === 'drive') { pauseGame(); return 'handled'; } if (state === 'pause') { toMenu(); return 'handled'; } if (!$('book').classList.contains('hidden')) { $('book').classList.add('hidden'); return 'handled'; } return 'exit'; } };
