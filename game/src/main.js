// Kid Cars — endless driving with real cars. No music, no people, no violence. Everything unlocked.
import * as THREE from 'three';
import { bend } from './bend.js';
import { CARS, loadCar, hasCar, instantiate, setNightLights, setEnvIntensity } from './cars.js';
import { createWorld, LANES, EDGE, RANGE } from './world.js';
import { Sound } from './sound.js';

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);
const randi = (a, b) => Math.floor(rand(a, b + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const SAVE_KEY = 'kidcars-v2';
let settings = { car: 0, color: 0, world: 'country', time: 'day', traffic: true, sound: true, tilt: false, cam: 0 };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}')); } catch (e) { /* ignore */ }
if (!CARS[settings.car]) settings.car = 0;
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ } }

// ------------------------------------------------------------------ renderer / scene
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.3, 1200);
function resize() { const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
window.addEventListener('resize', resize); resize();

const W = createWorld(scene, renderer);

// ------------------------------------------------------------------ colours
const COLORS = [0xd3121f, 0x1746c9, 0xf5c518, 0x159447, 0xf2f2f2, 0x15161a, 0xff6a13, 0x6d28d9, 0x1fb8c8];

// ------------------------------------------------------------------ loading
const loadEl = $('loading'), loadBar = $('loadfill'), loadTxt = $('loadtxt');
let loaded = 0, toLoad = 0;
function bump(label) { loaded++; loadBar.style.width = Math.round((loaded / toLoad) * 100) + '%'; if (label) loadTxt.textContent = label; }
async function preload() {
  const first = CARS[settings.car].id;
  toLoad = CARS.length + 1;
  await loadCar(first, false); bump('Polishing the ' + CARS[settings.car].name + '…');
  for (const c of CARS) { await loadCar(c.id, true); bump('Loading traffic…'); }
  loadTxt.textContent = 'Ready!';
  setTimeout(() => loadEl.classList.add('hidden'), 350);
  // the rest in the background
  (async () => { for (const c of CARS) if (!hasCar(c.id, false)) { try { await loadCar(c.id, false); } catch (e) { console.warn(e); } if (state === 'menu' && CARS[settings.car].id === c.id) setPlayerCar(); } })();
}

// ------------------------------------------------------------------ player & traffic
let player = null, playerSpec = CARS[0];
let headlights = null;
function setPlayerCar() {
  if (player) scene.remove(player);
  playerSpec = CARS[settings.car];
  const useLo = !hasCar(playerSpec.id, false);
  player = instantiate(playerSpec.id, useLo, COLORS[settings.color]);
  scene.add(player);
  headlights = new THREE.Group();
  for (const sx of [-1, 1]) {
    const s = new THREE.SpotLight(0xfff4d6, 0, 90, 0.55, 0.5, 1.0);
    s.position.set(sx * 0.65, 0.7, -playerSpec.len / 2 + 0.1);
    s.target.position.set(sx * 1.8, 0, -45);
    headlights.add(s, s.target);
  }
  player.add(headlights);
  applyTime();
}

const traffic = [];
function spawnTraffic(t, fromBehind) {
  const lane = randi(0, 2);
  let z = fromBehind ? 70 : rand(-RANGE + 60, -120);
  for (let tries = 0; tries < 12; tries++) {
    let ok = true;
    for (const o of traffic) if (o !== t && o.active && o.lane === lane && Math.abs(o.z - z) < 50) ok = false;
    if (ok) break;
    z = fromBehind ? z + 35 : rand(-RANGE + 60, -120);
  }
  // fresh car type + colour each time it comes around
  if (t.mesh) scene.remove(t.mesh);
  t.spec = pick(CARS);
  t.mesh = instantiate(t.spec.id, true, pick(COLORS));
  t.mesh.traverse((o) => { if (o.isMesh) o.castShadow = Math.abs(z) < 60; });
  scene.add(t.mesh);
  t.lane = lane; t.z = z; t.speed = fromBehind ? rand(33, 44) : rand(14, 28);
  t.active = true; t.mesh.visible = true;
  t.mesh.position.set(LANES[lane], 0, z);
}
for (let i = 0; i < 6; i++) traffic.push({ mesh: null, spec: CARS[0], lane: 0, z: -9999, speed: 20, active: false });

// ------------------------------------------------------------------ time of day
function applyTime() {
  W.setTime(settings.time, scene);
  setNightLights(W.night);
  setEnvIntensity(W.night ? 0.5 : 1.0);
  if (player) { player.userData.paint.forEach((m) => (m.envMapIntensity = W.night ? 0.6 : 1.25)); headlights.children.forEach((c) => { if (c.isSpotLight) c.intensity = W.night ? 400 : 0; }); }
}

// ------------------------------------------------------------------ input
const input = { left: false, right: false, gas: false, brake: false, boost: false, tilt: 0 };
function bindHold(id, key) {
  const el = $(id);
  const down = (e) => { e.preventDefault(); input[key] = true; el.classList.add('pressed'); Sound.init(); Sound.resume(); };
  const up = (e) => { if (e) e.preventDefault(); input[key] = false; el.classList.remove('pressed'); };
  el.addEventListener('pointerdown', down);
  el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
  el.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
}
bindHold('btnLeft', 'left'); bindHold('btnRight', 'right'); bindHold('btnGas', 'gas'); bindHold('btnBrake', 'brake'); bindHold('btnBoost', 'boost');
$('btnHorn').addEventListener('pointerdown', (e) => { e.preventDefault(); Sound.init(); Sound.resume(); Sound.horn(); $('btnHorn').classList.add('pressed'); });
$('btnHorn').addEventListener('pointerup', () => $('btnHorn').classList.remove('pressed'));
$('btnCam').addEventListener('pointerdown', (e) => { e.preventDefault(); settings.cam = (settings.cam + 1) % 3; save(); });
window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.left = true;
  if (e.code === 'ArrowRight' || e.code === 'KeyD') input.right = true;
  if (e.code === 'ArrowUp' || e.code === 'KeyW') input.gas = true;
  if (e.code === 'ArrowDown' || e.code === 'KeyS') input.brake = true;
  if (e.code === 'ShiftLeft' || e.code === 'Space') input.boost = true;
  if (e.code === 'KeyH') Sound.horn();
  if (e.code === 'KeyC') { settings.cam = (settings.cam + 1) % 3; save(); }
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
  let v = e.beta / 22;
  const o = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
  if (o === 270 || o === -90) v = -v;
  input.tilt = clamp(v, -1, 1);
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
  settings.car = (settings.car + dir + CARS.length) % CARS.length; save(); setPlayerCar(); refreshMenu();
  G.menuAngle = 0.7;
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
const G = { speed: 0, x: 0, scroll: 0, dist: 0, boostFuel: 1, boosting: false, shake: 0, curveT: rand(0, 6), hillT: rand(0, 6), yaw: 0, steer: 0, menuAngle: 0.7 };
function startDrive() {
  state = 'drive'; menu.classList.add('hidden'); hud.classList.remove('hidden');
  G.speed = 0; G.x = 0; G.dist = 0; G.boostFuel = 1; G.yaw = 0; G.steer = 0;
  player.position.set(0, 0, 0); player.rotation.set(0, 0, 0);
  traffic.forEach((t) => { if (settings.traffic) spawnTraffic(t, false); else { t.active = false; if (t.mesh) t.mesh.visible = false; } });
}
function toMenu() {
  state = 'menu'; hud.classList.add('hidden'); menu.classList.remove('hidden');
  G.speed = 0; input.gas = input.brake = input.left = input.right = input.boost = false;
  traffic.forEach((t) => { t.active = false; if (t.mesh) t.mesh.visible = false; });
  player.position.set(0, 0, 0); player.rotation.set(0, 0, 0);
  G.menuAngle = 0.7;
  if (Sound.engine) Sound.update(0, 1, false, false);
}

// ------------------------------------------------------------------ main loop
const clock = new THREE.Clock();
const camPos = new THREE.Vector3(0, 3, 8), camLook = new THREE.Vector3(0, 1, -10);
const speedEl = $('speedval'), distEl = $('dist'), boostFill = $('boostfill'), boostBtn = $('btnBoost');

function update(dt) {
  const spec = playerSpec;
  const maxSpeed = spec.maxKmh / 3.6;

  if (state === 'drive') {
    const wantBoost = input.boost && G.boostFuel > 0.05;
    if (wantBoost && !G.boosting) Sound.whoosh();
    G.boosting = wantBoost;
    G.boostFuel = G.boosting ? Math.max(0, G.boostFuel - dt / 3) : Math.min(1, G.boostFuel + dt / 9);
    boostFill.style.width = (G.boostFuel * 100).toFixed(0) + '%';
    boostBtn.classList.toggle('cooling', G.boostFuel < 0.05);
    const top = maxSpeed * (G.boosting ? 1.3 : 1);

    if (input.gas) G.speed += spec.accel * (G.boosting ? 2 : 1) * (1 - 0.65 * clamp(G.speed / top, 0, 1)) * dt;
    else G.speed -= 2.0 * dt;
    if (input.brake) G.speed -= 14 * dt;
    G.speed -= 0.002 * G.speed * G.speed * dt;
    G.speed = clamp(G.speed, 0, top);

    let s = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (settings.tilt && s === 0) s = input.tilt;
    G.steer = lerp(G.steer, s, Math.min(1, 10 * dt));
    const lat = G.steer * spec.handling * clamp(G.speed / 14, 0.25, 1);
    G.x += lat * dt;
    if (G.x > EDGE) { G.x = EDGE; if (Math.abs(lat) > 1) { G.shake = 0.3; G.speed *= 0.995; } }
    if (G.x < -EDGE) { G.x = -EDGE; if (Math.abs(lat) > 1) { G.shake = 0.3; G.speed *= 0.995; } }
    G.yaw = lerp(G.yaw, -G.steer * 0.2 * clamp(G.speed / 20, 0.3, 1), Math.min(1, 6 * dt));

    const dz = G.speed * dt;
    G.scroll += dz; G.dist += dz;
    W.update(dz, G.scroll, G.x);
    G.curveT += dt * 0.09; G.hillT += dt * 0.07;
    bend.curve.value = Math.sin(G.curveT) * Math.sin(G.curveT * 0.37 + 1) * 0.0011;
    bend.hill.value = (Math.sin(G.hillT) * 0.5 + Math.sin(G.hillT * 0.53 + 2) * 0.5) * 0.00022;

    player.position.x = G.x;
    player.rotation.y = G.yaw;
    player.rotation.z = -G.steer * 0.035 * clamp(G.speed / 20, 0, 1);
    player.rotation.x = (input.gas ? -0.012 : input.brake ? 0.025 : 0) * clamp(G.speed / 15, 0, 1);
    for (const w of player.userData.wheels) {
      w.userData.spin.rotation.x -= dz / w.userData.radius;
      if (w.userData.front) w.rotation.y = -G.steer * 0.32;
    }
    player.userData.glow.material.opacity = G.boosting ? 0.8 : 0;

    const hw = spec.w / 2, hl = spec.len / 2;
    for (const t of traffic) {
      if (!t.active) continue;
      t.z += (G.speed - t.speed) * dt;
      if (t.z > 70) { spawnTraffic(t, false); continue; }
      if (t.z < -RANGE - 60) { spawnTraffic(t, true); continue; }
      t.mesh.position.z = t.z;
      for (const w of t.mesh.userData.wheels) w.userData.spin.rotation.x -= (t.speed * dt) / w.userData.radius;
      const dx = t.mesh.position.x - G.x, dzc = t.z;
      const ox = (hw + t.spec.w / 2) - Math.abs(dx);
      const oz = (hl + t.spec.len / 2) - Math.abs(dzc);
      if (ox > 0 && oz > 0) {
        if (ox < oz) { G.x -= Math.sign(dx) * ox; t.mesh.position.x += Math.sign(dx) * ox * 0.3; G.speed *= 0.97; G.shake = Math.max(G.shake, 0.4); }
        else if (dzc < 0) { G.speed = Math.min(G.speed, t.speed * 0.7); t.z -= oz; t.speed += 2; G.shake = Math.max(G.shake, 0.7); Sound.bump(1); }
        else { G.speed += 3; t.speed = Math.min(t.speed, G.speed * 0.8); t.z += oz; G.shake = Math.max(G.shake, 0.4); Sound.bump(0.5); }
      }
    }

    speedEl.textContent = Math.round(G.speed * 3.6);
    distEl.textContent = (G.dist / 1000).toFixed(1) + ' km';

    // camera modes: 0 chase, 1 close chase, 2 bonnet
    const sp = clamp(G.speed / maxSpeed, 0, 1);
    if (settings.cam === 0) {
      camPos.set(G.x * 0.85 + G.steer * 0.3, 2.6 + sp * 0.4, 7.0 + sp * 1.6 + spec.len * 0.2);
      camLook.set(G.x * 0.95 + G.steer * 0.8, 1.0, -12);
    } else if (settings.cam === 1) {
      camPos.set(G.x * 0.9 + G.steer * 0.2, 1.7 + sp * 0.2, 4.6 + sp * 0.8 + spec.len * 0.15);
      camLook.set(G.x + G.steer * 0.5, 0.9, -12);
    } else {
      camPos.set(G.x, 1.15, -spec.len / 2 + 0.9);
      camLook.set(G.x + G.steer * 1.5, 0.9, -40);
    }
    camera.position.lerp(camPos, Math.min(1, (settings.cam === 2 ? 20 : 7) * dt));
    camera.fov = lerp(camera.fov, 60 + sp * 14 + (G.boosting ? 8 : 0), Math.min(1, 4 * dt));
    camera.updateProjectionMatrix();
    G.shake = Math.max(0, G.shake - dt * 1.8);
    const sh = G.shake * 0.12 + sp * sp * 0.01 + (G.boosting ? 0.02 : 0);
    camera.position.x += (Math.random() - 0.5) * sh; camera.position.y += (Math.random() - 0.5) * sh;
    camera.lookAt(camLook);
    Sound.update(G.speed, maxSpeed, input.gas, G.boosting);
  } else {
    G.menuAngle += dt * 0.3;
    player.rotation.y = G.menuAngle;
    const r = 4.2 + playerSpec.len * 0.5;
    camera.position.set(Math.sin(0.8) * r, 1.7 + playerSpec.len * 0.08, Math.cos(0.8) * r);
    camera.lookAt(0, 0.7, 0);
    camera.fov = lerp(camera.fov, 42, Math.min(1, 4 * dt)); camera.updateProjectionMatrix();
    bend.curve.value = lerp(bend.curve.value, 0.0004, dt); bend.hill.value = lerp(bend.hill.value, 0.0001, dt);
    for (const w of player.userData.wheels) if (w.userData.front) w.rotation.y = lerp(w.rotation.y, 0, dt * 3);
    player.userData.glow.material.opacity = 0;
    W.update(0, G.scroll, 0);
    if (Sound.engine) Sound.update(0, maxSpeed, false, false);
  }
}

function frame() {
  const dt = Math.min(0.05, clock.getDelta());
  if (player) { update(dt); renderer.render(scene, camera); }
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot
W.setWorld(settings.world);
preload().then(() => { setPlayerCar(); refreshMenu(); toMenu(); }).catch((e) => { loadTxt.textContent = 'Something went wrong: ' + e; console.error(e); });
camera.position.set(6, 3, 7);
frame();
document.addEventListener('visibilitychange', () => { if (document.hidden) { input.gas = input.brake = input.boost = false; } else Sound.resume(); });
window.__kidcars = { G, settings, state: () => state, hasCar };
