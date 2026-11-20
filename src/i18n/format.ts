import { localeInfo, type Locale } from './config';

/** Euros sin decimales: 24 € · €24. */
export const money = (n: number, locale: Locale) =>
  new Intl.NumberFormat(localeInfo[locale].intl, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

/** Euros con céntimos, para precios de platos: 9,50 € · €9.50. */
export const money2 = (n: number, locale: Locale) =>
  locale === 'es'
    ? n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
    : new Intl.NumberFormat(localeInfo[locale].intl, { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(n);

/** Fecha larga: 20 de noviembre de 2026 · November 20, 2026. */
export const longDate = (d: Date, locale: Locale) => new Intl.DateTimeFormat(localeInfo[locale].intl, { dateStyle: 'long' }).format(d);

/** Rellena huecos {nombre} de un texto: fill('A las {t}', { t: '14:00' }). */
export const fill = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`));
