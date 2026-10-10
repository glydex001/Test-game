// Kid Cars — endless driving with real cars on a real winding road. No music, no people. Everything unlocked.
import * as THREE from 'three';
import { CARS, loadCar, hasCar, instantiate, setNightLights, setEnvIntensity } from './cars.js';
import { createWorld } from './world.js';
import { LANES, ROAD_W, RAIL_OFF, DS } from './road.js';
import { CarBody, collideCars, collideCircle, collideBox } from './physics.js';
import { Sound } from './sound.js';
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
let settings = { car: 0, color: 0, world: 'country', time: 'day', traffic: true, sound: true, tilt: false, cam: 0 };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}')); } catch (e) { /* ignore */ }
if (!CARS[settings.car]) settings.car = 0;
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ } }

// ------------------------------------------------------------------ renderer / scene
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.5;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.3, 1400);
function resize() { const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); } }
window.addEventListener('resize', resize);
const W = createWorld(scene, renderer);

// ---- post-processing: soft bloom + vignette/grade (dropped automatically on slow phones)
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uVig: { value: 0.35 }, uSat: { value: 1.12 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5; float v = 1.0 - uVig * smoothstep(0.25, 0.75, dot(d, d) * 2.0); c.rgb *= v; gl_FragColor = c; }`,
};
let composer = null, bloomPass = null, usePost = true;
function buildComposer() {
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloomPass = new UnrealBloomPass(new THREE.Vector2(256, 128), 0.18, 0.4, 1.6); composer.addPass(bloomPass);
  composer.addPass(new ShaderPass(GradeShader));
  composer.addPass(new OutputPass());
}
buildComposer(); resize();
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
const G = { s: 0, idx: 0, damage: 0, totaled: false, boostFuel: 1, boosting: false, shake: 0, dist: 0, menuAngle: 0.7, lastHitT: 0, spin: 0 };
function setPlayerCar() {
  if (player) scene.remove(player);
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
  if (t.mesh) scene.remove(t.mesh);
  t.spec = pick(CARS); t.mesh = instantiate(t.spec.id, true, pick(COLORS)); scene.add(t.mesh);
  t.body = new CarBody(t.spec); t.lane = lane; t.s = s; t.target = ahead ? rand(14, 27) : rand(30, 40);
  const p = W.road.pointAt(s); t.body.x = p.x + p.rx * LANES[lane]; t.body.z = p.z + p.rz * LANES[lane]; t.body.h = p.h;
  t.body.vx = p.fx * t.target; t.body.vz = p.fz * t.target; t.idx = Math.floor(s / DS);
  t.active = true; t.mesh.visible = true;
}
function placeTraffic(t) { t.mesh.position.set(t.body.x, 0, t.body.z); t.mesh.rotation.y = t.body.h; }

// ------------------------------------------------------------------ time of day
function applyTime() {
  W.setTime(settings.time);
  setNightLights(W.night); setEnvIntensity(W.night ? 0.5 : 1.0);
  if (player) { player.userData.paint.forEach((m) => (m.envMapIntensity = W.night ? 0.6 : 1.25)); headlights.children.forEach((c) => { if (c.isSpotLight) c.intensity = W.night ? 400 : 0; }); }
}

// ------------------------------------------------------------------ input (with a global release so no button can stick)
const input = { left: false, right: false, gas: false, brake: false, boost: false, tilt: 0 };
const held = new Map();   // pointerId -> key
function bindHold(id, key) {
  const el = $(id);
  el.addEventListener('pointerdown', (e) => { e.preventDefault(); input[key] = true; held.set(e.pointerId, key); el.classList.add('pressed'); Sound.init(); Sound.resume(); });
  const up = (e) => { if (e) e.preventDefault(); input[key] = false; held.delete(e && e.pointerId); el.classList.remove('pressed'); };
  el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
  el.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
}
['pointerup', 'pointercancel'].forEach((ev) => window.addEventListener(ev, (e) => { const k = held.get(e.pointerId); if (k) { input[k] = false; held.delete(e.pointerId); document.querySelectorAll('.ctl.pressed').forEach((b) => b.classList.remove('pressed')); } }));
window.addEventListener('blur', () => { for (const k in input) if (k !== 'tilt') input[k] = false; held.clear(); });
bindHold('btnLeft', 'left'); bindHold('btnRight', 'right'); bindHold('btnGas', 'gas'); bindHold('btnBrake', 'brake'); bindHold('btnBoost', 'boost');
$('btnHorn').addEventListener('pointerdown', (e) => { e.preventDefault(); Sound.init(); Sound.resume(); Sound.horn(); $('btnHorn').classList.add('pressed'); });
$('btnHorn').addEventListener('pointerup', () => $('btnHorn').classList.remove('pressed'));
$('btnCam').addEventListener('pointerdown', (e) => { e.preventDefault(); settings.cam = (settings.cam + 1) % 3; save(); });
$('btnFix').addEventListener('pointerdown', (e) => { e.preventDefault(); repairCar(); });
window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.left = true;
  if (e.code === 'ArrowRight' || e.code === 'KeyD') input.right = true;
  if (e.code === 'ArrowUp' || e.code === 'KeyW') input.gas = true;
  if (e.code === 'ArrowDown' || e.code === 'KeyS') input.brake = true;
  if (e.code === 'ShiftLeft' || e.code === 'Space') input.boost = true;
  if (e.code === 'KeyH') Sound.horn();
  if (e.code === 'KeyC') { settings.cam = (settings.cam + 1) % 3; save(); }
  if (e.code === 'KeyF') repairCar();
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
document.querySelectorAll('#worldRow .opt').forEach((b) => b.addEventListener('pointerdown', () => { settings.world = b.dataset.world; save(); W.setWorld(settings.world); applyTime(); refreshMenu(); }));
document.querySelectorAll('#timeRow .opt').forEach((b) => b.addEventListener('pointerdown', () => { settings.time = b.dataset.time; save(); applyTime(); refreshMenu(); }));
$('optTraffic').addEventListener('pointerdown', () => { settings.traffic = !settings.traffic; save(); refreshMenu(); });
$('optSound').addEventListener('pointerdown', () => { settings.sound = !settings.sound; save(); Sound.init(); Sound.setOn(settings.sound); refreshMenu(); });
$('optTilt').addEventListener('pointerdown', () => {
  settings.tilt = !settings.tilt; save(); refreshMenu();
  if (settings.tilt && typeof DeviceOrientationEvent !== 'undefined' && DeviceOrientationEvent.requestPermission) DeviceOrientationEvent.requestPermission().catch(() => {});
});
$('btnPlay').addEventListener('pointerdown', (e) => { e.preventDefault(); Sound.init(); Sound.resume(); Sound.setOn(settings.sound); startDrive(); });
$('btnPause').addEventListener('pointerdown', (e) => { e.preventDefault(); toMenu(); });

// ------------------------------------------------------------------ game state
function startDrive() {
  state = 'drive'; menu.classList.add('hidden'); hud.classList.remove('hidden');
  G.s = 40; G.idx = 10; G.dist = 0; G.boostFuel = 1; G.damage = 0; G.totaled = false; G.spin = 0;
  const p = W.road.pointAt(G.s);
  body = new CarBody(playerSpec); body.x = p.x; body.z = p.z; body.h = p.h;
  applyDamageLook(); $('totaled').classList.add('hidden');
  traffic.forEach((t) => { if (settings.traffic) spawnTraffic(t, true); else { t.active = false; if (t.mesh) t.mesh.visible = false; } });
}
function toMenu() {
  state = 'menu'; hud.classList.add('hidden'); menu.classList.remove('hidden'); $('totaled').classList.add('hidden');
  for (const k in input) if (k !== 'tilt') input[k] = false;
  traffic.forEach((t) => { t.active = false; if (t.mesh) t.mesh.visible = false; });
  player.position.set(0, 0, 0); player.rotation.set(0, 0, 0); G.menuAngle = 0.7; G.damage = 0; G.totaled = false; applyDamageLook();
  if (Sound.engine) Sound.update(0, 1, false, false);
}
function repairCar() {
  if (state !== 'drive') return;
  G.damage = 0; G.totaled = false; G.spin = 0; $('totaled').classList.add('hidden');
  const near = W.road.nearest(body.x, body.z, G.idx); const p = W.road.pointAt(near.s + 2);
  body.x = p.x + p.rx * LANES[1]; body.z = p.z + p.rz * LANES[1]; body.h = p.h; body.vx = body.vz = 0; body.yawRate = 0;
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
  Sound.bump(Math.min(1, closing / 12));
  for (let i = 0; i < Math.min(12, closing); i++) emitSmoke(body.x, 0.9, body.z, 0.6);
  applyDamageLook();
  if (G.damage >= 100 && !G.totaled) { G.totaled = true; G.spin = (Math.random() < 0.5 ? -1 : 1) * 2.5; $('totaled').classList.remove('hidden'); }
}

// ------------------------------------------------------------------ main loop
const clock = new THREE.Clock();
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const speedEl = $('speedval'), distEl = $('dist'), boostFill = $('boostfill'), boostBtn = $('btnBoost');
let smokeAcc = 0, dustAcc = 0;

function update(dt) {
  const spec = playerSpec; const maxSpeed = spec.maxKmh / 3.6;
  if (state === 'drive') {
    // ---- inputs
    const wantBoost = input.boost && G.boostFuel > 0.05 && !G.totaled;
    if (wantBoost && !G.boosting) Sound.whoosh();
    G.boosting = wantBoost;
    G.boostFuel = G.boosting ? Math.max(0, G.boostFuel - dt / 3) : Math.min(1, G.boostFuel + dt / 9);
    boostFill.style.width = (G.boostFuel * 100).toFixed(0) + '%'; boostBtn.classList.toggle('cooling', G.boostFuel < 0.05);
    let steer = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (settings.tilt && steer === 0) steer = input.tilt;
    if (G.totaled) { body.throttle = 0; body.brake = 0.4; body.steer = 0; body.yawRate = G.spin; G.spin *= Math.pow(0.4, dt); }
    else { body.throttle = input.gas ? 1 : 0; body.brake = input.brake ? 1 : 0; body.steer = steer; }

    // ---- road context
    const near = W.road.nearest(body.x, body.z, G.idx); G.idx = near.i; G.s = near.s;
    const absd = Math.abs(near.d);
    body.offRoad = absd > ROAD_W / 2 + 0.6; body.surfaceGrip = body.offRoad ? W.current.offroadGrip : 1;
    // a damaged car wanders and loses power
    const dmgF = G.damage / 100;
    if (dmgF > 0.5 && !G.totaled) { body.steer += Math.sin(clock.elapsedTime * 7) * (dmgF - 0.5) * 0.5; }
    body.update(dt, maxSpeed * (1 - dmgF * 0.45), spec.accel * (1 - dmgF * 0.5), spec.handling, G.boosting);
    G.dist += Math.max(0, body.vf) * dt;

    // ---- guardrail walls (country / desert / snow); the city uses buildings instead
    if (W.current.guardrail || W.current.poles) {
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
    for (const o of W.road.obstaclesNear(G.idx)) {
      if (Math.abs(o.x - body.x) > 40 || Math.abs(o.z - body.z) > 40) continue;
      const c = o.type === 'circle' ? collideCircle(body, o.x, o.z, o.r) : collideBox(body, o.x, o.z, o.hw, o.hl, o.h);
      if (c > 0) hit(c);
    }

    // ---- traffic
    for (const t of traffic) {
      if (!t.active) continue;
      const b = t.body; const tn = W.road.nearest(b.x, b.z, t.idx); t.idx = tn.i; t.s = tn.s;
      if (t.s < G.s - 120 || t.s > G.s + 520) { spawnTraffic(t, t.s < G.s); continue; }
      // steer toward a point ahead in its lane
      const ahead = W.road.pointAt(t.s + 14 + b.vf * 0.6);
      const tx = ahead.x + ahead.rx * LANES[t.lane], tz = ahead.z + ahead.rz * LANES[t.lane];
      const dx = tx - b.x, dz = tz - b.z;
      const wantH = Math.atan2(-dx, -dz);
      let dh = wantH - b.h; while (dh > Math.PI) dh -= Math.PI * 2; while (dh < -Math.PI) dh += Math.PI * 2;
      b.steer = clamp(dh * 2.2, -1, 1);
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
    for (let i = 0; i < traffic.length; i++) for (let j = i + 1; j < traffic.length; j++) if (traffic[i].active && traffic[j].active) collideCars(traffic[i].body, traffic[j].body);

    // ---- player visuals
    player.position.set(body.x, 0, body.z); player.rotation.y = body.h;
    player.rotation.z = -body.steer * 0.03 * clamp(Math.abs(body.vf) / 20, 0, 1) - body.vl * 0.01;
    player.rotation.x = (body.throttle ? -0.012 : body.brake ? 0.025 : 0) * clamp(Math.abs(body.vf) / 15, 0, 1);
    if (body.offRoad) {
      player.position.y = Math.abs(body.vf) > 2 ? Math.sin(clock.elapsedTime * 31) * 0.03 : 0; G.shake = Math.max(G.shake, clamp(Math.abs(body.vf) / 20, 0, 0.35));
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

    // ---- world upkeep
    W.road.ensure(G.idx);
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
    Sound.update(Math.abs(body.vf), maxSpeed, !!body.throttle, G.boosting);
  } else {
    // garage turntable on the road
    G.menuAngle += dt * 0.3;
    const p0 = W.road.pointAt(40);
    player.position.set(p0.x, 0, p0.z); player.rotation.y = p0.h + G.menuAngle;
    const r = 4.2 + playerSpec.len * 0.5;
    camera.position.set(p0.x + Math.sin(0.8) * r, 1.7 + playerSpec.len * 0.08, p0.z + Math.cos(0.8) * r);
    camera.lookAt(p0.x, 0.7, p0.z);
    camera.fov = lerp(camera.fov, 42, Math.min(1, 4 * dt)); camera.updateProjectionMatrix();
    for (const w of player.userData.wheels) if (w.userData.front) w.rotation.y = lerp(w.rotation.y, 0, dt * 3);
    player.userData.glow.material.opacity = 0;
    W.road.ensure(10); W.follow(p0.x, p0.z, p0.fx, p0.fz);
    if (Sound.engine) Sound.update(0, maxSpeed, false, false);
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
function frame() {
  const dt = Math.min(0.05, clock.getDelta());
  if (player) { update(dt); autoQuality(dt); if (usePost && composer) composer.render(); else renderer.render(scene, camera); }
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot
W.setWorld(settings.world);
preload().then(() => { setPlayerCar(); refreshMenu(); toMenu(); }).catch((e) => { loadTxt.textContent = 'Something went wrong: ' + e; console.error(e); });
camera.position.set(6, 3, 7);
frame();
document.addEventListener('visibilitychange', () => { if (document.hidden) { input.gas = input.brake = input.boost = false; } else Sound.resume(); });
window.__kidcars = { G, settings, state: () => state, hasCar, body: () => body };
