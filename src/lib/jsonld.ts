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

export const serviceJsonLd = (opts: {
  name: string;
  description: string;
  path: string;
  price: number;
  /** Alta de pago único, si la hay (precio "desde"). */
  setupFrom?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: new URL(opts.path, site.url).href,
  provider: { '@id': `${site.url}/#negocio` },
  areaServed: site.areaServed.map(({ type, name }) => ({ '@type': type, name })),
  audience: { '@type': 'BusinessAudience', name: 'Bares y restaurantes' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Cuota mensual',
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
    ...(opts.setupFrom
      ? [
          {
            '@type': 'Offer',
            name: 'Alta (pago único)',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: opts.setupFrom,
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
        ]
      : []),
  ],
});

export const personId = `${site.url}/sobre-mi/#persona`;

export const articleJsonLd = (opts: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
  author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.title,
  description: opts.description,
  url: new URL(opts.path, site.url).href,
  mainEntityOfPage: new URL(opts.path, site.url).href,
  inLanguage: 'es-ES',
  datePublished: opts.published.toISOString().slice(0, 10),
  dateModified: (opts.updated ?? opts.published).toISOString().slice(0, 10),
  author: { '@type': 'Person', '@id': personId, name: opts.author, url: new URL('/sobre-mi/', site.url).href },
  publisher: { '@id': `${site.url}/#negocio` },
  image: new URL('/og.png', site.url).href,
});
