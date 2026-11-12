// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia `site` cuando tengas el dominio definitivo (también en src/config/site.ts).
export default defineConfig({
  site: 'https://zoenlab.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !/\/(offline|gracias)\/$/.test(page),
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
