# CLAUDE.md

Guía de trabajo para Claude Code en este repositorio. Léela entera antes de cada sesión.

## 1. Qué es este proyecto

Web comercial de **Cubierto** para vender a bares y restaurantes de Alcalá de Henares y el Corredor del Henares tres servicios de la plataforma de hostelería:

| Módulo | Clave | Página |
|---|---|---|
| Web + mantenimiento | `web` | `/web-para-restaurantes/` |
| Carta digital con QR | `carta` | `/carta-digital-qr/` |
| Reservas online | `reservas` | `/reservas-online/` |

Su único trabajo es **posicionar en Google y conseguir contactos** (formulario → `/api/contacto/` → email por Resend). No es la plataforma: el producto real (multi-tenant, Next.js) vive en otro repositorio con sus specs. Los precios y lo que se promete aquí deben coincidir con esas specs.

Público: dueños y encargados de hostelería, poco técnicos, leyendo desde el móvil.

## 2. Stack

- **Astro 7**, salida estática (`output: "static"`), `trailingSlash: "always"`. **Única excepción:** `src/pages/api/contacto.ts` (`prerender = false`), que se ejecuta como función de Vercel con `@astrojs/vercel`
- Publicada en **Vercel** (región de funciones `fra1`)
- **TypeScript** estricto (`astro/tsconfigs/strict`)
- CSS propio con tokens en `src/styles/global.css` (sin Tailwind ni librerías de componentes)
- JavaScript **vanilla** en `<script>` de cada componente (sin React, Vue ni islas de framework)
- Fuente autoalojada: Bricolage Grotesque variable (`@fontsource-variable`, solo eje de peso)
- `@astrojs/sitemap` · PWA con `public/manifest.webmanifest` y `public/sw.js` escrito a mano
- `sharp` (viene con Astro) solo para `scripts/generate-assets.mjs`

**Node ≥ 22.23.4** (lo exige Astro 7). Versión fijada en `.nvmrc` (24). Si `astro` falla con "Please upgrade Node.js", es la versión de Node, no el código.

## 3. Comandos

```bash
npm install
npm run dev        # http://localhost:4321 (el service worker no se registra en dev)
npm run build      # genera .vercel/output/ (páginas estáticas + la función del formulario)
npm run preview    # sirve la parte estática; aquí sí funciona la PWA (el formulario se prueba con dev)
npm run check      # astro check (tipos)
npm run icons      # regenera los iconos PWA desde brand/
```

Variables (`.env`, ver `.env.example`): `PUBLIC_CONTACT_ENDPOINT`, `PUBLIC_UMAMI_SRC`, `PUBLIC_UMAMI_WEBSITE_ID`, `PUBLIC_GA_MEASUREMENT_ID`, `PUBLIC_META_PIXEL_ID`. Solo servidor (esquema `env` de `astro.config.mjs`, se leen con `astro:env/server`): `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`.

## 4. Estructura

```
src/
  config/site.ts          # marca, dominio, contacto, datos legales, PRECIOS, piloto, navegación
  config/cookies.ts       # servicios con cookies, categorías, versión y caducidad del consentimiento
  data/                   # TODO el texto editable
    modules.ts            # resumen de cada módulo (home)
    services.ts           # páginas de servicio: SEO, antes/después, funcionalidades
    faq.ts                # preguntas y en qué páginas salen
    about.ts              # persona, experiencia y formación (se publica solo lo completo)
    alergenos.ts          # los 14 alérgenos del Reglamento (UE) 1169/2011 (carta de ejemplo y tabla)
    ejemplo-carta.ts      # carta inventada de Casa Brezo para /carta-digital-qr/ejemplo/
    herramientas.ts       # textos de /herramientas/ (tabla de alérgenos, calculadora de no-shows)
  content/guias/*.md      # guías (artículos); esquema en src/content.config.ts, URL = nombre del archivo
  lib/jsonld.ts           # generadores schema.org (FAQPage, Service, BreadcrumbList)
  lib/contact.ts          # validación del formulario y email de aviso (funciones puras)
  layouts/
    Base.astro            # <head>, SEO, JSON-LD de negocio, header/footer, cookies, registro SW
    ServicePage.astro     # plantilla única de las 3 páginas de servicio
    Legal.astro           # páginas legales (lleva aviso de borrador)
  components/             # un componente = marcado + <script> + <style> con scope
  pages/                  # rutas; las de servicio son una línea que llama a ServicePage
    api/contacto.ts       # ÚNICA ruta de servidor: recibe el formulario y lo envía con Resend
    gracias.astro, no-enviado.astro  # destinos del formulario sin JavaScript (noindex)
public/                   # sw.js, manifest, iconos, og.png, favicon.svg, favicon.ico
  qr/carta-ejemplo.svg    # QR estático de la carta de ejemplo (si cambia la URL, regenéralo)
brand/                    # logo: SVG originales (símbolo, nombre, logo completo, iconos) y PNG para emails
scripts/generate-assets.mjs  # iconos PWA desde brand/*.svg
```

## 5. Reglas de contenido

1. **El texto vive en `src/data/` y `src/config/`**, no dentro de los componentes. Un cambio de copy no debería tocar un `.astro`.
2. **Precios solo en `pricing` de `site.ts`.** Se usan en la lista de módulos, la calculadora, las páginas de servicio y el JSON-LD. Nunca escribas un importe a mano en otro sitio.
3. Español de España, tuteo, frases cortas, verbos claros. Se escribe desde el punto de vista del dueño del local ("cambias un precio"), no del sistema ("gestión de entidades").
4. Botones que dicen lo que pasa: "Pedir una demo", "Enviar mensaje". Sin flechas `→` ni MAYÚSCULAS en etiquetas.
5. Los huecos pendientes van entre corchetes (`[Año]`, `[NIF]`) o con `// TODO`. No los rellenes con datos inventados. En `about.ts`, las entradas con corchetes no se publican (las filtra `publishable`), así que se pueden dejar a medias.
6. El restaurante de la demo ("Casa Brezo") y sus platos son inventados y así se indica en el aviso legal.
7. La web habla a dueños de restaurantes: no menciones tecnologías (Next.js, Astro, PostgreSQL…) en textos visibles. Se habla de resultados: rapidez, que te encuentren, tus datos en la UE.

## 6. Reglas de diseño

- Colores **solo con tokens** de `global.css`: `--paper`, `--surface`, `--tile`, `--ink`, `--muted`, `--line`, `--bottle`, `--saffron`, `--tomato`, `--strong`. Cada token tiene valor claro y oscuro; si añades uno, añádelo en los **tres** bloques (`:root`, `prefers-color-scheme: dark` y `[data-theme='dark']`).
- `--saffron` es para la acción principal; `--tomato` solo para errores y "agotado".
- Escala tipográfica `--step--1` … `--step-5` y espacios `--space-1` … `--space-6`. No inventes tamaños sueltos.
- Una sola fuente (Bricolage). No añadas otra familia.
- **Movimiento:** solo como respuesta a lo que hace el usuario (la demo del hero, acordeones, interruptores). Nada de animaciones de entrada por sección. Respeta `prefers-reduced-motion` (ya está en `global.css`).
- Lo memorable es la demo del hero (`MenuDemo.astro`). El resto de la página se mantiene sobrio; no compitas con ella.
- Móvil primero: todo debe funcionar a 360 px sin scroll horizontal.

## 7. Reglas técnicas

- **Cero frameworks de cliente.** Si algo necesita interacción, `<script>` en el propio componente, con `document.querySelectorAll('[data-…]')` para soportar varias instancias.
- Todo debe funcionar sin JavaScript en lo básico: enlaces, formulario (cae a `mailto:` o al endpoint), acordeones (`<details>`), menú móvil (`<details>`).
- Accesibilidad: un solo `<h1>` por página, `label` en cada campo, `aria-pressed`/`role="switch"` en controles de estado, foco visible (`:focus-visible` global), contraste AA.
- Imágenes con `width`/`height` y `loading="lazy"` por debajo del pliegue.
- `localStorage` solo para el consentimiento de cookies, siempre dentro de `try/catch`.

## 8. SEO (obligatorio en cada página)

- `title` y `description` propios vía props de `Base` (descripción ≤ 160 caracteres).
- Un `<h1>` que contenga la búsqueda objetivo de la página.
- JSON-LD con `lib/jsonld.ts`: `Service` + `BreadcrumbList` + `FAQPage` en servicios; `ProfilePage` en sobre mí. `Base` ya añade `ProfessionalService`.
- Guías en `src/content/guias/`: cada una con `sources` (fuentes reales), `service` (a qué servicio lleva) y respuesta directa en el primer párrafo. Llevan `Article` + `BreadcrumbList` y salen solas en `/guias/` y en "Guías relacionadas" de su servicio. Nada de datos sin fuente.
- Páginas que no deben indexarse (`/offline/`, `404`): prop `noindex` y excluidas del sitemap en `astro.config.mjs`.
- Si cambias el dominio, cámbialo en **`site.ts` y `astro.config.mjs`**.
- Herramientas en `/herramientas/`: gratis, sin registro y sin cifras del sector sin fuente; los cálculos usan los números que mete el usuario. Cada una enlaza a su servicio.
- Marca: "Cubierto" es una palabra común. `alternateName` y los perfiles (`profiles` en `site.ts`, salen como `sameAs`) deben usar el mismo nombre, teléfono y web en todas partes.
- Nuevas páginas por zona (p. ej. `/torrejon-de-ardoz/`) solo con contenido propio real, nunca duplicando texto cambiando el nombre de la ciudad.

## 9. PWA

- `public/sw.js`: páginas con red primero y respaldo `/offline/`; `/_astro/*` con caché primero; resto, servir y actualizar.
- **Si cambias la lógica del service worker o la lista `PRECACHE`, sube `VERSION`.**
- No cachees peticiones `POST`, `/api/*` ni de otros dominios.

## 10. Cookies

- Sin servicios activos en `config/cookies.ts` **no se muestra banner**. Es intencionado: hoy la web no usa cookies que requieran permiso (Umami no las usa).
- Los scripts de terceros se cargan solo desde `CookieConsent.astro` como `type="text/plain" data-consent="<categoría>"`. Nunca pongas un script de analítica o publicidad directamente en `Base.astro`.
- Rechazar y Aceptar tienen el mismo peso visual en la primera capa (guía de la AEPD). No lo cambies.
- Añadir un servicio = entrada en `services` (`config/cookies.ts`) + su cargador en `loaders` (`CookieConsent.astro`) + subir `CONSENT_VERSION`.

## 11. Formulario de contacto

- Envía `POST` JSON a `PUBLIC_CONTACT_ENDPOINT` (`/api/contacto/`). Sin JavaScript, el formulario normal llega al mismo endpoint y redirige a `/gracias/` o `/no-enviado/`. El formato y las respuestas están en el README; si cambias uno, cambia el otro y `src/lib/contact.ts`.
- La validación del servidor (`parseLead`) repite las reglas del formulario: si cambias un campo, cambia los dos.
- Nada de datos personales en los logs de la función: solo códigos de error.
- Mantén: campo trampa `company`, consentimiento obligatorio, mensaje de error que diga qué hacer, prerrelleno desde `?plan=` y `?motivo=`.

## 12. Definition of Done

- [ ] `npm run build` sin errores ni avisos nuevos
- [ ] `npm run check` sin errores de tipos
- [ ] Revisado a 412 px (móvil) y 1366 px (escritorio), en modo claro y oscuro, sin scroll horizontal
- [ ] Lighthouse móvil de la página tocada ≥ 95 en las cuatro categorías (hoy la home está en 100)
- [ ] Si tocas `sw.js`, probado sin conexión con `npm run preview`
- [ ] README actualizado si cambia algo de configuración, variables o formato del formulario

## 13. Git

- Conventional Commits en inglés: `feat(pricing): add annual plan toggle`, `fix(sw): bump cache version`.
- **Los commits salen solo a nombre de Manuel: no añadir trailers `Co-Authored-By: Claude` ni `Claude-Session`.**
- Nunca se sube `.env`, `dist/`, `.vercel/`, `.astro/` ni `node_modules/`.

## 14. Qué NO hacer

- **No** añadir más rutas de servidor ni `output: "server"` sin preguntar: la web es estática salvo `/api/contacto/`.
- **No** añadir React, Vue, Svelte, Tailwind ni librerías de UI. Si de verdad hace falta una dependencia, justifícalo (peso, alternativa nativa) y pregunta antes.
- **No** escribir precios, emails, teléfonos ni el dominio fuera de `src/config/site.ts`.
- **No** inventar testimonios, reseñas, logos de clientes, cifras de resultados ni años de experiencia. Si no hay dato real, se deja el hueco o la sección no aparece.
- **No** inventar textos legales nuevos: completar los de `pages/aviso-legal`, `privacidad` y `cookies` y marcar lo que falte.
- **No** cargar scripts de terceros fuera del gestor de consentimiento ni fuentes desde Google Fonts u otros CDN.
- **No** añadir animaciones de entrada, carruseles automáticos, pop-ups ni contadores de urgencia falsos.
- **No** cambiar colores con valores hex sueltos en componentes; usa tokens.
- **No** romper el funcionamiento sin JavaScript de enlaces, formulario y menú.
- **No** crear páginas de ciudades con texto duplicado para SEO.
- **No** subir la versión de Astro o Node sin comprobar `engines` y `.nvmrc`.
