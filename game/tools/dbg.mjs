import { NodeIO, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { flatten, transformMesh, dequantize, unpartition } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
import { mat4 } from 'gl-matrix';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule() });
const doc = await io.read('../models/raw/ferrari458.glb');
const root = doc.getRoot(); const scene = root.listScenes()[0];
const B = (l) => { const b = getBounds(scene); console.log(l, b.min.map(v=>v.toFixed(2)), b.max.map(v=>v.toFixed(2))); };
B('raw'); await doc.transform(dequantize(), unpartition()); B('deq');
flatten(doc); B('flat');
let n=0; for (const node of root.listNodes()) { const m = node.getMesh(); if (!m) continue; n++; }
console.log('nodes with mesh', n, 'meshes', root.listMeshes().length);
const shared = root.listMeshes().filter(m => m.listParents().filter(p=>p.propertyType==='Node').length>1).length; console.log('shared meshes', shared);
const node = root.listNodes().find(nd => nd.getMesh()); console.log('first node world matrix', Array.from(node.getWorldMatrix()).map(v=>+v.toFixed(2)));
import { Node } from '@gltf-transform/core';
for (const node of root.listNodes()) {
  const mesh = node.getMesh(); if (!mesh) continue;
  const W = node.getWorldMatrix();
  const m = doc.createMesh(mesh.getName());
  for (const prim of mesh.listPrimitives()) {
    const np = doc.createPrimitive().setMaterial(prim.getMaterial()).setMode(prim.getMode());
    for (const sem of prim.listSemantics()) { const acc = prim.getAttribute(sem); np.setAttribute(sem, /^(POSITION|NORMAL|TANGENT)$/.test(sem) ? acc.clone() : acc); }
    if (prim.getIndices()) np.setIndices(prim.getIndices());
    m.addPrimitive(np);
  }
  node.setMesh(m);
  const before = getBounds(scene);
  transformMesh(m, W);
  node.setMatrix(mat4.create());
  const after = getBounds(scene);
  if (Math.abs(after.max[1]-before.max[1])>0.01 || Math.abs(after.min[1]-before.min[1])>0.01) console.log('CHANGED by', node.getName(), 'W=', Array.from(W).map(v=>+v.toFixed(2)).join(','), 'posCount', m.listPrimitives()[0].getAttribute('POSITION').getCount());
}
B('baked');
