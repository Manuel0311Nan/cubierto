import type { ExampleText } from '../ejemplo-carta';

/** Casa Brezo’s menu as guests would see it after translating it (MENU-07). Same dishes, prices and allergens as in Spanish. */
export const example: ExampleText = {
  venue: {
    name: 'Casa Brezo',
    kind: 'Market cuisine',
    setMenu: {
      name: 'Daily set menu',
      when: 'Monday to Friday, 1:00 to 4:00 pm',
      price: 13.5,
      includes: 'Starter, main course, dessert, bread and a drink',
    },
    sections: [
      {
        name: 'To share',
        dishes: [
          { name: 'Homemade ham croquettes', description: '8 pieces', price: 9.5, allergens: ['gluten', 'huevo', 'leche'] },
          { name: 'Crispy pork belly bites', price: 7.5, allergens: [] },
          { name: 'Garden tomato with tuna belly', price: 11, allergens: ['pescado'] },
          { name: 'Galician-style octopus', price: 18, allergens: ['moluscos'], soldOut: true },
        ],
      },
      {
        name: 'Mains',
        dishes: [
          { name: 'Iberian pork cheeks in red wine', description: 'With mashed potatoes', price: 16.5, allergens: ['leche', 'sulfitos'] },
          { name: 'Battered hake', description: 'With piquillo peppers', price: 17, allergens: ['pescado', 'gluten', 'huevo'] },
          { name: 'Creamy mushroom rice', price: 14, allergens: ['apio'], tags: ['Vegetarian'] },
          { name: 'Dry-aged beef burger', description: 'Brioche bun, cheddar and whole-grain mustard', price: 15, allergens: ['gluten', 'leche', 'huevo', 'mostaza', 'sesamo'] },
        ],
      },
      {
        name: 'Desserts',
        dishes: [
          { name: 'Baked cheesecake', price: 6, allergens: ['gluten', 'huevo', 'leche'] },
          { name: 'Caramelized torrija (Spanish French toast)', price: 6.5, allergens: ['gluten', 'huevo', 'leche'] },
          { name: 'Seasonal fruit', price: 4.5, allergens: [], tags: ['Vegan'] },
        ],
      },
    ],
  },
  page: {
    seoTitle: 'Sample QR code menu for a restaurant',
    seoDescription:
      'Scan the QR code and see a sample digital menu on your phone: daily set menu, allergens for every dish, gluten-free filter and dishes sold out in real time.',
    h1: 'Sample QR code menu',
    intro:
      'This is how a guest sees your menu when they scan the QR code on the table. It belongs to a made-up restaurant, Casa Brezo, but it works just like yours would: open it on your phone and try it.',
    scanTitle: 'Scan it with your phone',
    scanText: 'Point your phone’s camera at the code. This same menu opens, just as your guest would see it at the table.',
    onPhone: 'You’re already on your phone: this is what your guest sees when they scan the QR code on the table.',
    points: [
      { title: 'Nothing to install', text: 'Guests scan and the menu opens in the browser. No apps, no sign-ups and no cookies.' },
      { title: 'Allergens on every dish', text: 'The 14 mandatory allergens, by name, and a filter to see what each guest can eat.' },
      { title: 'Sold out instantly', text: 'When a dish runs out, you mark it from your phone and the menu shows it right away.' },
      { title: 'Daily set menu at the right time', text: 'It only appears during its hours, and you change it in a couple of minutes.' },
    ],
    note: 'Casa Brezo and its dishes are made up. Your menu has your dishes, your prices and your allergens, which you decide.',
  },
};
