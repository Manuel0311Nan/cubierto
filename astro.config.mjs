// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Si cambias el dominio (también en src/config/site.ts).
export default defineConfig({
  site: 'https://cubierto.site',
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
