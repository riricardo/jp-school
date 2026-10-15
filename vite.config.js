import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/jp-school/' : '/',
  plugins: [{
    name: 'offline-shell',
    apply: 'build',
    generateBundle(_, bundle) {
      const files = Object.keys(bundle).filter(file => !file.endsWith('.map'));
      const hash = createHash('sha256');
      for (const file of files) hash.update(file).update(bundle[file].code || String(bundle[file].source || ''));
      for (const file of ['sw.js', 'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png']) {
        hash.update(readFileSync(new URL(`./public/${file}`, import.meta.url)));
      }
      const shell = ['./', ...files.map(file => `./${file}`), './manifest.webmanifest',
        './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];
      const template = readFileSync(new URL('./public/sw.js', import.meta.url), 'utf8');
      if (!/^const CACHE = .*;$/m.test(template) || !/^const APP_SHELL = .*;$/m.test(template)) {
        throw new Error('Missing service worker precache markers');
      }
      const source = template
        .replace(/^const CACHE = .*;$/m, `const CACHE = CACHE_PREFIX + '${hash.digest('hex').slice(0, 12)}';`)
        .replace(/^const APP_SHELL = .*;$/m, `const APP_SHELL = ${JSON.stringify(shell)};`);
      this.emitFile({ type: 'asset', fileName: 'sw.js', source });
    }
  }]
}));
