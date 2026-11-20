import type { ModuleKey } from '../config/site';
import { path, type Locale } from '../i18n';

export interface ServicePageData {
  key: ModuleKey;
  path: string;
  /** <title> y H1 pensados para la búsqueda que queremos posicionar. */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  /** Cómo es hoy y cómo será: lo que el dueño reconoce de su día a día. */
  beforeAfter: Array<{ before: string; after: string }>;
  features: Array<{ title: string; text: string }>;
  included: string[];
  /** Título del formulario de contacto al final de la página y de sus guías. */
  contactHeading: string;
}

export const services: Record<ModuleKey, ServicePageData> = {
  carta: {
    key: 'carta',
    path: path('carta', 'es'),
    seoTitle: 'Carta digital QR para restaurantes en Alcalá',
    seoDescription:
      'Carta digital con QR para tu bar o restaurante: alérgenos obligatorios, menú del día, platos agotados al momento y traducción a otros idiomas. Lista en un día.',
    h1: 'Carta digital con QR para tu bar o restaurante',
    intro:
      'Tus clientes escanean el QR de la mesa y ven tu carta o tu menú en su móvil, en su idioma y con los alérgenos claros. Tú la cambias desde el tuyo en segundos, y la carta en papel que pide la normativa sale del mismo sitio, con los mismos precios.',
    beforeAfter: [
      { before: 'Cambias un precio y toca rehacer todas las cartas.', after: 'Lo cambias en el móvil: el QR lo muestra al momento y la carta en papel la imprimes actualizada en un clic.' },
      { before: 'El camarero va mesa por mesa avisando de lo que se ha acabado.', after: 'Marcas el plato como agotado y la carta lo muestra al momento.' },
      { before: 'Los turistas preguntan qué lleva cada plato.', after: 'La carta aparece en inglés, francés o alemán, revisada por ti.' },
      { before: 'Un cliente con alergia te pide la ficha de alérgenos.', after: 'Cada plato muestra sus alérgenos y el cliente puede filtrar la carta.' },
    ],
    features: [
      { title: 'Los 14 alérgenos, bien explicados', text: 'Iconos y nombre de cada alérgeno de declaración obligatoria, y un filtro para ver solo lo que puede comer cada cliente.' },
      { title: 'Menú del día a su hora', text: 'El menú del día aparece de lunes a viernes al mediodía y se esconde solo fuera de horario. Duplicarlo y cambiar los platos lleva un par de minutos.' },
      { title: 'Agotado en un toque', text: 'Una pantalla pensada para el servicio: todos los platos con un interruptor. Al cerrar, "Reponer todo".' },
      { title: 'Traducción asistida', text: 'Traducimos tu carta con inteligencia artificial y tú la revisas antes de publicarla. Si cambias un plato en español, la traducción se marca para revisar.' },
      { title: 'QR por mesa, listo para imprimir', text: 'Un PDF con un QR por mesa y el nombre de tu local. El QR no cambia aunque cambies la carta.' },
      { title: 'Rápida en cualquier móvil', text: 'Carga en menos de dos segundos con datos móviles y sin instalar nada. Sin cookies ni registros para tus clientes.' },
    ],
    included: ['Varias cartas: carta, menú del día, bebidas, postres', 'Carta en PDF para imprimir, siempre igual que la del QR', 'Fotos de los platos', 'Hasta 5 idiomas', 'QR general y por mesa', 'Cambios ilimitados por tu parte'],
    contactHeading: '¿Te enseño tu carta en digital?',
  },
  reservas: {
    key: 'reservas',
    path: path('reservas', 'es'),
    seoTitle: 'Reservas online para restaurantes en Alcalá',
    seoDescription:
      'Reservas online para tu restaurante desde tu web, Instagram y Google: confirmación y recordatorio automáticos, vista de sala y sin dobles reservas.',
    h1: 'Reservas online para tu restaurante, sin comisión por comensal',
    intro:
      'Un programa de reservas para tu restaurante o bar: tus clientes reservan a cualquier hora en menos de un minuto. Tú ves el servicio completo en una pantalla, recibes cada reserva en el móvil y el sistema nunca acepta más gente de la que cabe.',
    beforeAfter: [
      { before: 'El teléfono suena en mitad del servicio para reservar.', after: 'La mayoría reserva online, a cualquier hora.' },
      { before: 'La libreta de reservas, tachones y alguna doble reserva.', after: 'Una vista del día clara, en tablet o móvil, para todo el equipo.' },
      { before: 'Mesas vacías porque alguien no vino y no avisó.', after: 'Recordatorio 24 horas antes con un enlace para cancelar.' },
      { before: 'Pagas una comisión por cada comensal que llega de una plataforma.', after: 'Cuota fija al mes, reserven 50 o 500 personas.' },
    ],
    features: [
      { title: 'Reserva desde donde estén', text: 'Página de reservas propia y un botón que se pega en tu web actual. Enlace directo para Instagram, Google y WhatsApp.' },
      { title: 'Nunca más gente de la que cabe', text: 'Defines cuántos cubiertos entran por franja y en total. El sistema lo comprueba en el momento de guardar cada reserva, aunque dos personas reserven a la vez.' },
      { title: 'Confirmación y recordatorio', text: 'Email de confirmación al momento y recordatorio el día antes con enlace para cancelar. Si lo prefieres, confirmas tú cada reserva a mano.' },
      { title: 'Tu sala en un plano', text: 'Tu local dibujado con sus mesas: ves qué está libre, qué llega y qué está ocupado. Sentar, liberar o marcar "no vino" con un toque. Se actualiza sola.' },
      { title: 'Teléfono y sin reserva, en el mismo sitio', text: 'Apuntas las reservas por teléfono y los clientes que llegan sin reservar, para que el aforo cuadre siempre.' },
      { title: 'Tus clientes, tus datos', text: 'Ficha de cada cliente con sus visitas y notas. Los datos son tuyos y puedes exportarlos cuando quieras.' },
    ],
    included: ['Plano de tu sala con el estado de cada mesa', 'Turnos, capacidades y días cerrados', 'Emails de confirmación y recordatorio', 'Botón para tu web e Instagram', 'Lista de espera', 'Usuarios para tu equipo'],
    contactHeading: '¿Te enseño cómo reservarían tus clientes?',
  },
  web: {
    key: 'web',
    path: path('web', 'es'),
    seoTitle: 'Páginas web para restaurantes en Alcalá',
    seoDescription:
      'Página web para tu restaurante o bar, rápida y preparada para salir en Google, con dominio propio, mantenimiento incluido y editable por ti desde el móvil.',
    h1: 'Página web para tu restaurante, con mantenimiento incluido',
    intro:
      'Una web rápida, con tu dominio y pensada para que te encuentren cuando alguien busca dónde comer en tu zona. La cambias tú cuando quieras, y del resto me ocupo yo.',
    beforeAfter: [
      { before: 'Tu web la hizo alguien hace años y no sabes cómo cambiarla.', after: 'Cambias textos, fotos y horarios desde el móvil.' },
      { before: 'Cuando buscan restaurantes en tu zona, sales tarde o no sales.', after: 'Web preparada para búsquedas locales y con tus datos claros para Google.' },
      { before: 'Pagas hosting, dominio y arreglos a personas distintas.', after: 'Una cuota con hosting, dominio, copias y cambios pequeños.' },
      { before: 'En el móvil tarda en cargar y se ve mal.', after: 'Carga rápido con datos móviles y se ve bien en cualquier pantalla.' },
    ],
    features: [
      { title: 'Preparada para Google', text: 'Títulos, descripciones y datos estructurados de restaurante (dirección, horario, carta, reservas) para que Google entienda quién eres y dónde estás.' },
      { title: 'La editas tú', text: 'Secciones cerradas que puedes activar, ordenar y rellenar: portada, quiénes somos, galería, horario, cómo llegar, contacto. El diseño se mantiene siempre bien.' },
      { title: 'Conectada con tu carta y tus reservas', text: 'Si tienes los otros módulos, tu web muestra los platos destacados y el botón de reservar, sin copiar nada a mano.' },
      { title: 'Contacto que te llega al móvil', text: 'Cada mensaje del formulario te llega por email y, si quieres, por WhatsApp.' },
      { title: 'Textos legales en regla', text: 'Aviso legal, privacidad y cookies con tus datos. Sin banners de cookies, porque la analítica no las usa.' },
      { title: 'Cuántos te visitan, cada mes', text: 'Un resumen mensual con visitas y cuántos pulsaron "Llamar", "Reservar" o "Ver carta".' },
    ],
    included: ['Diseño adaptado a tu local', 'Dominio, hosting y certificado SSL', 'Copias de seguridad diarias', 'Cambios pequeños cada mes', 'Informe mensual de visitas'],
    contactHeading: '¿Te enseño cómo quedaría tu web?',
  },
};

const byLocale: Record<Locale, Record<ModuleKey, ServicePageData>> = { es: services, en: services, pt: services };

/** Textos de las páginas de servicio en un idioma. */
export const getServices = (locale: Locale) => byLocale[locale];
