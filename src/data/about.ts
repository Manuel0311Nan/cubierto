import type { Locale } from '../i18n';
import { about as aboutEn } from './en/about';
import { about as aboutPt } from './pt/about';

/**
 * Tus datos para "Sobre mí".
 * Los textos entre corchetes son huecos para rellenar; no publiques con ellos.
 */

export const person = {
  name: 'Manuel Alcázar',
  role: 'Desarrollador web',
  location: 'Alcalá de Henares',
  photo: '', // TODO: ruta a /public/manuel.jpg (vacío = se muestra la inicial)
  linkedin: '', // TODO
  github: '', // TODO
  intro:
    'Soy desarrollador y vivo en Alcalá de Henares. Llevo años haciendo aplicaciones y webs para empresas, y ahora me dedico a lo que más falta hace en los bares y restaurantes de la zona: que te encuentren, que te reserven y que tu carta esté siempre al día, sin depender de nadie para cambiar un precio.',
  promise:
    'Trato directo conmigo: la persona que te vende el servicio es la misma que lo programa, lo instala en tu local y te coge el teléfono si algo falla.',
};

export interface TimelineItem {
  period: string;
  title: string;
  detail: string;
}

/** Experiencia, de lo más reciente a lo más antiguo. */
export const experience: TimelineItem[] = [
  {
    period: '[Año] – hoy',
    title: 'Plataforma para hostelería',
    detail:
      'Diseño y desarrollo de la plataforma que da servicio a esta web: webs, carta QR y reservas para varios restaurantes desde un solo sistema.',
  },
  {
    period: '[Año] – [Año]',
    title: 'Webs corporativas y de marketing',
    detail: 'Webs rápidas para empresas, pensadas para aparecer en Google y conseguir clientes.',
  },
  {
    period: '[Año] – [Año]',
    title: 'ScheduleAI, gestión de turnos de trabajo',
    detail: 'Aplicación para que los negocios organicen los horarios y turnos de su plantilla.',
  },
  {
    period: '[Año] – [Año]',
    title: 'Aplicaciones web a medida',
    detail: 'Aplicaciones de gestión con PHP y jQuery para [tipo de empresas o sector].', // TODO
  },
];

/** Formación, de lo más reciente a lo más antiguo. */
export const education: TimelineItem[] = [
  {
    period: '[Año]',
    title: 'Arquitectura de software',
    detail: 'Formación en C# y TypeScript: programación orientada a objetos, principios SOLID, Clean Architecture y diseño guiado por el dominio (DDD).',
  },
  {
    period: '[Año]',
    title: '[Titulación]', // TODO: ciclo, grado o certificación
    detail: '[Centro]',
  },
];

/**
 * Se publica solo lo que ya está completo, así puedes ir rellenando poco a poco:
 * - una entrada con corchetes en el título o la descripción no se muestra;
 * - si solo falta el periodo ("[Año]"), la entrada se muestra sin fecha;
 * - si una lista se queda vacía, su sección no aparece.
 */
const hasPlaceholder = (text: string) => /\[[^\]]*\]/.test(text);

export const publishable = (items: TimelineItem[]) =>
  items
    .filter((i) => !hasPlaceholder(i.title) && !hasPlaceholder(i.detail))
    .map((i) => ({ ...i, period: hasPlaceholder(i.period) ? '' : i.period }));

export const publishedExperience = publishable(experience);
export const publishedEducation = publishable(education);

/** Nombre a mostrar: sin el apellido mientras siga pendiente. */
export const displayName = hasPlaceholder(person.name) ? person.name.replace(/\s*\[[^\]]*\]/g, '') : person.name;

/** Traducción de "Sobre mí": textos, y experiencia y formación en el mismo orden que arriba (sin periodo: se toma del español). */
export interface AboutTranslation {
  role: string;
  intro: string;
  promise: string;
  experience: Array<Omit<TimelineItem, 'period'>>;
  education: Array<Omit<TimelineItem, 'period'>>;
}

const withPeriods = (items: Array<Omit<TimelineItem, 'period'>>, source: TimelineItem[]): TimelineItem[] =>
  items.map((it, i) => ({ period: source[i]?.period ?? '', ...it }));

const byLocale: Record<Locale, AboutTranslation> = {
  es: { role: person.role, intro: person.intro, promise: person.promise, experience, education },
  en: aboutEn,
  pt: aboutPt,
};

/** "Sobre mí" en un idioma: nombre, foto, enlaces y fechas son los mismos; textos, experiencia y formación, traducidos. */
export const getAbout = (locale: Locale) => {
  const d = byLocale[locale];
  return {
    person: { ...person, role: d.role, intro: d.intro, promise: d.promise },
    publishedExperience: publishable(withPeriods(d.experience, experience)),
    publishedEducation: publishable(withPeriods(d.education, education)),
    displayName,
  };
};
