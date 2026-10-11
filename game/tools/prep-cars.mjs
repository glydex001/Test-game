// Standardises the raw car models for the game:
//  - bakes every node transform into the vertices and flattens the hierarchy
//  - rotates/scales so the car is real-world metres, centred, ground at y=0, front facing -Z
//  - finds the four wheels (by node / material name), splits them by corner and parents each
//    under a node named wheel_FL / wheel_FR / wheel_RL / wheel_RR placed at the axle centre
//  - shrinks textures, simplifies the mesh, compresses with meshopt
// Output: ../models/out/<id>.glb (player quality) and <id>_lo.glb (traffic quality)
import { NodeIO, Node, Primitive, Accessor, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { flatten, transformMesh, dedup, prune, weld, simplify, textureCompress, meshopt, draco, unpartition, dequantize, cloneDocument, normals, joinPrimitives } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';
import { MeshoptDecoder } from 'meshoptimizer';
await MeshoptDecoder.ready;
import sharp from 'sharp';
import { mat4, vec3 } from 'gl-matrix';
import fs from 'fs';

await MeshoptEncoder.ready; await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  'draco3d.decoder': await draco3d.createDecoderModule(), 'draco3d.encoder': await draco3d.createEncoderModule(), 'meshopt.decoder': MeshoptDecoder,
  'meshopt.encoder': MeshoptEncoder,
});

// yaw: extra rotation (degrees) applied after auto-aligning the long axis to Z. 0 or 180 — checked visually.
export const CARS = [
  { id: 'ferrari458', src: 'ferrari458.glb', length: 4.53, yaw: 0, wheel: /^(wheel|rim|tire)/i, body: /^Body_Color$/i, drop: /steering/i },
  { id: 'aventador', src: 'aventador.glb', length: 4.78, yaw: 180, wheel: /tyre|rim_t0a|wheelhub|discrotor/i, body: /^Mt_Body$/i, drop: /steering|caliper|rim_t0b/i },
  { id: 'urus', src: 'lamborghini_urus.glb', length: 5.11, yaw: 180, wheel: /tiresgum|whl_|wheel003|universal_wheel|rimschrome|breakdiscs/i, body: /WhiteCar/i, drop: /steering|caliper/i },
  { id: 'porsche911', src: 'porsche911.glb', length: 4.29, yaw: 180, wheelMat: /930_rim|930_tire/i, body: /^paint$/i, drop: /steering/i },
  { id: 'valhalla', src: 'valhalla.glb', length: 4.7, yaw: 180, wheel: /^wheel (front|rear)/i, wheelMat: /^Wheel1A$/i, body: /^Paint$|^Coloured$/i, drop: /steering|control/i },
  { id: 'peugeot3008', src: 'peugeot_3008.glb', length: 4.45, yaw: 180, wheel: /^wheel\./i, body: /Material\.016$/i, drop: /steering/i },
  { id: 'tesla3', src: 'tesla.glb', length: 4.69, yaw: 0, wheel: /^(wheels|hub_[lr][bf])/i, wheelMat: /^hub_|^wheels\./i, body: /^primary(\.001)?$/i, drop: /steer/i },
  // ---- the fast set (Sketchfab CC-BY, see README credits)
  { id: 'bolide', loRatio: 0.045, src: 'bolide.glb', length: 4.76, yaw: 180, wheel: /wheel/i, wheelMat: /Wheel1A_3D/i, body: /Paint_Material|Coloured_Material/i, drop: /steering/i, hiRatio: 0.45 },
  { id: 'ferrari599', loRatio: 0.02, src: 'ferrari599.glb', length: 4.71, yaw: 180, wheel: /^FERRARI- Wheel|^tire[FR][LR]/i, body: /^Body\.002$/i, drop: /steering|SteeringWheel/i, hiRatio: 0.25 },
  { id: 'gt40', loRatio: 0.08, src: 'gt40.glb', length: 4.18, yaw: 180, wheelAuto: true, body: /Meshpart1Mtl|Ln1Mtl/i, drop: /steering/i, hiRatio: 0.6 },
  { id: 'roadster', loRatio: 0.025, src: 'roadster.glb', length: 4.60, yaw: 180, wheel: /Wheel\.(Ft|Bk)\.[LR]/i, body: /^car_main_paint$/i, drop: /steering/i, hiRatio: 0.3 },
  { id: 'challenger', loRatio: 0.08, src: 'challenger.glb', length: 5.03, yaw: 180, wheel: /Wheel1A_3D|3DWheel/i, wheelMat: /Wheel1A_3D/i, body: /Paint_Material1$|Coloured_Material1$/i, drop: /steering/i, hiRatio: 0.7 },
  { id: 'gtr', loRatio: 0.027, src: 'gtr.glb', length: 4.71, yaw: 180, wheelAuto: true, body: /^CarPaint$/i, drop: /steering/i, hiRatio: 0.3 },
  { id: 'lancia037', loRatio: 0.18, src: 'lancia037.glb', length: 3.92, yaw: 180, wheelAuto: true, body: /Meshpart1Mtl/i, drop: /steering|Iphone/i, hiRatio: 1 },
];

const V = (x, y, z) => vec3.fromValues(x, y, z);

function ancestorsMatch(node, re) {
  let n = node;
  while (n) { if (re.test(n.getName() || '')) return true; const p = n.getParentNode ? n.getParentNode() : null; n = p; }
  return false;
}

function bakeTransforms(doc) {
  // make every node's transform identity by transforming a private deep copy of its mesh
  const root = doc.getRoot();
  const scene = root.getDefaultScene() || root.listScenes()[0];
  const worlds = new Map();
  for (const node of root.listNodes()) worlds.set(node, mat4.clone(node.getWorldMatrix()));
  for (const node of root.listNodes()) {
    const mesh = node.getMesh(); if (!mesh) continue;
    const m = doc.createMesh(mesh.getName());
    for (const prim of mesh.listPrimitives()) {
      const np = doc.createPrimitive().setMaterial(prim.getMaterial()).setMode(prim.getMode());
      for (const sem of prim.listSemantics()) {
        const acc = prim.getAttribute(sem);
        np.setAttribute(sem, acc.clone());
      }
      if (prim.getIndices()) np.setIndices(prim.getIndices().clone());
      m.addPrimitive(np);
    }
    node.setMesh(m);
    transformMesh(m, worlds.get(node));
    const parent = node.getParentNode();
    if (parent) parent.removeChild(node);
    node.setMatrix(mat4.create());
    scene.addChild(node);
  }
  for (const node of root.listNodes()) if (node.getMesh()) for (const c of node.listChildren()) { node.removeChild(c); }
  // drop everything that is not a mesh node now
  for (const node of root.listNodes()) if (!node.getMesh()) node.dispose();
  for (const mesh of root.listMeshes()) if (!mesh.listParents().some((p) => p instanceof Node)) mesh.dispose();
}

function sceneBounds(doc) {
  const scene = doc.getRoot().getDefaultScene() || doc.getRoot().listScenes()[0];
  return getBounds(scene);
}

function applyMatrixToAll(doc, M) {
  for (const node of doc.getRoot().listNodes()) { const mesh = node.getMesh(); if (mesh) transformMesh(mesh, M); }
}

function primBounds(prim) {
  const a = prim.getAttribute('POSITION').getArray();
  const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < a.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], a[i + k]); mx[k] = Math.max(mx[k], a[i + k]); }
  return { mn, mx };
}

// split one primitive into up to 4 corner primitives; returns map corner -> primitive
function splitPrimByCorner(doc, prim, cx, cz) {
  const pos = prim.getAttribute('POSITION').getArray();
  const idxAcc = prim.getIndices();
  const idx = idxAcc ? idxAcc.getArray() : Uint32Array.from({ length: pos.length / 3 }, (_, i) => i);
  const groups = { FL: [], FR: [], RL: [], RR: [] };
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t], b = idx[t + 1], c = idx[t + 2];
    const x = (pos[a * 3] + pos[b * 3] + pos[c * 3]) / 3, z = (pos[a * 3 + 2] + pos[b * 3 + 2] + pos[c * 3 + 2]) / 3;
    const key = (z < cz ? 'F' : 'R') + (x < cx ? 'L' : 'R');
    groups[key].push(a, b, c);
  }
  const out = {};
  const attrs = prim.listSemantics();
  for (const key in groups) {
    const tri = groups[key]; if (!tri.length) continue;
    const map = new Map(); const newIdx = new Uint32Array(tri.length);
    for (let i = 0; i < tri.length; i++) { const v = tri[i]; if (!map.has(v)) map.set(v, map.size); newIdx[i] = map.get(v); }
    const np = doc.createPrimitive().setMaterial(prim.getMaterial()).setMode(prim.getMode());
    for (const sem of attrs) {
      const src = prim.getAttribute(sem); const es = src.getElementSize(); const sa = src.getArray();
      const arr = new (sa.constructor)(map.size * es);
      for (const [v, i] of map) for (let k = 0; k < es; k++) arr[i * es + k] = sa[v * es + k];
      np.setAttribute(sem, doc.createAccessor().setType(src.getType()).setArray(arr).setNormalized(src.getNormalized()).setBuffer(src.getBuffer()));
    }
    np.setIndices(doc.createAccessor().setType(Accessor.Type.SCALAR).setArray(newIdx).setBuffer(doc.getRoot().listBuffers()[0]));
    out[key] = np;
  }
  return out;
}


// Lossy weld: merge vertices that share (almost) the same position, ignoring normal/uv seams.
// Used for the low-detail traffic versions so the simplifier can collapse far more.
function weldByPosition(doc, tol = 0.002) {
  for (const mesh of doc.getRoot().listMeshes()) for (const prim of mesh.listPrimitives()) {
    const pos = prim.getAttribute('POSITION'); if (!pos) continue;
    const pa = pos.getArray(); const n = pos.getCount();
    const idxAcc = prim.getIndices(); const idx = idxAcc ? idxAcc.getArray() : Uint32Array.from({ length: n }, (_, i) => i);
    const key2new = new Map(); const old2new = new Uint32Array(n); let count = 0;
    for (let i = 0; i < n; i++) {
      const k = `${Math.round(pa[i * 3] / tol)},${Math.round(pa[i * 3 + 1] / tol)},${Math.round(pa[i * 3 + 2] / tol)}`;
      let j = key2new.get(k); if (j === undefined) { j = count++; key2new.set(k, j); }
      old2new[i] = j;
    }
    if (count === n) continue;
    for (const sem of prim.listSemantics()) {
      const acc = prim.getAttribute(sem); const es = acc.getElementSize(); const sa = acc.getArray();
      const arr = new (sa.constructor)(count * es); const filled = new Uint8Array(count);
      for (let i = 0; i < n; i++) { const j = old2new[i]; if (filled[j]) continue; filled[j] = 1; for (let k = 0; k < es; k++) arr[j * es + k] = sa[i * es + k]; }
      prim.setAttribute(sem, doc.createAccessor().setType(acc.getType()).setArray(arr).setNormalized(acc.getNormalized()).setBuffer(acc.getBuffer()));
    }
    const ni = new Uint32Array(idx.length); let w = 0;
    for (let t = 0; t < idx.length; t += 3) {
      const a = old2new[idx[t]], b = old2new[idx[t + 1]], c = old2new[idx[t + 2]];
      if (a === b || b === c || a === c) continue;
      ni[w++] = a; ni[w++] = b; ni[w++] = c;
    }
    const idxOut = ni.slice(0, w);
    prim.setIndices(doc.createAccessor().setType(Accessor.Type.SCALAR).setArray(idxOut).setBuffer(doc.getRoot().listBuffers()[0]));
    // smooth normals (area weighted)
    const np = prim.getAttribute('POSITION').getArray(); const nn = new Float32Array(count * 3);
    for (let t = 0; t < idxOut.length; t += 3) {
      const a = idxOut[t] * 3, b = idxOut[t + 1] * 3, c = idxOut[t + 2] * 3;
      const ux = np[b] - np[a], uy = np[b + 1] - np[a + 1], uz = np[b + 2] - np[a + 2];
      const vx = np[c] - np[a], vy = np[c + 1] - np[a + 1], vz = np[c + 2] - np[a + 2];
      const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      for (const i of [a, b, c]) { nn[i] += nx; nn[i + 1] += ny; nn[i + 2] += nz; }
    }
    for (let i = 0; i < nn.length; i += 3) { const l = Math.hypot(nn[i], nn[i + 1], nn[i + 2]) || 1; nn[i] /= l; nn[i + 1] /= l; nn[i + 2] /= l; }
    prim.setAttribute('NORMAL', doc.createAccessor().setType(Accessor.Type.VEC3).setArray(nn).setBuffer(doc.getRoot().listBuffers()[0]));
    if (prim.getAttribute('TANGENT')) prim.setAttribute('TANGENT', null);
  }
}

async function prep(cfg) {
  const doc = await io.read(`../models/raw/${cfg.src}`);
  const root = doc.getRoot();
  await doc.transform(dequantize(), unpartition());
  // remember each mesh node's ancestor names (groups like "Wheel.Ft.R") before the hierarchy is flattened
  const anc = new Map();
  for (const node of root.listNodes()) { const names = []; let n = node; while (n) { names.push(n.getName() || ''); n = n.getParentNode ? n.getParentNode() : null; } anc.set(node, names); }
  bakeTransforms(doc);

  // drop unwanted nodes (steering wheel etc.)
  for (const node of root.listNodes()) if (cfg.drop && (anc.get(node) || [node.getName() || '']).some((nm) => cfg.drop.test(nm))) { node.setMesh(null); node.dispose(); }

  // ---- orient: long axis -> Z
  let b = sceneBounds(doc);
  let size = b.max.map((v, i) => v - b.min[i]);
  const R = mat4.create();
  if (size[0] > size[2]) mat4.rotateY(R, R, Math.PI / 2);        // X was the long axis
  if (size[1] > Math.max(size[0], size[2])) mat4.rotateX(R, R, -Math.PI / 2); // Y long axis (rare)
  if (cfg.yaw) mat4.rotateY(R, R, (cfg.yaw * Math.PI) / 180);
  applyMatrixToAll(doc, R);

  // ---- scale to real length, centre x/z, ground y=0
  b = sceneBounds(doc); size = b.max.map((v, i) => v - b.min[i]);
  const s = cfg.length / size[2];
  const T = mat4.create();
  mat4.scale(T, T, V(s, s, s));
  mat4.translate(T, T, V(-(b.min[0] + b.max[0]) / 2, -b.min[1], -(b.min[2] + b.max[2]) / 2));
  applyMatrixToAll(doc, T);
  b = sceneBounds(doc); size = b.max.map((v, i) => v - b.min[i]);
  const cx = 0, cz = 0;

  // ---- wheels
  const scene = root.getDefaultScene() || root.listScenes()[0];
  const corners = { FL: [], FR: [], RL: [], RR: [] };
  for (const node of root.listNodes()) {
    const mesh = node.getMesh(); if (!mesh) continue;
    const byName = cfg.wheel && (anc.get(node) || [node.getName() || '']).some((nm) => cfg.wheel.test(nm));
    const prims = mesh.listPrimitives();
    const keep = [];
    for (const prim of prims) {
      const mat = prim.getMaterial(); const mname = mat ? mat.getName() : '';
      const byMat = cfg.wheelMat && cfg.wheelMat.test(mname);
      let byGeo = false;
      if (cfg.wheelAuto) {   // wheel-shaped: roughly round in y/z, thin in x, on the ground, out at the sides
        const pb = primBounds(prim); const sy = pb.mx[1] - pb.mn[1], sz = pb.mx[2] - pb.mn[2], sx = pb.mx[0] - pb.mn[0]; const cxp = (pb.mn[0] + pb.mx[0]) / 2;
        const single = Math.abs(sz - sy) < sy * 0.25 && sx < 0.5 && Math.abs(cxp) > size[0] * 0.3;          // one wheel
        const pair = sx > size[0] * 0.6 && Math.abs(sz - sy) < sy * 0.25;                                    // an axle pair
        const four = sx > size[0] * 0.6 && sz > size[2] * 0.45 && sz < size[2] * 0.95;                        // all four wheels in one mesh
        const sidePair = sx < 0.5 && Math.abs(cxp) > size[0] * 0.3 && sz > size[2] * 0.45 && sz < size[2] * 0.95;   // front + rear on one side
        byGeo = sy > 0.4 && sy < 0.9 && pb.mn[1] < 0.2 && (single || pair || four || sidePair);
        if (byGeo && (pair || four)) {   // wheels sit at the sides: nothing of them near the centre line (seats and brake pairs do)
          const pa = prim.getAttribute('POSITION').getArray(); let minAbs = Infinity; for (let i = 0; i < pa.length; i += 3) minAbs = Math.min(minAbs, Math.abs(pa[i]));
          if (minAbs < size[0] * 0.28) byGeo = false;
        }
        if (byGeo && /seat|door|cover|step|mirror|belt/i.test(node.getName() + ' ' + mname)) byGeo = false;
        if (process.env.DEBUG && byGeo) console.log('  auto-wheel', node.getName(), mname);
        if (process.env.DEBUG === '2' && pb.mn[1] < 0.2 && sy > 0.3) console.log('  cand', node.getName(), mname, 'sx', sx.toFixed(2), 'sy', sy.toFixed(2), 'sz', sz.toFixed(2), 'cx', cxp.toFixed(2), byGeo);
      }
      if (!(byName || byMat || byGeo)) { keep.push(prim); continue; }
      const pb = primBounds(prim);
      // only accept wheel-sized things near the ground
      if (pb.mn[1] > size[1] * 0.45 || (pb.mx[1] - pb.mn[1]) > size[1] * 0.75) { keep.push(prim); continue; }
      if (process.env.DEBUG) console.log('  wheelprim', node.getName(), mname, 'x', pb.mn[0].toFixed(2), pb.mx[0].toFixed(2), 'y', pb.mn[1].toFixed(2), pb.mx[1].toFixed(2), 'z', pb.mn[2].toFixed(2), pb.mx[2].toFixed(2));
      const parts = splitPrimByCorner(doc, prim, cx, cz);
      for (const k in parts) corners[k].push(parts[k]);
      prim.dispose();
    }
  }
  // remove now-empty meshes
  for (const mesh of root.listMeshes()) if (!mesh.listPrimitives().length) mesh.dispose();
  const wheelInfo = {};
  const bodyMesh = doc.createMesh('wheel_leftovers');
  for (const k in corners) {
    let prims = corners[k]; if (!prims.length) continue;
    // the tyre = the tallest part in this corner; its box gives the true axle centre and radius
    let tyre = null, tyreH = 0;
    for (const p of prims) { const pb = primBounds(p); const hgt = pb.mx[1] - pb.mn[1]; if (hgt > tyreH) { tyreH = hgt; tyre = pb; } }
    const c = [(tyre.mn[0] + tyre.mx[0]) / 2, (tyre.mn[1] + tyre.mx[1]) / 2, (tyre.mn[2] + tyre.mx[2]) / 2];
    const radius = tyreH / 2;
    // parts that are not around that axle (inner shafts, hub caps of another wheel, ...) go back to the body
    const keep = [];
    for (const p of prims) {
      const pb = primBounds(p);
      const pc = [(pb.mn[0] + pb.mx[0]) / 2, (pb.mn[1] + pb.mx[1]) / 2, (pb.mn[2] + pb.mx[2]) / 2];
      const offAxle = Math.hypot(pc[1] - c[1], pc[2] - c[2]);
      const inboard = Math.abs(pc[0]) < Math.abs(c[0]) - radius * 0.9;
      if (offAxle > radius * 0.6 || inboard) bodyMesh.addPrimitive(p); else keep.push(p);
    }
    prims = keep;
    const mesh = doc.createMesh(`wheelmesh_${k}`);
    let mnx = Infinity, mxx = -Infinity;
    for (const p of prims) {
      const pb = primBounds(p); mnx = Math.min(mnx, pb.mn[0]); mxx = Math.max(mxx, pb.mx[0]);
      const pos = p.getAttribute('POSITION'); const a = pos.getArray().slice();
      for (let i = 0; i < a.length; i += 3) { a[i] -= c[0]; a[i + 1] -= c[1]; a[i + 2] -= c[2]; }
      pos.setArray(a); mesh.addPrimitive(p);
    }
    const node = doc.createNode(`wheel_${k}`).setMesh(mesh).setTranslation(c);
    scene.addChild(node);
    wheelInfo[k] = { center: c.map((v) => +v.toFixed(3)), radius: +radius.toFixed(3), width: +(mxx - mnx).toFixed(3) };
  }
  if (bodyMesh.listPrimitives().length) scene.addChild(doc.createNode('wheel_leftovers').setMesh(bodyMesh)); else bodyMesh.dispose();

  // ---- join the body into one primitive per material (hundreds of draw calls -> a handful)
  {
    const byMat = new Map(); const bodyNodes = [];
    for (const node of root.listNodes()) { const mesh = node.getMesh(); if (!mesh || /^wheel_(FL|FR|RL|RR)$/.test(node.getName())) continue; bodyNodes.push(node); for (const p of mesh.listPrimitives()) { const k = (p.getMaterial() ? p.getMaterial().getName() : '') + '|' + p.getMode() + '|' + p.listSemantics().sort().join(',') + '|' + (p.getIndices() ? 'i' : 'n'); if (!byMat.has(k)) byMat.set(k, []); byMat.get(k).push(p); } }
    const joined = doc.createMesh('body');
    for (const [, prims] of byMat) {
      if (prims.length === 1) { joined.addPrimitive(prims[0]); continue; }
      try { joined.addPrimitive(joinPrimitives(prims)); } catch (e) { for (const p of prims) joined.addPrimitive(p); }
    }
    for (const node of bodyNodes) { node.setMesh(null); node.dispose(); }
    for (const mesh of root.listMeshes()) if (mesh !== joined && !mesh.listParents().some((p) => p instanceof Node)) mesh.dispose();
    scene.addChild(doc.createNode('body').setMesh(joined));
  }

  // ---- materials: name the body material so the game can recolour it
  let bodyFound = 0;
  for (const m of root.listMaterials()) if (cfg.body.test(m.getName() || '')) { m.setName('BODY_PAINT' + (bodyFound ? '_' + bodyFound : '')); bodyFound++; }

  // ---- optimise
  await doc.transform(
    dedup(), prune(),
    textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 82, resize: [1024, 1024] }),
    weld(),
  );
  const hi = cloneDocument(doc);
  if (cfg.hiRatio && cfg.hiRatio < 1) await hi.transform(simplify({ simplifier: MeshoptSimplifier, ratio: cfg.hiRatio, error: 0.004, lockBorder: true }));
  await hi.transform(prune(), draco({ method: 'edgebreaker', quantizePosition: 14, quantizeNormal: 10, quantizeTexcoord: 12 }));
  await io.write(`../models/out/${cfg.id}.glb`, hi);
  const lo = cloneDocument(doc);
  await lo.transform(
    textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 70, resize: [512, 512] }),
  );
  weldByPosition(lo, 0.003);
  await lo.transform(simplify({ simplifier: MeshoptSimplifier, ratio: cfg.loRatio || 0.12, error: cfg.loRatio ? 0.06 : 0.03, lockBorder: false }), prune(), draco({ method: 'edgebreaker', quantizePosition: 12, quantizeNormal: 8, quantizeTexcoord: 10 }));
  await io.write(`../models/out/${cfg.id}_lo.glb`, lo);

  const szHi = fs.statSync(`../models/out/${cfg.id}.glb`).size, szLo = fs.statSync(`../models/out/${cfg.id}_lo.glb`).size;
  let trisLo = 0; for (const mesh of lo.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) trisLo += (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3;
  let tris = 0; for (const mesh of hi.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) tris += (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3;
  console.log(`${cfg.id}: size=${size.map((v) => v.toFixed(2))} hi=${(szHi / 1e6).toFixed(2)}MB (${Math.round(tris / 1000)}k tris) lo=${(szLo / 1e6).toFixed(2)}MB (${Math.round(trisLo / 1000)}k tris) body=${bodyFound} wheels=${JSON.stringify(wheelInfo)}`);
  return { id: cfg.id, size: size.map((v) => +v.toFixed(2)), wheels: wheelInfo };
}

fs.mkdirSync('../models/out', { recursive: true });
const only = process.argv[2];
const results = [];
for (const cfg of CARS) if (!only || only.split(',').includes(cfg.id)) results.push(await prep(cfg));
fs.writeFileSync('../models/out/cars.json', JSON.stringify(results, null, 1));
