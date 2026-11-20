/**
 * Comprueba la web compilada en los tres idiomas (npm run build && npm run i18n:check).
 * - Que existan todas las páginas de src/i18n/routes.ts en cada idioma.
 * - Que no queden textos en español a la vista en /en/ y /pt/ (lo marcado con lang="es" se salta a propósito).
 * - Que las páginas en inglés y portugués no enlacen sin querer a páginas en español (los enlaces a propósito llevan hreflang).
 * - Que los hreflang sean recíprocos y apunten a páginas que existen.
 * - Títulos y descripciones dentro de los límites del CLAUDE.md.
 * Sin dependencias: lee el HTML con expresiones regulares (es HTML generado por Astro, predecible).
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = '.vercel/output/static';
const SITE = 'https://cubierto.site';

// Rutas: se leen de src/i18n/routes.ts sin compilarlo (solo el bloque `routes = { ... }`).
const src = readFileSync('src/i18n/routes.ts', 'utf8');
const block = src.slice(src.indexOf('export const routes = {'), src.indexOf('} satisfies'));
const routes = {};
for (const m of block.matchAll(/^\s*(\w+): \{([^}]*)\}/gm)) {
  routes[m[1]] = Object.fromEntries([...m[2].matchAll(/(\w+): '([^']+)'/g)].map((x) => [x[1], x[2]]));
}

// Palabras que delatan español en páginas de otro idioma (en portugués, solo las que no existen en portugués).
const spanish = {
  en: /\b(Pedir|carta|reservas|Precios|Inicio|Enviar|también|cuando|mesas|alérgenos|sin IVA|al mes|Ver )\b/,
  pt: /\b(Pedir una|al mes|también|Precios|Inicio|cuando|usted|aquí|alérgenos|móvil|Enviar mensaje|carta digital|nuestro|para tu)\b/,
};

const problems = [];
const warn = (file, msg) => problems.push(`${file}: ${msg}`);

const fileOf = (path) => join(OUT, path, 'index.html');

/** Texto visible: sin <script>, <style>, comentarios ni elementos con lang="es" (y su contenido). */
const visibleText = (html) => {
  const body = html.slice(html.indexOf('<body'));
  const clean = body.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<!--[\s\S]*?-->/g, '');
  let out = '';
  const stack = [];
  let skipDepth = 0;
  const voids = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
  for (const m of clean.matchAll(/<(\/?)([a-zA-Z][\w-]*)([^>]*)>|([^<]+)/g)) {
    const [, closing, tag, attrs, text] = m;
    if (text) {
      if (!skipDepth) out += text + ' ';
      continue;
    }
    const name = tag.toLowerCase();
    if (closing) {
      while (stack.length) {
        const top = stack.pop();
        if (top.skip) skipDepth--;
        if (top.name === name) break;
      }
    } else if (!voids.has(name) && !attrs.trim().endsWith('/')) {
      const skip = /\blang="es"/.test(attrs);
      if (skip) skipDepth++;
      stack.push({ name, skip });
    }
  }
  return out.replace(/&nbsp;|&#160;/g, ' ').replace(/\s+/g, ' ');
};

// 1. Páginas
const translated = Object.entries(routes).filter(([, r]) => r.en && r.pt);
for (const [key, r] of Object.entries(routes)) {
  for (const [locale, path] of Object.entries(r)) {
    if (!existsSync(fileOf(path))) warn(path, `falta la página (${key}, ${locale})`);
  }
}

// 2-5. Revisión de cada página generada
const htmlFiles = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? htmlFiles(p) : f === 'index.html' ? [p] : [];
  });

for (const file of htmlFiles(OUT)) {
  const path = '/' + file.slice(OUT.length + 1).replace(/index\.html$/, '');
  const locale = path.startsWith('/en/') ? 'en' : path.startsWith('/pt/') ? 'pt' : 'es';
  const html = readFileSync(file, 'utf8');
  const noindex = html.includes('name="robots" content="noindex"');

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  if (!noindex && title.replace(/ \| Cubierto$/, '').length > 60) warn(path, `título largo (${title.length}): ${title}`);
  if (desc.replace(/&[a-z#0-9]+;/g, 'x').length > 160) warn(path, `descripción de más de 160 caracteres (${desc.length})`);

  if (locale !== 'es') {
    const lang = html.match(/<html lang="([^"]+)"/)?.[1];
    if (!lang?.startsWith(locale)) warn(path, `<html lang="${lang}">`);
    const text = visibleText(html);
    const hit = text.match(spanish[locale]);
    if (hit) {
      const i = text.indexOf(hit[0]);
      warn(path, `posible texto en español: «…${text.slice(Math.max(0, i - 40), i + 50).trim()}…»`);
    }
    for (const m of html.matchAll(/<a\b([^>]*)>/g)) {
      const href = m[1].match(/href="([^"]+)"/)?.[1] ?? '';
      if (!href.startsWith('/') || href.startsWith('//') || /\.(svg|png|pdf|xml)$/.test(href)) continue;
      if (href.startsWith(`/${locale}/`) || /\bhreflang=/.test(m[1])) continue;
      warn(path, `enlace a una página en español sin avisar: ${href}`);
    }
  }

  // hreflang
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => ({ lang: m[1], href: m[2] }));
  for (const a of alts) {
    const target = a.href.replace(SITE, '');
    if (!existsSync(fileOf(target))) {
      warn(path, `hreflang ${a.lang} apunta a una página que no existe: ${target}`);
      continue;
    }
    if (a.lang === 'x-default') continue;
    const back = readFileSync(fileOf(target), 'utf8');
    if (!back.includes(`href="${SITE}${path}"`)) warn(path, `hreflang sin vuelta desde ${target}`);
  }
  if (!noindex && translated.some(([, r]) => Object.values(r).includes(path)) && alts.length === 0) warn(path, 'página traducida sin hreflang');
}

if (problems.length) {
  console.log(problems.join('\n'));
  console.log(`\n${problems.length} avisos`);
  process.exit(1);
}
console.log(`i18n: todo en orden (${Object.keys(routes).length} rutas, ${translated.length} en los tres idiomas).`);
