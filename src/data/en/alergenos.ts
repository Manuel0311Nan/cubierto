import type { Allergen } from '../alergenos';

/** Names as in the English version of Annex II of Regulation (EU) No 1169/2011 (EU spelling). */
export const allergens: Allergen[] = [
  { key: 'gluten', short: 'Gluten', name: 'Cereals containing gluten', examples: 'Wheat, spelt, khorasan wheat, rye, barley, oats' },
  { key: 'crustaceos', short: 'Crustaceans', name: 'Crustaceans', examples: 'Shrimp, prawns, langoustines, crabs' },
  { key: 'huevo', short: 'Egg', name: 'Eggs', examples: 'And products thereof' },
  { key: 'pescado', short: 'Fish', name: 'Fish', examples: 'And products thereof' },
  { key: 'cacahuetes', short: 'Peanuts', name: 'Peanuts', examples: 'And products thereof' },
  { key: 'soja', short: 'Soy', name: 'Soybeans', examples: 'And products thereof' },
  { key: 'leche', short: 'Milk', name: 'Milk', examples: 'Including lactose' },
  { key: 'frutos-cascara', short: 'Tree nuts', name: 'Nuts', examples: 'Almonds, hazelnuts, walnuts, cashews, pistachios' },
  { key: 'apio', short: 'Celery', name: 'Celery', examples: 'And products thereof' },
  { key: 'mostaza', short: 'Mustard', name: 'Mustard', examples: 'And products thereof' },
  { key: 'sesamo', short: 'Sesame', name: 'Sesame seeds', examples: 'And products thereof' },
  { key: 'sulfitos', short: 'Sulfites', name: 'Sulphur dioxide and sulphites', examples: 'Over 10 mg per kilo or liter: wine, vinegar, preserves' },
  { key: 'altramuces', short: 'Lupin', name: 'Lupin', examples: 'And products thereof' },
  { key: 'moluscos', short: 'Mollusks', name: 'Molluscs', examples: 'Mussels, clams, squid, octopus' },
];
