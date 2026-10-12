// Landmark buildings generated with Higgsfield (SAM 3 3D from nano_banana references):
// centre on x/z, ground at y=0, width normalised to 1 (front already faces +Z), simplify, webp textures, draco.
// Usage: node tools/prep-landmarks.mjs   (reads ../lm/<id>-sam.glb, writes www/models/lm_<id>.glb)
import { NodeIO, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify, textureCompress, draco, transformMesh, unpartition } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import draco3d from 'draco3dgltf';
import sharp from 'sharp';
import { mat4 } from 'gl-matrix';
await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule(), 'draco3d.encoder': await draco3d.createEncoderModule() });
const LM = [
  { id: 'masjid', ratio: 0.28, tex: 1024 },
  { id: 'mall', ratio: 0.22, tex: 1024 },
  { id: 'house', ratio: 0.35, tex: 1024 },
  { id: 'showroom', ratio: 0.2, tex: 1024 },
];
for (const cfg of LM) {
  const doc = await io.read(`../lm/${cfg.id}-sam.glb`);
  await doc.transform(unpartition(), dedup(), prune(), weld());
  const scene = doc.getRoot().getDefaultScene() || doc.getRoot().listScenes()[0];
  let b = getBounds(scene); let w = b.max[0] - b.min[0];
  const m = mat4.create(); mat4.scale(m, m, [1 / w, 1 / w, 1 / w]); mat4.translate(m, m, [-(b.min[0] + b.max[0]) / 2, -b.min[1], -(b.min[2] + b.max[2]) / 2]);
  for (const mesh of doc.getRoot().listMeshes()) transformMesh(mesh, m);
  for (const n of doc.getRoot().listNodes()) { n.setTranslation([0, 0, 0]); n.setRotation([0, 0, 0, 1]); n.setScale([1, 1, 1]); }
  b = getBounds(scene);
  let tris = 0; for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) tris += (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3;
  await doc.transform(
    textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 80, resize: [cfg.tex, cfg.tex] }),
    simplify({ simplifier: MeshoptSimplifier, ratio: cfg.ratio, error: 0.0015, lockBorder: false }),
    prune(), draco({ method: 'edgebreaker', quantizePosition: 14, quantizeNormal: 10, quantizeTexcoord: 12 }),
  );
  let tris2 = 0; for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) tris2 += p.getIndices().getCount() / 3;
  await io.write(`www/models/lm_${cfg.id}.glb`, doc);
  console.log(cfg.id, 'size', b.max.map((v, i) => +(v - b.min[i]).toFixed(3)), 'tris', Math.round(tris), '->', Math.round(tris2));
}
