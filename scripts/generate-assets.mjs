// Genera los iconos de la PWA a partir de los SVG originales de brand/. Uso: npm run icons
// El favicon (public/favicon.svg y favicon.ico) y public/og.png no se generan aquí: se copian de brand/ o se editan a mano.
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';

const app = await readFile('brand/cubierto-icono-app.svg');
const maskable = await readFile('brand/cubierto-icono-maskable.svg');

await mkdir('public/icons', { recursive: true });
const out = [
  ['public/icons/icon-192.png', app, 192],
  ['public/icons/icon-512.png', app, 512],
  ['public/icons/apple-touch-icon.png', app, 180],
  ['public/icons/maskable-512.png', maskable, 512],
];
for (const [file, svg, size] of out) {
  await sharp(svg, { density: 300 }).resize(size, size).png().toFile(file);
  console.log('✓', file);
}
