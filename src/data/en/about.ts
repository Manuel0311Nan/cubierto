import type { AboutTranslation } from '../about';

/** Same order as in about.ts: periods (years) are taken from the Spanish entries. */
export const about: AboutTranslation = {
  role: 'Web developer',
  intro:
    'I’m a developer and I live in Alcalá de Henares. I’ve spent years building apps and websites for businesses, and now I focus on what bars and restaurants in the area need most: being found, getting booked and having a menu that’s always up to date, without depending on anyone to change a price.',
  promise:
    'You deal with me directly: the person who sells you the service is the same person who builds it, installs it at your restaurant and answers the phone if something goes wrong.',
  experience: [
    {
      title: 'Hospitality platform',
      detail:
        'Design and development of the platform behind this website: websites, QR menus and reservations for several restaurants from a single system.',
    },
    { title: 'Corporate and marketing websites', detail: 'Fast websites for businesses, built to show up on Google and win customers.' },
    { title: 'ScheduleAI, staff scheduling', detail: 'An app that helps businesses organize their staff’s hours and shifts.' },
    { title: 'Custom web applications', detail: 'Management applications built with PHP and jQuery for [type of companies or sector].' },
  ],
  education: [
    {
      title: 'Software architecture',
      detail: 'Training in C# and TypeScript: object-oriented programming, SOLID principles, Clean Architecture and domain-driven design (DDD).',
    },
    { title: '[Degree]', detail: '[School]' },
  ],
};
