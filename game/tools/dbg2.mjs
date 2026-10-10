import { NodeIO, getBounds } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { flatten, transformMesh } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
import { mat4, vec3 } from 'gl-matrix';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'draco3d.decoder': await draco3d.createDecoderModule() });
const doc = await io.read('../models/raw/ferrari458.glb');
const root = doc.getRoot(); const scene = root.listScenes()[0];
flatten(doc);
const node = root.listNodes().find(n => n.getName()==='trim');
const W = node.getWorldMatrix();
const pos = node.getMesh().listPrimitives()[0].getAttribute('POSITION').getArray();
const mm = (a) => { const mn=[1e9,1e9,1e9], mx=[-1e9,-1e9,-1e9]; for (let i=0;i<a.length;i+=3) for (let k=0;k<3;k++){mn[k]=Math.min(mn[k],a[i+k]);mx[k]=Math.max(mx[k],a[i+k]);} return [mn.map(v=>v.toFixed(2)), mx.map(v=>v.toFixed(2))]; };
console.log('local', mm(pos));
const out = new Float32Array(pos.length); const v = vec3.create();
for (let i=0;i<pos.length;i+=3){ vec3.set(v,pos[i],pos[i+1],pos[i+2]); vec3.transformMat4(v,v,W); out[i]=v[0];out[i+1]=v[1];out[i+2]=v[2]; }
console.log('manual world', mm(out));

transformMesh(node.getMesh(), W);
console.log('transformMesh result', mm(node.getMesh().listPrimitives()[0].getAttribute('POSITION').getArray()));
console.log('normalized?', node.getMesh().listPrimitives()[0].getAttribute('POSITION').getNormalized(), node.getMesh().listPrimitives()[0].getAttribute('POSITION').getComponentType());
