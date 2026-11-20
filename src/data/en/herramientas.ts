import type { ToolsText } from '../herramientas';

export const tools: ToolsText = {
  tools: [
    {
      slug: 'tabla-alergenos',
      route: 'tablaAlergenos',
      name: 'Printable allergen chart',
      seoTitle: 'Free printable allergen chart',
      seoDescription:
        'Free printable template with the 14 mandatory allergens: list your dishes, mark their allergens and keep the chart at hand in your restaurant. With a sign.',
      h1: 'Printable chart of the 14 allergens',
      intro:
        'A template to write down the dishes on your menu and mark which allergens each one contains. Print it, fill it in by hand and keep it where your team can find it. There’s also a notice to put up in the dining room.',
      service: 'carta',
    },
    {
      slug: 'calculadora-no-shows',
      route: 'calculadora',
      name: 'No-show calculator',
      seoTitle: 'No-show calculator for restaurants',
      seoDescription:
        'Work out how much money your restaurant loses every month to reservations that don’t show up (no-shows), with your own numbers. Free, no sign-up.',
      h1: 'No-show calculator',
      intro:
        'Enter your numbers and see how much revenue you lose each month to tables left empty because someone booked and didn’t come. The starting values are just an example: replace them with your restaurant’s.',
      service: 'reservas',
    },
    {
      slug: 'generador-qr',
      route: 'generadorQr',
      name: 'QR code generator for your menu',
      seoTitle: 'Free QR code generator for your menu',
      seoDescription:
        'Create a free QR code for your menu, website or reservations page and download it as SVG or PNG to print. It never expires, has no ads and needs no sign-up.',
      h1: 'Free QR code generator for your bar’s menu',
      intro:
        'Paste the address of your menu, website or reservations page and download the code to print it. It’s created in your own browser: it doesn’t go through any server, it never expires and it has no ads.',
      service: 'carta',
    },
  ],
  toolsPage: {
    seoTitle: 'Free tools for restaurants',
    seoDescription:
      'Free tools for bars and restaurants: QR code generator, printable allergen chart and a calculator for reservations that don’t show up.',
    h1: 'Free tools for your bar or restaurant',
    intro: 'Templates and calculators for your restaurant’s day-to-day. Free, with no sign-up and no email required.',
  },
  allergenSheet: {
    rows: 15,
    printTable: 'Print chart',
    printSign: 'Print sign',
    noJs: 'To print, use your browser’s Print option (Ctrl + P, or Share > Print on your phone).',
    tableTitle: 'Menu allergens',
    venueLabel: 'Restaurant',
    dateLabel: 'Reviewed on',
    dishLabel: 'Dish',
    legendTitle: 'The 14 allergens you must declare',
    legendIntro:
      'These are the ones in Annex II of Regulation (EU) No 1169/2011. Their derivatives count too: a sauce made with butter contains milk, and a batter made with wheat flour contains gluten.',
    signTitle: 'Allergen information',
    signText:
      'If you have a food allergy or intolerance, please ask our staff. We’ll tell you which allergens each dish contains before you order.',
    signNote:
      'In Spain, if you give allergen information verbally, the rules require you to keep it in writing at the restaurant and to display a visible notice explaining how to ask for it (article 6.5 of Royal Decree 126/2015).',
    howTitle: 'How to use it',
    how: [
      'Write each dish on a row, including those on the daily set menu and the desserts.',
      'Put an X under every allergen the dish contains, including those in sauces, stocks and ready-made products: check their label.',
      'Add the review date and update it every time you change a recipe or a supplier.',
      'Keep the chart where your team can find it at the busiest time, and put the sign somewhere visible in the dining room.',
    ],
    disclaimer:
      'This template helps you organize the information, but it isn’t legal advice. For your specific case, check with the food safety service of your region.',
    sources: [
      { name: 'Regulation (EU) No 1169/2011, Annex II', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1169' },
      { name: 'Royal Decree 126/2015 (BOE, in Spanish)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-2293' },
    ],
  },
  noShowCalc: {
    fields: {
      reservations: { value: 300, min: 1, max: 10000, step: 1, label: 'Reservations per month' },
      noShowRate: { value: 5, min: 0, max: 100, step: 0.5, label: 'Out of every 100 reservations, how many don’t show up?' },
      partySize: { value: 2.5, min: 1, max: 30, step: 0.5, label: 'Average guests per reservation' },
      ticket: { value: 25, min: 1, max: 500, step: 0.5, label: 'Average spend per guest (€)' },
    },
    resultTitle: 'What empty tables cost you',
    noJs: 'The calculator needs JavaScript. If it’s turned off, do the math like this: reservations per month × (no-shows per 100 ÷ 100) × guests per reservation × average spend.',
    formula: 'Reservations per month × no-shows ÷ 100 × guests per reservation × average spend per guest.',
    tipsTitle: 'What helps guests show up or let you know',
    tips: [
      { title: 'A reminder the day before', text: 'A message with the time and a cancellation link. For someone who can’t come, letting you know takes a second, and you get the table back.' },
      { title: 'Make cancelling easy', text: 'If cancelling means calling at the busiest time, many people won’t. A link in the email solves it.' },
      { title: 'Ask for a phone number when booking', text: 'That way you can call a group that hasn’t arrived after 15 minutes and free up the table if they don’t answer.' },
      { title: 'Confirm large groups', text: 'An empty table for 10 hurts more. For groups, confirm the day before or ask them to message you.' },
      { title: 'Waiting list', text: 'If someone cancels, the table goes to the next person on the list instead of staying empty.' },
      { title: 'Keep track of no-shows', text: 'Marking “no-show” on each reservation tells you whether it’s a one-off or a real problem, and with which guests.' },
    ],
  },
  qrGenerator: {
    inputLabel: 'Address or text for the QR code',
    inputHint: 'For example, your menu’s address: https://yourbar.com/menu',
    placeholder: 'https://',
    sizeLabel: 'PNG size',
    sizes: [512, 1024, 2048],
    downloadSvg: 'Download SVG',
    downloadPng: 'Download PNG',
    previewAlt: 'QR code preview',
    empty: 'Type an address to see the QR code.',
    tooLong: 'The text is too long for a QR code. Use a shorter address.',
    noJs: 'The generator needs JavaScript to create the code in your browser.',
    tipsTitle: 'Before you print it',
    tips: [
      { title: 'Test it with two phones', text: 'An Android and an iPhone, from the distance a seated guest will scan it.' },
      { title: 'Don’t make it small', text: 'Bigger is better than smaller, with a white margin around it and dark on light. Don’t put it over photos or patterned backgrounds.' },
      { title: 'Tell people what it is', text: 'A short line next to it, like “Scan to see the menu”, gets more people to use it.' },
      { title: 'This QR code is static', text: 'It goes straight to the address you enter. If you change that address one day, you’ll have to print it again, so it’s best to point it to an address that won’t change.' },
    ],
    paperNote:
      'Remember: the QR code complements the paper menu, it doesn’t replace it. In the Community of Madrid, restaurants must always offer the menu and price list on paper too.',
  },
};
