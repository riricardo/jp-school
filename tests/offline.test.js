import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import * as engine from '../src/engine.js';
import * as japanese from '../src/japanese.js';
import { clampPlaybackRate, MIN_PLAYBACK_RATE } from '../src/audio.js';

const scope = 'https://example.test/jp-school/';
const shell = ['./', './assets/app.js', './assets/app.css', './assets/audio-worker.js'];

function serviceWorkerFixture() {
  const handlers = {};
  const stores = new Map();
  let failNetwork = false;
  let networkRequests = 0;
  const fetch = async url => {
    networkRequests++;
    if (failNetwork) throw new Error('offline');
    return new Response(String(url));
  };
  const caches = {
    async open(name) {
      if (!stores.has(name)) {
        const entries = new Map();
        stores.set(name, {
          entries,
          async match(url) { return entries.get(String(url)); },
          async put(url, response) { entries.set(String(url), response); },
          async addAll(requests) {
            const responses = await Promise.all(requests.map(request => fetch(request.url)));
            requests.forEach((request, index) => entries.set(request.url, responses[index]));
          }
        });
      }
      return stores.get(name);
    },
    async keys() { return [...stores.keys()]; },
    async delete(name) { return stores.delete(name); }
  };
  const context = vm.createContext({
    URL, Request, Response, caches, fetch,
    self: {
      registration: { scope }, location: { origin: 'https://example.test' },
      clients: { async claim() {} },
      skipWaiting() { assert.fail('Updates must wait for existing tabs'); },
      addEventListener(type, handler) { handlers[type] = handler; }
    }
  });
  const source = readFileSync(new URL('../public/sw.js', import.meta.url), 'utf8')
    .replace(/^const APP_SHELL = .*;$/m, `const APP_SHELL = ${JSON.stringify(shell)};`);
  vm.runInContext(source, context);
  const cacheName = vm.runInContext('CACHE', context);
  const dispatch = (type, event = {}) => {
    let completion;
    handlers[type]({ ...event, waitUntil(task) { completion = task; } });
    return completion;
  };
  const check = async () => {
    let result;
    let closed = false;
    await dispatch('message', {
      data: { type: 'CHECK_OFFLINE' },
      ports: [{ postMessage(value) { result = value; }, close() { closed = true; } }]
    });
    assert.equal(closed, true);
    return result;
  };
  return { stores, caches, handlers, cacheName, dispatch, check,
    offline() { failNetwork = true; }, requests: () => networkRequests };
}

test('Offline readiness checks every shell asset and reports storage errors', async () => {
  const worker = serviceWorkerFixture();
  await worker.dispatch('install');
  assert.equal((await worker.check()).ready, true);
  const cache = await worker.caches.open(worker.cacheName);
  for (const path of shell) {
    const url = new URL(path, scope).href;
    const response = cache.entries.get(url);
    cache.entries.delete(url);
    const result = await worker.check();
    assert.equal(result.ready, false);
    assert.deepEqual([...result.missing], [url]);
    cache.entries.set(url, response);
  }
  worker.caches.open = async () => { throw new Error('storage unavailable'); };
  const result = await worker.check();
  assert.equal(result.ready, false);
  assert.equal(result.error, true);
});

test('Failed install preserves previous caches; activation cleans only this app scope', async () => {
  const worker = serviceWorkerFixture();
  const previous = worker.cacheName.replace('development', 'previous');
  const other = 'manjapa-shell-https://example.test/other/:previous';
  await worker.caches.open(previous);
  await worker.caches.open(other);
  worker.offline();
  await assert.rejects(worker.dispatch('install'), /offline/);
  assert.equal(worker.stores.has(previous), true);
  assert.equal(worker.stores.has(other), true);
  assert.equal(worker.stores.has(worker.cacheName), false);

  const complete = serviceWorkerFixture();
  await complete.caches.open(previous);
  await complete.caches.open(other);
  await complete.dispatch('install');
  await complete.dispatch('activate');
  assert.equal(complete.stores.has(previous), false);
  assert.equal(complete.stores.has(other), true);
});

test('Navigations and essential assets use the same cached version, even online', async () => {
  const worker = serviceWorkerFixture();
  await worker.dispatch('install');
  const requests = worker.requests();
  for (const offline of [false, true]) {
    if (offline) worker.offline();
    for (const path of ['?launch=home', 'index.html', 'assets/app.js', 'assets/app.css', 'assets/audio-worker.js']) {
      let response;
      worker.handlers.fetch({
        request: { method: 'GET', url: scope + path, mode: path.startsWith('assets/') ? 'cors' : 'navigate' },
        respondWith(task) { response = task; }
      });
      assert.equal((await response).ok, true);
    }
  }
  assert.equal(worker.requests(), requests);
});

function appFixture() {
  const elements = new Map();
  const events = {};
  const timers = new Map();
  const channels = [];
  const plays = [];
  let timerId = 0;
  const element = () => ({
    textContent: '', innerHTML: '', hidden: false, options: [],
    insertAdjacentHTML(_, html) { this.innerHTML += html; },
    addEventListener() {}, setAttribute() {}, showModal() {}, close() {}
  });
  const app = element();
  Object.defineProperty(app, 'innerHTML', {
    set(html) {
      for (const match of html.matchAll(/id="([^"]+)"/g)) elements.set(match[1], element());
    }
  });
  const registration = { addEventListener() {}, async update() {}, waiting: null };
  const serviceWorker = {
    controller: null,
    addEventListener(type, handler) { events[type] = handler; },
    async register() { return registration; },
    async getRegistration() { return registration; }
  };
  const context = vm.createContext({
    ...engine, ...japanese, structuredClone, performance, clampPlaybackRate, MIN_PLAYBACK_RATE,
    document: {
      querySelector: () => app, querySelectorAll: () => [],
      getElementById: id => elements.get(id), addEventListener() {}
    },
    window: { isSecureContext: true, addEventListener() {}, location: { reload() { assert.fail('Unexpected reload'); } } },
    navigator: { serviceWorker, onLine: true },
    MessageChannel: class {
      constructor() {
        this.port1 = { close() { this.closed = true; } };
        this.port2 = {
          postMessage: data => this.port1.onmessage?.({ data }),
          close() { this.closed = true; }
        };
        channels.push(this);
      }
    },
    setTimeout(handler) { timers.set(++timerId, handler); return timerId; },
    clearTimeout(id) { timers.delete(id); },
    cards: [], studySituations: [],
    load: () => structuredClone(engine.defaults), save() {}, stopAudio() {},
    speak(text, state, _, options) { plays.push({ text, speed: state.speed, restart: options?.restart }); },
    japaneseVoices: () => [], aiJapaneseVoices: [],
    setupInstall(button, status) { assert.ok(button); assert.ok(status); }
  });
  const source = readFileSync(new URL('../src/app.js', import.meta.url), 'utf8')
    .replace(/^import[\s\S]*?;\n/gm, '')
    .replaceAll('import.meta.env.PROD', 'true')
    .replaceAll('import.meta.env.BASE_URL', JSON.stringify('/jp-school/'));
  vm.runInContext(source, context);
  const startExercise = (skill, settings = {}) => {
    context.fixtureSettings = settings;
    context.fixtureCard = { id: 'x', kind: 'word', japanese: '水', kana: 'みず', romaji: 'mizu', pt: 'água' };
    context.cards.splice(0, context.cards.length, context.fixtureCard);
    vm.runInContext(`state = { ...structuredClone(defaults), ...fixtureSettings };
      current = { id: fixtureCard.id, skill: ${JSON.stringify(skill)}, card: fixtureCard };
      phase = 'question'; deck = []; retries = []; counter = 1;
      resetAudioControls(); render();`, context);
  };
  return { context, elements, events, timers, channels, registration, serviceWorker, plays, startExercise };
}

test('App readiness handles controller arrival, all-file results, timeout and closed ports', async () => {
  const app = appFixture();
  await new Promise(resolve => setImmediate(resolve));
  assert.match(app.elements.get('offlineStatus').textContent, /ainda não está pronto/);
  const replies = [];
  app.serviceWorker.controller = { postMessage(_, ports) { replies.push(ports[0]); } };
  const task = app.context.checkOfflineReady();
  replies.pop().postMessage({ type: 'OFFLINE_STATUS', ready: true, missing: [] });
  await task;
  assert.match(app.elements.get('offlineStatus').textContent, /disponíveis offline/);
  assert.equal(app.channels.at(-1).port1.closed, true);
  assert.equal(app.channels.at(-1).port2.closed, true);

  const incomplete = app.context.checkOfflineReady();
  replies.pop().postMessage({ type: 'OFFLINE_STATUS', ready: false, missing: ['app.css'] });
  await incomplete;
  assert.match(app.elements.get('offlineStatus').textContent, /1 arquivos essenciais/);

  const timeout = app.context.checkOfflineReady();
  for (const handler of [...app.timers.values()]) handler();
  await timeout;
  assert.match(app.elements.get('offlineStatus').textContent, /Não foi possível confirmar/);
  assert.equal(app.timers.size, 0);
  assert.equal(app.channels.at(-1).port1.closed, true);
});

test('App ignores stale cache replies and never activates updates or reloads a study session', async () => {
  const app = appFixture();
  await new Promise(resolve => setImmediate(resolve));
  const replies = [];
  app.serviceWorker.controller = { postMessage(_, ports) { replies.push(ports[0]); } };
  const old = app.context.checkOfflineReady();
  const newer = app.context.checkOfflineReady();
  replies[1].postMessage({ type: 'OFFLINE_STATUS', ready: false, missing: ['app.js'] });
  await newer;
  replies[0].postMessage({ type: 'OFFLINE_STATUS', ready: true, missing: [] });
  await old;
  assert.match(app.elements.get('offlineStatus').textContent, /ainda não/);

  app.registration.waiting = { postMessage() { assert.fail('Unexpected forced activation'); } };
  app.serviceWorker.controller.postMessage = (_, ports) => ports[0].postMessage({
    type: 'OFFLINE_STATUS', ready: true, missing: []
  });
  vm.runInContext('current = { id: "study-in-progress" };', app.context);
  await app.elements.get('refreshApp').onclick();
  await app.events.controllerchange();
  assert.equal(vm.runInContext('current.id', app.context), 'study-in-progress');
  assert.match(app.elements.get('available').textContent, /Feche todas as abas/);
  assert.equal(app.elements.get('refreshApp').disabled, false);
});

test('App rejects inconsistent messages, posting errors and absent SW support', async () => {
  const app = appFixture();
  await new Promise(resolve => setImmediate(resolve));
  app.serviceWorker.controller = {
    postMessage(_, ports) {
      ports[0].postMessage({ type: 'OFFLINE_STATUS', ready: true, missing: ['app.css'] });
    }
  };
  await app.context.checkOfflineReady();
  assert.match(app.elements.get('offlineStatus').textContent, /Não foi possível confirmar/);
  app.serviceWorker.controller.postMessage = () => { throw new Error('redundant'); };
  await app.context.checkOfflineReady();
  assert.equal(app.channels.at(-1).port1.closed, true);
  assert.equal(app.timers.size, 0);
  delete app.context.navigator.serviceWorker;
  await app.context.checkOfflineReady();
  assert.match(app.elements.get('offlineStatus').textContent, /indisponível/);
});

test('Manual and automatic romaji do not assist JP-PT or Kana-Kanji; PT does assist JP-PT', () => {
  const app = appFixture();
  for (const skill of ['kana', 'toKanji']) {
    app.startExercise(skill, { progress: { x: { [skill]: 2 } } });
    app.context.showHint('romaji');
    assert.equal(app.elements.get('yes').disabled, false);
    assert.equal(vm.runInContext(`state.progress.x.${skill}`, app.context), 2);
    assert.equal(vm.runInContext('retries.length', app.context), 0);
    app.startExercise(skill, { romaji: true, progress: { x: { [skill]: 2 } } });
    assert.equal(app.elements.get('yes').disabled, false);
    assert.equal(vm.runInContext(`state.progress.x.${skill}`, app.context), 2);
  }
  app.startExercise('kana', { progress: { x: { kana: 2, fromKanji: 3 } } });
  app.context.showHint('meaning');
  assert.equal(app.elements.get('yes').disabled, true);
  assert.equal(vm.runInContext('state.progress.x.kana', app.context), 0);
  assert.equal(vm.runInContext('state.progress.x.fromKanji', app.context), 3);
  assert.equal(vm.runInContext('retries.length', app.context), 1);
  app.startExercise('fromKanji', { romaji: true });
  assert.equal(app.elements.get('yes').disabled, true);
  assert.match(app.elements.get('prompt').innerHTML, /mizu/);
});

test('Slow audio uses 70% twice, minimum speed from the third click, and resets on every exercise', () => {
  const app = appFixture();
  app.startExercise('kana', { speed: 1.4 });
  app.context.play();
  assert.equal(app.plays.at(-1).restart, false);
  assert.equal(vm.runInContext('normalAudioClicks', app.context), 0);
  app.elements.get('audioButton').onclick();
  assert.equal(app.plays.at(-1).restart, true);
  assert.equal(app.elements.get('slowAudioButton').hidden, true);
  app.elements.get('audioButton').onclick();
  assert.equal(app.elements.get('slowAudioButton').hidden, false);
  for (let i = 0; i < 4; i++) app.elements.get('slowAudioButton').onclick();
  assert.ok(app.plays.slice(-4).every(play => play.restart));
  assert.deepEqual(app.plays.slice(-4).map(play => Number(play.speed.toFixed(2))), [0.98, 0.98, 0.25, 0.25]);
  assert.equal(vm.runInContext('state.speed', app.context), 1.4);
  vm.runInContext("retries = [{id:'x',skill:'kana',due:0}];", app.context);
  app.context.nextCard(false);
  assert.equal(vm.runInContext('current.isRetry', app.context), true);
  assert.equal(vm.runInContext('normalAudioClicks + slowAudioClicks', app.context), 0);
  assert.equal(app.elements.get('slowAudioButton').hidden, true);
  app.elements.get('audioButton').onclick();
  app.elements.get('audioButton').onclick();
  app.elements.get('slowAudioButton').onclick();
  assert.equal(Number(app.plays.at(-1).speed.toFixed(2)), 0.98);
  vm.runInContext('state.speed = 0.5;', app.context);
  app.elements.get('slowAudioButton').onclick();
  assert.equal(app.plays.at(-1).speed, 0.35);
  app.elements.get('slowAudioButton').onclick();
  app.elements.get('slowAudioButton').onclick();
  assert.equal(app.plays.at(-1).speed, 0.25);
  assert.equal(vm.runInContext('state.speed', app.context), 0.5);
});

test('A correct retry resumes the normal deck and keeps the independent streak', () => {
  const app = appFixture();
  app.startExercise('kana', { retry: 1 });
  app.context.answer(false);
  assert.match(app.elements.get('solution').innerHTML, /mizu/);
  assert.match(app.elements.get('solution').innerHTML, /água/);
  vm.runInContext("deck = [{id:'y',skill:'kana',card:{...fixtureCard,id:'y'}}];", app.context);
  app.context.nextCard(false);
  assert.equal(vm.runInContext('current.id', app.context), 'y');
  app.context.answer(true);
  assert.equal(vm.runInContext('current.isRetry', app.context), true);
  vm.runInContext("deck = [{id:'z',skill:'kana',card:{...fixtureCard,id:'z'}}];", app.context);
  app.context.answer(true);
  assert.equal(vm.runInContext('current.id', app.context), 'z');
  assert.equal(vm.runInContext('state.progress.x.kana', app.context), 1);
  assert.equal(vm.runInContext('retries.length', app.context), 0);
});

test('Answer reveal includes kana-only Japanese and preserves already visible PT and romaji', () => {
  const app = appFixture();
  app.startExercise('reverse');
  vm.runInContext("current.card = {...fixtureCard,japanese:'テレビ',kana:'テレビ',romaji:'terebi',pt:'televisão'}; render();", app.context);
  app.context.answer(false);
  assert.match(app.elements.get('solution').innerHTML, /テレビ/);
  assert.match(app.elements.get('solution').innerHTML, /terebi/);
  assert.ok(!app.elements.get('solution').innerHTML.includes('televisão'));
  app.startExercise('kana', { autoFurigana: false });
  app.context.showHint('romaji');
  app.context.showHint('meaning');
  app.context.answer(false);
  assert.match(app.elements.get('prompt').innerHTML, /mizu/);
  assert.match(app.elements.get('prompt').innerHTML, /água/);
  assert.match(app.elements.get('solution').innerHTML, /水/);
  assert.ok(!app.elements.get('solution').innerHTML.includes('mizu'));
});
