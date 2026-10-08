import test from 'node:test';
import assert from 'node:assert/strict';
import { speak, stopAudio } from '../src/audio.js';

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
