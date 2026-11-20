import type { ExampleText } from '../ejemplo-carta';

/** O menu da Casa Brezo como o veriam os clientes depois de traduzido (MENU-07). Mesmos pratos, preços e alergénios. */
export const example: ExampleText = {
  venue: {
    name: 'Casa Brezo',
    kind: 'Cozinha de mercado',
    setMenu: {
      name: 'Menu do dia',
      when: 'Segunda a sexta, das 13:00 às 16:00',
      price: 13.5,
      includes: 'Entrada, prato principal, sobremesa, pão e bebida',
    },
    sections: [
      {
        name: 'Para partilhar',
        dishes: [
          { name: 'Croquetes caseiros de presunto', description: '8 unidades', price: 9.5, allergens: ['gluten', 'huevo', 'leche'] },
          { name: 'Torresmos estaladiços', price: 7.5, allergens: [] },
          { name: 'Tomate da horta com ventresca de atum', price: 11, allergens: ['pescado'] },
          { name: 'Polvo à galega', price: 18, allergens: ['moluscos'], soldOut: true },
        ],
      },
      {
        name: 'Pratos principais',
        dishes: [
          { name: 'Bochechas de porco ibérico em vinho tinto', description: 'Com puré de batata', price: 16.5, allergens: ['leche', 'sulfitos'] },
          { name: 'Pescada panada', description: 'Com pimentos piquillo', price: 17, allergens: ['pescado', 'gluten', 'huevo'] },
          { name: 'Arroz cremoso de cogumelos', price: 14, allergens: ['apio'], tags: ['Vegetariano'] },
          { name: 'Hambúrguer de novilho maturado', description: 'Pão brioche, cheddar e mostarda antiga', price: 15, allergens: ['gluten', 'leche', 'huevo', 'mostaza', 'sesamo'] },
        ],
      },
      {
        name: 'Sobremesas',
        dishes: [
          { name: 'Cheesecake no forno', price: 6, allergens: ['gluten', 'huevo', 'leche'] },
          { name: 'Rabanada caramelizada', price: 6.5, allergens: ['gluten', 'huevo', 'leche'] },
          { name: 'Fruta da época', price: 4.5, allergens: [], tags: ['Vegano'] },
        ],
      },
    ],
  },
  page: {
    seoTitle: 'Exemplo de menu digital QR para restaurante',
    seoDescription:
      'Lê o QR e vê no teu telemóvel um menu digital de exemplo: menu do dia, alergénios por prato, filtro sem glúten e pratos esgotados no momento.',
    h1: 'Exemplo de menu digital com QR',
    intro:
      'É assim que um cliente vê o teu menu quando lê o QR da mesa. É o menu de um restaurante inventado, a Casa Brezo, mas funciona tal como o teu: abre-o no telemóvel e experimenta.',
    scanTitle: 'Lê-o com o teu telemóvel',
    scanText: 'Aponta a câmara do telemóvel para o código. Abre-se este mesmo menu, tal como o veria o teu cliente sentado à mesa.',
    onPhone: 'Já estás no telemóvel: é isto que o teu cliente vê ao ler o QR da mesa.',
    points: [
      { title: 'Sem instalar nada', text: 'O cliente lê o QR e o menu abre no navegador. Sem apps, sem registos e sem cookies.' },
      { title: 'Alergénios em cada prato', text: 'Os 14 alergénios obrigatórios, com o seu nome, e um filtro para ver o que cada cliente pode comer.' },
      { title: 'Esgotado no momento', text: 'Quando um prato acaba, marcas-o no telemóvel e o menu mostra-o de imediato.' },
      { title: 'Menu do dia à hora certa', text: 'Aparece só no seu horário e mudas-o num par de minutos.' },
    ],
    note: 'A Casa Brezo e os seus pratos são inventados. No teu menu vão os teus pratos, os teus preços e os teus alergénios, que decides tu.',
  },
};
