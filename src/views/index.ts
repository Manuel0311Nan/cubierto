import type { RouteKey } from '../i18n/routes';
import Home from './Home.astro';
import ServiceWeb from './ServiceWeb.astro';
import ServiceCarta from './ServiceCarta.astro';
import MenuExample from './MenuExample.astro';
import ServiceReservas from './ServiceReservas.astro';
import Pricing from './Pricing.astro';
import About from './About.astro';
import Contact from './Contact.astro';
import Thanks from './Thanks.astro';
import NotSent from './NotSent.astro';
import Offline from './Offline.astro';
import Tools from './Tools.astro';
import ToolAllergens from './ToolAllergens.astro';
import ToolNoShows from './ToolNoShows.astro';
import ToolQr from './ToolQr.astro';

/**
 * Vista de cada página traducida. Las páginas en español (src/pages/*.astro) usan las mismas vistas;
 * las de inglés y portugués se generan desde src/pages/[locale]/[...path].astro con este mapa.
 */
export const views = {
  home: Home,
  web: ServiceWeb,
  carta: ServiceCarta,
  cartaEjemplo: MenuExample,
  reservas: ServiceReservas,
  precios: Pricing,
  sobreMi: About,
  contacto: Contact,
  gracias: Thanks,
  noEnviado: NotSent,
  offline: Offline,
  herramientas: Tools,
  tablaAlergenos: ToolAllergens,
  calculadora: ToolNoShows,
  generadorQr: ToolQr,
} satisfies Partial<Record<RouteKey, unknown>>;

export type ViewKey = keyof typeof views;
