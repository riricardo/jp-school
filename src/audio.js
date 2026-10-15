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
let lastPlayback = null;
let voiceWorker = null;
let pendingVoice = null;
let replayTimer = null;
const synth = () => globalThis.window?.speechSynthesis || globalThis.speechSynthesis;
export const MIN_PLAYBACK_RATE = 0.25;
export const clampPlaybackRate = speed => Math.max(MIN_PLAYBACK_RATE, Math.min(2, Number(speed) || 1));
const playbackRate = state => clampPlaybackRate(state.speed);

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
  clearTimeout(replayTimer);
  replayTimer = null;
  lastText = null;
  lastPlayback = null;
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
  const Utterance = globalThis.window?.SpeechSynthesisUtterance || globalThis.SpeechSynthesisUtterance;
  if (!text || !speech || typeof Utterance !== 'function') {
    onError('Áudio indisponível neste navegador. O estudo continua normalmente.');
    return false;
  }
  const voices = japaneseVoices();
  try {
    const utterance = new Utterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = playbackRate(state);
    // Android can speak by language before getVoices() has populated its list.
    const voice = preferVoice(voices, state.voice);
    if (voice) utterance.voice = voice;
    active = utterance;
    lastText = text;
    utterance.onstart = () => { if (token === generation) onError(''); };
    utterance.onend = () => { if (token === generation) active = null; };
    utterance.onerror = event => {
      if (token !== generation || ['canceled', 'interrupted'].includes(event.error)) return;
      active = null;
      onError(['language-unavailable', 'voice-unavailable'].includes(event.error)
        ? 'Voz japonesa indisponível no sistema. No Samsung: Configurações → Gerenciamento geral → Texto para voz → mecanismo Google → instalar dados de voz → Japonês.'
        : 'Não foi possível reproduzir o áudio do sistema. Você pode continuar estudando.');
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
    activeMedia.playbackRate = playbackRate(state);
    activeMedia.onended = () => {
      if (token === generation) stopAudio();
    };
    activeMedia.onerror = () => {
      fallback();
    };
    await activeMedia.play();
    if (token === generation) onError('');
  } catch {
    fallback();
  }

  function fallback() {
    if (token !== generation) return;
    onError('A voz IA não ficou pronta. Tentando voz japonesa do dispositivo...');
    speak(text, { ...state, voice: 'auto' }, onError);
  }
}
export function speak(text, state = {}, onError = () => {}, { restart = false } = {}) {
  const playback = `${state.voice || 'auto'}/${playbackRate(state)}`;
  if (lastText === text && lastPlayback === playback) {
    if (pendingVoice) return true;
    if (!restart && (replayTimer !== null || (active && synth()?.speaking) || (activeMedia && !activeMedia.paused))) return true;
  }
  const replacingNative = active !== null || replayTimer !== null;
  stopAudio();
  const token = generation;
  lastText = text;
  lastPlayback = playback;
  const offlineNative = globalThis.navigator?.onLine === false && japaneseVoices().length > 0;
  if (isAiVoice(state.voice) && !offlineNative) {
    kokoroSpeak(text, state, onError, token);
    return true;
  }
  if (replacingNative) {
    // Let the native engine process cancel() before submitting its replacement.
    replayTimer = setTimeout(() => {
      replayTimer = null;
      if (token === generation) nativeSpeak(text, state, onError, token);
    }, 0);
    return true;
  }
  return nativeSpeak(text, state, onError, token);
}
