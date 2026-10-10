// Environment: sky, lighting, ground, backdrop ring, and the per-world styles the road builder uses.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { ProceduralRoad, ROAD_W } from './road.js';
import { OsmWorld } from './osmworld.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

const rand = (a, b) => a + Math.random() * (b - a);
const texLoader = new THREE.TextureLoader();
const texCache = {};
export function tex(name, { mirror = true, srgb = true } = {}) {
  if (texCache[name]) return texCache[name];
  const t = texLoader.load(`tex/${name}.webp`);
  t.wrapS = t.wrapT = mirror ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  texCache[name] = t;
  return t;
}
const std = (opts) => new THREE.MeshStandardMaterial(opts);

function cutoutParts(name, height, aspect, opts = {}) {
  const t = tex(name, { mirror: false });
  const w = height * aspect;
  const geo = new THREE.PlaneGeometry(w, height); geo.translate(0, height / 2 - (opts.sink || 0), 0);
  const mat = std({ map: t, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 1, metalness: 0 });
  const cross = new THREE.PlaneGeometry(w, height); cross.translate(0, height / 2 - (opts.sink || 0), 0); cross.rotateY(Math.PI / 2);
  return [{ geometry: geo, material: mat }, { geometry: cross, material: mat }];
}
function scaleUV(geo, sx, sy, sz) {
  const uv = geo.attributes.uv;
  const faces = [[sz, sy], [sz, sy], [sx, sz], [sx, sz], [sx, sy], [sx, sy]];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) { const i = f * 4 + k; uv.setXY(i, uv.getX(i) * faces[f][0], uv.getY(i) * faces[f][1]); }
  uv.needsUpdate = true;
}

export function createWorld(scene, renderer) {
  const W = { scene, worlds: {}, current: null, road: null };

  // ---- sky, sun, ambient
  const sky = new Sky(); sky.scale.setScalar(20000); scene.add(sky);
  const sun = new THREE.DirectionalLight(0xffffff, 2.2);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -22; sun.shadow.camera.right = 22; sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 160; sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.02;
  scene.add(sun); scene.add(sun.target);
  const hemi = new THREE.HemisphereLight(0xbfdfff, 0x4a6a2a, 0.5); scene.add(hemi);
  const pmrem = new THREE.PMREMGenerator(renderer);
  W.sky = sky; W.sun = sun; W.hemi = hemi;

  // ---- ground: one big plane that follows the car; the texture is pinned to world space
  const groundMat = std({ roughness: 1, metalness: 0 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

  // ---- distant backdrop ring (not fogged)
  const ringMat = new THREE.MeshBasicMaterial({ transparent: true, alphaTest: 0.2, side: THREE.BackSide, fog: false, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(560, 560, 150, 48, 1, true), ringMat); ring.renderOrder = -1; scene.add(ring);

  // ---- shared materials / geometries for the road builder
  const asphalt = tex('asphalt'); asphalt.repeat.set(2, 1);
  const asphaltN = tex('asphalt_n', { srgb: false }); asphaltN.repeat.set(2, 1);
  const asphaltR = tex('asphalt_r', { srgb: false }); asphaltR.repeat.set(2, 1);
  const bbTex = [tex('billboard1', { mirror: false }), tex('billboard2', { mirror: false })];
  const signTex = tex('shopsign', { mirror: false });
  const M = {
    road: std({ map: asphalt, normalMap: asphaltN, normalScale: new THREE.Vector2(0.45, 0.45), roughnessMap: asphaltR, roughness: 1.0, metalness: 0.0, envMapIntensity: 0.6 }),
    shoulder: std({ roughness: 1 }),
    line: std({ color: 0xf4f4f4, roughness: 0.7 }),
    rail: std({ color: 0xb8bcc2, roughness: 0.45, metalness: 0.8 }),
    railGeo: new THREE.BoxGeometry(0.08, 0.32, 4.1), postGeo: new THREE.BoxGeometry(0.1, 0.75, 0.1),
    pole: std({ color: 0xff5a36, roughness: 0.7 }), poleGeo: new THREE.BoxGeometry(0.12, 1.4, 0.12),
    billboards: bbTex.map((t) => std({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.6 })),
    bbPanelGeo: new THREE.BoxGeometry(12, 6, 0.25), bbPostGeo: new THREE.CylinderGeometry(0.18, 0.22, 4.5, 8),
    sign: std({ map: signTex, emissiveMap: signTex, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.5 }),
    gantryPostGeo: new THREE.BoxGeometry(0.5, 7.5, 0.5), gantryBeamGeo: new THREE.BoxGeometry(ROAD_W + 3, 0.5, 0.5), gantrySignGeo: new THREE.BoxGeometry(12, 3, 0.2),
    lamp: std({ color: 0x9aa0a6, roughness: 0.4, metalness: 0.8 }),
    lampGlow: std({ color: 0xfff2c0, emissive: 0xffe0a0, emissiveIntensity: 0 }),
    pool: new THREE.MeshBasicMaterial({ color: 0xffd58a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }),
  };
  { M.poolGeo = new THREE.CircleGeometry(5.5, 20); M.poolGeo.rotateX(-Math.PI / 2); M.poolGeo.translate(2.0, 0.06, 0); }
  // soft radial falloff for the lamp pools
  { const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d'); const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 128, 128); M.pool.map = new THREE.CanvasTexture(cv); M.pool.alphaMap = M.pool.map; }
  // lamp post geometry: pole + arm pointing to +x
  {
    const pole = new THREE.CylinderGeometry(0.08, 0.12, 7, 6); pole.translate(0, 3.5, 0);
    const arm = new THREE.BoxGeometry(2.0, 0.1, 0.1); arm.translate(1.0, 6.95, 0);
    M.lampGeo = mergeSimple([pole, arm]);
    M.lampGlowGeo = new THREE.BoxGeometry(0.6, 0.15, 0.3); M.lampGlowGeo.translate(1.8, 6.9, 0);
  }
  W.M = M;

  // ---- city buildings factory (shared materials)
  const facades = ['facade_glass', 'facade_brick', 'facade_shops'].map((n) => tex(n, { mirror: false }));
  const fMats = facades.map((t) => std({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.5, metalness: 0.1 }));
  const roofMat = std({ color: 0x4a4e55, roughness: 1 });
  function makeBuilding(showroom) {
    const w = showroom ? 18 : rand(10, 18), h = showroom ? 9 : rand(9, 42), d = showroom ? 12 : rand(10, 16);
    const g = new THREE.Group();
    if (showroom) {
      const lower = new THREE.Mesh(new THREE.BoxGeometry(w, 5, d), [fMats[2], fMats[2], roofMat, roofMat, fMats[2], fMats[2]]); scaleUV(lower.geometry, w / 9, 5 / 9, d / 9); lower.position.y = 2.5; g.add(lower);
      const band = new THREE.Mesh(new THREE.BoxGeometry(w, 1.3, d + 0.2), [roofMat, roofMat, roofMat, roofMat, M.sign, roofMat]); band.position.y = 5.65; g.add(band);
      const upper = new THREE.Mesh(new THREE.BoxGeometry(w, 2.7, d), [fMats[1], fMats[1], roofMat, roofMat, fMats[1], fMats[1]]); scaleUV(upper.geometry, w / 12, 2.7 / 12, d / 12); upper.position.y = 7.65; g.add(upper);
    } else {
      const mat = fMats[Math.random() < 0.5 ? 0 : 1]; const tile = mat === fMats[0] ? 10 : 12;
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [mat, mat, roofMat, roofMat, mat, mat]); scaleUV(b.geometry, w / tile, h / tile, d / tile); b.position.y = h / 2; g.add(b);
      if (h > 20) { const top = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, 2, d * 0.5), roofMat); top.position.y = h + 1; g.add(top); }
    }
    return { group: g, w, h, d, gap: rand(0, 4) };
  }

  // ---- clouds: a high drifting layer that follows the camera
  const cloudTex = tex('clouds', { mirror: true }); cloudTex.repeat.set(3, 3);
  const cloudMat = new THREE.MeshBasicMaterial({ map: cloudTex, transparent: true, depthWrite: false, fog: false, opacity: 0.95, side: THREE.DoubleSide });
  const clouds = new THREE.Mesh(new THREE.PlaneGeometry(3600, 3600), cloudMat); clouds.rotation.x = -Math.PI / 2; clouds.position.y = 330; clouds.renderOrder = -2; scene.add(clouds);
  W.clouds = clouds;
  // ---- lens flare on the sun
  const flare = new Lensflare();
  const f0 = tex('lensflare0', { mirror: false }), f3 = tex('lensflare3', { mirror: false });
  flare.addElement(new LensflareElement(f0, 420, 0, new THREE.Color(0xfff2d0)));
  flare.addElement(new LensflareElement(f3, 60, 0.6)); flare.addElement(new LensflareElement(f3, 70, 0.7)); flare.addElement(new LensflareElement(f3, 120, 0.9)); flare.addElement(new LensflareElement(f3, 70, 1.0));
  const flareHolder = new THREE.Object3D(); flareHolder.add(flare); scene.add(flareHolder); W.flare = flareHolder;

  // ---- 3D trees: trunk + a cloud of leaf cards (instanced per chunk by the road builder)
  const barkMat = std({ color: 0x5a4330, roughness: 1 });
  const leafMat = (name) => std({ map: tex(name, { mirror: false }), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.9, metalness: 0 });
  const card = (w, h) => { const g = new THREE.PlaneGeometry(w, h); return g; };
  const trunkGeo = new THREE.CylinderGeometry(0.22, 0.42, 1, 7); trunkGeo.translate(0, 0.5, 0);   // unit height, scaled per tree
  const oakTree = { trunk: { geometry: trunkGeo, material: barkMat, h: 3.4 }, cards: { geometry: card(5.6, 3.65), material: leafMat('leaf_oak'), n: 9, rx: 3.6, ry: 2.4, yc: 5.6, tilt: 0.55, flat: false }, obstacle: 0.5 };
  const pineTree = { trunk: { geometry: trunkGeo, material: barkMat, h: 6 }, cards: { geometry: card(4.2, 2.8), material: leafMat('leaf_pine'), n: 11, rx: 2.6, ry: 4.6, yc: 7.6, tilt: 0.35, flat: true, cone: true }, obstacle: 0.45 };
  // ---- grass tufts for the verges
  const grassGeo = card(1.1, 0.75); grassGeo.translate(0, 0.33, 0);
  const grassMatG = std({ map: tex('grass_tuft', { mirror: false }), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 1, metalness: 0 });
  const grassMatD = std({ map: tex('grass_tuft', { mirror: false }), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 1, metalness: 0, color: 0xc9b07a });
  W.treeStyles = { oakTree, pineTree };

  // ---- world styles
  const oak = cutoutParts('tree_oak', 11, 768 / 670, { sink: 0.2 });
  const pine = cutoutParts('tree_pine', 14, 476 / 1045);
  const cactus = cutoutParts('cactus', 6, 362 / 1059);
  const spine = cutoutParts('tree_snowpine', 12, 599 / 1084);
  const rock = { geometry: new THREE.DodecahedronGeometry(1.2, 0), material: std({ color: 0xa8825c, roughness: 1 }), y: 0.5, shadow: true };
  const bank = { geometry: new THREE.SphereGeometry(1.5, 8, 6), material: std({ color: 0xf0f5ff, roughness: 1 }), y: 0.2 };
  W.worlds = {
    country: { ground: 'grass', tile: 7, shoulder: 'sand', shoulderTint: 0x8a7a5a, backdrop: 'hills_green', backdropH: 70, guardrail: true,
      scatter: [{ tree: oakTree, perChunk: 12, lat: [12, 60], scale: [0.8, 1.35] }, { tree: pineTree, perChunk: 10, lat: [13, 75], scale: [0.8, 1.3] },
        { parts: oak, perChunk: 10, lat: [60, 140], scale: [0.9, 1.4], billboard: true }, { parts: pine, perChunk: 10, lat: [60, 160], scale: [0.9, 1.4], billboard: true },
        { grass: { geometry: grassGeo, material: grassMatG }, perChunk: 220, lat: [10.2, 26], scale: [0.6, 1.2] }],
      fog: { day: 0xc9dcec, sunset: 0xe9b48a, night: 0x0a0f1e }, fogFar: 430, offroadGrip: 0.6 },
    desert: { ground: 'sand', tile: 8, shoulder: 'sand', shoulderTint: 0xffffff, backdrop: 'mesas_desert', backdropH: 46, guardrail: true,
      scatter: [{ parts: cactus, perChunk: 12, lat: [11, 70], scale: [0.8, 1.6], billboard: true, obstacle: 0.4 }, { parts: [rock], perChunk: 16, lat: [9, 90], scale: [0.5, 2.4], obstacle: 1.0 },
        { grass: { geometry: grassGeo, material: grassMatD }, perChunk: 90, lat: [10.2, 30], scale: [0.5, 1.0] }],
      fog: { day: 0xe6d6bd, sunset: 0xf0a66a, night: 0x120f22 }, fogFar: 470, offroadGrip: 0.5 },
    snow: { ground: 'snow', tile: 6, shoulder: 'snow', shoulderTint: 0xffffff, backdrop: 'mountains_snow', backdropH: 110, poles: true,
      scatter: [{ parts: spine, perChunk: 18, lat: [11, 80], scale: [0.7, 1.5], billboard: true, obstacle: 0.5 }, { parts: [bank], perChunk: 12, lat: [8, 30], scale: [0.6, 1.8] },
        { tree: pineTree, perChunk: 6, lat: [12, 50], scale: [0.8, 1.2] }],
      fog: { day: 0xdbe6f2, sunset: 0xf0b990, night: 0x0d1428 }, fogFar: 340, offroadGrip: 0.35 },
    city: { ground: 'pavement', tile: 4, shoulder: 'pavement', shoulderTint: 0xffffff, backdrop: 'skyline_city', backdropH: 90, buildings: true, makeBuilding,
      scatter: [], fog: { day: 0xcfdbe8, sunset: 0xe8a878, night: 0x0b0e1a }, fogFar: 400, offroadGrip: 0.9, fMats },
  };
  // Lenasia (map mode) materials
  const houseTex = tex('house_front', { mirror: true }); const wallTex = tex('precast_wall', { mirror: true }); const roofTex = tex('roof_tiles', { mirror: true });
  const fMatsHouse = std({ map: houseTex, roughness: 0.9, metalness: 0 });
  const wallMat = std({ map: wallTex, roughness: 1, metalness: 0 });
  const roofTileMat = std({ map: roofTex, roughness: 0.9, metalness: 0 }); roofTex.repeat.set(2, 2);
  W.worlds.lenasia = { ground: 'grass', tile: 7, groundTint: 0xb7ad78, shoulder: 'sand', shoulderTint: 0xffffff, backdrop: 'hills_green', backdropH: 38, map: 'lenasia.json',
    fog: { day: 0xd6dde6, sunset: 0xe9b48a, night: 0x0a0f1e }, fogFar: 520, offroadGrip: 0.55,
    scatter: [], tex, fMats, fMatsHouse, wallMat, roofTileMat, makeBuilding, treeStyles: null, start: [-743, -2581], showroomAt: null };
  for (const k in W.worlds) W.worlds[k].mats = M;
  W.worlds.lenasia.treeStyles = { oakTree, pineTree };
  W.mapData = {};

  W.setWorld = (name) => {
    const w = W.worlds[name]; W.current = w; W.currentName = name;
    const g = tex(w.ground); g.repeat.set(1600 / w.tile, 1600 / w.tile); groundMat.map = g; groundMat.needsUpdate = true;
    const s = tex(w.shoulder); M.shoulder.map = s; M.shoulder.color.setHex(w.shoulderTint); M.shoulder.needsUpdate = true;
    const bd = tex(w.backdrop, { mirror: true }); bd.repeat.set(4, 1); ringMat.map = bd; ringMat.needsUpdate = true;
    ring.scale.y = w.backdropH / 150; ring.position.y = w.backdropH / 2 - 2;
    groundMat.color.setHex(w.groundTint || 0xffffff);
    if (W.road) W.road.dispose(); W.road = null;
    if (w.map) {
      W.loading = true;
      const make = (data) => {
        // start just off the mall on the nearest road; showroom 70 m along it on the left
        const ow = new OsmWorld(scene, w, data);
        const sp = ow.startPose(); const n = ow.nearest(sp.x, sp.z, { skipMinor: true }); const fx = -Math.sin(n.h), fz = -Math.cos(n.h), lx = fz, lz = -fx;
        w.showroomAt = [n.px + fx * 70 + lx * (n.w / 2 + 12), n.pz + fz * 70 + lz * (n.w / 2 + 12), n.h + Math.PI / 2];
        W.road = ow; W.loading = false;
      };
      if (W.mapData[w.map]) make(W.mapData[w.map]);
      else fetch(w.map).then((r) => r.json()).then((d) => { W.mapData[w.map] = d; if (W.current === w) make(d); });
    } else {
      W.road = new ProceduralRoad(scene, w);
    }
  };

  W.setTime = (time) => {
    const w = W.current; const night = time === 'night'; const rain = time === 'rain';
    const u = sky.material.uniforms;
    let elev, azim;
    if (time === 'day') { elev = 48; azim = 160; u.turbidity.value = 2.2; u.rayleigh.value = 1.0; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.8; }
    else if (rain) { elev = 35; azim = 160; u.turbidity.value = 20; u.rayleigh.value = 0.2; u.mieCoefficient.value = 0.1; u.mieDirectionalG.value = 0.999; }
    else if (time === 'sunset') { elev = 4; azim = 235; u.turbidity.value = 10; u.rayleigh.value = 3; u.mieCoefficient.value = 0.006; u.mieDirectionalG.value = 0.85; }
    else { elev = -4; azim = 180; u.turbidity.value = 2; u.rayleigh.value = 0.3; u.mieCoefficient.value = 0.002; u.mieDirectionalG.value = 0.7; }
    const phi = THREE.MathUtils.degToRad(90 - elev), theta = THREE.MathUtils.degToRad(azim);
    const sunPos = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
    u.sunPosition.value.copy(sunPos);
    if (W.envRT) W.envRT.dispose();
    const envScene = new THREE.Scene(); envScene.add(sky);
    W.envRT = pmrem.fromScene(envScene, 0.0, 0.1, 200);
    scene.add(sky);
    scene.environment = W.envRT.texture; scene.background = null;
    if (time === 'day') { sun.color.setHex(0xfff4e0); sun.intensity = 4.2; hemi.color.setHex(0xbfd8ff); hemi.groundColor.setHex(0x6b705c); hemi.intensity = 1.0; scene.environmentIntensity = 1.0; }
    else if (rain) { sun.color.setHex(0xcfd6e0); sun.intensity = 1.1; hemi.color.setHex(0x9aa6b8); hemi.groundColor.setHex(0x3a3f44); hemi.intensity = 1.6; scene.environmentIntensity = 0.9; }
    else if (time === 'sunset') { sun.color.setHex(0xffa860); sun.intensity = 3.2; hemi.color.setHex(0xf2b58a); hemi.groundColor.setHex(0x4a3f36); hemi.intensity = 0.8; scene.environmentIntensity = 1.0; }
    else { sun.color.setHex(0x8fa0d8); sun.intensity = 1.3; hemi.color.setHex(0x3c4e80); hemi.groundColor.setHex(0x141418); hemi.intensity = 1.5; scene.environmentIntensity = 0.7; }
    W.sunDir = sunPos.clone().normalize(); if (night) W.sunDir.set(0.3, 0.8, -0.2).normalize();
    scene.fog = new THREE.Fog(rain ? 0x8e98a6 : w.fog[time], rain ? 20 : 40, w.fogFar * (night ? 0.7 : rain ? 0.55 : 1));
    ringMat.color.setHex(night ? 0x2a3350 : time === 'sunset' ? 0xffd0a8 : rain ? 0x7d8794 : 0xffffff);
    // wet road: shinier, reflects the sky
    M.road.roughness = rain ? 0.3 : 1.0; M.road.envMapIntensity = rain ? 1.6 : 0.6; M.road.color.setHex(rain ? 0x8a8a8a : 0xffffff);
    M.pool.opacity = night ? 0.5 : 0; W.rain = rain;
    for (const m of M.billboards) m.emissiveIntensity = night ? 0.9 : 0;
    M.sign.emissiveIntensity = night ? 0.9 : 0;
    fMats.forEach((m) => { m.emissiveIntensity = night ? 0.55 : 0; m.emissive.setHex(night ? 0xffe3b0 : 0xffffff); });
    M.lampGlow.emissiveIntensity = night ? 5 : 0;
    w.nightNow = night; if (W.road && W.road.signMats) for (const m of W.road.signMats) m.emissiveIntensity = night ? 0.8 : 0;
    cloudMat.color.setHex(night ? 0x3a4260 : time === 'sunset' ? 0xffc9a0 : rain ? 0x6f7784 : 0xffffff); cloudMat.opacity = night ? 0.6 : rain ? 1 : 0.95;
    flareHolder.visible = !night && !rain;
    W.night = night;
  };

  // per-frame: keep ground/backdrop/shadow centred on the car
  W.follow = (x, z, fx, fz) => {
    const w = W.current;
    ground.position.set(x, 0, z);
    if (groundMat.map) groundMat.map.offset.set((x / w.tile) % 2, (-z / w.tile) % 2);   // mirrored repeat: period 2
    ring.position.x = x; ring.position.z = z;
    clouds.position.x = x; clouds.position.z = z; cloudTex.offset.set((x / 1200) % 2 + performance.now() * 0.000004, (-z / 1200) % 2);
    flareHolder.position.set(x + W.sunDir.x * 900, W.sunDir.y * 900, z + W.sunDir.z * 900);
    sun.target.position.set(x + fx * 8, 0, z + fz * 8);
    sun.position.copy(W.sunDir).multiplyScalar(80).add(sun.target.position);
  };
  return W;
}

function mergeSimple(geos) {
  let nv = 0, ni = 0; for (const g of geos) { nv += g.attributes.position.count; ni += g.index.count; }
  const pos = new Float32Array(nv * 3), nrm = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), idx = new Uint32Array(ni);
  let vo = 0, io = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, vo * 3); nrm.set(g.attributes.normal.array, vo * 3); uv.set(g.attributes.uv.array, vo * 2);
    const ia = g.index.array; for (let i = 0; i < ia.length; i++) idx[io + i] = ia[i] + vo;
    vo += g.attributes.position.count; io += ia.length;
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.BufferAttribute(pos, 3)); m.setAttribute('normal', new THREE.BufferAttribute(nrm, 3)); m.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  m.setIndex(new THREE.BufferAttribute(idx, 1));
  return m;
}
