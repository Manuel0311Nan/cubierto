import type { Locale } from '../i18n';

/**
 * Los 14 alérgenos de declaración obligatoria: anexo II del Reglamento (UE) 1169/2011.
 * Se usan en la carta de ejemplo y en la tabla imprimible de /herramientas/.
 * `short` es la etiqueta corta de la carta; `name`, el nombre completo del reglamento.
 */
export const allergens = [
  { key: 'gluten', short: 'Gluten', name: 'Cereales que contengan gluten', examples: 'Trigo, espelta, kamut, centeno, cebada, avena' },
  { key: 'crustaceos', short: 'Crustáceos', name: 'Crustáceos', examples: 'Gambas, langostinos, cigalas, cangrejos' },
  { key: 'huevo', short: 'Huevo', name: 'Huevos', examples: 'Y productos a base de huevo' },
  { key: 'pescado', short: 'Pescado', name: 'Pescado', examples: 'Y productos a base de pescado' },
  { key: 'cacahuetes', short: 'Cacahuetes', name: 'Cacahuetes', examples: 'Y productos a base de cacahuetes' },
  { key: 'soja', short: 'Soja', name: 'Soja', examples: 'Y productos a base de soja' },
  { key: 'leche', short: 'Leche', name: 'Leche', examples: 'Incluida la lactosa' },
  { key: 'frutos-cascara', short: 'Frutos de cáscara', name: 'Frutos de cáscara', examples: 'Almendras, avellanas, nueces, anacardos, pistachos' },
  { key: 'apio', short: 'Apio', name: 'Apio', examples: 'Y productos derivados' },
  { key: 'mostaza', short: 'Mostaza', name: 'Mostaza', examples: 'Y productos derivados' },
  { key: 'sesamo', short: 'Sésamo', name: 'Granos de sésamo', examples: 'Y productos a base de sésamo' },
  { key: 'sulfitos', short: 'Sulfitos', name: 'Dióxido de azufre y sulfitos', examples: 'Más de 10 mg por kilo o litro: vino, vinagre, conservas' },
  { key: 'altramuces', short: 'Altramuces', name: 'Altramuces', examples: 'Y productos a base de altramuces' },
  { key: 'moluscos', short: 'Moluscos', name: 'Moluscos', examples: 'Mejillones, almejas, calamares, pulpo' },
] as const;

export type AllergenKey = (typeof allergens)[number]['key'];

export interface Allergen {
  key: AllergenKey;
  short: string;
  name: string;
  examples: string;
}

export const allergenByKey = Object.fromEntries(allergens.map((a) => [a.key, a])) as Record<AllergenKey, Allergen>;

const byLocale: Record<Locale, readonly Allergen[]> = { es: allergens, en: allergens, pt: allergens };

/** Los 14 alérgenos en un idioma, con la denominación oficial del Reglamento (UE) 1169/2011 en ese idioma. */
export const getAllergens = (locale: Locale) => {
  const list = byLocale[locale];
  return { list, byKey: Object.fromEntries(list.map((a) => [a.key, a])) as Record<AllergenKey, Allergen> };
};
