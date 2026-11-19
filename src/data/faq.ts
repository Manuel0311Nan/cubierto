import { site, pricing, formatEuros } from '../config/site';

export interface Faq {
  q: string;
  a: string;
  /** Páginas donde se muestra: 'home', 'precios' o la clave del módulo. */
  on: Array<'home' | 'precios' | 'web' | 'carta' | 'reservas'>;
}

const cities = site.areaServed.filter((a) => a.type === 'City').map((a) => a.name);
const vat = 'sin IVA';

export const faqs: Faq[] = [
  {
    q: '¿Puedo contratar solo una cosa?',
    a: 'Sí. Cada módulo se contrata por separado: puedes empezar solo con la carta QR y añadir reservas o la web más adelante, sin migraciones ni cambios de proveedor. Si contratas los tres, tienes precio de pack.',
    on: ['home', 'precios'],
  },
  {
    q: `¿Trabajas fuera de ${site.city}?`,
    a: `Sí. Trabajo con bares y restaurantes de ${cities.join(', ')} y el resto del Corredor del Henares. La puesta en marcha te la hago en persona, en tu local.`,
    on: ['home', 'web', 'carta', 'reservas'],
  },
  {
    q: '¿Sirve para un bar o una cafetería, o solo para restaurantes?',
    a: 'Sirve para cualquier local con carta: bares de tapas, cafeterías, restaurantes con menú del día o de carta. Si tienes barra y comedor, la carta QR y las reservas funcionan igual.',
    on: ['home', 'carta'],
  },
  {
    q: '¿Cuánto cuesta la carta digital con QR?',
    a: `${formatEuros(pricing.monthly.carta)} al mes ${vat}, sin pago de alta y sin permanencia. Incluye cambios ilimitados por tu parte, varios idiomas y el PDF con los QR de tus mesas.`,
    on: ['carta', 'precios'],
  },
  {
    q: '¿Mis clientes tienen que descargar una app para ver el menú QR?',
    a: 'No. Escanean el QR con la cámara del móvil y la carta se abre en el navegador, sin instalar nada ni registrarse.',
    on: ['carta'],
  },
  {
    q: '¿Cuánto cuesta el sistema de reservas?',
    a: `${formatEuros(pricing.monthly.reservas)} al mes ${vat}, siempre la misma cuota: no hay comisión por comensal ni por reserva, reserven 50 o 500 personas. Sin permanencia.`,
    on: ['reservas', 'precios'],
  },
  {
    q: '¿Qué pasa si un cliente reserva y no se presenta?',
    a: 'El día antes le llega un recordatorio con un enlace para cancelar, así que la mesa se libera si no va a venir. Si aun así no aparece, lo marcas como "no vino" y queda apuntado en su ficha para la próxima vez.',
    on: ['reservas'],
  },
  {
    q: '¿Cuánto cuesta una página web para un restaurante?',
    a: `El alta, que incluye el diseño y la puesta en marcha, es un pago único desde ${formatEuros(pricing.webSetupFrom)} ${vat}. Después, ${formatEuros(pricing.monthly.web)} al mes ${vat} con hosting, dominio, copias de seguridad y cambios pequeños incluidos. Si contratas los tres módulos, el alta del pack completo es de ${formatEuros(pricing.packSetup)} con IVA incluido.`,
    on: ['web', 'precios'],
  },
  {
    q: '¿Cuánto cuesta el pack completo?',
    a: `Los tres módulos (web, carta QR y reservas) cuestan ${formatEuros(pricing.pack)} al mes ${vat}, más un alta única de ${formatEuros(pricing.packSetup)} con IVA incluido. Sin permanencia: si un día dejas un módulo, pasas a pagar solo los que sigas usando.`,
    on: ['precios'],
  },
  {
    q: '¿La web me ayuda a salir en Google Maps?',
    a: 'Ayuda, pero Google Maps se alimenta sobre todo de tu ficha de Google Business Profile. La web le da a Google tus datos (dirección, horario, carta y reservas) de forma ordenada y enlaza con tu ficha. Si todavía no tienes ficha, es lo primero que conviene crear.',
    on: ['web'],
  },
  {
    q: '¿Hay permanencia?',
    a: 'No. Pagas mes a mes y das de baja un módulo cuando quieras. Lo único que se paga una vez es el alta de la web, porque incluye el diseño y la puesta en marcha.',
    on: ['home', 'web', 'precios'],
  },
  {
    q: '¿Cuánto se tarda en tenerlo funcionando?',
    a: 'La carta QR suele estar lista en un día, en cuanto me pasas la carta. Las reservas, en dos o tres días. La web, en torno a una semana desde que tengo fotos y textos.',
    on: ['home', 'web', 'carta', 'reservas'],
  },
  {
    q: 'No se me dan bien los ordenadores. ¿Lo voy a poder usar?',
    a: 'Está pensado para usarlo desde el móvil durante el servicio: marcar un plato agotado o sentar una reserva es un toque. Te lo dejo configurado y te enseño en persona en tu local.',
    on: ['home', 'carta', 'reservas'],
  },
  {
    q: '¿Qué pasa con los alérgenos?',
    a: 'Cada plato lleva marcados los 14 alérgenos de declaración obligatoria, con icono y nombre. El cliente puede filtrar la carta, por ejemplo para ver solo platos sin gluten. La información la decides tú; la carta te avisa si un plato no tiene ninguno marcado.',
    on: ['carta'],
  },
  {
    q: '¿Tengo que cambiar los QR si cambio la carta?',
    a: 'No. El QR apunta siempre a tu carta online, así que cambias precios, platos o el menú del día y el QR impreso sigue sirviendo.',
    on: ['carta'],
  },
  {
    q: '¿Y si se llenan dos reservas a la vez para la última mesa?',
    a: 'El sistema comprueba la capacidad en el mismo momento de guardar cada reserva, así que nunca acepta más gente de la que has configurado por franja, aunque dos personas reserven en el mismo segundo.',
    on: ['reservas'],
  },
  {
    q: '¿Puedo poner las reservas en mi web actual?',
    a: 'Sí. Te doy una línea de código que se pega en cualquier web, y también un enlace directo para Instagram, Google y WhatsApp.',
    on: ['reservas'],
  },
  {
    q: '¿Quién se queda con los datos de mis clientes?',
    a: 'Tú. Los datos de tus comensales son tuyos; yo los trato solo para prestarte el servicio, con un contrato de encargo de tratamiento según el RGPD. Si te das de baja, puedes llevártelos.',
    on: ['home', 'reservas'],
  },
  {
    q: '¿El dominio es mío?',
    a: 'Sí. Si ya tienes dominio lo conectamos; si no, lo registramos a tu nombre.',
    on: ['web'],
  },
  {
    q: '¿Qué incluye el mantenimiento de la web?',
    a: 'Hosting, dominio y certificado de seguridad, copias de seguridad, actualizaciones y cambios pequeños cada mes (un texto, una foto, un horario especial). Los cambios grandes se presupuestan aparte.',
    on: ['web'],
  },
];

export const faqsFor = (page: Faq['on'][number]) => faqs.filter((f) => f.on.includes(page));
