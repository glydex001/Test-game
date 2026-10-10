// Kid Cars — endless driving game for small kids.
// No music, no people, no violence. Everything unlocked.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// ------------------------------------------------------------------ helpers
const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);
const randi = (a, b) => Math.floor(rand(a, b + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const SAVE_KEY = 'kidcars-v1';
let settings = { car: 0, color: 0, world: 'country', time: 'day', traffic: true, sound: true, tilt: false };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}')); } catch (e) { /* ignore */ }
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ } }

// ------------------------------------------------------------------ "bend the world" shader
// Everything far ahead is bent sideways / up-down so the road looks like it winds and rolls,
// while the physics stay a simple straight line (kid friendly: you can't fall off a bend).
const bend = { curve: { value: 0 }, hill: { value: 0 } };
function bendMat(m) {
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uCurve = bend.curve;
    shader.uniforms.uHill = bend.hill;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uCurve;\nuniform float uHill;')
      .replace('#include <project_vertex>', `
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif
        vec4 wPos = modelMatrix * mvPosition;
        float zz = min(wPos.z, 0.0);
        wPos.x += uCurve * zz * zz;
        wPos.y += uHill * zz * zz;
        mvPosition = viewMatrix * wPos;
        gl_Position = projectionMatrix * mvPosition;
      `);
  };
  m.customProgramCacheKey = () => 'bend';
  return m;
}

// ------------------------------------------------------------------ renderer / scene
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.3, 700);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

const sun = new THREE.DirectionalLight(0xffffff, 2.2);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -22; sun.shadow.camera.right = 22;
sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30;
sun.shadow.camera.near = 1; sun.shadow.camera.far = 120;
sun.shadow.bias = -0.0015;
scene.add(sun); scene.add(sun.target);
const hemi = new THREE.HemisphereLight(0xbfdfff, 0x4a6a2a, 0.6);
scene.add(hemi);

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

// ------------------------------------------------------------------ procedural textures
function noiseTexture(size, base, variance, repeat) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = base + (Math.random() - 0.5) * variance;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = n; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function windowTexture(night) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = night ? '#1a1f2e' : '#8d99a8'; ctx.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
    const lit = Math.random() < 0.55;
    ctx.fillStyle = night ? (lit ? '#ffd97a' : '#0d1018') : (Math.random() < 0.5 ? '#bcd3e6' : '#9fb6cb');
    ctx.fillRect(x * 32 + 6, y * 32 + 6, 20, 20);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const asphaltTex = noiseTexture(256, 70, 40, 1);
const groundTex = noiseTexture(256, 150, 70, 1);
const winDayTex = windowTexture(false);
const winNightTex = windowTexture(true);

// ------------------------------------------------------------------ road & ground
const ROAD_W = 13.5;        // 3 lanes
const LANES = [-4.3, 0, 4.3];
const EDGE = ROAD_W / 2 - 1.2;
const RANGE = 520;          // how far ahead the world exists
asphaltTex.repeat.set(2, RANGE / 6);
groundTex.repeat.set(40, RANGE / 10);

const world = new THREE.Group(); scene.add(world);
const roadMat = bendMat(new THREE.MeshStandardMaterial({ map: asphaltTex, color: 0x9a9a9a, roughness: 0.95 }));
const road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_W, RANGE + 60, 1, 96), roadMat);
road.rotation.x = -Math.PI / 2; road.position.set(0, 0.02, -RANGE / 2 + 40); road.receiveShadow = true;
world.add(road);
const groundMat = bendMat(new THREE.MeshStandardMaterial({ map: groundTex, color: 0x5f9a3a, roughness: 1 }));
const ground = new THREE.Mesh(new THREE.PlaneGeometry(900, RANGE + 60, 8, 96), groundMat);
ground.rotation.x = -Math.PI / 2; ground.position.set(0, 0, -RANGE / 2 + 40); ground.receiveShadow = true;
world.add(ground);
// solid edge lines
const lineMat = bendMat(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }));
for (const sx of [-1, 1]) {
  const l = new THREE.Mesh(new THREE.PlaneGeometry(0.18, RANGE + 60, 1, 96), lineMat);
  l.rotation.x = -Math.PI / 2; l.position.set(sx * (ROAD_W / 2 - 0.35), 0.03, -RANGE / 2 + 40);
  world.add(l);
}

// Repeater: a row of identical things along the road that scrolls and wraps
class Repeater {
  constructor(spacing, build) {
    this.spacing = spacing;
    this.group = new THREE.Group();
    const n = Math.ceil((RANGE + 80) / spacing);
    for (let i = 0; i < n; i++) {
      const o = build(i);
      o.position.z = 50 - i * spacing;
      this.group.add(o);
    }
    world.add(this.group);
  }
  update(scroll) { this.group.position.z = scroll % this.spacing; }
  setVisible(v) { this.group.visible = v; }
}
const dashMat = bendMat(new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.8 }));
const dashes = new Repeater(9, () => {
  const g = new THREE.Group();
  for (const x of [-2.15, 2.15]) {
    const d = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 3.2), dashMat);
    d.position.set(x, 0.035, 0); g.add(d);
  }
  return g;
});

// Scatter: random things on either side of the road that scroll and wrap
class Scatter {
  constructor(parts, count, xmin, xmax, scaleRange) {
    this.count = count; this.parts = [];
    this.x = new Float32Array(count); this.z = new Float32Array(count);
    this.s = new Float32Array(count); this.r = new Float32Array(count);
    this.xmin = xmin; this.xmax = xmax; this.scaleRange = scaleRange;
    for (const p of parts) {
      const im = new THREE.InstancedMesh(p.geometry, p.material, count);
      im.castShadow = !!p.shadow; im.frustumCulled = false;
      this.parts.push({ im, p });
      world.add(im);
    }
    for (let i = 0; i < count; i++) { this.respawn(i); this.z[i] = rand(-RANGE, 40); }
    this.dummy = new THREE.Object3D();
    this.write();
  }
  respawn(i) {
    const side = Math.random() < 0.5 ? -1 : 1;
    this.x[i] = side * rand(this.xmin, this.xmax);
    this.z[i] = -RANGE + rand(0, 30);
    this.s[i] = rand(this.scaleRange[0], this.scaleRange[1]);
    this.r[i] = rand(0, Math.PI * 2);
  }
  write() {
    for (const { im, p } of this.parts) {
      for (let i = 0; i < this.count; i++) {
        const s = this.s[i] * (p.scale || 1);
        this.dummy.position.set(this.x[i] + (p.dx || 0), (p.y || 0) * this.s[i], this.z[i]);
        this.dummy.rotation.set(0, this.r[i], 0);
        this.dummy.scale.set(s, s, s);
        this.dummy.updateMatrix();
        im.setMatrixAt(i, this.dummy.matrix);
      }
      im.instanceMatrix.needsUpdate = true;
    }
  }
  update(dz) {
    for (let i = 0; i < this.count; i++) { this.z[i] += dz; if (this.z[i] > 45) this.respawn(i); }
    this.write();
  }
  setVisible(v) { for (const { im } of this.parts) im.visible = v; }
}

// ------------------------------------------------------------------ worlds
const std = (opts) => bendMat(new THREE.MeshStandardMaterial(opts));
const worlds = {};
{
  // Countryside
  const trunk = { geometry: new THREE.CylinderGeometry(0.25, 0.35, 2.2, 7), material: std({ color: 0x6b4a2b, roughness: 1 }), y: 1.1 };
  const pine = { geometry: new THREE.ConeGeometry(1.7, 5, 8), material: std({ color: 0x2f7a2f, roughness: 1 }), y: 4.4, shadow: true };
  const round = { geometry: new THREE.SphereGeometry(2.2, 10, 8), material: std({ color: 0x3f9a3a, roughness: 1 }), y: 4.0, shadow: true };
  const fenceMat = std({ color: 0xc9b68a, roughness: 1 });
  worlds.country = {
    sky: { day: 0x8ccbf7, sunset: 0xf5a05c, night: 0x0c1230 }, ground: 0x5f9a3a, fogFar: 420,
    scatters: [new Scatter([trunk, pine], 40, 10, 60, [0.8, 1.5]), new Scatter([trunk, round], 40, 11, 70, [0.7, 1.3])],
    repeaters: [new Repeater(6, () => {
      const g = new THREE.Group();
      for (const sx of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.1, 0.16), fenceMat); post.position.set(sx * 8.6, 0.55, 0); g.add(post);
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 6), fenceMat); rail.position.set(sx * 8.6, 0.85, -3); g.add(rail);
      }
      return g;
    })],
    far: () => {
      const g = new THREE.Group();
      const m = std({ color: 0x4f8f4f, roughness: 1 });
      for (let i = 0; i < 14; i++) {
        const h = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), m);
        const s = rand(40, 90);
        h.scale.set(s * 1.6, s * 0.55, s); h.position.set(pick([-1, 1]) * rand(120, 200), -s * 0.1, -RANGE + i * (RANGE / 14));
        g.add(h);
      }
      return g;
    },
  };
}
{
  // Desert
  const cactusMat = std({ color: 0x3f8f4a, roughness: 0.9 });
  const body = { geometry: new THREE.CapsuleGeometry(0.4, 2.6, 4, 8), material: cactusMat, y: 1.7, shadow: true };
  const armL = { geometry: new THREE.CapsuleGeometry(0.25, 1.0, 4, 8), material: cactusMat, y: 1.9, dx: -0.6 };
  const armR = { geometry: new THREE.CapsuleGeometry(0.25, 0.7, 4, 8), material: cactusMat, y: 2.3, dx: 0.6 };
  const rock = { geometry: new THREE.DodecahedronGeometry(1.2, 0), material: std({ color: 0xb08a63, roughness: 1 }), y: 0.5, shadow: true };
  worlds.desert = {
    sky: { day: 0xa9d4f5, sunset: 0xf3904a, night: 0x120f2a }, ground: 0xd9b36b, fogFar: 460,
    scatters: [new Scatter([body, armL, armR], 30, 10, 60, [0.8, 1.6]), new Scatter([rock], 40, 9, 80, [0.5, 2.2])],
    repeaters: [],
    far: () => {
      const g = new THREE.Group();
      const m = std({ color: 0xc27a4a, roughness: 1 });
      for (let i = 0; i < 10; i++) {
        const mesa = new THREE.Mesh(new THREE.CylinderGeometry(rand(20, 35), rand(40, 55), rand(25, 45), 7), m);
        mesa.position.set(pick([-1, 1]) * rand(130, 220), 10, -RANGE + i * (RANGE / 10));
        g.add(mesa);
      }
      return g;
    },
  };
}
{
  // City
  const bMat = std({ map: winDayTex, roughness: 0.6, metalness: 0.1 });
  const roofMat = std({ color: 0x555a60, roughness: 1 });
  const buildings = new THREE.Group(); world.add(buildings);
  const list = [];
  for (let i = 0; i < 44; i++) {
    const w = rand(8, 16), h = rand(8, 40), d = rand(8, 16);
    const geo = new THREE.BoxGeometry(w, h, d);
    const uv = geo.attributes.uv;
    for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * w / 3, uv.getY(k) * h / 3);
    const b = new THREE.Mesh(geo, [bMat, bMat, roofMat, roofMat, bMat, bMat]);
    const side = i % 2 === 0 ? -1 : 1;
    b.position.set(side * (ROAD_W / 2 + 4 + w / 2 + rand(0, 6)), h / 2, -RANGE + (i / 44) * RANGE);
    b.userData.w = w;
    buildings.add(b); list.push(b);
  }
  const lampMat = std({ color: 0x9aa0a6, roughness: 0.4, metalness: 0.8 });
  const lampGlow = bendMat(new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffe0a0, emissiveIntensity: 0 }));
  const pavement = std({ color: 0x7b7f85, roughness: 1 });
  worlds.city = {
    sky: { day: 0x9ccff5, sunset: 0xf0905a, night: 0x070a18 }, ground: 0x3a3d42, fogFar: 380,
    scatters: [], buildings: list, lampGlow, bMat,
    repeaters: [new Repeater(26, () => {
      const g = new THREE.Group();
      for (const sx of [-1, 1]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 6, 6), lampMat); pole.position.set(sx * 8, 3, 0); g.add(pole);
        const arm = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 0.1), lampMat); arm.position.set(sx * 7.3, 5.95, 0); g.add(arm);
        const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.15, 0.3), lampGlow); lamp.position.set(sx * 6.6, 5.9, 0); g.add(lamp);
        const walk = new THREE.Mesh(new THREE.BoxGeometry(3, 0.18, 26), pavement); walk.position.set(sx * (ROAD_W / 2 + 1.5), 0.09, -13); walk.receiveShadow = true; g.add(walk);
      }
      return g;
    })],
    far: () => new THREE.Group(),
  };
}
{
  // Snow
  const trunk = { geometry: new THREE.CylinderGeometry(0.25, 0.35, 2.2, 7), material: std({ color: 0x5a4030, roughness: 1 }), y: 1.1 };
  const pine = { geometry: new THREE.ConeGeometry(1.7, 5, 8), material: std({ color: 0x2d6b3f, roughness: 1 }), y: 4.4, shadow: true };
  const snowcap = { geometry: new THREE.ConeGeometry(1.2, 2.2, 8), material: std({ color: 0xf4f8ff, roughness: 1 }), y: 6.0 };
  const bank = { geometry: new THREE.SphereGeometry(1.5, 8, 6), material: std({ color: 0xf0f5ff, roughness: 1 }), y: 0.2 };
  const poleMat = std({ color: 0xff5a36, roughness: 0.7 });
  worlds.snow = {
    sky: { day: 0xcfe4f5, sunset: 0xf0a070, night: 0x0d1428 }, ground: 0xeef3fa, fogFar: 330,
    scatters: [new Scatter([trunk, pine, snowcap], 46, 10, 70, [0.8, 1.6]), new Scatter([bank], 30, 8, 30, [0.6, 1.8])],
    repeaters: [new Repeater(10, () => {
      const g = new THREE.Group();
      for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.4, 0.12), poleMat); p.position.set(sx * 7.6, 0.7, 0); g.add(p); }
      return g;
    })],
    far: () => {
      const g = new THREE.Group();
      const m = std({ color: 0xe8eef8, roughness: 1 });
      for (let i = 0; i < 12; i++) {
        const mtn = new THREE.Mesh(new THREE.ConeGeometry(rand(50, 90), rand(60, 120), 6), m);
        mtn.position.set(pick([-1, 1]) * rand(140, 240), 0, -RANGE + i * (RANGE / 12));
        g.add(mtn);
      }
      return g;
    },
  };
}
for (const k in worlds) { worlds[k].farGroup = worlds[k].far(); world.add(worlds[k].farGroup); }

// ------------------------------------------------------------------ cars
const COLORS = [0xe11d2e, 0x1d4ed8, 0xfacc15, 0x16a34a, 0xf3f4f6, 0x111827, 0xf97316, 0x7c3aed, 0x06b6d4];
const COLOR_NAMES = ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Orange', 'Purple', 'Teal'];

// Side profiles: [length-position, height]. Length 0 = back of car, increasing toward the front.
const CARS = [
  { name: 'Sports Car', len: 4.4, w: 1.95, cabW: 1.7, wheelR: 0.36, wheelW: 0.3, axles: [0.85, 3.55], maxKmh: 240, accel: 11, handling: 9,
    body: [[0, 0.3], [0.05, 0.72], [0.9, 0.78], [2.6, 0.76], [3.4, 0.7], [4.3, 0.58], [4.4, 0.3]],
    cabin: [[1.0, 0.72], [1.75, 1.16], [2.85, 1.18], [3.45, 0.72]], spoiler: true },
  { name: 'Super Car', len: 4.6, w: 2.05, cabW: 1.6, wheelR: 0.37, wheelW: 0.34, axles: [0.9, 3.7], maxKmh: 320, accel: 14, handling: 10,
    body: [[0, 0.28], [0.1, 0.78], [0.6, 0.82], [1.6, 0.74], [2.8, 0.7], [3.6, 0.62], [4.5, 0.5], [4.6, 0.28]],
    cabin: [[1.2, 0.74], [2.0, 1.08], [2.9, 1.1], [3.5, 0.68]], spoiler: true, scoop: true },
  { name: 'Family Car', len: 4.7, w: 1.85, cabW: 1.7, wheelR: 0.35, wheelW: 0.26, axles: [0.85, 3.85], maxKmh: 190, accel: 8, handling: 8,
    body: [[0, 0.32], [0, 0.8], [0.9, 0.84], [3.7, 0.8], [4.6, 0.72], [4.7, 0.34]],
    cabin: [[1.1, 0.8], [1.95, 1.38], [3.25, 1.38], [3.85, 0.8]] },
  { name: 'Big SUV', len: 4.9, w: 2.05, cabW: 1.95, wheelR: 0.44, wheelW: 0.32, axles: [0.95, 3.95], maxKmh: 180, accel: 7.5, handling: 7,
    body: [[0, 0.42], [0, 0.98], [4.1, 0.98], [4.8, 0.88], [4.9, 0.45]],
    cabin: [[0.25, 0.98], [0.5, 1.78], [3.35, 1.78], [3.95, 0.98]], rack: true },
  { name: 'Pickup Truck', len: 5.5, w: 2.05, cabW: 1.95, wheelR: 0.45, wheelW: 0.34, axles: [1.1, 4.5], maxKmh: 170, accel: 7, handling: 6.5,
    body: [[0, 0.45], [0, 1.02], [4.7, 1.02], [5.4, 0.9], [5.5, 0.48]],
    cabin: [[2.35, 1.02], [2.6, 1.85], [4.1, 1.85], [4.5, 1.02]], bed: [0.15, 2.2] },
  { name: 'Race Car', len: 4.8, w: 1.0, cabW: 0.8, wheelR: 0.38, wheelW: 0.4, axles: [0.7, 3.9], wheelX: 0.85, maxKmh: 330, accel: 15, handling: 11,
    body: [[0, 0.25], [0, 0.55], [1.4, 0.6], [2.3, 0.95], [3.2, 0.6], [4.75, 0.38], [4.8, 0.25]],
    cabin: null, wings: true },
  { name: 'Big Bus', len: 9.5, w: 2.5, cabW: 2.4, wheelR: 0.52, wheelW: 0.4, axles: [1.6, 7.6], maxKmh: 120, accel: 4.5, handling: 5,
    body: [[0, 0.5], [0, 3.0], [9.2, 3.0], [9.5, 2.5], [9.5, 0.5]],
    cabin: null, busWindows: true },
  { name: 'Monster Truck', len: 5.5, w: 2.2, cabW: 2.0, wheelR: 0.95, wheelW: 0.7, axles: [1.2, 4.3], wheelX: 1.45, lift: 1.0, maxKmh: 150, accel: 9, handling: 7,
    body: [[0, 0.45], [0, 1.02], [4.7, 1.02], [5.4, 0.9], [5.5, 0.48]],
    cabin: [[2.35, 1.02], [2.6, 1.85], [4.1, 1.85], [4.5, 1.02]], bed: [0.15, 2.2] },
  { name: 'Delivery Van', len: 5.3, w: 2.0, cabW: 1.95, wheelR: 0.38, wheelW: 0.28, axles: [0.9, 4.3], maxKmh: 150, accel: 6, handling: 6.5,
    body: [[0, 0.36], [0, 1.0], [4.5, 1.0], [5.2, 0.82], [5.3, 0.4]],
    cabin: [[0.1, 1.0], [0.2, 2.25], [4.0, 2.25], [4.65, 1.0]], vanSolid: true },
];

function profileGeometry(points, width, bevel) {
  const shape = new THREE.Shape();
  points.forEach(([l, h], i) => (i === 0 ? shape.moveTo(l, h) : shape.lineTo(l, h)));
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 4 });
  geo.translate(0, 0, -(width - bevel * 2) / 2);   // center the width
  geo.rotateY(Math.PI / 2);                          // length now runs along -z (front = -z)
  geo.computeVertexNormals();
  return geo;
}

const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f1a2a, metalness: 0.9, roughness: 0.08, envMapIntensity: 1.2 });
const tireMat = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.95 });
const rimMat = new THREE.MeshStandardMaterial({ color: 0xd6d8dc, metalness: 0.9, roughness: 0.25 });
const darkMat = new THREE.MeshStandardMaterial({ color: 0x1b1d21, roughness: 0.7, metalness: 0.3 });
const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe8e8e8, metalness: 1, roughness: 0.15 });
const bedMat = new THREE.MeshStandardMaterial({ color: 0x2a2d31, roughness: 0.9 });
[glassMat, tireMat, rimMat, darkMat, chromeMat, bedMat].forEach(bendMat);

function makeWheel(r, w) {
  const pivot = new THREE.Group();            // steering (rotation.y)
  const spin = new THREE.Group();             // rolling (rotation.x)
  const tire = new THREE.Mesh(new THREE.CylinderGeometry(r, r, w, 22), tireMat);
  tire.rotation.z = Math.PI / 2; tire.castShadow = true;
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.62, r * 0.62, w + 0.03, 16), rimMat);
  rim.rotation.z = Math.PI / 2;
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.2, r * 0.2, w + 0.05, 10), darkMat);
  hub.rotation.z = Math.PI / 2;
  // spokes
  for (let i = 0; i < 5; i++) {
    const sp = new THREE.Mesh(new THREE.BoxGeometry(w + 0.04, r * 0.5, r * 0.14), darkMat);
    sp.rotation.x = (i / 5) * Math.PI * 2; sp.position.y = 0;
    const holder = new THREE.Group(); holder.add(sp); sp.position.set(0, r * 0.3, 0); holder.rotation.x = (i / 5) * Math.PI * 2;
    spin.add(holder);
  }
  spin.add(tire, rim, hub); pivot.add(spin);
  pivot.userData.spin = spin;
  return pivot;
}

function buildCar(spec, colorHex) {
  const g = new THREE.Group();
  const lift = spec.lift || 0;
  const bodyMat = bendMat(new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.55, roughness: 0.32, envMapIntensity: 1.0 }));
  const half = spec.len / 2;
  const L = (l) => -(l - half);   // length position -> z

  const body = new THREE.Mesh(profileGeometry(spec.body, spec.w, 0.06), bodyMat);
  body.position.set(0, lift, half); body.castShadow = true; body.receiveShadow = true;
  g.add(body);

  // cabin + windows
  if (spec.cabin) {
    const cab = new THREE.Mesh(profileGeometry(spec.cabin, spec.cabW, 0.05), bodyMat);
    cab.position.set(0, lift, half); cab.castShadow = true; g.add(cab);
    const [rb, rt, ft, fb] = spec.cabin;
    const belt = rb[1], roof = rt[1];
    const inset = 0.08;
    // side windows (flat trapezoids slightly proud of the cabin wall)
    const sideShape = new THREE.Shape();
    const sw = spec.vanSolid ? [[ft[0] - 1.6, belt + inset], [ft[0] - 1.2, roof - inset], [ft[0], roof - inset], [fb[0] - inset * 2, belt + inset]]
      : [[rb[0] + inset * 2, belt + inset], [rt[0] + inset, roof - inset], [ft[0] - inset, roof - inset], [fb[0] - inset * 2, belt + inset]];
    sw.forEach(([l, h], i) => (i === 0 ? sideShape.moveTo(l, h) : sideShape.lineTo(l, h)));
    sideShape.closePath();
    const sgeo = new THREE.ShapeGeometry(sideShape);
    for (const sx of [-1, 1]) {
      const m = new THREE.Mesh(sgeo, glassMat);
      m.rotation.y = sx * Math.PI / 2; m.position.set(sx * (spec.cabW / 2 + 0.015), lift, half);
      if (sx === -1) { m.rotation.y = -Math.PI / 2; m.scale.x = -1; }
      g.add(m);
    }
    // windshield / rear window
    const quad = (a, b, w, flip) => {
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, len - inset * 2), glassMat);
      const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
      m.position.set(0, lift + (a[1] + b[1]) / 2, L((a[0] + b[0]) / 2));
      m.rotation.x = -(Math.PI / 2 - ang) * (flip ? -1 : 1) + (flip ? Math.PI : 0);
      // push outward along the surface normal
      const nx = Math.sin(ang), ny = -Math.cos(ang);
      m.position.z -= (flip ? -1 : 1) * nx * 0.02 * -1;
      m.position.y += ny * 0.02 * (flip ? -1 : 1);
      return m;
    };
    if (!spec.vanSolid) g.add(quad(rb, rt, spec.cabW * 0.9, true));
    g.add(quad(ft, fb, spec.cabW * 0.9, false));
    // mirrors
    for (const sx of [-1, 1]) {
      const mir = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.1), bodyMat);
      mir.position.set(sx * (spec.cabW / 2 + 0.12), lift + belt + 0.12, L(fb[0] - 0.05)); g.add(mir);
    }
  }
  if (spec.busWindows) {
    const belt = 1.6, top = 2.6;
    for (const sx of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(spec.len - 1.2, top - belt), glassMat);
      m.rotation.y = sx * Math.PI / 2; m.position.set(sx * (spec.w / 2 + 0.01), (belt + top) / 2, 0.2); g.add(m);
      for (let i = 1; i < 6; i++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.04, top - belt, 0.1), bodyMat);
        bar.position.set(sx * (spec.w / 2 + 0.03), (belt + top) / 2, 0.2 + (spec.len - 1.2) / 2 - i * (spec.len - 1.2) / 6); g.add(bar);
      }
    }
    const front = new THREE.Mesh(new THREE.PlaneGeometry(spec.w - 0.3, 1.5), glassMat);
    front.position.set(0, 2.0, -half - 0.01); front.rotation.x = 0.12; g.add(front);
    const rear = new THREE.Mesh(new THREE.PlaneGeometry(spec.w - 0.4, 1.0), glassMat);
    rear.position.set(0, 2.2, half + 0.01); rear.rotation.y = Math.PI; g.add(rear);
  }
  if (spec.bed) {
    const bl = spec.bed[1] - spec.bed[0];
    const bed = new THREE.Mesh(new THREE.BoxGeometry(spec.w - 0.3, 0.5, bl - 0.2), bedMat);
    bed.position.set(0, lift + 0.8, L((spec.bed[0] + spec.bed[1]) / 2)); g.add(bed);
  }
  if (spec.rack) {
    for (const sx of [-1, 1]) {
      const r = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 2.4), darkMat);
      r.position.set(sx * 0.6, lift + spec.cabin[1][1] + 0.08, L(2.0)); g.add(r);
    }
  }
  if (spec.spoiler) {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(spec.w * 0.9, 0.06, 0.4), bodyMat);
    wing.position.set(0, lift + spec.body[1][1] + 0.32, half - 0.2); wing.castShadow = true; g.add(wing);
    for (const sx of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.3, 0.25), darkMat);
      leg.position.set(sx * spec.w * 0.35, lift + spec.body[1][1] + 0.15, half - 0.2); g.add(leg);
    }
  }
  if (spec.scoop) {
    for (const sx of [-1, 1]) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.6), darkMat);
      s.position.set(sx * (spec.w / 2 - 0.1), lift + 0.75, 0.6); g.add(s);
    }
  }
  if (spec.wings) {
    const fw = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.05, 0.6), bodyMat); fw.position.set(0, 0.3, -half + 0.2); fw.castShadow = true; g.add(fw);
    const rw = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.05, 0.5), bodyMat); rw.position.set(0, 1.0, half - 0.3); rw.castShadow = true; g.add(rw);
    for (const sx of [-1, 1]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.5, 0.3), darkMat); leg.position.set(sx * 0.6, 0.75, half - 0.3); g.add(leg); }
    const cock = new THREE.Mesh(new THREE.SphereGeometry(0.4, 10, 8), glassMat); cock.scale.set(1, 0.7, 1.4); cock.position.set(0, 0.85, 0.1); g.add(cock);
    const air = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.45, 0.9), bodyMat); air.position.set(0, 1.05, 0.7); g.add(air);
  }

  // lights, bumpers, grille, exhaust
  const frontH = spec.body[spec.body.length - 2][1];
  const rearH = spec.body[1][1];
  const headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff6d0, emissiveIntensity: 0.6, roughness: 0.2 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0xff2020, emissive: 0xff2020, emissiveIntensity: 0.5, roughness: 0.3 });
  bendMat(headMat); bendMat(tailMat);
  const lw = spec.wings ? 0.2 : Math.min(0.5, spec.w * 0.22);
  const lx = spec.wings ? 0.35 : spec.w / 2 - lw / 2 - 0.12;
  for (const sx of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(lw, spec.busWindows ? 0.35 : 0.2, 0.1), headMat);
    hl.position.set(sx * lx, lift + frontH - (spec.busWindows ? 1.2 : 0.18), -half - 0.02); g.add(hl);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(lw, 0.16, 0.1), tailMat);
    tl.position.set(sx * lx, lift + rearH - (spec.busWindows ? 1.5 : 0.16), half + 0.02); g.add(tl);
  }
  g.userData.headMat = headMat; g.userData.tailMat = tailMat;
  if (!spec.wings) {
    const bf = new THREE.Mesh(new THREE.BoxGeometry(spec.w * 0.98, 0.18, 0.25), darkMat); bf.position.set(0, lift + spec.body[0][1] + 0.12, -half); g.add(bf);
    const br = new THREE.Mesh(new THREE.BoxGeometry(spec.w * 0.98, 0.18, 0.25), darkMat); br.position.set(0, lift + spec.body[0][1] + 0.12, half); g.add(br);
    const gr = new THREE.Mesh(new THREE.BoxGeometry(spec.w * 0.5, 0.16, 0.06), darkMat); gr.position.set(0, lift + frontH - 0.2, -half - 0.03); g.add(gr);
    const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8), chromeMat); ex.rotation.x = Math.PI / 2; ex.position.set(spec.w * 0.3, lift + spec.body[0][1] - 0.02, half + 0.05); g.add(ex);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.14, 0.03), chromeMat); plate.position.set(0, lift + spec.body[0][1] + 0.3, half + 0.08); g.add(plate);
  }

  // wheels
  const wx = spec.wheelX || spec.w / 2 - spec.wheelW / 2 + 0.03;
  const wheels = [];
  const axles = spec.axles.map(L);
  if (spec.busWindows) axles.push(L(spec.axles[0] + 1.5));
  axles.forEach((z, idx) => {
    for (const sx of [-1, 1]) {
      const w = makeWheel(spec.wheelR, spec.wheelW);
      w.position.set(sx * wx, spec.wheelR, z);
      w.userData.front = idx === 1;
      g.add(w); wheels.push(w);
    }
  });
  // monster truck / lifted: axles & suspension
  if (lift > 0) {
    for (const z of axles) { const ax = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, wx * 2, 8), darkMat); ax.rotation.z = Math.PI / 2; ax.position.set(0, spec.wheelR, z); g.add(ax); }
    for (const z of axles) for (const sx of [-1, 1]) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, lift, 8), chromeMat); sp.position.set(sx * 0.6, spec.wheelR + lift / 2, z); g.add(sp); }
  }
  // boost glow (shown only while boosting)
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), new THREE.MeshBasicMaterial({ color: 0x66aaff, transparent: true, opacity: 0.0 }));
  glow.position.set(spec.w * 0.3, lift + spec.body[0][1], half + 0.3); glow.scale.set(1, 0.6, 2.2); g.add(glow);
  g.userData = { ...g.userData, wheels, spec, bodyMat, glow, lift };
  return g;
}

// ------------------------------------------------------------------ player & traffic
let player = null;
let playerSpec = CARS[0];
function setPlayerCar(idx, colorIdx) {
  if (player) { scene.remove(player); }
  playerSpec = CARS[idx];
  player = buildCar(playerSpec, COLORS[colorIdx]);
  scene.add(player);
  // headlights (spotlights) for night
  const hl = new THREE.Group();
  for (const sx of [-1, 1]) {
    const s = new THREE.SpotLight(0xfff4d6, 0, 70, 0.55, 0.5, 1.0);
    s.position.set(sx * 0.6, player.userData.lift + 0.7, -playerSpec.len / 2);
    s.target.position.set(sx * 1.5, 0, -40);
    hl.add(s, s.target);
  }
  player.add(hl); player.userData.headlights = hl;
  applyTime();
}

const traffic = [];
const TRAFFIC_SPECS = [0, 2, 2, 3, 4, 8, 6, 2];
function buildTraffic() {
  for (const i of TRAFFIC_SPECS) {
    const car = buildCar(CARS[i], pick(COLORS));
    car.visible = false;
    scene.add(car);
    traffic.push({ mesh: car, spec: CARS[i], lane: 0, z: -9999, speed: 20, active: false });
  }
}
buildTraffic();
function spawnTraffic(t, fromBehind) {
  const lane = randi(0, 2);
  let z = fromBehind ? 60 : rand(-RANGE + 40, -120);
  // keep a gap in the same lane
  for (let tries = 0; tries < 10; tries++) {
    let ok = true;
    for (const o of traffic) if (o !== t && o.active && o.lane === lane && Math.abs(o.z - z) < 45) ok = false;
    if (ok) break;
    z = fromBehind ? z + 30 : rand(-RANGE + 40, -120);
  }
  t.lane = lane; t.z = z; t.speed = fromBehind ? rand(32, 42) : rand(13, 27);
  t.active = true; t.mesh.visible = true;
  t.mesh.position.set(LANES[lane], 0, z);
  t.mesh.rotation.set(0, 0, 0);
}

// ------------------------------------------------------------------ sound (synth engine; no music)
const Sound = {
  ctx: null, on: true, engine: null, wind: null,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const ctx = this.ctx = new AC();
    const master = this.master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    // engine
    const eg = ctx.createGain(); eg.gain.value = 0.0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
    const o1 = ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 60;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 30;
    const o2g = ctx.createGain(); o2g.gain.value = 0.35;
    o1.connect(lp); o2.connect(o2g); o2g.connect(lp); lp.connect(eg); eg.connect(master);
    o1.start(); o2.start();
    this.engine = { o1, o2, lp, eg };
    // wind noise
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const ns = ctx.createBufferSource(); ns.buffer = buf; ns.loop = true;
    const nlp = ctx.createBiquadFilter(); nlp.type = 'lowpass'; nlp.frequency.value = 600;
    const ng = ctx.createGain(); ng.gain.value = 0;
    ns.connect(nlp); nlp.connect(ng); ng.connect(master); ns.start();
    this.wind = { ng, nlp, buf };
    this.setOn(this.on);
  },
  setOn(v) { this.on = v; if (this.master) this.master.gain.setTargetAtTime(v ? 0.8 : 0, this.ctx.currentTime, 0.05); },
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
  update(speed, maxSpeed, gas, boosting) {
    if (!this.engine) return;
    const t = this.ctx.currentTime;
    const gears = 5, span = maxSpeed / gears;
    const gear = Math.min(gears - 1, Math.floor(speed / span));
    const frac = clamp((speed - gear * span) / span, 0, 1);
    const rpm = 0.15 + frac * 0.85;
    const f = 45 + rpm * 110 + gear * 10 + (boosting ? 30 : 0);
    this.engine.o1.frequency.setTargetAtTime(f, t, 0.05);
    this.engine.o2.frequency.setTargetAtTime(f / 2, t, 0.05);
    this.engine.lp.frequency.setTargetAtTime(300 + rpm * 1400 + (gas ? 300 : 0), t, 0.08);
    this.engine.eg.gain.setTargetAtTime(gas ? 0.16 : 0.08 + rpm * 0.02, t, 0.1);
    const w = Math.pow(clamp(speed / 60, 0, 1), 2);
    this.wind.ng.gain.setTargetAtTime(w * 0.12, t, 0.2);
  },
  horn() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    for (const f of [420, 525]) {
      const o = this.ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1200;
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.03); g.gain.setValueAtTime(0.18, t + 0.45); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      o.connect(lp); lp.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.65);
    }
  },
  bump(strength) {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    const s = this.ctx.createBufferSource(); s.buffer = this.wind.buf;
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 250;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.5 * strength, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    s.connect(lp); lp.connect(g); g.connect(this.master); s.start(t); s.stop(t + 0.3);
  },
  whoosh() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    const s = this.ctx.createBufferSource(); s.buffer = this.wind.buf;
    const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.setValueAtTime(400, t); bp.frequency.exponentialRampToValueAtTime(3000, t + 0.6); bp.Q.value = 1.5;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.3, t + 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    s.connect(bp); bp.connect(g); g.connect(this.master); s.start(t); s.stop(t + 1);
  },
};

// ------------------------------------------------------------------ time of day & world switching
let currentWorld = null;
function applyWorld() {
  const w = worlds[settings.world];
  for (const k in worlds) {
    const ww = worlds[k];
    const on = k === settings.world;
    ww.scatters.forEach((s) => s.setVisible(on));
    ww.repeaters.forEach((r) => r.setVisible(on));
    ww.farGroup.visible = on;
    if (ww.buildings) ww.buildings.forEach((b) => (b.visible = on));
  }
  groundMat.color.setHex(w.ground);
  currentWorld = w;
  applyTime();
}
function applyTime() {
  const w = worlds[settings.world];
  const t = settings.time;
  const sky = new THREE.Color(w.sky[t]);
  scene.background = sky;
  scene.fog = new THREE.Fog(sky, 60, w.fogFar * (t === 'night' ? 0.6 : 1));
  if (t === 'day') {
    sun.color.setHex(0xfff6e8); sun.intensity = 2.4; sun.position.set(-30, 60, -20);
    hemi.color.setHex(0xbfdfff); hemi.groundColor.setHex(0x6b7a5a); hemi.intensity = 0.7;
    renderer.toneMappingExposure = 1.0;
  } else if (t === 'sunset') {
    sun.color.setHex(0xffa860); sun.intensity = 1.9; sun.position.set(-70, 18, -30);
    hemi.color.setHex(0xf7b27a); hemi.groundColor.setHex(0x5a4a3a); hemi.intensity = 0.5;
    renderer.toneMappingExposure = 0.95;
  } else {
    sun.color.setHex(0x7788bb); sun.intensity = 0.45; sun.position.set(30, 50, -10);
    hemi.color.setHex(0x334466); hemi.groundColor.setHex(0x111111); hemi.intensity = 0.25;
    renderer.toneMappingExposure = 0.9;
  }
  const night = t === 'night';
  const envI = night ? 0.25 : t === 'sunset' ? 0.7 : 1.0;
  const setLights = (car, strong) => {
    if (!car) return;
    car.userData.headMat.emissiveIntensity = night ? (strong ? 6 : 3) : 0.6;
    car.userData.tailMat.emissiveIntensity = night ? 2.5 : 0.5;
    car.userData.bodyMat.envMapIntensity = envI;
  };
  setLights(player, true);
  if (player) player.userData.headlights.children.forEach((c) => { if (c.isSpotLight) c.intensity = night ? 120 : 0; });
  traffic.forEach((tr) => setLights(tr.mesh, false));
  glassMat.envMapIntensity = envI * 1.2;
  if (worlds.city.lampGlow) worlds.city.lampGlow.emissiveIntensity = night ? 4 : 0;
  worlds.city.bMat.map = night ? winNightTex : winDayTex;
  worlds.city.bMat.emissiveMap = night ? winNightTex : null;
  worlds.city.bMat.emissive.setHex(night ? 0xffffff : 0x000000);
  worlds.city.bMat.emissiveIntensity = night ? 0.9 : 0;
  worlds.city.bMat.needsUpdate = true;
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
window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.left = true;
  if (e.code === 'ArrowRight' || e.code === 'KeyD') input.right = true;
  if (e.code === 'ArrowUp' || e.code === 'KeyW') input.gas = true;
  if (e.code === 'ArrowDown' || e.code === 'KeyS') input.brake = true;
  if (e.code === 'ShiftLeft' || e.code === 'Space') input.boost = true;
  if (e.code === 'KeyH') Sound.horn();
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
  const s = document.createElement('button'); s.className = 'swatch'; s.style.background = '#' + c.toString(16).padStart(6, '0'); s.title = COLOR_NAMES[i];
  s.addEventListener('pointerdown', () => { settings.color = i; save(); setPlayerCar(settings.car, settings.color); refreshMenu(); });
  colorsEl.appendChild(s);
});
$('prevCar').addEventListener('pointerdown', () => { settings.car = (settings.car + CARS.length - 1) % CARS.length; save(); setPlayerCar(settings.car, settings.color); refreshMenu(); });
$('nextCar').addEventListener('pointerdown', () => { settings.car = (settings.car + 1) % CARS.length; save(); setPlayerCar(settings.car, settings.color); refreshMenu(); });
document.querySelectorAll('#worldRow .opt').forEach((b) => b.addEventListener('pointerdown', () => { settings.world = b.dataset.world; save(); applyWorld(); refreshMenu(); }));
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
const G = { speed: 0, x: 0, scroll: 0, dist: 0, boostFuel: 1, boosting: false, shake: 0, curveT: 0, hillT: 0, yaw: 0, steer: 0, menuAngle: 0 };
function startDrive() {
  state = 'drive'; menu.classList.add('hidden'); hud.classList.remove('hidden');
  G.speed = 0; G.x = 0; G.dist = 0; G.boostFuel = 1; G.yaw = 0; G.steer = 0;
  player.position.set(0, 0, 0); player.rotation.set(0, 0, 0);
  traffic.forEach((t) => { if (settings.traffic) spawnTraffic(t, false); else { t.active = false; t.mesh.visible = false; } });
}
function toMenu() {
  state = 'menu'; hud.classList.add('hidden'); menu.classList.remove('hidden');
  G.speed = 0; input.gas = input.brake = input.left = input.right = input.boost = false;
  traffic.forEach((t) => { t.active = false; t.mesh.visible = false; });
  player.position.set(0, 0, 0); player.rotation.set(0, 0, 0);
  G.menuAngle = 0.6;
  if (Sound.engine) Sound.update(0, 1, false, false);
}

// ------------------------------------------------------------------ main loop
const clock = new THREE.Clock();
const camPos = new THREE.Vector3(0, 3, 8), camLook = new THREE.Vector3(0, 1, -10);
const speedEl = $('speedval'), distEl = $('dist'), boostFill = $('boostfill'), boostBtn = $('btnBoost');
const pBox = { hw: 0, hl: 0 };

function update(dt) {
  const spec = playerSpec;
  const maxSpeed = spec.maxKmh / 3.6;

  if (state === 'drive') {
    // ---- boost
    const wantBoost = input.boost && G.boostFuel > 0.05;
    if (wantBoost && !G.boosting) Sound.whoosh();
    G.boosting = wantBoost;
    if (G.boosting) G.boostFuel = Math.max(0, G.boostFuel - dt / 3);
    else G.boostFuel = Math.min(1, G.boostFuel + dt / 9);
    boostFill.style.width = (G.boostFuel * 100).toFixed(0) + '%';
    boostBtn.classList.toggle('cooling', G.boostFuel < 0.05);
    const top = maxSpeed * (G.boosting ? 1.35 : 1);

    // ---- speed
    if (input.gas) G.speed += spec.accel * (G.boosting ? 2 : 1) * (1 - 0.65 * clamp(G.speed / top, 0, 1)) * dt;
    else G.speed -= 2.0 * dt;
    if (input.brake) G.speed -= 14 * dt;
    G.speed -= 0.0025 * G.speed * G.speed * dt;         // air drag
    G.speed = clamp(G.speed, 0, top);
    if (G.speed > top) G.speed = lerp(G.speed, top, 0.5 * dt);

    // ---- steering
    let s = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (settings.tilt && s === 0) s = input.tilt;
    G.steer = lerp(G.steer, s, Math.min(1, 10 * dt));
    const lat = G.steer * spec.handling * clamp(G.speed / 14, 0.25, 1);
    G.x += lat * dt;
    if (G.x > EDGE) { G.x = EDGE; if (Math.abs(lat) > 1) { G.shake = 0.3; G.speed *= 0.995; } }
    if (G.x < -EDGE) { G.x = -EDGE; if (Math.abs(lat) > 1) { G.shake = 0.3; G.speed *= 0.995; } }
    G.yaw = lerp(G.yaw, -G.steer * 0.22 * clamp(G.speed / 20, 0.3, 1), Math.min(1, 6 * dt));

    // ---- scrolling world
    const dz = G.speed * dt;
    G.scroll += dz; G.dist += dz;
    dashes.update(G.scroll);
    currentWorld.scatters.forEach((sc) => sc.update(dz));
    currentWorld.repeaters.forEach((r) => r.update(G.scroll));
    if (currentWorld.buildings) for (const b of currentWorld.buildings) { b.position.z += dz; if (b.position.z > 60) b.position.z -= RANGE; }
    asphaltTex.offset.y += dz / 6; groundTex.offset.y += dz / 10;
    // slow drifting bends and hills
    G.curveT += dt * 0.09; G.hillT += dt * 0.07;
    bend.curve.value = Math.sin(G.curveT) * Math.sin(G.curveT * 0.37 + 1) * 0.0011;
    bend.hill.value = (Math.sin(G.hillT) * 0.5 + Math.sin(G.hillT * 0.53 + 2) * 0.5) * 0.00022;

    // ---- player visuals
    player.position.x = G.x;
    player.rotation.y = G.yaw;
    player.rotation.z = -G.steer * 0.04 * clamp(G.speed / 20, 0, 1);
    player.rotation.x = (input.gas ? -0.015 : input.brake ? 0.03 : 0) * clamp(G.speed / 15, 0, 1);
    for (const w of player.userData.wheels) {
      w.userData.spin.rotation.x -= (dz / spec.wheelR);
      if (w.userData.front) w.rotation.y = -G.steer * 0.35;
    }
    player.userData.glow.material.opacity = G.boosting ? 0.75 : 0;

    // ---- traffic
    pBox.hw = spec.w / 2; pBox.hl = spec.len / 2;
    for (const t of traffic) {
      if (!t.active) continue;
      t.z += (G.speed - t.speed) * dt;
      if (t.z > 70) spawnTraffic(t, false);
      else if (t.z < -RANGE - 50) spawnTraffic(t, true);
      t.mesh.position.z = t.z;
      for (const w of t.mesh.userData.wheels) w.userData.spin.rotation.x -= (t.speed * dt) / t.spec.wheelR;
      // collision (soft bump — no damage)
      const dx = t.mesh.position.x - G.x, dzc = t.z;      // player at z = 0
      const ox = (pBox.hw + t.spec.w / 2) - Math.abs(dx);
      const oz = (pBox.hl + t.spec.len / 2) - Math.abs(dzc);
      if (ox > 0 && oz > 0) {
        if (ox < oz) {  // side bump
          G.x -= Math.sign(dx) * ox; t.mesh.position.x += Math.sign(dx) * ox * 0.3;
          G.speed *= 0.97; G.shake = Math.max(G.shake, 0.4);
        } else if (dzc < 0) {  // we hit their back
          G.speed = Math.min(G.speed, t.speed * 0.7); t.z -= oz; t.speed += 2;
          G.shake = Math.max(G.shake, 0.7); Sound.bump(1);
        } else {  // they hit our back
          G.speed += 3; t.speed = Math.min(t.speed, G.speed * 0.8); t.z += oz;
          G.shake = Math.max(G.shake, 0.4); Sound.bump(0.5);
        }
      }
    }

    // ---- HUD
    speedEl.textContent = Math.round(G.speed * 3.6);
    distEl.textContent = (G.dist / 1000).toFixed(1) + ' km';

    // ---- camera (chase)
    const sp = clamp(G.speed / maxSpeed, 0, 1);
    camPos.set(G.x * 0.85 + G.steer * 0.3, 2.9 + sp * 0.4 + (spec.lift || 0) * 0.5, 7.2 + sp * 1.4 + spec.len * 0.2);
    camLook.set(G.x * 0.95 + G.steer * 0.8, 1.1 + (spec.lift || 0) * 0.5, -12);
    camera.position.lerp(camPos, Math.min(1, 7 * dt));
    camera.fov = lerp(camera.fov, 62 + sp * 14 + (G.boosting ? 8 : 0), Math.min(1, 4 * dt));
    camera.updateProjectionMatrix();
    G.shake = Math.max(0, G.shake - dt * 1.8);
    const sh = G.shake * 0.12 + sp * sp * 0.012 + (G.boosting ? 0.02 : 0);
    camera.position.x += (Math.random() - 0.5) * sh; camera.position.y += (Math.random() - 0.5) * sh;
    camera.lookAt(camLook);

    Sound.update(G.speed, maxSpeed, input.gas, G.boosting);
  } else {
    // ---- menu: car on a slow turntable
    G.menuAngle += dt * 0.35;
    player.rotation.y = G.menuAngle;
    const r = 5.5 + playerSpec.len * 0.55;
    camera.position.set(Math.sin(0.9) * r, 2.2 + (playerSpec.lift || 0) + playerSpec.len * 0.12, Math.cos(0.9) * r);
    camera.lookAt(0, 0.8 + (playerSpec.lift || 0) * 0.6, 0);
    camera.fov = lerp(camera.fov, 45, Math.min(1, 4 * dt)); camera.updateProjectionMatrix();
    bend.curve.value = lerp(bend.curve.value, 0.0004, dt); bend.hill.value = lerp(bend.hill.value, 0.0001, dt);
    for (const w of player.userData.wheels) if (w.userData.front) w.rotation.y = lerp(w.rotation.y, 0, dt * 3);
    player.userData.glow.material.opacity = 0;
    if (Sound.engine) Sound.update(0, maxSpeed, false, false);
  }

  // sun follows the car so shadows always land near it
  sun.target.position.set(player.position.x, 0, -10);
  const sp0 = sun.position.clone().normalize().multiplyScalar(70);
  sun.position.copy(sp0).add(new THREE.Vector3(player.position.x, 0, -10));
}

function frame() {
  const dt = Math.min(0.05, clock.getDelta());
  update(dt);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot
setPlayerCar(settings.car, settings.color);
applyWorld();
refreshMenu();
toMenu();
camera.position.set(6, 3, 7);
frame();
document.addEventListener('visibilitychange', () => { if (document.hidden) { input.gas = input.brake = input.boost = false; } else Sound.resume(); });
window.__kidcars = { G, settings, state: () => state };
