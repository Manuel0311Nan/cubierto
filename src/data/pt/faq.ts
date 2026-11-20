import { site, pricing } from '../../config/site';
import { money } from '../../i18n/format';
import type { Faq } from '../faq';

const eur = (n: number) => money(n, 'pt');
const cities = site.areaServed.filter((a) => a.type === 'City').map((a) => a.name);
const vat = 'sem IVA';

export const faqs: Faq[] = [
  {
    q: 'Posso contratar só uma coisa?',
    a: 'Sim. Cada módulo contrata-se em separado: podes começar só com o menu QR e juntar as reservas ou o site mais tarde, sem migrações nem mudanças de fornecedor. Se contratares os três, tens preço de pacote.',
    on: ['home', 'precios'],
  },
  {
    q: `Trabalhas fora de ${site.city}?`,
    a: `Sim. Trabalho com bares e restaurantes de ${cities.join(', ')} e do resto do Corredor do Henares, perto de Madrid. A instalação faço-a pessoalmente, no teu restaurante.`,
    on: ['home', 'web', 'carta', 'reservas'],
  },
  {
    q: 'Serve para um bar ou um café, ou só para restaurantes?',
    a: 'Serve para qualquer espaço com menu: bares de petiscos, cafés, restaurantes com menu do dia ou à carta. Se tens balcão e sala, o menu QR e as reservas funcionam da mesma forma.',
    on: ['home', 'carta'],
  },
  {
    q: 'Quanto custa o menu digital com QR?',
    a: `${eur(pricing.monthly.carta)} por mês ${vat}, sem taxa de adesão e sem fidelização. Inclui alterações ilimitadas da tua parte, várias línguas e o PDF com os QR das tuas mesas.`,
    on: ['carta', 'precios'],
  },
  {
    q: 'Os meus clientes têm de descarregar uma app para ver o menu QR?',
    a: 'Não. Leem o QR com a câmara do telemóvel e o menu abre no navegador, sem instalar nada nem fazer registo.',
    on: ['carta'],
  },
  {
    q: 'Quanto custa o sistema de reservas?',
    a: `${eur(pricing.monthly.reservas)} por mês ${vat}, sempre a mesma mensalidade: não há comissão por cliente nem por reserva, quer reservem 50 ou 500 pessoas. Sem fidelização.`,
    on: ['reservas', 'precios'],
  },
  {
    q: 'O que acontece se um cliente reserva e não aparece?',
    a: 'Na véspera recebe um lembrete com uma ligação para cancelar, por isso a mesa fica livre se não puder vir. Se mesmo assim não aparecer, marcas “não veio” e fica registado na ficha dele para a próxima vez.',
    on: ['reservas'],
  },
  {
    q: 'Quanto custa um site para um restaurante?',
    a: `A adesão, que inclui o design e a instalação, é um pagamento único de ${eur(pricing.webSetup)} com IVA incluído. Depois, ${eur(pricing.monthly.web)} por mês ${vat}, com alojamento, domínio, cópias de segurança e pequenas alterações incluídos. Se contratares os três módulos, a adesão ao pacote completo é de ${eur(pricing.packSetup)} com IVA incluído e ainda cobre o primeiro mês.`,
    on: ['web', 'precios'],
  },
  {
    q: 'Quanto custa o pacote completo?',
    a: `Os três módulos (site, menu QR e reservas) custam ${eur(pricing.pack)} por mês ${vat}, mais uma taxa de adesão única de ${eur(pricing.packSetup)} com IVA incluído que já cobre o primeiro mês: a primeira mensalidade paga-se no segundo mês. Sem fidelização: se um dia deixares um módulo, passas a pagar só os que continuares a usar.`,
    on: ['precios'],
  },
  {
    q: 'O site ajuda-me a aparecer no Google Maps?',
    a: 'Ajuda, mas o Google Maps alimenta-se sobretudo do teu Perfil da Empresa no Google. O site dá ao Google os teus dados (morada, horário, menu e reservas) de forma organizada e liga ao teu perfil. Se ainda não tens perfil, é a primeira coisa a criar.',
    on: ['web'],
  },
  {
    q: 'Posso ter só o menu QR, sem menu em papel?',
    a: 'Não. Na Comunidade de Madrid, o restaurante tem de oferecer sempre o menu e a lista de preços também em papel, e usar o QR é opcional para o cliente. Por isso o menu em papel imprime-se a partir do mesmo painel, com os mesmos pratos e preços do QR.',
    on: ['carta'],
  },
  {
    q: 'Há fidelização?',
    a: 'Não. Pagas mês a mês e cancelas um módulo quando quiseres. A única coisa que se paga uma vez é a adesão do site ou do pacote completo, porque inclui o design e a instalação.',
    on: ['home', 'web', 'precios'],
  },
  {
    q: 'Quanto tempo demora a ficar a funcionar?',
    a: 'O menu QR costuma ficar pronto num dia, assim que me envias o menu. As reservas, em dois ou três dias. O site, em cerca de uma semana a partir do momento em que tenho fotos e textos.',
    on: ['home', 'web', 'carta', 'reservas'],
  },
  {
    q: 'Não me dou bem com computadores. Vou conseguir usar isto?',
    a: 'Está pensado para usar no telemóvel durante o serviço: marcar um prato como esgotado ou sentar uma reserva é um toque. Deixo-te tudo configurado e ensino-te pessoalmente no teu restaurante.',
    on: ['home', 'carta', 'reservas'],
  },
  {
    q: 'E os alergénios?',
    a: 'Cada prato tem assinalados os 14 alergénios de declaração obrigatória, com ícone e nome. O cliente pode filtrar o menu, por exemplo para ver só pratos sem glúten. A informação decides tu; o menu avisa-te se um prato não tem nenhum assinalado.',
    on: ['carta'],
  },
  {
    q: 'Tenho de mudar os QR se mudar o menu?',
    a: 'Não. O QR aponta sempre para o teu menu online, por isso mudas preços, pratos ou o menu do dia e o QR impresso continua a servir.',
    on: ['carta'],
  },
  {
    q: 'E se duas reservas ocuparem ao mesmo tempo a última mesa?',
    a: 'O sistema confirma a lotação no próprio momento de guardar cada reserva, por isso nunca aceita mais gente do que a que configuraste por faixa horária, mesmo que duas pessoas reservem no mesmo segundo.',
    on: ['reservas'],
  },
  {
    q: 'Posso pôr as reservas no meu site atual?',
    a: 'Sim. Dou-te uma linha de código que se cola em qualquer site, e também uma ligação direta para o Instagram, o Google e o WhatsApp.',
    on: ['reservas'],
  },
  {
    q: 'Quem fica com os dados dos meus clientes?',
    a: 'Tu. Os dados dos teus clientes são teus; eu trato-os só para te prestar o serviço, com um contrato de subcontratação conforme o RGPD. Se cancelares, podes levá-los contigo.',
    on: ['home', 'reservas'],
  },
  {
    q: 'O domínio é meu?',
    a: 'Sim. Se já tens domínio, ligamo-lo; se não, registamo-lo em teu nome.',
    on: ['web'],
  },
  {
    q: 'O que inclui a manutenção do site?',
    a: 'Alojamento, domínio e certificado de segurança, cópias de segurança, atualizações e pequenas alterações todos os meses (um texto, uma foto, um horário especial). As alterações grandes orçamentam-se à parte.',
    on: ['web'],
  },
];
