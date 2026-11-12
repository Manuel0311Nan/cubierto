/**
 * Configuración central de la web.
 * Todo lo que tengas que cambiar (marca, contacto, precios, tus datos) está aquí.
 * Los valores marcados con TODO son provisionales: revísalos antes de publicar.
 */

export const site = {
  name: 'Cubierto',
  url: 'https://cubierto.com', // TODO: dominio definitivo (se usa en canonical, sitemap y JSON-LD)
  locale: 'es_ES',
  tagline: 'Webs, carta QR y reservas para bares y restaurantes',
  description:
    'Web, carta digital con QR y reservas online para bares y restaurantes de Alcalá de Henares y el Corredor del Henares. Funcionando en una semana.',
  city: 'Alcalá de Henares',
  region: 'Comunidad de Madrid',
  areaServed: ['Alcalá de Henares', 'Torrejón de Ardoz', 'Guadalajara', 'Corredor del Henares', 'Madrid'],

  contact: {
    email: 'hola@cubierto.com', // TODO: email real
    phone: '', // TODO: teléfono en formato +34600000000 (vacío = no se muestra)
    whatsapp: '', // TODO: número para WhatsApp en formato 34600000000 (vacío = no se muestra)
    /**
     * Endpoint que recibe el formulario (por ejemplo un webhook de n8n).
     * Se lee de la variable PUBLIC_CONTACT_ENDPOINT. Sin valor, el formulario
     * ofrece enviar el mensaje por email.
     */
    formEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '',
  },

  /** Analítica sin cookies (Umami). Vacío = sin analítica. */
  umami: {
    src: import.meta.env.PUBLIC_UMAMI_SRC ?? '',
    websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '',
  },

  /** Datos legales para aviso legal y privacidad (LSSI y RGPD). */
  legal: {
    holder: '[Nombre y apellidos o razón social]', // TODO
    taxId: '[NIF]', // TODO
    address: '[Dirección fiscal], Alcalá de Henares (Madrid)', // TODO
    email: 'hola@cubierto.com', // TODO
  },

  pilot: {
    enabled: true,
    spots: 3, // locales que buscas para el piloto
    discountText: 'Primeros 3 meses a mitad de precio', // TODO: confirmar oferta
  },
} as const;

export type ModuleKey = 'web' | 'carta' | 'reservas';

/** Precios orientativos sin IVA. Cambia aquí y se actualiza toda la web. */
export const pricing = {
  monthly: { web: 39, carta: 24, reservas: 44 } satisfies Record<ModuleKey, number>,
  pack: 79, // los tres módulos juntos
  webSetupFrom: 600, // alta de la web, pago único
  vatNote: 'Precios sin IVA. Sin permanencia: das de baja un módulo cuando quieras.',
};

export const nav = [
  { href: '/web-para-restaurantes/', label: 'Web' },
  { href: '/carta-digital-qr/', label: 'Carta QR' },
  { href: '/reservas-online/', label: 'Reservas' },
  { href: '/#precios', label: 'Precios' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
];

export const formatEuros = (n: number) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
