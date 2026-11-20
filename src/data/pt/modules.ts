import type { ServiceModule } from '../modules';
import { path } from '../../i18n/routes';

export const modules: ServiceModule[] = [
  {
    key: 'carta',
    name: 'Menu digital com QR',
    href: path('carta', 'pt'),
    pitch: 'Mudas um preço ou marcas um prato como esgotado a partir do telemóvel, e os teus clientes veem-no no momento. O menu em papel sai igualmente atualizado.',
    highlights: [
      'Os 14 alergénios obrigatórios com ícones e filtro',
      'Menu do dia que aparece sozinho à hora certa',
      'Traduzido para inglês, francês e mais línguas',
      'QR por mesa pronto a imprimir',
    ],
  },
  {
    key: 'reservas',
    name: 'Reservas online',
    href: path('reservas', 'pt'),
    pitch: 'Os teus clientes reservam a qualquer hora a partir do teu site, do Instagram ou do Google. Tu vês o dia inteiro num ecrã e acabaram-se as reservas duplicadas.',
    highlights: [
      'Confirmação por email no momento',
      'Lembrete 24 horas antes, com ligação para cancelar',
      'Vista da sala para o serviço, em tablet ou telemóvel',
      'Reservas por telefone e sem reserva no mesmo sítio',
    ],
  },
  {
    key: 'web',
    name: 'Site com manutenção',
    href: path('web', 'pt'),
    pitch: 'Um site rápido com o teu domínio, pensado para que te encontrem no Google quando alguém procura onde comer na tua zona.',
    highlights: [
      'Mudas textos, fotos e horários quando quiseres',
      'Preparado para aparecer em pesquisas locais',
      'Formulário de contacto que te chega ao telemóvel',
      'Alojamento, domínio, cópias e pequenas alterações incluídos',
    ],
  },
];
