import type { ToolsText } from '../herramientas';

export const tools: ToolsText = {
  tools: [
    {
      slug: 'tabla-alergenos',
      route: 'tablaAlergenos',
      name: 'Tabela de alergénios para imprimir',
      seoTitle: 'Tabela de alergénios para imprimir, grátis',
      seoDescription:
        'Modelo grátis para imprimir com os 14 alergénios obrigatórios: escreve os pratos, assinala os alergénios e tem a ficha à mão no restaurante. Com aviso.',
      h1: 'Tabela dos 14 alergénios para imprimir',
      intro:
        'Um modelo para escrever os pratos do teu menu e assinalar que alergénios leva cada um. Imprime-o, preenche-o à mão e deixa-o onde a tua equipa o encontre. Também tens o aviso para afixar na sala.',
      service: 'carta',
    },
    {
      slug: 'calculadora-no-shows',
      route: 'calculadora',
      name: 'Calculadora de reservas que não aparecem',
      seoTitle: 'Calculadora de no-shows para restaurantes',
      seoDescription:
        'Calcula quanto dinheiro o teu restaurante perde por mês com as reservas que não aparecem (no-shows), com os teus próprios números. Grátis e sem registo.',
      h1: 'Calculadora de reservas que não aparecem',
      intro:
        'Põe os teus números e vê quanto deixas de faturar por mês com as mesas que ficam vazias porque alguém reservou e não veio. Os valores de partida são um exemplo: troca-os pelos do teu restaurante.',
      service: 'reservas',
    },
    {
      slug: 'generador-qr',
      route: 'generadorQr',
      name: 'Gerador de QR para o teu menu',
      seoTitle: 'Gerador de QR grátis para o teu menu',
      seoDescription:
        'Cria grátis o QR do teu menu, do teu site ou das tuas reservas e descarrega-o em SVG ou PNG para imprimir. Não caduca, não tem publicidade nem pede registo.',
      h1: 'Gerador de QR grátis para o menu do teu bar',
      intro:
        'Cola o endereço do teu menu, do teu site ou da tua página de reservas e descarrega o código para o imprimir. É criado no teu próprio navegador: não passa por nenhum servidor, não caduca e não tem publicidade.',
      service: 'carta',
    },
  ],
  toolsPage: {
    seoTitle: 'Ferramentas grátis para restaurantes',
    seoDescription:
      'Ferramentas grátis para bares e restaurantes: gerador de QR, tabela de alergénios para imprimir e calculadora de reservas que não aparecem.',
    h1: 'Ferramentas grátis para o teu bar ou restaurante',
    intro: 'Modelos e calculadoras para o dia a dia do restaurante. Grátis, sem registo e sem dares o teu email.',
  },
  allergenSheet: {
    rows: 15,
    printTable: 'Imprimir tabela',
    printSign: 'Imprimir aviso',
    noJs: 'Para imprimir, usa a opção Imprimir do teu navegador (Ctrl + P ou Partilhar > Imprimir no telemóvel).',
    tableTitle: 'Alergénios do menu',
    venueLabel: 'Restaurante',
    dateLabel: 'Revista em',
    dishLabel: 'Prato',
    legendTitle: 'Os 14 alergénios que tens de indicar',
    legendIntro:
      'São os do anexo II do Regulamento (UE) n.º 1169/2011. Contam também os seus derivados: um molho com manteiga leva leite e um panado com farinha de trigo leva glúten.',
    signTitle: 'Informação sobre alergénios',
    signText:
      'Se tens alguma alergia ou intolerância alimentar, pergunta ao nosso pessoal. Informamos-te dos alergénios de cada prato antes de pedires.',
    signNote:
      'Em Espanha, se informas de viva voz, a lei exige que tenhas a informação por escrito no restaurante e um aviso visível que diga como a pedir (artigo 6.5 do Real Decreto 126/2015).',
    howTitle: 'Como usar',
    how: [
      'Escreve cada prato numa linha, incluindo os do menu do dia e as sobremesas.',
      'Marca com um X cada alergénio que o prato leve, incluindo os dos molhos, caldos e produtos comprados já feitos: vê o rótulo.',
      'Põe a data de revisão e muda-a sempre que mudares uma receita ou um fornecedor.',
      'Deixa-a onde a tua equipa a encontre em plena hora de ponta, e o aviso num sítio visível da sala.',
    ],
    disclaimer:
      'Este modelo ajuda-te a organizar a informação, mas não é aconselhamento jurídico. Para o teu caso concreto, consulta o serviço de segurança alimentar da tua região.',
    sources: [
      { name: 'Regulamento (UE) n.º 1169/2011, anexo II', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32011R1169' },
      { name: 'Real Decreto 126/2015 (BOE, em espanhol)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-2293' },
    ],
  },
  noShowCalc: {
    fields: {
      reservations: { value: 300, min: 1, max: 10000, step: 1, label: 'Reservas por mês' },
      noShowRate: { value: 5, min: 0, max: 100, step: 0.5, label: 'Em cada 100 reservas, quantas não aparecem?' },
      partySize: { value: 2.5, min: 1, max: 30, step: 0.5, label: 'Pessoas por reserva, em média' },
      ticket: { value: 25, min: 1, max: 500, step: 0.5, label: 'Gasto médio por pessoa (€)' },
    },
    resultTitle: 'O que te custam as mesas vazias',
    noJs: 'A calculadora precisa de JavaScript. Se não o tens ativo, faz a conta assim: reservas por mês × (faltas em cada 100 ÷ 100) × pessoas por reserva × gasto médio.',
    formula: 'Reservas por mês × faltas ÷ 100 × pessoas por reserva × gasto médio por pessoa.',
    tipsTitle: 'O que ajuda a que venham ou avisem',
    tips: [
      { title: 'Lembrete na véspera', text: 'Uma mensagem com a hora e uma ligação para cancelar. A quem não pode vir custa um segundo avisar-te, e tu recuperas a mesa.' },
      { title: 'Cancelar tem de ser fácil', text: 'Se para cancelar for preciso ligar em plena hora de ponta, muita gente não o faz. Uma ligação no email resolve isso.' },
      { title: 'Pede o telefone ao reservar', text: 'Assim podes ligar a um grupo que não chegou passados 15 minutos e libertar a mesa se não atenderem.' },
      { title: 'Confirma os grupos grandes', text: 'Uma mesa de 10 vazia dói mais. Para grupos, confirma na véspera ou pede que te escrevam.' },
      { title: 'Lista de espera', text: 'Se alguém cancelar, a mesa passa para a pessoa seguinte da lista em vez de ficar vazia.' },
      { title: 'Regista quem não veio', text: 'Marcar “não veio” em cada reserva diz-te se é algo pontual ou um problema a sério, e com que clientes.' },
    ],
  },
  qrGenerator: {
    inputLabel: 'Endereço ou texto do QR',
    inputHint: 'Por exemplo, o endereço do teu menu: https://oteubar.pt/menu',
    placeholder: 'https://',
    sizeLabel: 'Tamanho do PNG',
    sizes: [512, 1024, 2048],
    downloadSvg: 'Descarregar SVG',
    downloadPng: 'Descarregar PNG',
    previewAlt: 'Pré-visualização do código QR',
    empty: 'Escreve um endereço para veres o QR.',
    tooLong: 'O texto é demasiado longo para um QR. Usa um endereço mais curto.',
    noJs: 'O gerador precisa de JavaScript para criar o código no teu navegador.',
    tipsTitle: 'Antes de o imprimires',
    tips: [
      { title: 'Experimenta-o com dois telemóveis', text: 'Um Android e um iPhone, à distância a que o cliente o vai ler sentado.' },
      { title: 'Que não seja pequeno', text: 'Melhor grande do que pequeno, com margem branca à volta e escuro sobre claro. Não o ponhas sobre fotos nem fundos com desenhos.' },
      { title: 'Diz o que é', text: 'Uma frase ao lado, como “Lê para ver o menu”, faz com que o usem mais.' },
      { title: 'Este QR é fixo', text: 'Leva diretamente ao endereço que puseres. Se um dia mudares esse endereço, terás de o imprimir outra vez; por isso convém que aponte para um endereço que não mude.' },
    ],
    paperNote:
      'Lembra-te: o QR complementa o menu em papel, não o substitui. Na Comunidade de Madrid, o restaurante tem de oferecer sempre o menu e a lista de preços também em papel.',
  },
};
