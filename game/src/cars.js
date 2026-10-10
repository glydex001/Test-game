// Real car models: loading, instancing, recolouring, wheels, lights.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { bendObject } from './bend.js';

export const CARS = [
  { id: 'ferrari458', name: 'Ferrari 458', w: 2.26, len: 4.53, maxKmh: 300, accel: 13, handling: 10 },
  { id: 'aventador', name: 'Lamborghini Aventador', w: 2.27, len: 4.78, maxKmh: 320, accel: 14, handling: 9.5 },
  { id: 'valhalla', name: 'Aston Martin Valhalla', w: 2.2, len: 4.7, maxKmh: 330, accel: 15, handling: 10.5 },
  { id: 'porsche911', name: 'Porsche 911 Turbo', w: 2.14, len: 4.29, maxKmh: 250, accel: 11, handling: 10 },
  { id: 'tesla3', name: 'Tesla Model 3', w: 2.18, len: 4.69, maxKmh: 240, accel: 12, handling: 9 },
  { id: 'urus', name: 'Lamborghini Urus', w: 2.26, len: 5.11, maxKmh: 280, accel: 11, handling: 8.5 },
  { id: 'peugeot3008', name: 'Peugeot 3008', w: 2.1, len: 4.45, maxKmh: 190, accel: 8, handling: 8 },
];

const draco = new DRACOLoader();
draco.setDecoderPath('draco/');
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

const protos = {};          // key -> { scene, headMats, tailMats }
const pending = {};

function prepareProto(gltf, isPlayer) {
  const root = gltf.scene;
  const headMats = [], tailMats = [];
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true; o.receiveShadow = false;
    o.frustumCulled = false;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of mats) {
      if (!m) continue;
      if (m.transparent && m.opacity < 0.99) { m.depthWrite = false; }
      const n = (m.name || '').toLowerCase();
      if (/tail|brake|rear.?light|back.?light|lights_?glass_?back|stop/.test(n) && !/front/.test(n)) tailMats.push(m);
      else if (/head|front.?light|light.*front|lights?front|led|lamp|phare|lights_red|lichter|projector/.test(n) || /^light/.test(n)) headMats.push(m);
      if (m.envMapIntensity === undefined) m.envMapIntensity = 1;
    }
  });
  bendObject(root);
  return { scene: root, headMats, tailMats };
}

export function loadCar(id, lo, onProgress) {
  const key = id + (lo ? '_lo' : '');
  if (protos[key]) return Promise.resolve(protos[key]);
  if (pending[key]) return pending[key];
  pending[key] = new Promise((resolve, reject) => {
    loader.load(`models/${key}.glb`, (gltf) => {
      protos[key] = prepareProto(gltf, !lo);
      delete pending[key];
      resolve(protos[key]);
    }, onProgress, (e) => { delete pending[key]; reject(e); });
  });
  return pending[key];
}
export const hasCar = (id, lo) => !!protos[id + (lo ? '_lo' : '')];

// Build a drivable instance: clones the prototype, gives it its own paint material, sets up wheel pivots.
export function instantiate(id, lo, colorHex) {
  const proto = protos[id + (lo ? '_lo' : '')] || protos[id + '_lo'];
  const spec = CARS.find((c) => c.id === id);
  const root = proto.scene.clone(true);
  const paintMats = new Map();
  root.traverse((o) => {
    if (!o.isMesh) return;
    const apply = (m) => {
      if (m && /^BODY_PAINT/.test(m.name)) {
        if (!paintMats.has(m)) { const c = m.clone(); c.color.setHex(colorHex); c.metalness = Math.max(c.metalness, 0.5); c.roughness = Math.min(c.roughness, 0.35); c.envMapIntensity = 1.2; paintMats.set(m, c); }
        return paintMats.get(m);
      }
      return m;
    };
    o.material = Array.isArray(o.material) ? o.material.map(apply) : apply(o.material);
  });
  // wheels: node named wheel_XX sits at the axle centre; wrap in a steering pivot
  const wheels = [];
  const list = [];
  root.traverse((o) => { if (/^wheel_(FL|FR|RL|RR)$/.test(o.name)) list.push(o); });
  for (const w of list) {
    const pivot = new THREE.Group();
    pivot.position.copy(w.position);
    w.position.set(0, 0, 0);
    root.add(pivot); pivot.add(w);
    const box = new THREE.Box3().setFromObject(w);
    pivot.userData.spin = w;
    pivot.userData.front = /F/.test(w.name);
    pivot.userData.radius = Math.max(0.25, (box.max.y - box.min.y) / 2);
    wheels.push(pivot);
  }
  // boost glow
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), new THREE.MeshBasicMaterial({ color: 0x66aaff, transparent: true, opacity: 0, depthWrite: false }));
  glow.position.set(0, 0.35, spec.len / 2 + 0.2); glow.scale.set(2.2, 0.6, 2.5); root.add(glow);
  root.userData = { spec, wheels, glow, paint: [...paintMats.values()], proto };
  return root;
}

// Night lighting for all loaded prototypes (shared materials)
export function setNightLights(night) {
  for (const k in protos) {
    const p = protos[k];
    for (const m of p.headMats) { m.emissive = m.emissive || new THREE.Color(); m.emissive.setHex(0xfff2d0); m.emissiveIntensity = night ? 4 : 0.0; }
    for (const m of p.tailMats) { m.emissive = m.emissive || new THREE.Color(); m.emissive.setHex(0xff2a1a); m.emissiveIntensity = night ? 2.5 : 0.0; }
  }
}
export function setEnvIntensity(v) {
  for (const k in protos) protos[k].scene.traverse((o) => { if (o.isMesh) { const ms = Array.isArray(o.material) ? o.material : [o.material]; for (const m of ms) if (m) m.envMapIntensity = v; } });
}
