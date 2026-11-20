import type { Allergen } from '../alergenos';

/** Denominações da versão portuguesa do anexo II do Regulamento (UE) n.º 1169/2011. */
export const allergens: Allergen[] = [
  { key: 'gluten', short: 'Glúten', name: 'Cereais que contêm glúten', examples: 'Trigo, espelta, kamut, centeio, cevada, aveia' },
  { key: 'crustaceos', short: 'Crustáceos', name: 'Crustáceos', examples: 'Camarão, gambas, lagostins, caranguejos' },
  { key: 'huevo', short: 'Ovo', name: 'Ovos', examples: 'E produtos à base de ovos' },
  { key: 'pescado', short: 'Peixe', name: 'Peixes', examples: 'E produtos à base de peixe' },
  { key: 'cacahuetes', short: 'Amendoim', name: 'Amendoins', examples: 'E produtos à base de amendoins' },
  { key: 'soja', short: 'Soja', name: 'Soja', examples: 'E produtos à base de soja' },
  { key: 'leche', short: 'Leite', name: 'Leite', examples: 'Incluindo a lactose' },
  { key: 'frutos-cascara', short: 'Frutos de casca rija', name: 'Frutos de casca rija', examples: 'Amêndoas, avelãs, nozes, cajus, pistácios' },
  { key: 'apio', short: 'Aipo', name: 'Aipo', examples: 'E produtos à base de aipo' },
  { key: 'mostaza', short: 'Mostarda', name: 'Mostarda', examples: 'E produtos à base de mostarda' },
  { key: 'sesamo', short: 'Sésamo', name: 'Sementes de sésamo', examples: 'E produtos à base de sementes de sésamo' },
  { key: 'sulfitos', short: 'Sulfitos', name: 'Dióxido de enxofre e sulfitos', examples: 'Mais de 10 mg por quilo ou litro: vinho, vinagre, conservas' },
  { key: 'altramuces', short: 'Tremoço', name: 'Tremoço', examples: 'E produtos à base de tremoço' },
  { key: 'moluscos', short: 'Moluscos', name: 'Moluscos', examples: 'Mexilhões, amêijoas, lulas, polvo' },
];
