import { locales, defaultLocale, type Locale } from './config';

/**
 * Direcciones de cada página en cada idioma. Las de español no se cambian nunca (posicionamiento y QR impresos).
 * Una página que solo existe en español (guías, textos legales) solo tiene `es`: desde otros idiomas se enlaza a la española.
 * Las páginas en inglés y portugués se generan desde src/pages/[locale]/[...path].astro con la vista de src/views/.
 */
export const routes = {
  home: { es: '/', en: '/en/', pt: '/pt/' },
  web: { es: '/web-para-restaurantes/', en: '/en/restaurant-website/', pt: '/pt/site-para-restaurantes/' },
  carta: { es: '/carta-digital-qr/', en: '/en/qr-menu/', pt: '/pt/menu-digital-qr/' },
  cartaEjemplo: { es: '/carta-digital-qr/ejemplo/', en: '/en/qr-menu/example/', pt: '/pt/menu-digital-qr/exemplo/' },
  reservas: { es: '/reservas-online/', en: '/en/online-reservations/', pt: '/pt/reservas-online/' },
  precios: { es: '/precios/', en: '/en/pricing/', pt: '/pt/precos/' },
  sobreMi: { es: '/sobre-mi/', en: '/en/about/', pt: '/pt/sobre-mim/' },
  contacto: { es: '/contacto/', en: '/en/contact/', pt: '/pt/contacto/' },
  gracias: { es: '/gracias/', en: '/en/thanks/', pt: '/pt/obrigado/' },
  noEnviado: { es: '/no-enviado/', en: '/en/not-sent/', pt: '/pt/nao-enviado/' },
  offline: { es: '/offline/', en: '/en/offline/', pt: '/pt/offline/' },
  herramientas: { es: '/herramientas/', en: '/en/tools/', pt: '/pt/ferramentas/' },
  tablaAlergenos: { es: '/herramientas/tabla-alergenos/', en: '/en/tools/allergen-chart/', pt: '/pt/ferramentas/tabela-alergenios/' },
  calculadora: { es: '/herramientas/calculadora-no-shows/', en: '/en/tools/no-show-calculator/', pt: '/pt/ferramentas/calculadora-no-shows/' },
  generadorQr: { es: '/herramientas/generador-qr/', en: '/en/tools/qr-code-generator/', pt: '/pt/ferramentas/gerador-qr/' },
  // Solo en español
  guias: { es: '/guias/' },
  avisoLegal: { es: '/aviso-legal/' },
  privacidad: { es: '/privacidad/' },
  cookies: { es: '/cookies/' },
} satisfies Record<string, Partial<Record<Locale, string>> & { es: string }>;

export type RouteKey = keyof typeof routes;

/** Dirección de una página en un idioma; si no está traducida, la española. */
export const path = (key: RouteKey, locale: Locale): string =>
  (routes[key] as Partial<Record<Locale, string>>)[locale] ?? routes[key].es;

/** ¿Existe esta página en este idioma? */
export const hasLocale = (key: RouteKey, locale: Locale) => locale in routes[key];

/** Páginas que existen en todos los idiomas (las que genera [locale]/[...path].astro). */
export const translatedKeys = (Object.keys(routes) as RouteKey[]).filter((k) => locales.every((l) => hasLocale(k, l)));

/** Qué página es una dirección, para el selector de idioma y los hreflang. */
export const routeOf = (pathname: string): { key: RouteKey; locale: Locale } | undefined => {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const key of Object.keys(routes) as RouteKey[]) {
    for (const [locale, value] of Object.entries(routes[key]) as Array<[Locale, string]>) {
      if (value === p) return { key, locale };
    }
  }
  return undefined;
};

/** Versiones de una dirección en cada idioma (solo las que existen). */
export const alternatesOf = (pathname: string): Array<{ locale: Locale; href: string }> => {
  const found = routeOf(pathname);
  if (!found) return [];
  return locales.filter((l) => hasLocale(found.key, l)).map((l) => ({ locale: l, href: path(found.key, l) }));
};

export { defaultLocale };
