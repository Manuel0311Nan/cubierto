// Genera los iconos de la PWA a partir del logo. Uso: npm run icons
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const mark = (pad) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#1d4a3a"/>
  <g transform="translate(${pad} ${pad}) scale(${(512 - 2 * pad) / 32})">
    <path d="M9 10.5h14l-14 11h14" fill="none" stroke="#e8a317" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;

const rounded = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="120" fill="#1d4a3a"/>
  <g transform="scale(16)"><path d="M9 10.5h14l-14 11h14" fill="none" stroke="#e8a317" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></g>
</svg>`;

await mkdir('public/icons', { recursive: true });
const out = [
  ['public/icons/icon-192.png', rounded, 192],
  ['public/icons/icon-512.png', rounded, 512],
  ['public/icons/maskable-512.png', mark(110), 512],
  ['public/icons/apple-touch-icon.png', mark(70), 180],
];
for (const [file, svg, size] of out) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(file);
  console.log('✓', file);
}
