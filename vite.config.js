import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/jp-school/' : '/',
  plugins: [{
    name: 'offline-shell',
    apply: 'build',
    generateBundle(_, bundle) {
      const files = Object.keys(bundle);
      const hash = createHash('sha256');
      for (const file of files) hash.update(file).update(bundle[file].code || String(bundle[file].source || ''));
      for (const file of ['sw.js', 'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png']) {
        hash.update(readFileSync(new URL(`./public/${file}`, import.meta.url)));
      }
      const shell = ['./', ...files.map(file => `./${file}`), './manifest.webmanifest',
        './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];
      const source = readFileSync(new URL('./public/sw.js', import.meta.url), 'utf8')
        .replace(/const CACHE = .*;/, `const CACHE = 'manjapa-shell-${hash.digest('hex').slice(0, 12)}';`)
        .replace(/const APP_SHELL = .*;/, `const APP_SHELL = ${JSON.stringify(shell)};`);
      this.emitFile({ type: 'asset', fileName: 'sw.js', source });
    }
  }]
}));
