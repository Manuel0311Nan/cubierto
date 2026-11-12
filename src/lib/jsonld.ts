import type { Faq } from '../data/faq';
import { site } from '../config/site';

export const faqJsonLd = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbJsonLd = (items: Array<{ name: string; path: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Inicio', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: new URL(it.path, site.url).href,
  })),
});

export const serviceJsonLd = (opts: { name: string; description: string; path: string; price: number }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: new URL(opts.path, site.url).href,
  provider: { '@id': `${site.url}/#negocio` },
  areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  audience: { '@type': 'BusinessAudience', name: 'Bares y restaurantes' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: opts.price,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: opts.price,
      priceCurrency: 'EUR',
      unitText: 'mes',
      valueAddedTaxIncluded: false,
    },
  },
});
