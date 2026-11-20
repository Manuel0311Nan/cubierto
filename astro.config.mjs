// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Si cambias el dominio (también en src/config/site.ts).
export default defineConfig({
  site: 'https://cubierto.site',
  trailingSlash: 'always',
  // Todo es estático salvo /api/contacto/ (prerender = false), que se ejecuta como función de Vercel.
  adapter: vercel(),
  env: {
    schema: {
      // Formulario de contacto (src/pages/api/contacto.ts). Se leen en el servidor, nunca llegan al navegador.
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  integrations: [
    sitemap({
      // Páginas que no se indexan, en todos los idiomas (src/i18n/routes.ts).
      filter: (page) => !/\/(offline|gracias|no-enviado|thanks|not-sent|obrigado|nao-enviado)\/$/.test(page),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
