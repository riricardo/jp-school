const KOKORO_CDN = 'https://cdn.jsdelivr.net/npm/kokoro-js-jp@0.2.0/dist/kokoro-jp.web.js';
let model = null;

self.onmessage = async ({ data: { text, voice, token } }) => {
  try {
    if (!model) {
      model = import(/* @vite-ignore */ KOKORO_CDN)
        .then(({ KokoroJP }) => KokoroJP.load({ device: 'wasm', dtype: 'q8' }));
    }
    const tts = await model;
    const audio = await tts.speak(text, voice);
    self.postMessage({ token, blob: audio.toBlob() });
  } catch (error) {
    model = null;
    self.postMessage({ token, error: String(error?.message || error) });
  }
};
