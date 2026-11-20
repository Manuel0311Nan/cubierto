import { localeFromPath, type Locale } from './config';
import { es, type Dict } from './es';
import { en } from './en';
import { pt } from './pt';

export * from './config';
export { path, routes, type RouteKey } from './routes';
export { money, money2, fill } from './format';

const dicts: Record<Locale, Dict> = { es, en, pt };

/** Textos de la interfaz en un idioma. */
export const t = (locale: Locale): Dict => dicts[locale];

/** Idioma de la página que se está generando. */
export const getLocale = (astro: { url: URL }): Locale => localeFromPath(astro.url.pathname);
