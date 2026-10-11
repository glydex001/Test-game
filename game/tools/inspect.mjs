import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/core';
import sharp from 'sharp';
import draco3d from 'draco3dgltf';
import { MeshoptDecoder } from 'meshoptimizer';
await MeshoptDecoder.ready;

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule(), 'draco3d.encoder': await draco3d.createEncoderModule(), 'meshopt.decoder': MeshoptDecoder });
for (const f of process.argv.slice(2)) {
  const doc = await io.read(f);
  const root = doc.getRoot();
  let tris = 0;
  for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
    const idx = p.getIndices(); const n = idx ? idx.getCount() : p.getAttribute('POSITION').getCount();
    tris += n / 3;
  }
  const scene = root.getDefaultScene() || root.listScenes()[0];
  const b = getBounds(scene);
  const size = b.max.map((v, i) => +(v - b.min[i]).toFixed(2));
  const texs = [];
  for (const t of root.listTextures()) { try { const m = await sharp(t.getImage()).metadata(); texs.push(`${m.width}x${m.height}`); } catch { texs.push('?'); } }
  const names = root.listNodes().map((n) => n.getName()).filter(Boolean);
  const wheelish = names.filter((n) => /wheel|tire|tyre|rim|whl/i.test(n));
  console.log(`\n=== ${f}\n triangles=${Math.round(tris)} meshes=${root.listMeshes().length} nodes=${names.length} materials=${root.listMaterials().length}`);
  console.log(` bounds min=${b.min.map((v) => v.toFixed(2))} size=${size}`);
  console.log(` textures(${texs.length}): ${texs.slice(0, 12).join(' ')}${texs.length > 12 ? ' …' : ''}`);
  console.log(` wheel-ish nodes(${wheelish.length}): ${wheelish.slice(0, 16).join(' | ')}`);
  console.log(` materials: ${root.listMaterials().map((m) => m.getName()).slice(0, 20).join(' | ')}`);
}
