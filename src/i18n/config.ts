/**
 * Idiomas de la web. El español es el idioma por defecto y no lleva prefijo en la dirección;
 * el resto cuelga de /<idioma>/ (ver routes.ts).
 * Para añadir un idioma: añádelo aquí, en routes.ts, un diccionario en src/i18n/ y sus datos en src/data/<idioma>/.
 */
export const locales = ['es', 'en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export interface LocaleInfo {
  /** Atributo lang de <html>. */
  htmlLang: string;
  /** Código para <link rel="alternate" hreflang>. Genérico a propósito: también sirve a quien lo busca desde España. */
  hreflang: string;
  /** og:locale */
  og: string;
  /** Etiqueta para Intl (números, monedas, fechas). */
  intl: string;
  /** Nombre del idioma en su propio idioma (selector). */
  name: string;
  /** Abreviatura visible en el selector. */
  short: string;
}

export const localeInfo: Record<Locale, LocaleInfo> = {
  es: { htmlLang: 'es', hreflang: 'es', og: 'es_ES', intl: 'es-ES', name: 'Español', short: 'ES' },
  en: { htmlLang: 'en-US', hreflang: 'en', og: 'en_US', intl: 'en-US', name: 'English', short: 'EN' },
  pt: { htmlLang: 'pt-PT', hreflang: 'pt', og: 'pt_PT', intl: 'pt-PT', name: 'Português', short: 'PT' },
};

const prefixed = locales.filter((l) => l !== defaultLocale) as string[];

/** Idioma de una dirección: /en/... → en, /pt/... → pt, el resto → es. */
export const localeFromPath = (pathname: string): Locale => {
  const first = pathname.split('/')[1] ?? '';
  return prefixed.includes(first) ? (first as Locale) : defaultLocale;
};
