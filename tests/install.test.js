import test from 'node:test';
import assert from 'node:assert/strict';
import { setupInstall } from '../src/install.js';

function fixture({ secure = true, installed = false } = {}) {
  const events = {};
  const media = { matches: installed, addEventListener() {} };
  const browser = {
    isSecureContext: secure,
    navigator: { userAgent: 'Android Chrome' },
    matchMedia: () => media,
    addEventListener: (name, handler) => { events[name] = handler; }
  };
  const button = {};
  const status = { textContent: '' };
  setupInstall(button, status, browser);
  return { browser, button, status, events };
}

test('Install uses the browser prompt once and reflects installation', async () => {
  const { button, status, events } = fixture();
  let prompts = 0;
  let prevented = false;
  events.beforeinstallprompt({
    preventDefault() { prevented = true; },
    async prompt() { prompts++; },
    userChoice: Promise.resolve({ outcome: 'accepted' })
  });
  assert.equal(prevented, true);
  await button.onclick();
  assert.equal(prompts, 1);
  assert.equal(button.disabled, false);
  assert.equal(status.textContent, 'Instalação solicitada.');
  await button.onclick();
  assert.equal(prompts, 1);
  events.appinstalled();
  assert.equal(button.hidden, true);
});

test('Installation distinguishes insecure addresses and already installed apps', async () => {
  const insecure = fixture({ secure: false });
  await insecure.button.onclick();
  assert.match(insecure.status.textContent, /HTTPS/);
  assert.equal(fixture({ installed: true }).button.hidden, true);
});

test('An install prompt failure restores the control', async () => {
  const { button, status, events } = fixture();
  events.beforeinstallprompt({ preventDefault() {}, async prompt() { throw new Error('failed'); } });
  await button.onclick();
  assert.equal(button.disabled, false);
  assert.match(status.textContent, /menu do navegador/);
});
