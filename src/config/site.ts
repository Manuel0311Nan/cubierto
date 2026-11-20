/**
 * Configuración central de la web.
 * Todo lo que tengas que cambiar (marca, contacto, precios, tus datos) está aquí.
 * Los valores marcados con TODO son provisionales: revísalos antes de publicar.
 */

export const site = {
  name: 'Cubierto',
  /**
   * "Apellido" de la marca. "Cubierto" es una palabra común: al buscarla salen el diccionario
   * y tiendas de cubiertos. El nombre completo sale junto al logo, en og:site_name y en el JSON-LD,
   * y es el que se usa en Instagram, LinkedIn y directorios. En la ficha de Google el nombre
   * es solo "Cubierto" (sus directrices no permiten añadir descripciones al nombre).
   */
  brandLine: 'carta QR y reservas',
  fullName: 'Cubierto · carta QR y reservas',
  alternateName: ['Cubierto · carta QR y reservas', 'cubierto.site'],
  url: 'https://cubierto.site', // se usa en canonical, sitemap y JSON-LD (cámbialo también en astro.config.mjs)
  locale: 'es_ES',
  tagline: 'Webs, carta QR y reservas para bares y restaurantes',
  description:
    'Web, carta digital con QR y reservas online para bares y restaurantes de Alcalá de Henares y el Corredor del Henares. Funcionando en una semana.',
  city: 'Alcalá de Henares',
  region: 'Comunidad de Madrid',
  /** Zonas que atiendes (JSON-LD). `type` es el tipo schema.org: City para municipios, Place para comarcas. */
  areaServed: [
    { type: 'City', name: 'Alcalá de Henares' },
    { type: 'City', name: 'Torrejón de Ardoz' },
    { type: 'City', name: 'Guadalajara' },
    { type: 'Place', name: 'Corredor del Henares' },
    { type: 'AdministrativeArea', name: 'Comunidad de Madrid' },
  ],

  contact: {
    email: 'hola@cubierto.site',
    phone: '+34614898447', // formato internacional para tel: y JSON-LD (vacío = no se muestra)
    phoneDisplay: '614 89 84 47', // cómo se lee en la web
    whatsapp: '34614898447', // número para WhatsApp en formato 34600000000 (vacío = no se muestra)
    /**
     * Endpoint que recibe el formulario: /api/contacto/ (src/pages/api/contacto.ts).
     * Se lee de la variable PUBLIC_CONTACT_ENDPOINT. Sin valor, el formulario
     * ofrece enviar el mensaje por email.
     */
    formEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '',
  },

  /**
   * Perfiles públicos de la marca (JSON-LD sameAs). Vacío = no se publica.
   * Rellénalos cuando existan, con el mismo nombre y teléfono que la web.
   */
  profiles: {
    googleBusiness: 'https://maps.google.com/?cid=12569571851848537674', // ficha de Google Business Profile
    instagram: '', // TODO
    linkedin: '', // TODO: página de empresa
  },

  /**
   * Analítica sin cookies (Umami Cloud). Las variables PUBLIC_UMAMI_* lo sobrescriben;
   * déjalas vacías en .env para usar estos valores. Solo cuenta visitas del dominio de `url`
   * (ni localhost ni previews de Vercel).
   */
  umami: {
    src: import.meta.env.PUBLIC_UMAMI_SRC || 'https://cloud.umami.is/script.js',
    websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || 'f814f029-7515-4c47-b8da-2f79f9623a03',
  },

  /** Datos legales para aviso legal y privacidad (LSSI y RGPD). */
  legal: {
    holder: 'Manuel Alcázar',
    taxId: '[NIF]', // TODO
    address: '[Dirección fiscal], Alcalá de Henares (Madrid)', // TODO
    email: 'hola@cubierto.site',
  },

  pilot: {
    enabled: true,
    spots: 3, // locales que buscas para el piloto
    firstMonth: 250, // primer mes con los tres módulos (alta + primera cuota), IVA INCLUIDO. Después, la cuota normal del pack (pricing.pack)
  },
} as const;

export type ModuleKey = 'web' | 'carta' | 'reservas';

/**
 * Precios orientativos sin IVA, salvo `packSetup`, que lleva el IVA incluido.
 * Cambia aquí y se actualiza toda la web. Deben coincidir con cubierto/specs (01-contexto y 05-pagos).
 */
export const pricing = {
  monthly: { web: 39, carta: 24, reservas: 44 } satisfies Record<ModuleKey, number>,
  pack: 79, // los tres módulos juntos
  webSetup: 499, // alta de la web suelta, pago único, IVA INCLUIDO
  packSetup: 499, // alta del pack completo (los tres módulos), pago único, IVA INCLUIDO. Incluye la primera cuota
  vatNote: 'Precios sin IVA, salvo donde se indica. Sin permanencia: das de baja un módulo cuando quieras.',
};

export const nav = [
  { href: '/web-para-restaurantes/', label: 'Web' },
  { href: '/carta-digital-qr/', label: 'Carta QR' },
  { href: '/reservas-online/', label: 'Reservas' },
  { href: '/precios/', label: 'Precios' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
];

export const formatEuros = (n: number) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
