import type { ModuleKey } from '../config/site';
import type { Locale, RouteKey } from '../i18n';
import { tools as toolsEn } from './en/herramientas';
import { tools as toolsPt } from './pt/herramientas';

/**
 * Herramientas gratis para dueños de bares y restaurantes.
 * Cada una responde a una búsqueda concreta y lleva a su servicio.
 * Nada de cifras del sector sin fuente: los cálculos usan los números que mete cada local.
 */
export interface Tool {
  slug: string;
  /** Página de la herramienta en routes.ts. */
  route: RouteKey;
  name: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  service: ModuleKey;
}

export const tools: Tool[] = [
  {
    slug: 'tabla-alergenos',
    route: 'tablaAlergenos',
    name: 'Tabla de alérgenos para imprimir',
    seoTitle: 'Tabla de alérgenos para imprimir, gratis',
    seoDescription:
      'Plantilla gratis para imprimir con los 14 alérgenos obligatorios: apunta tus platos, marca sus alérgenos y ten la ficha a mano en el local. Con cartel de aviso.',
    h1: 'Tabla de los 14 alérgenos para imprimir',
    intro:
      'Una plantilla para apuntar los platos de tu carta y marcar qué alérgenos lleva cada uno. Imprímela, rellénala a mano y tenla donde tu equipo la encuentre. También tienes el cartel de aviso para la sala.',
    service: 'carta',
  },
  {
    slug: 'calculadora-no-shows',
    route: 'calculadora',
    name: 'Calculadora de reservas que no se presentan',
    seoTitle: 'Calculadora de no-shows para restaurantes',
    seoDescription:
      'Calcula cuánto dinero pierde tu restaurante cada mes por las reservas que no se presentan (no-shows), con tus propios números. Gratis y sin registrarte.',
    h1: 'Calculadora de reservas que no se presentan',
    intro:
      'Pon tus números y mira cuánto dejas de facturar cada mes por las mesas que se quedan vacías porque alguien reservó y no vino. Los valores de partida son un ejemplo: cámbialos por los de tu local.',
    service: 'reservas',
  },
  {
    slug: 'generador-qr',
    route: 'generadorQr',
    name: 'Generador de QR para tu carta',
    seoTitle: 'Generador de QR gratis para tu carta',
    seoDescription:
      'Crea gratis el código QR de tu carta, tu web o tus reservas y descárgalo en SVG o PNG para imprimir. No caduca, no lleva publicidad y no pide registro.',
    h1: 'Generador de QR gratis para la carta de tu bar',
    intro:
      'Pega la dirección de tu carta, tu web o tu página de reservas y descarga el código para imprimirlo. Se crea en tu propio navegador: no pasa por ningún servidor, no caduca y no lleva publicidad.',
    service: 'carta',
  },
];

export const toolsPage = {
  seoTitle: 'Herramientas gratis para restaurantes',
  seoDescription:
    'Herramientas gratis para bares y restaurantes: generador de QR, tabla de alérgenos para imprimir y calculadora de reservas que no se presentan.',
  h1: 'Herramientas gratis para tu bar o restaurante',
  intro: 'Plantillas y calculadoras para el día a día del local. Gratis, sin registrarte y sin dar tu email.',
};

/** Textos de la tabla de alérgenos. */
export const allergenSheet = {
  rows: 15, // caben en una hoja A4 apaisada
  printTable: 'Imprimir tabla',
  printSign: 'Imprimir cartel',
  noJs: 'Para imprimir, usa la opción Imprimir de tu navegador (Ctrl + P o compartir > Imprimir en el móvil).',
  tableTitle: 'Alérgenos de la carta',
  venueLabel: 'Local',
  dateLabel: 'Revisada el',
  dishLabel: 'Plato',
  legendTitle: 'Los 14 alérgenos que tienes que indicar',
  legendIntro:
    'Son los del anexo II del Reglamento (UE) 1169/2011. Cuentan también sus derivados: una salsa con mantequilla lleva leche y un rebozado con harina de trigo lleva gluten.',
  signTitle: 'Información sobre alérgenos',
  signText:
    'Si tienes alguna alergia o intolerancia alimentaria, pregunta a nuestro personal. Te informamos de los alérgenos de cada plato antes de que pidas.',
  signNote:
    'Si informas de palabra, la normativa te pide tener la información por escrito en el local y un aviso visible que diga cómo pedirla (artículo 6.5 del Real Decreto 126/2015).',
  howTitle: 'Cómo usarla',
  how: [
    'Escribe cada plato en una fila, también los del menú del día y los postres.',
    'Marca con una X cada alérgeno que lleve el plato, incluidos los de salsas, caldos y productos comprados hechos: mira su etiqueta.',
    'Pon la fecha de revisión y cámbiala cada vez que cambies una receta o un proveedor.',
    'Déjala donde tu equipo la encuentre en plena hora punta, y el cartel en un sitio visible de la sala.',
  ],
  disclaimer:
    'Esta plantilla te ayuda a organizar la información, pero no es asesoramiento legal. Para tu caso concreto, consulta con el servicio de seguridad alimentaria de tu comunidad autónoma.',
  sources: [
    { name: 'Reglamento (UE) n.º 1169/2011, anexo II', url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169' },
    { name: 'Real Decreto 126/2015 (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-2293' },
  ],
};

/** Textos de la calculadora de no-shows. Los valores por defecto son un ejemplo, no datos del sector. */
export const noShowCalc = {
  fields: {
    reservations: { label: 'Reservas al mes', value: 300, min: 1, max: 10000, step: 1 },
    noShowRate: { label: 'De cada 100 reservas, ¿cuántas no se presentan?', value: 5, min: 0, max: 100, step: 0.5 },
    partySize: { label: 'Comensales por reserva, de media', value: 2.5, min: 1, max: 30, step: 0.5 },
    ticket: { label: 'Gasto medio por comensal (€)', value: 25, min: 1, max: 500, step: 0.5 },
  },
  resultTitle: 'Lo que te cuestan las mesas vacías',
  noJs: 'La calculadora necesita JavaScript. Si no lo tienes activo, haz la cuenta así: reservas al mes × (no presentadas de cada 100 ÷ 100) × comensales por reserva × gasto medio.',
  formula: 'Reservas al mes × no presentadas ÷ 100 × comensales por reserva × gasto medio por comensal.',
  tipsTitle: 'Qué ayuda a que vengan o avisen',
  tips: [
    { title: 'Recordatorio el día antes', text: 'Un mensaje con la hora y un enlace para cancelar. A quien no puede venir le cuesta un segundo avisarte, y tú recuperas la mesa.' },
    { title: 'Cancelar tiene que ser fácil', text: 'Si para cancelar hay que llamar en plena hora punta, mucha gente no lo hace. Un enlace en el email lo resuelve.' },
    { title: 'Pide el teléfono al reservar', text: 'Así puedes llamar a un grupo que no ha llegado a los 15 minutos y liberar la mesa si no contesta.' },
    { title: 'Confirma los grupos grandes', text: 'Una mesa de 10 vacía duele más. Para grupos, confirma la víspera o pide que te escriban.' },
    { title: 'Lista de espera', text: 'Si alguien cancela, la mesa pasa a la siguiente persona de la lista en lugar de quedarse vacía.' },
    { title: 'Apunta quién no vino', text: 'Marcar "no vino" en cada reserva te dice si es algo puntual o un problema de verdad, y con qué clientes.' },
  ],
};

/** Textos del generador de QR. */
export const qrGenerator = {
  inputLabel: 'Dirección o texto del QR',
  inputHint: 'Por ejemplo, la dirección de tu carta: https://tubar.es/carta',
  placeholder: 'https://',
  sizeLabel: 'Tamaño del PNG',
  sizes: [512, 1024, 2048],
  downloadSvg: 'Descargar SVG',
  downloadPng: 'Descargar PNG',
  previewAlt: 'Vista previa del código QR',
  empty: 'Escribe una dirección para ver el QR.',
  tooLong: 'El texto es demasiado largo para un QR. Usa una dirección más corta.',
  noJs: 'El generador necesita JavaScript para crear el código en tu navegador.',
  tipsTitle: 'Antes de imprimirlo',
  tips: [
    { title: 'Pruébalo con dos móviles', text: 'Uno Android y un iPhone, desde la distancia a la que lo escaneará el cliente sentado.' },
    { title: 'Que no sea pequeño', text: 'Mejor grande que pequeño, con margen blanco alrededor y oscuro sobre claro. No lo pongas sobre fotos ni fondos con dibujo.' },
    { title: 'Dile qué es', text: 'Una frase al lado, como "Escanea para ver la carta", hace que lo usen más.' },
    { title: 'Este QR es fijo', text: 'Lleva directamente a la dirección que pongas. Si un día cambias esa dirección, tendrás que imprimirlo otra vez; por eso conviene que apunte a una dirección que no cambie.' },
  ],
  paperNote:
    'Recuerda: el QR complementa a la carta en papel, no la sustituye. En la Comunidad de Madrid el local tiene que ofrecer siempre la carta y la lista de precios también en papel.',
};

export interface ToolsText {
  tools: Tool[];
  toolsPage: typeof toolsPage;
  allergenSheet: typeof allergenSheet;
  noShowCalc: typeof noShowCalc;
  qrGenerator: typeof qrGenerator;
}

const es: ToolsText = { tools, toolsPage, allergenSheet, noShowCalc, qrGenerator };
const byLocale: Record<Locale, ToolsText> = { es, en: toolsEn, pt: toolsPt };

/** Textos de /herramientas/ en un idioma. */
export const getTools = (locale: Locale) => byLocale[locale];
