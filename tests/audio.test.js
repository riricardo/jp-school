import test from 'node:test';
import assert from 'node:assert/strict';
import { speak, stopAudio } from '../src/audio.js';

test('System voice speaks Japanese with an empty Android voice list and applies speed changes', () => {
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
    assert.equal(spoken.length, 2);
    assert.equal(spoken[1].rate, 1.5);
    speak('こんにちは', { voice: 'auto', speed: 99 });
    assert.equal(spoken[2].rate, 2);
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
