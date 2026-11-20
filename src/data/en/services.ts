import type { ModuleKey } from '../../config/site';
import type { ServicePageData } from '../services';
import { path } from '../../i18n/routes';

export const services: Record<ModuleKey, ServicePageData> = {
  carta: {
    key: 'carta',
    path: path('carta', 'en'),
    seoTitle: 'QR code menu for restaurants in Alcalá',
    seoDescription:
      'QR code menu for your bar or restaurant: mandatory allergens, daily set menu, dishes sold out in real time and translation into other languages. Ready in a day.',
    h1: 'QR code menu for your bar or restaurant',
    intro:
      'Your guests scan the QR code on the table and see your menu on their phone, in their language and with clear allergen information. You change it from your phone in seconds, and the printed menu that the rules require comes from the same place, with the same prices.',
    beforeAfter: [
      { before: 'You change one price and have to redo every menu.', after: 'You change it on your phone: the QR menu shows it instantly and you print the updated paper menu in one click.' },
      { before: 'Your server goes table by table telling guests what has run out.', after: 'You mark the dish as sold out and the menu shows it instantly.' },
      { before: 'Tourists keep asking what each dish contains.', after: 'The menu appears in English, French or German, reviewed by you.' },
      { before: 'A guest with an allergy asks for the allergen sheet.', after: 'Each dish shows its allergens and guests can filter the menu.' },
    ],
    features: [
      { title: 'All 14 allergens, clearly explained', text: 'An icon and the name of each allergen you are required to declare, plus a filter so each guest sees only what they can eat.' },
      { title: 'Daily set menu at the right time', text: 'The daily set menu appears Monday to Friday at lunchtime and hides itself outside those hours. Duplicating it and changing the dishes takes a couple of minutes.' },
      { title: 'Sold out in one tap', text: 'A screen built for service: every dish with a switch. At closing time, “Restock all”.' },
      { title: 'Assisted translation', text: 'We translate your menu with artificial intelligence and you review it before it goes live. If you change a dish in Spanish, its translation is flagged for review.' },
      { title: 'One QR code per table, ready to print', text: 'A PDF with one QR code per table and your restaurant’s name. The QR code stays the same even when you change the menu.' },
      { title: 'Fast on any phone', text: 'It loads in under two seconds on mobile data, with nothing to install. No cookies and no sign-ups for your guests.' },
    ],
    included: ['Several menus: main menu, daily set menu, drinks, desserts', 'Printable PDF menu, always identical to the QR menu', 'Photos of your dishes', 'Up to 5 languages', 'General QR code and one per table', 'Unlimited changes on your side'],
    contactHeading: 'Shall I show you your menu in digital form?',
  },
  reservas: {
    key: 'reservas',
    path: path('reservas', 'en'),
    seoTitle: 'Online reservations for restaurants in Alcalá',
    seoDescription:
      'Online reservations for your restaurant from your website, Instagram and Google: automatic confirmation and reminder, dining room view and no double bookings.',
    h1: 'Online reservations for your restaurant, with no per-guest commission',
    intro:
      'A reservation system for your restaurant or bar: guests book at any time in under a minute. You see the whole service on one screen, get every reservation on your phone, and the system never accepts more people than you can seat.',
    beforeAfter: [
      { before: 'The phone rings in the middle of service for a reservation.', after: 'Most people book online, at any time.' },
      { before: 'A reservation book full of crossed-out names and the odd double booking.', after: 'A clear view of the day, on a tablet or phone, for the whole team.' },
      { before: 'Empty tables because someone didn’t show up and didn’t call.', after: 'A reminder 24 hours before, with a link to cancel.' },
      { before: 'You pay a commission for every guest who comes from a booking platform.', after: 'A flat monthly fee, whether 50 or 500 people book.' },
    ],
    features: [
      { title: 'Reservations from wherever they are', text: 'Your own reservations page and a button you can add to your current website. A direct link for Instagram, Google and WhatsApp.' },
      { title: 'Never more people than you can seat', text: 'You set how many covers fit per time slot and in total. The system checks it the moment each reservation is saved, even if two people book at once.' },
      { title: 'Confirmation and reminder', text: 'A confirmation email right away and a reminder the day before with a link to cancel. If you prefer, you confirm each reservation by hand.' },
      { title: 'Your dining room on a floor plan', text: 'Your restaurant drawn with its tables: you see what’s free, who’s arriving and what’s occupied. Seat, free up or mark a no-show with one tap. It updates on its own.' },
      { title: 'Phone reservations and walk-ins, in the same place', text: 'You add phone reservations and guests who walk in without one, so the numbers always add up.' },
      { title: 'Your guests, your data', text: 'A profile for each guest with their visits and notes. The data is yours and you can export it whenever you want.' },
    ],
    included: ['Floor plan of your dining room with each table’s status', 'Shifts, capacities and closed days', 'Confirmation and reminder emails', 'Button for your website and Instagram', 'Waiting list', 'User accounts for your team'],
    contactHeading: 'Shall I show you how your guests would book?',
  },
  web: {
    key: 'web',
    path: path('web', 'en'),
    seoTitle: 'Restaurant websites in Alcalá',
    seoDescription:
      'A website for your restaurant or bar, fast and ready to show up on Google, with your own domain, maintenance included and editable by you from your phone.',
    h1: 'A website for your restaurant, with maintenance included',
    intro:
      'A fast website, on your own domain, built so people find you when they search for where to eat nearby. You change it whenever you want, and I take care of the rest.',
    beforeAfter: [
      { before: 'Someone built your website years ago and you don’t know how to change it.', after: 'You change text, photos and opening hours from your phone.' },
      { before: 'When people search for restaurants in your area, you show up late or not at all.', after: 'A website ready for local searches, with your details clear for Google.' },
      { before: 'You pay different people for hosting, the domain and fixes.', after: 'One fee covering hosting, domain, backups and small changes.' },
      { before: 'On a phone it’s slow to load and looks wrong.', after: 'It loads fast on mobile data and looks good on any screen.' },
    ],
    features: [
      { title: 'Ready for Google', text: 'Titles, descriptions and restaurant structured data (address, opening hours, menu, reservations) so Google understands who you are and where you are.' },
      { title: 'You edit it', text: 'Ready-made sections you can turn on, reorder and fill in: home, about us, gallery, opening hours, directions, contact. The design always stays tidy.' },
      { title: 'Connected to your menu and reservations', text: 'If you have the other modules, your website shows your featured dishes and the reserve button, with nothing to copy by hand.' },
      { title: 'Contact form straight to your phone', text: 'Every message from the form reaches you by email and, if you like, on WhatsApp.' },
      { title: 'Legal texts in order', text: 'Legal notice, privacy and cookie policies with your details. No cookie banners, because the analytics don’t use cookies.' },
      { title: 'How many people visit, every month', text: 'A monthly summary with visits and how many people tapped “Call”, “Reserve” or “See menu”.' },
    ],
    included: ['Design tailored to your restaurant', 'Domain, hosting and SSL certificate', 'Daily backups', 'Small changes every month', 'Monthly visits report'],
    contactHeading: 'Shall I show you what your website would look like?',
  },
};
