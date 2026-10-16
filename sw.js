const CACHE_PREFIX = `manjapa-shell-${self.registration.scope}:`;
const CACHE = CACHE_PREFIX + '4c9929c771e9';
const APP_SHELL = ["./","./assets/index-DIAgcN1p.css","./assets/index-CKzUchL4.js","./assets/audio-worker-Bbv11_YK.js","./manifest.webmanifest","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512.png"];

const shellUrls = APP_SHELL.map(path => new URL(path, self.registration.scope).href);

async function missingShellFiles(cache) {
  const missing = await Promise.all(shellUrls.map(async url => {
    const response = await cache.match(url);
    return response?.ok ? null : url;
  }));
  return missing.filter(Boolean);
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);

    // A failed install must leave the currently active version untouched.
    try {
      await cache.addAll(shellUrls.map(url => new Request(url, { cache: 'reload' })));
      if ((await missingShellFiles(cache)).length) throw new Error('Incomplete app shell');
    } catch (error) {
      await caches.delete(CACHE);
      throw error;
    }
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    if ((await missingShellFiles(cache)).length) throw new Error('Incomplete app shell');
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter(key =>
          key.startsWith(CACHE_PREFIX) &&
          key !== CACHE
        )
        .map(key => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type !== 'CHECK_OFFLINE' || !event.ports?.[0]) return;
  const port = event.ports[0];
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE);
      const missing = await missingShellFiles(cache);
      port.postMessage({ type: 'OFFLINE_STATUS', ready: missing.length === 0, missing });
    } catch {
      port.postMessage({ type: 'OFFLINE_STATUS', ready: false, missing: shellUrls, error: true });
    } finally {
      port.close();
    }
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (
    request.method !== 'GET' ||
    new URL(request.url).origin !== self.location.origin
  ) {
    return;
  }

  const url = new URL(request.url);
  url.search = '';
  const navigation = request.mode === 'navigate' && request.url.startsWith(self.registration.scope);
  const shellUrl = navigation ? shellUrls[0] : shellUrls.find(path => path === url.href);

  if (shellUrl) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(shellUrl);

      if (cached) return cached;

      const response = await fetch(shellUrl, { cache: 'no-cache' });
      if (response.ok) {
        try { await cache.put(shellUrl, response.clone()); } catch { /* Storage may be full. */ }
      }
      return response;
    })());
  }
});
