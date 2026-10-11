// Real car models: loading, instancing, recolouring, wheels, lights.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

export const CARS = [
  { id: 'ferrari458', name: 'Ferrari 458', w: 2.26, len: 4.53, maxKmh: 300, accel: 13, handling: 10 },
  { id: 'aventador', name: 'Lamborghini Aventador', w: 2.27, len: 4.78, maxKmh: 320, accel: 14, handling: 9.5 },
  { id: 'valhalla', name: 'Aston Martin Valhalla', w: 2.2, len: 4.7, maxKmh: 330, accel: 15, handling: 10.5 },
  { id: 'porsche911', name: 'Porsche 911 Turbo', w: 2.14, len: 4.29, maxKmh: 250, accel: 11, handling: 10 },
  { id: 'tesla3', name: 'Tesla Model 3', w: 2.18, len: 4.69, maxKmh: 240, accel: 12, handling: 9 },
  { id: 'urus', name: 'Lamborghini Urus', w: 2.26, len: 5.11, maxKmh: 280, accel: 11, handling: 8.5 },
  { id: 'peugeot3008', name: 'Peugeot 3008', w: 2.1, len: 4.45, maxKmh: 190, accel: 8, handling: 8 },
  // the fast set
  { id: 'bolide', name: 'Bugatti Bolide', w: 2.12, len: 4.76, maxKmh: 500, accel: 17, handling: 10.5 },
  { id: 'roadster', name: 'Tesla Roadster', w: 1.88, len: 4.6, maxKmh: 400, accel: 18, handling: 9.5 },
  { id: 'ferrari599', name: 'Ferrari 599 GTO', w: 2.14, len: 4.71, maxKmh: 335, accel: 14, handling: 9.5 },
  { id: 'gt40', name: 'Ford GT40', w: 1.81, len: 4.18, maxKmh: 330, accel: 13, handling: 9 },
  { id: 'gtr', name: 'Nissan GT-R', w: 2.05, len: 4.71, maxKmh: 315, accel: 14, handling: 10 },
  { id: 'challenger', name: 'Dodge Challenger', w: 2.08, len: 5.03, maxKmh: 280, accel: 11, handling: 7.5 },
  { id: 'lancia037', name: 'Lancia 037 Rally', w: 1.88, len: 3.92, maxKmh: 220, accel: 9, handling: 9.5 },
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
      // glass exported with "transmission" makes three.js render the whole scene to a texture every frame — far too
      // costly on a phone. Plain transparency looks nearly the same from the driver's seat.
      if (m.transmission > 0) { m.transmission = 0; m.transparent = true; m.opacity = Math.min(m.opacity, 0.45); m.depthWrite = false; m.needsUpdate = true; }
      const n = (m.name || '').toLowerCase();
      if (/tail|brake|rear.?light|back.?light|lights_?glass_?back|stop|red_glass/.test(n) && !/front/.test(n)) tailMats.push(m);
      else if (/head|front.?light|light.*front|lights?front|led|lamp|phare|lights_red|lichter|projector|lightemissive|lighta_material|headlights/.test(n) || /^light/.test(n)) headMats.push(m);
      if (m.envMapIntensity === undefined) m.envMapIntensity = 1;
    }
  });
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

let blobTex = null;
function getBlobTex() {
  if (blobTex) return blobTex;
  const c = document.createElement('canvas'); c.width = c.height = 128; const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 10, 64, 64, 64); g.addColorStop(0, 'rgba(0,0,0,0.55)'); g.addColorStop(0.6, 'rgba(0,0,0,0.3)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  blobTex = new THREE.CanvasTexture(c); return blobTex;
}
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
  // soft contact shadow under the car (grounds it even where the shadow map can't reach)
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(spec.w + 0.9, spec.len + 0.9), new THREE.MeshBasicMaterial({ map: getBlobTex(), transparent: true, depthWrite: false, opacity: 0.9 }));
  blob.rotation.x = -Math.PI / 2; blob.position.y = 0.06; blob.renderOrder = 1; blob.userData.own = true; root.add(blob);
  // boost glow
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), new THREE.MeshBasicMaterial({ color: 0x5599ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.position.set(0, 0.38, spec.len / 2 + 0.35); glow.scale.set(1.6, 0.45, 2.2); glow.userData.own = true; root.add(glow);
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

export function disposeInstance(root) {
  if (!root) return;
  for (const m of root.userData.paint || []) m.dispose();
  root.traverse((o) => { if (o.isMesh && o.userData.own) { o.geometry.dispose(); if (o.material && o.material.dispose) o.material.dispose(); } });
}
