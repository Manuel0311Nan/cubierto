/**
 * Gestión de cookies y consentimiento.
 *
 * Cada servicio de terceros que use cookies se declara aquí. Un servicio se
 * activa solo si tiene su identificador (variable de entorno). Mientras no haya
 * ningún servicio activo que necesite consentimiento, el banner no aparece:
 * mostrar un aviso sin cookies que consentir solo estorba al visitante.
 *
 * Criterios aplicados (Guía sobre el uso de las cookies de la AEPD):
 * - Rechazar es igual de fácil y visible que aceptar, en la primera capa.
 * - Nada viene marcado por defecto salvo las técnicas, que no se pueden desactivar.
 * - El consentimiento se puede retirar en cualquier momento desde el pie de página.
 * - Se vuelve a pedir tras CONSENT_MAX_AGE_DAYS o si cambia CONSENT_VERSION.
 */

export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export interface CookieInfo {
  name: string;
  purpose: string;
  duration: string;
}

export interface CookieService {
  id: string;
  name: string;
  provider: string;
  category: Exclude<CookieCategory, 'necessary'>;
  /** Identificador del servicio; vacío = servicio desactivado. */
  key: string;
  cookies: CookieInfo[];
  /** Prefijos de cookies que se borran al retirar el consentimiento. */
  cleanup: string[];
  privacyUrl: string;
}

/** Sube este número si añades servicios o cambian sus finalidades: se vuelve a pedir consentimiento. */
export const CONSENT_VERSION = 1;
/** Validez del consentimiento. La AEPD considera razonable renovarlo como máximo cada 24 meses. */
export const CONSENT_MAX_AGE_DAYS = 365;
export const CONSENT_STORAGE_KEY = 'zl-consent';

export const categories: Record<CookieCategory, { name: string; description: string; required: boolean }> = {
  necessary: {
    name: 'Técnicas',
    description: 'Hacen que la web funcione y recuerdan tu elección sobre cookies. No se pueden desactivar.',
    required: true,
  },
  analytics: {
    name: 'Analítica',
    description: 'Nos dicen cuántas personas visitan la web y qué páginas leen, para mejorarla.',
    required: false,
  },
  marketing: {
    name: 'Publicidad',
    description: 'Miden si nuestros anuncios funcionan y permiten mostrarte anuncios relacionados en otras webs.',
    required: false,
  },
};

const env = import.meta.env;

export const services: CookieService[] = [
  {
    id: 'ga4',
    name: 'Google Analytics 4',
    provider: 'Google Ireland Limited',
    category: 'analytics',
    key: env.PUBLIC_GA_MEASUREMENT_ID ?? '',
    cookies: [
      { name: '_ga', purpose: 'Distingue visitantes', duration: '2 años' },
      { name: '_ga_<ID>', purpose: 'Mantiene el estado de la sesión', duration: '2 años' },
    ],
    cleanup: ['_ga', '_gid', '_gat'],
    privacyUrl: 'https://policies.google.com/privacy',
  },
  {
    id: 'meta-pixel',
    name: 'Píxel de Meta',
    provider: 'Meta Platforms Ireland Limited',
    category: 'marketing',
    key: env.PUBLIC_META_PIXEL_ID ?? '',
    cookies: [{ name: '_fbp', purpose: 'Mide la eficacia de los anuncios en Facebook e Instagram', duration: '3 meses' }],
    cleanup: ['_fbp', '_fbc'],
    privacyUrl: 'https://www.facebook.com/privacy/policy/',
  },
];

/** Cookies y almacenamiento técnico propios (se listan en la política, no necesitan consentimiento). */
export const necessaryStorage: CookieInfo[] = [
  { name: CONSENT_STORAGE_KEY, purpose: 'Guarda tu elección sobre cookies (almacenamiento local, no es una cookie)', duration: `${CONSENT_MAX_AGE_DAYS} días` },
];

export const activeServices = services.filter((s) => s.key);
export const consentRequired = activeServices.length > 0;
export const activeCategories = [...new Set(activeServices.map((s) => s.category))];
