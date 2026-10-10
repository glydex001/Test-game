import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import draco3d from 'draco3dgltf';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule() });
const doc = await io.read(process.argv[2]); const root = doc.getRoot();
for (const n of root.listNodes()) if (new RegExp(process.argv[3],'i').test(n.getName())) {
  let chain = []; let p = n; while (p) { chain.push(`${p.getName()}[t=${p.getTranslation().map(v=>+v.toFixed(2))} s=${p.getScale().map(v=>+v.toFixed(2))}]`); p = p.getParentNode(); }
  console.log(chain.join(' <- '));
  console.log('  world', Array.from(n.getWorldMatrix()).map(v=>+v.toFixed(2)).join(','), 'skin', !!n.getSkin(), 'ext', n.listExtensions().map(e=>e.extensionName));
}
console.log('animations', root.listAnimations().length, 'skins', root.listSkins().length);
