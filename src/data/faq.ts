export interface Faq {
  q: string;
  a: string;
  /** Páginas donde se muestra: 'home' o la clave del módulo. */
  on: Array<'home' | 'web' | 'carta' | 'reservas'>;
}

export const faqs: Faq[] = [
  {
    q: '¿Puedo contratar solo una cosa?',
    a: 'Sí. Cada módulo se contrata por separado: puedes empezar solo con la carta QR y añadir reservas o la web más adelante, sin migraciones ni cambios de proveedor. Si contratas los tres, tienes precio de pack.',
    on: ['home'],
  },
  {
    q: '¿Hay permanencia?',
    a: 'No. Pagas mes a mes y das de baja un módulo cuando quieras. Lo único que se paga una vez es el alta de la web, porque incluye el diseño y la puesta en marcha.',
    on: ['home', 'web'],
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
