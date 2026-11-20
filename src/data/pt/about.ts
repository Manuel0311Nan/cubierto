import type { AboutTranslation } from '../about';

/** Mesma ordem que em about.ts: os períodos (anos) vêm das entradas em espanhol. */
export const about: AboutTranslation = {
  role: 'Programador web',
  intro:
    'Sou programador e vivo em Alcalá de Henares. Há anos que faço aplicações e sites para empresas, e agora dedico-me ao que mais falta faz aos bares e restaurantes da zona: que te encontrem, que te reservem e que o teu menu esteja sempre em dia, sem dependeres de ninguém para mudar um preço.',
  promise:
    'Tratas diretamente comigo: a pessoa que te vende o serviço é a mesma que o programa, o instala no teu restaurante e te atende o telefone se algo falhar.',
  experience: [
    {
      title: 'Plataforma para restauração',
      detail:
        'Design e desenvolvimento da plataforma que está por trás deste site: sites, menus QR e reservas para vários restaurantes a partir de um só sistema.',
    },
    { title: 'Sites institucionais e de marketing', detail: 'Sites rápidos para empresas, pensados para aparecer no Google e conseguir clientes.' },
    { title: 'ScheduleAI, gestão de turnos de trabalho', detail: 'Aplicação para que os negócios organizem os horários e turnos da sua equipa.' },
    { title: 'Aplicações web à medida', detail: 'Aplicações de gestão com PHP e jQuery para [tipo de empresas ou setor].' },
  ],
  education: [
    {
      title: 'Arquitetura de software',
      detail: 'Formação em C# e TypeScript: programação orientada a objetos, princípios SOLID, Clean Architecture e desenho orientado pelo domínio (DDD).',
    },
    { title: '[Curso]', detail: '[Escola]' },
  ],
};
