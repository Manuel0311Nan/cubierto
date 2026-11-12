import type { ModuleKey } from '../config/site';

export interface ServiceModule {
  key: ModuleKey;
  name: string;
  href: string;
  /** Una frase: qué problema resuelve, en palabras del dueño del local. */
  pitch: string;
  /** Qué hace el cliente con ello, en lista corta. */
  highlights: string[];
}

export const modules: ServiceModule[] = [
  {
    key: 'carta',
    name: 'Carta digital con QR',
    href: '/carta-digital-qr/',
    pitch: 'Cambias un precio o marcas un plato como agotado desde el móvil, y tus clientes lo ven al momento. Sin reimprimir.',
    highlights: [
      'Los 14 alérgenos obligatorios con iconos y filtro',
      'Menú del día que aparece solo a su hora',
      'Traducida a inglés, francés y más idiomas',
      'QR por mesa listo para imprimir',
    ],
  },
  {
    key: 'reservas',
    name: 'Reservas online',
    href: '/reservas-online/',
    pitch: 'Tus clientes reservan a cualquier hora desde tu web, Instagram o Google. Tú ves el día entero en una pantalla y se acabaron las dobles reservas.',
    highlights: [
      'Confirmación por email al momento',
      'Recordatorio 24 horas antes, con enlace para cancelar',
      'Vista de sala para el servicio, en tablet o móvil',
      'Reservas por teléfono y sin reserva en el mismo sitio',
    ],
  },
  {
    key: 'web',
    name: 'Web con mantenimiento',
    href: '/web-para-restaurantes/',
    pitch: 'Una web rápida con tu dominio, pensada para que te encuentren en Google cuando alguien busca dónde comer en tu zona.',
    highlights: [
      'Tú cambias textos, fotos y horarios cuando quieras',
      'Preparada para aparecer en búsquedas locales',
      'Formulario de contacto que te llega al móvil',
      'Hosting, dominio, copias y cambios pequeños incluidos',
    ],
  },
];
