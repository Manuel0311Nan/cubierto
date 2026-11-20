import type { ModuleKey } from '../../config/site';
import type { ServicePageData } from '../services';
import { path } from '../../i18n/routes';

export const services: Record<ModuleKey, ServicePageData> = {
  carta: {
    key: 'carta',
    path: path('carta', 'pt'),
    seoTitle: 'Menu digital QR para restaurantes em Alcalá',
    seoDescription:
      'Menu digital com QR para o teu bar ou restaurante: alergénios obrigatórios, menu do dia, pratos esgotados no momento e tradução noutras línguas. Pronto num dia.',
    h1: 'Menu digital com QR para o teu bar ou restaurante',
    intro:
      'Os teus clientes leem o QR da mesa e veem o teu menu ou o menu do dia no telemóvel, na língua deles e com os alergénios claros. Tu mudas tudo a partir do teu em segundos, e o menu em papel que a lei exige sai do mesmo sítio, com os mesmos preços.',
    beforeAfter: [
      { before: 'Mudas um preço e tens de refazer todos os menus.', after: 'Mudas no telemóvel: o QR mostra-o no momento e imprimes o menu em papel atualizado com um clique.' },
      { before: 'O empregado vai de mesa em mesa avisar do que acabou.', after: 'Marcas o prato como esgotado e o menu mostra-o no momento.' },
      { before: 'Os turistas perguntam o que leva cada prato.', after: 'O menu aparece em inglês, francês ou alemão, revisto por ti.' },
      { before: 'Um cliente com alergia pede-te a ficha de alergénios.', after: 'Cada prato mostra os seus alergénios e o cliente pode filtrar o menu.' },
    ],
    features: [
      { title: 'Os 14 alergénios, bem explicados', text: 'Ícone e nome de cada alergénio de declaração obrigatória, e um filtro para ver só o que cada cliente pode comer.' },
      { title: 'Menu do dia à hora certa', text: 'O menu do dia aparece de segunda a sexta ao almoço e esconde-se sozinho fora do horário. Duplicá-lo e mudar os pratos leva um par de minutos.' },
      { title: 'Esgotado com um toque', text: 'Um ecrã pensado para o serviço: todos os pratos com um interruptor. Ao fechar, “Repor tudo”.' },
      { title: 'Tradução assistida', text: 'Traduzimos o teu menu com inteligência artificial e tu revês antes de o publicar. Se mudares um prato em espanhol, a tradução fica marcada para rever.' },
      { title: 'QR por mesa, pronto a imprimir', text: 'Um PDF com um QR por mesa e o nome do teu restaurante. O QR não muda, mesmo que mudes o menu.' },
      { title: 'Rápido em qualquer telemóvel', text: 'Carrega em menos de dois segundos com dados móveis e sem instalar nada. Sem cookies nem registos para os teus clientes.' },
    ],
    included: ['Vários menus: carta, menu do dia, bebidas, sobremesas', 'Menu em PDF para imprimir, sempre igual ao do QR', 'Fotos dos pratos', 'Até 5 línguas', 'QR geral e por mesa', 'Alterações ilimitadas da tua parte'],
    contactHeading: 'Mostro-te o teu menu em digital?',
  },
  reservas: {
    key: 'reservas',
    path: path('reservas', 'pt'),
    seoTitle: 'Reservas online para restaurantes em Alcalá',
    seoDescription:
      'Reservas online para o teu restaurante a partir do site, do Instagram e do Google: confirmação e lembrete automáticos, vista da sala e sem reservas duplicadas.',
    h1: 'Reservas online para o teu restaurante, sem comissão por cliente',
    intro:
      'Um sistema de reservas para o teu restaurante ou bar: os clientes reservam a qualquer hora em menos de um minuto. Tu vês o serviço completo num ecrã, recebes cada reserva no telemóvel e o sistema nunca aceita mais gente do que a que cabe.',
    beforeAfter: [
      { before: 'O telefone toca a meio do serviço para reservar.', after: 'A maioria reserva online, a qualquer hora.' },
      { before: 'O caderno de reservas, rasuras e alguma reserva duplicada.', after: 'Uma vista do dia clara, em tablet ou telemóvel, para toda a equipa.' },
      { before: 'Mesas vazias porque alguém não veio nem avisou.', after: 'Lembrete 24 horas antes com uma ligação para cancelar.' },
      { before: 'Pagas uma comissão por cada cliente que chega através de uma plataforma.', after: 'Mensalidade fixa, quer reservem 50 ou 500 pessoas.' },
    ],
    features: [
      { title: 'Reservam de onde estiverem', text: 'Página de reservas própria e um botão que se cola no teu site atual. Ligação direta para o Instagram, o Google e o WhatsApp.' },
      { title: 'Nunca mais gente do que a que cabe', text: 'Defines quantos lugares há por faixa horária e no total. O sistema confirma-o no momento de guardar cada reserva, mesmo que duas pessoas reservem ao mesmo tempo.' },
      { title: 'Confirmação e lembrete', text: 'Email de confirmação no momento e lembrete na véspera com ligação para cancelar. Se preferires, confirmas tu cada reserva à mão.' },
      { title: 'A tua sala numa planta', text: 'O teu espaço desenhado com as suas mesas: vês o que está livre, quem chega e o que está ocupado. Sentar, libertar ou marcar “não veio” com um toque. Atualiza-se sozinha.' },
      { title: 'Telefone e sem reserva, no mesmo sítio', text: 'Registas as reservas por telefone e os clientes que chegam sem reservar, para que a lotação bata sempre certo.' },
      { title: 'Os teus clientes, os teus dados', text: 'Ficha de cada cliente com as suas visitas e notas. Os dados são teus e podes exportá-los quando quiseres.' },
    ],
    included: ['Planta da tua sala com o estado de cada mesa', 'Turnos, lotações e dias de folga', 'Emails de confirmação e lembrete', 'Botão para o teu site e Instagram', 'Lista de espera', 'Utilizadores para a tua equipa'],
    contactHeading: 'Mostro-te como os teus clientes reservariam?',
  },
  web: {
    key: 'web',
    path: path('web', 'pt'),
    seoTitle: 'Sites para restaurantes em Alcalá',
    seoDescription:
      'Site para o teu restaurante ou bar, rápido e preparado para aparecer no Google, com domínio próprio, manutenção incluída e editável a partir do telemóvel.',
    h1: 'Site para o teu restaurante, com manutenção incluída',
    intro:
      'Um site rápido, com o teu domínio e pensado para que te encontrem quando alguém procura onde comer na tua zona. Mudas o que quiseres quando quiseres, e do resto trato eu.',
    beforeAfter: [
      { before: 'O teu site foi feito por alguém há anos e não sabes como o mudar.', after: 'Mudas textos, fotos e horários a partir do telemóvel.' },
      { before: 'Quando procuram restaurantes na tua zona, apareces tarde ou não apareces.', after: 'Site preparado para pesquisas locais e com os teus dados claros para o Google.' },
      { before: 'Pagas alojamento, domínio e arranjos a pessoas diferentes.', after: 'Uma mensalidade com alojamento, domínio, cópias e pequenas alterações.' },
      { before: 'No telemóvel demora a carregar e vê-se mal.', after: 'Carrega depressa com dados móveis e vê-se bem em qualquer ecrã.' },
    ],
    features: [
      { title: 'Preparado para o Google', text: 'Títulos, descrições e dados estruturados de restaurante (morada, horário, menu, reservas) para que o Google perceba quem és e onde estás.' },
      { title: 'Editas tu', text: 'Secções prontas que podes ativar, ordenar e preencher: início, quem somos, galeria, horário, como chegar, contacto. O design mantém-se sempre bem.' },
      { title: 'Ligado ao teu menu e às tuas reservas', text: 'Se tiveres os outros módulos, o teu site mostra os pratos em destaque e o botão de reservar, sem copiar nada à mão.' },
      { title: 'Contactos que te chegam ao telemóvel', text: 'Cada mensagem do formulário chega-te por email e, se quiseres, por WhatsApp.' },
      { title: 'Textos legais em ordem', text: 'Aviso legal, privacidade e cookies com os teus dados. Sem avisos de cookies, porque a análise de visitas não os usa.' },
      { title: 'Quantos te visitam, todos os meses', text: 'Um resumo mensal com as visitas e quantos carregaram em “Ligar”, “Reservar” ou “Ver menu”.' },
    ],
    included: ['Design adaptado ao teu restaurante', 'Domínio, alojamento e certificado SSL', 'Cópias de segurança diárias', 'Pequenas alterações todos os meses', 'Relatório mensal de visitas'],
    contactHeading: 'Mostro-te como ficaria o teu site?',
  },
};
