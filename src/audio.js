const KOKORO_PREFIX = 'hf:kokoro:';

export const aiJapaneseVoices = [
  ['jf_alpha', 'Kokoro IA · Alpha · feminina'],
  ['jf_gongitsune', 'Kokoro IA · Gongitsune · feminina'],
  ['jf_nezumi', 'Kokoro IA · Nezumi · feminina'],
  ['jf_tebukuro', 'Kokoro IA · Tebukuro · feminina'],
  ['jm_kumo', 'Kokoro IA · Kumo · masculina']
];

let active = null;
let activeMedia = null;
let activeUrl = null;
let generation = 0;
let lastText = null;
let voiceWorker = null;
let pendingVoice = null;
const synth = () => globalThis.window?.speechSynthesis || globalThis.speechSynthesis;

export function japaneseVoices() {
  try { return (synth()?.getVoices() || []).filter(v => /^ja(?:-|$)/i.test(v.lang)); }
  catch { return []; }
}

export function isAiVoice(value) {
  return String(value || '').startsWith(KOKORO_PREFIX);
}

export function preferVoice(voices, chosen = 'auto') {
  if (chosen !== 'auto') {
    const match = voices.find(v => v.voiceURI === chosen);
    if (match) return match;
  }
  const female = /female|kyoko|nanami|haruka|sayaka|yuna|mizuki|sakura|hikari|tsukuyomi/i;
  return voices.find(v => v.localService && female.test(v.name)) ||
    voices.find(v => v.localService) || voices.find(v => female.test(v.name)) || voices[0];
}
export function stopAudio() {
  generation++;
  lastText = null;
  if (pendingVoice) {
    const pending = pendingVoice;
    pendingVoice = null;
    clearTimeout(pending.timer);
    voiceWorker?.terminate();
    voiceWorker = null;
    pending.reject(new Error('cancelled'));
  }
  if (active) { active.onend = null; active.onerror = null; active = null; }
  if (activeMedia) {
    activeMedia.onended = null;
    activeMedia.onerror = null;
    activeMedia.pause();
    activeMedia = null;
  }
  if (activeUrl) {
    URL.revokeObjectURL(activeUrl);
    activeUrl = null;
  }
  try { synth()?.cancel(); } catch { /* ignore */ }
}
function generateVoice(text, voice, token) {
  return new Promise((resolve, reject) => {
    if (!voiceWorker) {
      voiceWorker = new Worker(new URL('./audio-worker.js', import.meta.url), { type: 'module' });
    }
    const worker = voiceWorker;
    const finish = (error, blob) => {
      if (pendingVoice?.token !== token) return;
      clearTimeout(pendingVoice.timer);
      pendingVoice = null;
      if (error) {
        worker.terminate();
        if (voiceWorker === worker) voiceWorker = null;
        reject(error);
      } else resolve(blob);
    };
    pendingVoice = {
      token, reject,
      timer: setTimeout(() => finish(new Error('timeout')), 120000)
    };
    worker.onmessage = ({ data }) => {
      if (data.token !== token) return;
      finish(data.error ? new Error(data.error) : null, data.blob);
    };
    worker.onerror = event => {
      event.preventDefault();
      finish(new Error('worker failed'));
    };
    worker.onmessageerror = () => finish(new Error('invalid audio response'));
    try { worker.postMessage({ text, voice, token }); }
    catch (error) { finish(error); }
  });
}
function nativeSpeak(text, state, onError, token) {
  const speech = synth();
  if (!text || !speech || typeof globalThis.SpeechSynthesisUtterance !== 'function') {
    onError('Áudio indisponível neste navegador. O estudo continua normalmente.');
    return false;
  }
  const voices = japaneseVoices();
  if (!voices.length) {
    onError('Sem voz japonesa neste dispositivo. Instale uma voz japonesa nas configurações do sistema; o estudo continua normalmente.');
    return false;
  }
  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = Math.max(0.5, Math.min(2, Number(state.speed) || 1));
    utterance.voice = preferVoice(voices, state.voice);
    active = utterance;
    lastText = text;
    utterance.onend = () => { if (token === generation) active = null; };
    utterance.onerror = event => {
      if (token !== generation || ['canceled', 'interrupted'].includes(event.error)) return;
      active = null;
      onError('Não foi possível reproduzir o áudio. Você pode continuar estudando.');
    };
    speech.speak(utterance);
    return true;
  } catch {
    if (token === generation) active = null;
    onError('Falha ao iniciar áudio. Você pode continuar estudando.');
    return false;
  }
}
async function kokoroSpeak(text, state, onError, token) {
  try {
    onError('Preparando voz IA japonesa...');
    const voice = String(state.voice || '').slice(KOKORO_PREFIX.length) || 'jf_alpha';
    const blob = await generateVoice(text, voice, token);
    if (token !== generation) return;
    activeUrl = URL.createObjectURL(blob);
    activeMedia = new Audio(activeUrl);
    activeMedia.playbackRate = Math.max(0.5, Math.min(2, Number(state.speed) || 1));
    activeMedia.onended = () => {
      if (token === generation) stopAudio();
    };
    activeMedia.onerror = () => {
      if (token === generation) onError('A voz IA falhou. Troque para voz do dispositivo ou tente online.');
    };
    await activeMedia.play();
    if (token === generation) onError('');
  } catch {
    if (token === generation) {
      onError('A voz IA não ficou pronta. Tentando voz japonesa do dispositivo...');
      nativeSpeak(text, { ...state, voice: 'auto' }, onError, token);
    }
  }
}
export function speak(text, state = {}, onError = () => {}) {
  if (pendingVoice && lastText === text) return true;
  if (active && lastText === text && synth()?.speaking) return true;
  if (activeMedia && lastText === text && !activeMedia.paused) return true;
  stopAudio();
  const token = generation;
  lastText = text;
  if (isAiVoice(state.voice)) {
    kokoroSpeak(text, state, onError, token);
    return true;
  }
  return nativeSpeak(text, state, onError, token);
}
