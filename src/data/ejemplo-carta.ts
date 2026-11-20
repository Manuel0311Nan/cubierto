import type { AllergenKey } from './alergenos';
import type { Locale } from '../i18n';

/**
 * Carta de ejemplo de /carta-digital-qr/ejemplo/.
 * "Casa Brezo" y sus platos son inventados (así se indica en la página y en el aviso legal).
 * Los precios son de la carta del restaurante de ejemplo, no tarifas de Cubierto.
 */
export interface ExampleDish {
  name: string;
  description?: string;
  price: number;
  allergens: AllergenKey[];
  soldOut?: boolean;
  tags?: string[];
}

export interface ExampleVenue {
  name: string;
  kind: string;
  setMenu: { name: string; when: string; price: number; includes: string };
  sections: Array<{ name: string; dishes: ExampleDish[] }>;
}

export const exampleVenue: ExampleVenue = {
  name: 'Casa Brezo',
  kind: 'Cocina de mercado',
  setMenu: {
    name: 'Menú del día',
    when: 'Lunes a viernes, de 13:00 a 16:00',
    price: 13.5,
    includes: 'Primero, segundo, postre, pan y bebida',
  },
  sections: [
    {
      name: 'Para compartir',
      dishes: [
        { name: 'Croquetas caseras de jamón', description: '8 unidades', price: 9.5, allergens: ['gluten', 'huevo', 'leche'] },
        { name: 'Torreznos crujientes', price: 7.5, allergens: [] },
        { name: 'Tomate de la huerta con ventresca', price: 11, allergens: ['pescado'] },
        { name: 'Pulpo a la gallega', price: 18, allergens: ['moluscos'], soldOut: true },
      ],
    },
    {
      name: 'Principales',
      dishes: [
        { name: 'Carrillera ibérica al vino tinto', description: 'Con puré de patata', price: 16.5, allergens: ['leche', 'sulfitos'] },
        { name: 'Merluza a la romana', description: 'Con pimientos del piquillo', price: 17, allergens: ['pescado', 'gluten', 'huevo'] },
        { name: 'Arroz meloso de setas', price: 14, allergens: ['apio'], tags: ['Vegetariano'] },
        { name: 'Hamburguesa de vaca madurada', description: 'Pan de brioche, cheddar y mostaza antigua', price: 15, allergens: ['gluten', 'leche', 'huevo', 'mostaza', 'sesamo'] },
      ],
    },
    {
      name: 'Postres',
      dishes: [
        { name: 'Tarta de queso al horno', price: 6, allergens: ['gluten', 'huevo', 'leche'] },
        { name: 'Torrija caramelizada', price: 6.5, allergens: ['gluten', 'huevo', 'leche'] },
        { name: 'Fruta de temporada', price: 4.5, allergens: [], tags: ['Vegano'] },
      ],
    },
  ],
};

/** Textos de la página. */
export const examplePage = {
  seoTitle: 'Ejemplo de carta digital QR para restaurante',
  seoDescription:
    'Escanea el QR y mira en tu móvil una carta digital de ejemplo: menú del día, alérgenos por plato, filtro sin gluten y platos agotados al momento.',
  h1: 'Ejemplo de carta digital con QR',
  intro:
    'Así ve tu carta un cliente cuando escanea el QR de la mesa. Es la carta de un restaurante inventado, Casa Brezo, pero funciona igual que la tuya: ábrela en el móvil y pruébala.',
  scanTitle: 'Escanéala con tu móvil',
  scanText: 'Apunta la cámara del móvil al código. Se abre esta misma carta, como la vería tu cliente sentado a la mesa.',
  onPhone: 'Ya estás en el móvil: esto es lo que ve tu cliente al escanear el QR de la mesa.',
  points: [
    { title: 'Sin instalar nada', text: 'El cliente escanea y la carta se abre en el navegador. Sin apps, sin registros y sin cookies.' },
    { title: 'Alérgenos en cada plato', text: 'Los 14 alérgenos obligatorios, con su nombre, y un filtro para ver qué puede comer cada cliente.' },
    { title: 'Agotado al momento', text: 'Cuando se acaba un plato, lo marcas desde tu móvil y la carta lo muestra al instante.' },
    { title: 'Menú del día a su hora', text: 'Aparece solo en su horario y lo cambias en un par de minutos.' },
  ],
  note: 'Casa Brezo y sus platos son inventados. En tu carta van tus platos, tus precios y tus alérgenos, que decides tú.',
};

export interface ExampleText {
  venue: ExampleVenue;
  page: typeof examplePage;
}

const es: ExampleText = { venue: exampleVenue, page: examplePage };
const byLocale: Record<Locale, ExampleText> = { es, en: es, pt: es };

/** Carta de ejemplo en un idioma: en inglés y portugués, la carta traducida (como haría MENU-07). */
export const getExample = (locale: Locale) => byLocale[locale];
