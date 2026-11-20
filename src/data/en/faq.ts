import { site, pricing } from '../../config/site';
import { money } from '../../i18n/format';
import type { Faq } from '../faq';

const eur = (n: number) => money(n, 'en');
const cities = site.areaServed.filter((a) => a.type === 'City').map((a) => a.name);
const vat = 'excl. VAT';

export const faqs: Faq[] = [
  {
    q: 'Can I sign up for just one thing?',
    a: 'Yes. Each module is sold separately: you can start with just the QR menu and add reservations or the website later, with no migrations and no change of provider. If you take all three, you get the bundle price.',
    on: ['home', 'precios'],
  },
  {
    q: `Do you work outside ${site.city}?`,
    a: `Yes. I work with bars and restaurants in ${cities.join(', ')} and the rest of the Henares Corridor, near Madrid. I set everything up in person, at your restaurant.`,
    on: ['home', 'web', 'carta', 'reservas'],
  },
  {
    q: 'Does it work for a bar or a café, or only for restaurants?',
    a: 'It works for any place with a menu: tapas bars, cafés, restaurants with a daily set menu or à la carte. If you have a bar and a dining room, the QR menu and reservations work just the same.',
    on: ['home', 'carta'],
  },
  {
    q: 'How much does the QR code menu cost?',
    a: `${eur(pricing.monthly.carta)} a month ${vat}, with no setup fee and no long-term contract. It includes unlimited changes on your side, several languages and the PDF with the QR codes for your tables.`,
    on: ['carta', 'precios'],
  },
  {
    q: 'Do my guests have to download an app to see the QR menu?',
    a: 'No. They scan the QR code with their phone’s camera and the menu opens in the browser, with nothing to install and no sign-up.',
    on: ['carta'],
  },
  {
    q: 'How much does the reservation system cost?',
    a: `${eur(pricing.monthly.reservas)} a month ${vat}, always the same fee: no commission per guest or per reservation, whether 50 or 500 people book. No long-term contract.`,
    on: ['reservas', 'precios'],
  },
  {
    q: 'What happens if a guest books and doesn’t show up?',
    a: 'The day before, they get a reminder with a link to cancel, so the table is freed up if they can’t come. If they still don’t show, you mark them as a “no-show” and it’s noted on their profile for next time.',
    on: ['reservas'],
  },
  {
    q: 'How much does a restaurant website cost?',
    a: `The setup, which includes design and launch, is a one-time payment of ${eur(pricing.webSetup)} with VAT included. After that, ${eur(pricing.monthly.web)} a month ${vat}, with hosting, domain, backups and small changes included. If you take all three modules, the full bundle setup is ${eur(pricing.packSetup)} with VAT included and also covers your first month.`,
    on: ['web', 'precios'],
  },
  {
    q: 'How much does the full bundle cost?',
    a: `The three modules (website, QR menu and reservations) cost ${eur(pricing.pack)} a month ${vat}, plus a one-time setup fee of ${eur(pricing.packSetup)} with VAT included that already covers your first month: the first monthly fee is paid in month two. No long-term contract: if you drop a module one day, you only pay for the ones you keep.`,
    on: ['precios'],
  },
  {
    q: 'Does the website help me show up on Google Maps?',
    a: 'It helps, but Google Maps relies mainly on your Google Business Profile. The website gives Google your details (address, opening hours, menu and reservations) in an organized way and links to your profile. If you don’t have a profile yet, that’s the first thing to create.',
    on: ['web'],
  },
  {
    q: 'Can I have just the QR menu, without a paper menu?',
    a: 'No. In the Community of Madrid, restaurants must always offer the menu and price list on paper too, and using the QR code is optional for guests. That’s why you print the paper menu from the same panel, with the same dishes and prices as the QR menu.',
    on: ['carta'],
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. You pay month by month and cancel a module whenever you want. The only one-time payment is the setup of the website or the full bundle, because it includes the design and launch.',
    on: ['home', 'web', 'precios'],
  },
  {
    q: 'How long does it take to get it running?',
    a: 'The QR menu is usually ready in a day, as soon as you send me your menu. Reservations, in two or three days. The website, about a week once I have photos and text.',
    on: ['home', 'web', 'carta', 'reservas'],
  },
  {
    q: 'I’m not great with computers. Will I be able to use it?',
    a: 'It’s designed to be used from your phone during service: marking a dish as sold out or seating a reservation takes one tap. I leave it set up and train you in person at your restaurant.',
    on: ['home', 'carta', 'reservas'],
  },
  {
    q: 'What about allergens?',
    a: 'Each dish has the 14 mandatory allergens marked, with an icon and a name. Guests can filter the menu, for example to see only gluten-free dishes. You decide the information; the menu warns you if a dish has none marked.',
    on: ['carta'],
  },
  {
    q: 'Do I have to change the QR codes if I change the menu?',
    a: 'No. The QR code always points to your online menu, so you can change prices, dishes or the daily set menu and the printed QR code keeps working.',
    on: ['carta'],
  },
  {
    q: 'What if two people book the last table at the same time?',
    a: 'The system checks capacity at the exact moment each reservation is saved, so it never accepts more people than you’ve set per time slot, even if two people book in the same second.',
    on: ['reservas'],
  },
  {
    q: 'Can I add reservations to my current website?',
    a: 'Yes. I give you one line of code that you can paste into any website, plus a direct link for Instagram, Google and WhatsApp.',
    on: ['reservas'],
  },
  {
    q: 'Who owns my guests’ data?',
    a: 'You do. Your guests’ data is yours; I only process it to provide the service, under a data processing agreement as required by the GDPR. If you cancel, you can take it with you.',
    on: ['home', 'reservas'],
  },
  {
    q: 'Is the domain mine?',
    a: 'Yes. If you already have a domain we connect it; if not, we register it in your name.',
    on: ['web'],
  },
  {
    q: 'What does website maintenance include?',
    a: 'Hosting, domain and security certificate, backups, updates and small changes every month (a text, a photo, special opening hours). Bigger changes are quoted separately.',
    on: ['web'],
  },
];
