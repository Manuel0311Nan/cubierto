import encodeQR from 'qr';
import { site } from '../config/site';

/**
 * QR de una página de la web, generado al compilar, como data URI para un <img>.
 * Oscuro (tinta de la marca) sobre blanco, igual que public/qr/carta-ejemplo.svg.
 */
export const qrSvg = (pathname: string) => {
  const raw = encodeQR(new URL(pathname, site.url).href, 'raw', { ecc: 'medium', border: 2 });
  const n = raw.length;
  let d = '';
  raw.forEach((row, y) => row.forEach((on, x) => {
    if (on) d += `M${x} ${y}h1v1h-1z`;
  }));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h${n}v${n}H0z"/><path fill="#14281f" d="${d}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
