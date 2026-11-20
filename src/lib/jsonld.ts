import type { Faq } from '../data/faq';
import { site } from '../config/site';
import { path, t, type Locale } from '../i18n';

export const faqJsonLd = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbJsonLd = (items: Array<{ name: string; path: string }>, locale: Locale = 'es') => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: t(locale).common.home, path: path('home', locale) }, ...items].map((it, i) => ({
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
  /** Alta de pago único con IVA incluido, si la hay. */
  setup?: number;
  locale?: Locale;
}) => {
  const m = t(opts.locale ?? 'es').meta;
  return {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: new URL(opts.path, site.url).href,
  provider: { '@id': `${site.url}/#negocio` },
  areaServed: site.areaServed.map(({ type, name }) => ({ '@type': type, name })),
  audience: { '@type': 'BusinessAudience', name: m.audience },
  offers: [
    {
      '@type': 'Offer',
      name: m.offerMonthly,
      priceCurrency: 'EUR',
      price: opts.price,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: opts.price,
        priceCurrency: 'EUR',
        unitText: m.unitMonth,
        valueAddedTaxIncluded: false,
      },
    },
    ...(opts.setup
      ? [
          {
            '@type': 'Offer',
            name: m.offerSetup,
            priceCurrency: 'EUR',
            price: opts.setup,
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: opts.setup,
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: true,
            },
          },
        ]
      : []),
  ],
  };
};

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
