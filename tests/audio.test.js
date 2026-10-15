import test from 'node:test';
import assert from 'node:assert/strict';
import { speak, stopAudio, clampPlaybackRate } from '../src/audio.js';

test('Slow playback factors stay distinct below a configured 0.7x rate', () => {
  assert.equal(clampPlaybackRate(0.7 * 0.7), 0.7 * 0.7);
  assert.equal(clampPlaybackRate(0.7 * 0.5), 0.35);
  assert.equal(clampPlaybackRate(0.5 * 0.7), 0.35);
  assert.equal(clampPlaybackRate(0.5 * 0.5), 0.25);
  assert.equal(clampPlaybackRate(0.01), 0.25);
  assert.equal(clampPlaybackRate(9), 2);
});

test('System voice speaks Japanese with an empty Android voice list and applies speed changes', async () => {
  const previousWindow = globalThis.window;
  const previousWorker = globalThis.Worker;
  const spoken = [];
  globalThis.Worker = class { constructor() { throw new Error('System voice must not start AI'); } };
  globalThis.window = {
    SpeechSynthesisUtterance: class { constructor(text) { this.text = text; } },
    speechSynthesis: {
      speaking: false,
      getVoices: () => [],
      cancel() { this.speaking = false; },
      speak(utterance) { spoken.push(utterance); this.speaking = true; }
    }
  };
  try {
    const messages = [];
    assert.equal(speak('みず', { voice: 'auto', speed: 0.7 }, message => messages.push(message)), true);
    assert.equal(spoken[0].lang, 'ja-JP');
    assert.equal(spoken[0].rate, 0.7);
    assert.equal(spoken[0].voice, undefined);
    assert.deepEqual(messages, []);
    const staleError = spoken[0].onerror;
    assert.equal(speak('みず', { voice: 'auto', speed: 1.5 }), true);
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.equal(spoken.length, 2);
    assert.equal(spoken[1].rate, 1.5);
    speak('こんにちは', { voice: 'auto', speed: 99 });
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.equal(spoken[2].rate, 2);
    speak('こんにちは', { voice: 'auto', speed: 0.35 });
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.equal(spoken[3].rate, 0.35);
    speak('こんにちは', { voice: 'auto', speed: 0.25 });
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.equal(spoken[4].rate, 0.25);
    staleError({ error: 'language-unavailable' });
    assert.deepEqual(messages, []);
  } finally {
    stopAudio();
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
    if (previousWorker === undefined) delete globalThis.Worker;
    else globalThis.Worker = previousWorker;
  }
});

test('Manual native replay waits for cancellation, reapplies rate and cannot outlive the exercise', async () => {
  const previousWindow = globalThis.window;
  const spoken = [];
  let cancelling = false;
  globalThis.window = {
    SpeechSynthesisUtterance: class {},
    speechSynthesis: {
      speaking: false, getVoices: () => [],
      cancel() {
        this.speaking = false;
        cancelling = true;
        queueMicrotask(() => { cancelling = false; });
      },
      speak(utterance) {
        spoken.push({ rate: utterance.rate, cancelling });
        this.speaking = true;
      }
    }
  };
  try {
    speak('話しましょう', { speed: 1 });
    speak('話しましょう', { speed: 0.7 }, () => {}, { restart: true });
    assert.equal(spoken.length, 1);
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.deepEqual(spoken[1], { rate: 0.7, cancelling: false });
    speak('話しましょう', { speed: 0.7 }, () => {}, { restart: true });
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.equal(spoken.length, 3);
    speak('話しましょう', { speed: 0.5 }, () => {}, { restart: true });
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.deepEqual(spoken[3], { rate: 0.5, cancelling: false });
    speak('話しましょう', { speed: 0.7 }, () => {}, { restart: true });
    speak('話しましょう', { speed: 0.35 }, () => {}, { restart: true });
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.deepEqual(spoken[4], { rate: 0.35, cancelling: false });
    speak('話しましょう', { speed: 0.25 }, () => {}, { restart: true });
    stopAudio();
    await new Promise(resolve => setTimeout(resolve, 5));
    assert.equal(spoken.length, 5);
  } finally {
    stopAudio();
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('System voice uses the selected Japanese voice and reports a missing language', () => {
  const previousWindow = globalThis.window;
  const voice = { lang: 'ja-JP', name: 'Japanese', voiceURI: 'system-ja' };
  let utterance;
  globalThis.window = {
    SpeechSynthesisUtterance: class {},
    speechSynthesis: {
      getVoices: () => [voice], cancel() {},
      speak(value) { utterance = value; }
    }
  };
  try {
    const messages = [];
    speak('みず', { voice: 'system-ja', speed: 0.5 }, message => messages.push(message));
    assert.equal(utterance.voice, voice);
    assert.equal(utterance.rate, 0.5);
    utterance.onerror({ error: 'language-unavailable' });
    assert.match(messages[0], /Voz japonesa indisponível/);
  } finally {
    stopAudio();
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('AI generation runs in a worker, deduplicates play and cancels on stop', async () => {
  const previousWorker = globalThis.Worker;
  const workers = [];
  globalThis.Worker = class {
    constructor(url, options) {
      this.options = options;
      this.requests = [];
      workers.push(this);
    }
    postMessage(data) { this.requests.push(data); }
    terminate() { this.terminated = true; }
  };
  try {
    const messages = [];
    const state = { voice: 'hf:kokoro:jf_alpha' };
    assert.equal(speak('みず', state, message => messages.push(message)), true);
    assert.equal(speak('みず', state), true);
    assert.equal(workers.length, 1);
    assert.equal(workers[0].options.type, 'module');
    assert.equal(workers[0].requests.length, 1);
    stopAudio();
    assert.equal(workers[0].terminated, true);
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual(messages, ['Preparando voz IA japonesa...']);
    speak('こんにちは', state);
    assert.equal(workers.length, 2);
  } finally {
    stopAudio();
    if (previousWorker === undefined) delete globalThis.Worker;
    else globalThis.Worker = previousWorker;
  }
});

test('Failed AI worker is discarded so a later play can retry', async () => {
  const previousWorker = globalThis.Worker;
  const workers = [];
  globalThis.Worker = class {
    constructor() { workers.push(this); }
    postMessage(data) { this.request = data; }
    terminate() { this.terminated = true; }
  };
  try {
    const state = { voice: 'hf:kokoro:jf_alpha' };
    speak('みず', state);
    workers[0].onmessage({ data: { token: workers[0].request.token, error: 'download failed' } });
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(workers[0].terminated, true);
    speak('みず', state);
    assert.equal(workers.length, 2);
  } finally {
    stopAudio();
    if (previousWorker === undefined) delete globalThis.Worker;
    else globalThis.Worker = previousWorker;
  }
});

test('Offline Kokoro selection prefers an available native Japanese voice', () => {
  const previousWindow = globalThis.window;
  const previousNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  let spoken;
  globalThis.window = {
    SpeechSynthesisUtterance: class {},
    speechSynthesis: {
      cancel() {},
      getVoices: () => [{ lang: 'ja-JP', voiceURI: 'local-ja', localService: true }],
      speak(utterance) { spoken = utterance; }
    }
  };
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { onLine: false } });
  try {
    speak('みず', { voice: 'hf:kokoro:jf_alpha', speed: 0.7 });
    assert.equal(spoken.voice.voiceURI, 'local-ja');
    assert.equal(spoken.rate, 0.7);
  } finally {
    stopAudio();
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
    if (previousNavigator) Object.defineProperty(globalThis, 'navigator', previousNavigator);
    else delete globalThis.navigator;
  }
});

test('Kokoro media playback errors fall back to native speech without blocking', async () => {
  const originals = Object.fromEntries(['window', 'Worker', 'Audio'].map(key => [key, globalThis[key]]));
  let media;
  let spoken;
  globalThis.window = {
    SpeechSynthesisUtterance: class {},
    speechSynthesis: { cancel() {}, getVoices: () => [], speak(utterance) { spoken = utterance; } }
  };
  globalThis.Worker = class {
    postMessage({ token }) {
      queueMicrotask(() => this.onmessage({ data: { token, blob: new Blob(['audio']) } }));
    }
    terminate() {}
  };
  globalThis.Audio = class {
    constructor() { media = this; }
    async play() {}
    pause() { this.paused = true; }
  };
  try {
    speak('みず', { voice: 'hf:kokoro:jf_alpha' });
    await new Promise(resolve => setImmediate(resolve));
    media.onerror();
    assert.equal(media.paused, true);
    assert.equal(spoken.lang, 'ja-JP');
  } finally {
    stopAudio();
    for (const [key, value] of Object.entries(originals)) {
      if (value === undefined) delete globalThis[key];
      else globalThis[key] = value;
    }
  }
});

test('Rapid repeated play requests do not cancel the active utterance', () => {
  const previousWindow = globalThis.window;
  const previousUtterance = globalThis.SpeechSynthesisUtterance;
  const spoken = [];
  let cancelCount = 0;

  globalThis.SpeechSynthesisUtterance = class {
    constructor(text) {
      this.text = text;
    }
  };
  globalThis.window = {
    speechSynthesis: {
      speaking: false,
      getVoices: () => [{ lang: 'ja-JP', name: 'Japanese', voiceURI: 'ja' }],
      cancel: () => { cancelCount++; },
      speak: utterance => {
        spoken.push(utterance);
        globalThis.window.speechSynthesis.speaking = true;
      }
    }
  };

  try {
    const errors = [];
    assert.equal(speak('みず', { speed: 1, voice: 'auto' }, error => errors.push(error)), true);
    assert.equal(speak('みず', { speed: 1, voice: 'auto' }, error => errors.push(error)), true);
    assert.equal(spoken.length, 1);
    assert.equal(cancelCount, 1);

    spoken[0].onerror({ error: 'canceled' });
    assert.deepEqual(errors, []);
    stopAudio();
  } finally {
    stopAudio();
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
    if (previousUtterance === undefined) delete globalThis.SpeechSynthesisUtterance;
    else globalThis.SpeechSynthesisUtterance = previousUtterance;
  }
});
