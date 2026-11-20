import type { ServiceModule } from '../modules';
import { path } from '../../i18n/routes';

export const modules: ServiceModule[] = [
  {
    key: 'carta',
    name: 'QR code menu',
    href: path('carta', 'en'),
    pitch: 'You change a price or mark a dish as sold out from your phone, and your guests see it instantly. The printed menu comes out just as up to date.',
    highlights: [
      'The 14 mandatory allergens, with icons and a filter',
      'A daily set menu that shows up on its own at the right time',
      'Translated into English, French and more languages',
      'One QR code per table, ready to print',
    ],
  },
  {
    key: 'reservas',
    name: 'Online reservations',
    href: path('reservas', 'en'),
    pitch: 'Your guests book at any time from your website, Instagram or Google. You see the whole day on one screen, and double bookings are a thing of the past.',
    highlights: [
      'Instant confirmation by email',
      'A reminder 24 hours before, with a link to cancel',
      'A dining room view for service, on a tablet or phone',
      'Phone reservations and walk-ins in the same place',
    ],
  },
  {
    key: 'web',
    name: 'Website with maintenance',
    href: path('web', 'en'),
    pitch: 'A fast website on your own domain, built so people find you on Google when they search for where to eat nearby.',
    highlights: [
      'You change text, photos and opening hours whenever you want',
      'Ready to show up in local searches',
      'A contact form that reaches your phone',
      'Hosting, domain, backups and small changes included',
    ],
  },
];
