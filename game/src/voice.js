// Kid narration: short spoken lines via the Android text-to-speech bridge (falls back to the browser's speech API).
export const Voice = {
  on: true, lastT: 0, lastText: '',
  can(lang) { try { if (window.Android && window.Android.canSpeak) return window.Android.canSpeak(lang || 'en'); } catch (e) { /* ignore */ } return !!window.speechSynthesis; },
  // min: do not speak if something was said less than `min` ms ago (keeps it from chattering)
  say(text, opts) {
    const o = opts || {}; if (!this.on || !text) return false;
    const now = performance.now(); if (o.min && now - this.lastT < o.min) return false;
    if (o.once && this.lastText === text) return false;
    this.lastT = now; this.lastText = text;
    try {
      if (window.Android && window.Android.speak) return window.Android.speak(text, o.lang || 'en');
      if (window.speechSynthesis) { const u = new SpeechSynthesisUtterance(text); u.lang = o.lang === 'ar' ? 'ar-SA' : 'en-GB'; u.rate = 0.95; u.pitch = 1.05; speechSynthesis.cancel(); speechSynthesis.speak(u); return true; }
    } catch (e) { /* ignore */ }
    return false;
  },
  stop() { try { if (window.Android && window.Android.stopSpeaking) window.Android.stopSpeaking(); else if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* ignore */ } },
};
export const COLOR_NAMES = ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black', 'Orange', 'Purple', 'Turquoise'];
// "M is for Masjid": a letter to learn from the mission
export function missionLetter(m) {
  if (!m) return null;
  if (m.kind === 'goto' || m.kind === 'deliver') { const name = (m.kind === 'deliver' ? 'Recliner' : m.text.replace(/^Drive to /, '')).replace(/^(the|al|a) /i, ''); const w = name.split(/\s+/)[0]; const L = w[0].toUpperCase(); return /[A-Z]/.test(L) ? { L, word: w } : null; }
  const map = { stars: 'Stars', km: 'Drive', speed: 'Fast', clean: 'Careful', boost: 'Boost', horn: 'Horn', pass: 'Pass' };
  const w = map[m.kind]; return w ? { L: w[0], word: w } : null;
}
export const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
