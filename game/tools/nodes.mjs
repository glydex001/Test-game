import { NodeIO, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { flatten } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule() });
const doc = await io.read(process.argv[2]); const root = doc.getRoot(); const scene = root.listScenes()[0];
const sb = getBounds(scene); const size = sb.max.map((v,i)=>v-sb.min[i]); const yl = sb.min[1];
flatten(doc);
const re = new RegExp(process.argv[3] || '.', 'i');
for (const n of root.listNodes()) { const m = n.getMesh(); if (!m) continue;
  for (const p of m.listPrimitives()) {
    const mat = p.getMaterial() ? p.getMaterial().getName() : '-';
    if (!re.test(n.getName()) && !re.test(mat)) continue;
    // bounds via node world matrix
    const b = getBounds(n); const h = ((b.min[1]-yl)/size[1]).toFixed(2) + '-' + ((b.max[1]-yl)/size[1]).toFixed(2);
    const tris = (p.getIndices()?p.getIndices().getCount():p.getAttribute('POSITION').getCount())/3;
    console.log(n.getName().padEnd(40), mat.padEnd(24), 'y%', h, 'tris', tris, 'x', b.min[0].toFixed(2), b.max[0].toFixed(2));
  } }
