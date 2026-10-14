const CACHE = 'manjapa-shell-839ece6e1cdb';
const APP_SHELL = ["./","./assets/index-Ch7JN5Ms.css","./assets/index-8cqQB2EH.js","./assets/audio-worker-Bbv11_YK.js","./manifest.webmanifest","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('manjapa-shell-') && key !== CACHE).map(key => caches.delete(key)));
    await self.registration.navigationPreload?.enable();
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request);
    try {
      const preload = await event.preloadResponse;
      const response = preload || await fetch(event.request, { cache: 'no-cache' });
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch {
      return cached ||
        (event.request.mode === 'navigate' ? await cache.match(new URL('./', self.registration.scope)) : undefined) ||
        Response.error();
    }
  })());
});
