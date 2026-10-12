// Landmark buildings (masjid, mall entrance, double-storey house, Glyde-X showroom) as real 3D models.
// Each GLB is one mesh, 1 unit wide, ground at y=0, front facing +Z; tiles draw them as InstancedMesh.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const draco = new DRACOLoader(); draco.setDecoderPath('draco/');
const loader = new GLTFLoader(); loader.setDRACOLoader(draco);
// model sizes (x, y, z) after normalisation, from tools/prep-landmarks.mjs
export const LANDMARKS = {
  masjid: { w: 1, h: 0.827, d: 0.944 },
  mall: { w: 1, h: 0.31, d: 0.602 },
  house: { w: 1, h: 0.618, d: 0.739 },
  showroom: { w: 1, h: 0.457, d: 0.98 },
  school: { w: 1, h: 0.27, d: 0.518 },
  engen: { w: 1, h: 0.552, d: 1.017 },
  temple: { w: 1, h: 1.101, d: 1.112 },
  church: { w: 1, h: 1.408, d: 1.747 },
  bigmall: { w: 1, h: 0.236, d: 0.834 },
};
const protos = {}; let pending = null;
export const hasLandmark = (id) => !!protos[id];
export function landmark(id) { return protos[id]; }
export function loadLandmarks(onAll) {
  if (pending) return pending;
  const ids = Object.keys(LANDMARKS);
  pending = Promise.all(ids.map((id) => new Promise((res) => {
    loader.load(`models/lm_${id}.glb`, (g) => {
      let geo = null, mat = null;
      g.scene.traverse((o) => { if (o.isMesh && !geo) { geo = o.geometry; mat = o.material; } });
      if (!geo) return res();
      geo.computeBoundingSphere(); mat.roughness = 0.9; mat.metalness = 0;
      protos[id] = { geo, mat, ...LANDMARKS[id] }; res();
    }, undefined, () => res());
  }))).then(() => { onAll && onAll(); });
  return pending;
}
const _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(), _m = new THREE.Matrix4();
// one InstancedMesh per landmark type for a tile: list = [{ x, z, yaw, sx, sy, sz }]
export function landmarkInstances(id, list) {
  const P = protos[id]; if (!P || !list.length) return null;
  if (/test=1/.test(location.search)) console.log('LM ' + id + ' ' + JSON.stringify(list.map((l) => [l.x | 0, l.z | 0, +l.yaw.toFixed(2), +l.sx.toFixed(1), +l.sz.toFixed(1), +l.sy.toFixed(1)])));
  const im = new THREE.InstancedMesh(P.geo, P.mat, list.length);
  list.forEach((t, k) => { _p.set(t.x, 0, t.z); _e.set(0, t.yaw, 0); _q.setFromEuler(_e); _s.set(t.sx, t.sy, t.sz); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); });
  im.castShadow = true; im.receiveShadow = true; im.userData.shared = true; im.computeBoundingSphere();
  return im;
}
// fit a landmark into an oriented box (obbOf) so its front faces the nearest road point (rx, rz)
export function fitLandmark(id, ob, rx, rz, opts) {
  const P = LANDMARKS[id]; if (!protos[id]) return null;
  const dx = rx - ob.x, dz = rz - ob.z; let best = null;
  for (let k = 0; k < 4; k++) { const yaw = ob.h + k * Math.PI / 2; const dot = Math.sin(yaw) * dx + Math.cos(yaw) * dz; if (!best || dot > best.dot) best = { yaw, k, dot }; }
  const hw = best.k % 2 === 0 ? ob.hw : ob.hl, hl = best.k % 2 === 0 ? ob.hl : ob.hw;
  let sx = 2 * hw / P.w, sz = 2 * hl / P.d; const s = Math.min(sx, sz);
  if (s < (opts.min || 0)) return null;
  const st = opts.stretch || 1; sx = Math.min(sx, s * st); sz = Math.min(sz, s * st);
  const sy = Math.min(s, (opts.maxH || 1e9) / P.h);
  return { id, x: ob.x, z: ob.z, yaw: best.yaw, sx, sy, sz, h: P.h * sy };
}
