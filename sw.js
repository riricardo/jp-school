// Revisão 5.3: zerar progresso com confirmação.
// Revisão 5.2: uma revisão por erro e intervalo configurável.
// Japcket: quatro habilidades e ajudas — revisão 5.1
// Japcket v4: atualiza um conjunto completo a cada navegação online.
const PREFIX = 'japcket-snapshot-',
  META = 'japcket-meta-v4';
const FILES = ['index.html', 'style.css', 'data.js', 'app.js', 'engine.js', 'manifest.json', 'icon-192.png', 'icon-512.png'];
const base = new URL('./', self.location.href),
  marker = new URL('__snapshot__', base).href;
let active = null,
  refreshing = null;
async function current() {
  if (active) return active;
  const meta = await caches.open(META),
    r = await meta.match(marker);
  return active = r ? await r.text() : null;
}
async function refresh() {
  if (refreshing) return refreshing;
  refreshing = (async () => {
    const abort = new AbortController(),
      timer = setTimeout(() => abort.abort(), 8000);
    try {
      const entries = await Promise.all(FILES.map(async file => {
        const url = new URL(file, base).href;
        const response = await fetch(url, {
          cache: 'no-store',
          signal: abort.signal
        });
        if (!response.ok) throw Error('Incomplete update');
        return [url, response];
      }));
      const parts = await Promise.all(entries.map(async ([url, r]) => url + ':' + Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', await r.clone().arrayBuffer()))).join(',')));
      const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parts.join('|')));
      const name = PREFIX + Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
      const old = await current(),
        cache = await caches.open(name);
      await Promise.all(entries.map(([url, response]) => cache.put(url, response)));
      const meta = await caches.open(META);
      await meta.put(marker, new Response(name));
      active = name;
      await Promise.all((await caches.keys()).filter(k => k.startsWith(PREFIX) && k !== name && k !== old).map(k => caches.delete(k)));
      return name;
    } finally {
      clearTimeout(timer);
    }
  })();
  try {
    return await refreshing;
  } finally {
    refreshing = null;
  }
}
self.addEventListener('install', event => event.waitUntil(refresh().then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) return;
  event.respondWith((async () => {
    let name = await current();
    if (event.request.mode === 'navigate') {
      try {
        name = await refresh();
      } catch {}
      if (name) {
        const c = await caches.open(name);
        return (await c.match(new URL('index.html', base).href)) || fetch(event.request);
      }
      return fetch(event.request);
    }
    if (name) {
      const c = await caches.open(name);
      const clean = new URL(url.href);
      clean.search = '';
      const hit = await c.match(clean.href);
      if (hit) return hit;
    }
    return fetch(event.request);
  })());
});
