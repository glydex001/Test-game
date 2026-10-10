// "Bend the world" shader hook: everything far ahead is curved sideways / up-down so the road
// looks like it winds and rolls, while the physics stay a simple straight line (kid friendly).
export const bend = { curve: { value: 0 }, hill: { value: 0 } };

export function bendMat(m) {
  if (!m || m.userData.bent) return m;
  m.userData.bent = true;
  const prev = m.onBeforeCompile;
  m.onBeforeCompile = (shader, renderer) => {
    if (prev) prev(shader, renderer);
    shader.uniforms.uCurve = bend.curve;
    shader.uniforms.uHill = bend.hill;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uCurve;\nuniform float uHill;')
      .replace('#include <project_vertex>', `
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif
        vec4 wPos = modelMatrix * mvPosition;
        float zz = min(wPos.z, 0.0);
        wPos.x += uCurve * zz * zz;
        wPos.y += uHill * zz * zz;
        mvPosition = viewMatrix * wPos;
        gl_Position = projectionMatrix * mvPosition;
      `);
  };
  const prevKey = m.customProgramCacheKey ? m.customProgramCacheKey.bind(m) : () => '';
  m.customProgramCacheKey = () => prevKey() + '|bend';
  m.needsUpdate = true;
  return m;
}

export function bendObject(root) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    if (Array.isArray(o.material)) o.material.forEach(bendMat); else bendMat(o.material);
  });
  return root;
}
