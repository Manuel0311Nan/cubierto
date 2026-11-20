# Web comercial · Cubierto

Web en **Astro** para vender la plataforma de hostelería: web + mantenimiento, carta digital con QR y reservas online. Estática, instalable como **PWA**, sin cookies y con casi nada de JavaScript.

Lighthouse móvil (home, build local): Rendimiento 100 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100.

## Arrancar

```bash
npm install
cp .env.example .env     # variables del formulario de contacto (ver más abajo)
npm run dev              # http://localhost:4321
npm run build            # genera .vercel/output/ (estático + la función /api/contacto/)
npm run preview          # sirve la parte estática; aquí funciona el service worker (no en dev). El formulario se prueba con `npm run dev`
```

Requiere **Node 22.23.4 o superior** (lo exige Astro 7). Recomendado: Node 24 LTS, que viene fijado en `.nvmrc`.

```bash
node -v          # comprueba tu versión
nvm install      # con nvm (macOS/Linux): instala y usa la versión de .nvmrc
nvm use
```

## Qué editar antes de publicar

Todo el contenido está en datos, no repartido por los componentes:

| Archivo | Qué contiene |
|---|---|
| `src/config/site.ts` | Marca, dominio, email, teléfono, WhatsApp, datos legales, precios, oferta del piloto |
| `src/data/about.ts` | Tu nombre, foto, experiencia, formación, LinkedIn/GitHub. Lo que tenga `[corchetes]` no se publica, así que puedes ir completándolo poco a poco |
| `src/data/modules.ts` | Texto corto de cada módulo (home) |
| `src/data/services.ts` | Páginas de servicio: títulos SEO, antes/después, funcionalidades |
| `src/data/faq.ts` | Preguntas frecuentes y en qué página sale cada una |

**Pendientes marcados con `TODO` o entre corchetes:**

- [ ] Dominio definitivo en `src/config/site.ts` **y** en `astro.config.mjs` (`site`)
- [ ] Email real, teléfono y WhatsApp
- [ ] Apellido, foto (`public/manuel.jpg` → `person.photo`), años de experiencia y titulación en `src/data/about.ts`
- [ ] Datos legales (titular, NIF, dirección) y revisión de `aviso-legal`, `privacidad`, `cookies`; después, quita el aviso amarillo de borrador de `src/layouts/Legal.astro`
- [ ] Confirmar precios y la oferta del piloto
- [ ] Logo: los originales están en `brand/`. Si cambias el símbolo, actualiza también `src/components/Logo.astro` y ejecuta `npm run icons` para regenerar los iconos de la PWA. `public/og.png` es la imagen para redes

## Formulario de contacto

El formulario envía un `POST` a `/api/contacto/` (`src/pages/api/contacto.ts`), la única ruta que se ejecuta en el servidor: una función de Vercel. El resto de la web sigue siendo estática. La función valida los datos (`src/lib/contact.ts`) y te los envía por email con la API de Resend, sin librerías.

Formato que envía el formulario con JavaScript:

```json
{
  "name": "Ana", "venue": "Casa Brezo", "phone": "600123456", "email": "",
  "interest": ["carta", "reservas"], "message": "…",
  "source": "/carta-digital-qr/", "locale": "es", "consent": true, "sentAt": "2026-11-12T22:00:00.000Z"
}
```

`locale` es el idioma de la página desde la que escriben (`es`, `en` o `pt`). Sin JavaScript, el navegador envía el formulario normal y la función redirige a la página de gracias o de error de ese idioma (`/gracias/`, `/en/thanks/`, `/pt/obrigado/`…). El email que te llega va siempre en español; si escribieron en inglés o portugués, el asunto empieza por `[EN]` o `[PT]` y una línea te dice en qué idioma responder.

**Configuración en Vercel** (Settings → Environment Variables, para Production y Preview) y después volver a desplegar:

| Variable | Valor |
|---|---|
| `PUBLIC_CONTACT_ENDPOINT` | `/api/contacto/` |
| `RESEND_API_KEY` | Clave de Resend (Settings → API Keys, permiso de envío) |
| `CONTACT_TO` | Dónde te llegan los avisos; varias separadas por comas |
| `CONTACT_FROM` | Remitente de un dominio verificado en Resend, p. ej. `Web Cubierto <web@cubierto.site>` |

En Resend, añade y verifica `cubierto.site` eligiendo la región de Irlanda (`eu-west-1`). Sus registros DNS no chocan con los del buzón de correo. En Vercel, Settings → Functions → región `fra1` (Fráncfort).

Respuestas de `/api/contacto/`: `200` enviado · `400` datos no válidos (con `reason`) · `403` otro origen · `405` método · `413` demasiado grande · `415` formato · `502` falló Resend · `503` faltan variables. Con error, el formulario muestra el mensaje y ofrece escribir a `site.contact.email`.

Protección: campo trampa oculto (`company`), consentimiento obligatorio, validación en el navegador y otra vez en el servidor, solo se aceptan envíos desde la propia web y tamaño máximo. Para limitar envíos por IP, crea una regla de rate limit en el Firewall de Vercel para `/api/contacto/`.

Sin `PUBLIC_CONTACT_ENDPOINT`, el formulario abre el cliente de correo del visitante con el mensaje redactado.

**Privacidad:** los mensajes pasan por la función de Vercel y por Resend antes de llegar a tu buzón. Menciónalo en `/privacidad/` cuando completes los textos legales (TODO).

Los botones "Pedir este plan" y "Quiero entrar en el piloto" llevan a `/contacto/?plan=…` o `?motivo=piloto` y el formulario se rellena solo.

## Cookies y consentimiento

Gestor de consentimiento propio, sin dependencias (`src/components/CookieConsent.astro`, configurado en `src/config/cookies.ts`).

- **Sin servicios con cookies no aparece ningún banner.** Ahora mismo la web no usa cookies que necesiten permiso (Umami no las usa), y la política de cookies lo dice.
- Umami Cloud está activo por defecto (`umami` en `src/config/site.ts`; `PUBLIC_UMAMI_SRC` y `PUBLIC_UMAMI_WEBSITE_ID` lo sobrescriben). Solo cuenta visitas del dominio de producción (`data-domains`), así que `localhost` y las previews de Vercel no ensucian los datos.
- Al rellenar `PUBLIC_GA_MEASUREMENT_ID` o `PUBLIC_META_PIXEL_ID` en `.env`, aparecen el banner, el enlace "Configurar cookies" en el pie y la tabla de cookies en `/cookies/`.
- Los scripts de esos servicios se escriben bloqueados (`type="text/plain"`) y solo se ejecutan cuando el visitante acepta su categoría. Antes de aceptar no sale ninguna petición a Google ni a Meta.
- Siguiendo la guía de cookies de la AEPD: Rechazar y Aceptar con el mismo peso visual en la primera capa, nada marcado por defecto, configuración por categorías y retirada del consentimiento siempre disponible. Al retirarlo se borran esas cookies y se recarga la página sin los scripts.
- La elección dura `CONSENT_MAX_AGE_DAYS` (365). Si añades un servicio o cambias finalidades, sube `CONSENT_VERSION` y se volverá a preguntar a todos.
- Para añadir otro servicio (Hotjar, TikTok Pixel…): una entrada en `services` de `src/config/cookies.ts` y su código de carga en `loaders` de `CookieConsent.astro`.
- Otros scripts pueden consultar el consentimiento con `window.zlConsent.has('analytics')` o escuchar el evento `consent:change`.

## Idiomas

La web está en **español** (sin prefijo, las direcciones de siempre), **inglés de EE. UU.** (`/en/`) y **portugués de Portugal** (`/pt/`). Plan y decisiones: `docs/plan-traduccion-en-pt.md`.

- **Direcciones:** `src/i18n/routes.ts`, una clave por página con su dirección en cada idioma. Las guías y los textos legales solo existen en español; desde inglés y portugués se enlazan marcados "(in Spanish)" / "(em espanhol)".
- **Textos de la interfaz:** `src/i18n/es.ts` es la fuente; `en.ts` y `pt.ts` tienen la misma forma. Si añades una clave en `es.ts`, `npm run check` falla hasta que la traduzcas en los otros dos.
- **Textos largos:** `src/data/*.ts` en español y `src/data/en/`, `src/data/pt/` con lo mismo traducido (servicios, módulos, preguntas, sobre mí, herramientas, carta de ejemplo, alérgenos con su nombre oficial del Reglamento 1169/2011 en cada idioma).
- **Páginas:** el contenido de cada página está en `src/views/`. Las páginas en español (`src/pages/*.astro`) solo llaman a su vista; las de inglés y portugués las genera `src/pages/[locale]/[...path].astro` a partir de `src/views/index.ts`.
- **Términos:** `src/i18n/glosario.md`. Úsalo para que "alta", "pack", "cubiertos" o "sin permanencia" se traduzcan siempre igual.
- **Comprobar:** `npm run build && npm run i18n:check` revisa que existan todas las páginas en los tres idiomas, que no se cuele texto en español en `/en/` y `/pt/`, que no haya enlaces a páginas en español sin avisar, los `hreflang` y la longitud de títulos y descripciones.
- **Añadir una página traducida:** su vista en `src/views/`, la página en español que la llama, la clave en `routes.ts` y en `src/views/index.ts`, y sus textos en los tres diccionarios.
- **Añadir un idioma:** `src/i18n/config.ts`, su columna en `routes.ts`, un diccionario `src/i18n/<idioma>.ts`, sus datos en `src/data/<idioma>/`, su página sin conexión en `public/sw.js` y la imagen para compartir `public/og-<idioma>.png`.

La demo de la portada y el plano de sala enseñan un restaurante español: la carta del cliente sale en español con el interruptor para verla en inglés, en las tres versiones. La carta de ejemplo (`/carta-digital-qr/ejemplo/`) sí sale traducida en cada idioma, como la vería un cliente con la traducción de la carta.

## Estructura

```
src/
  config/site.ts            # todo lo configurable
  i18n/                     # idiomas, direcciones (routes.ts), diccionarios es/en/pt, formatos, glosario
  views/                    # contenido de cada página, el mismo para todos los idiomas
  data/                     # textos largos en español; data/en/ y data/pt/ con su traducción
  layouts/
    Base.astro              # <head>, SEO, JSON-LD, registro del service worker
    ServicePage.astro       # plantilla de las 3 páginas de servicio
    Legal.astro
  components/
    MenuDemo.astro          # demo interactiva del hero (panel ↔ carta)
    PackConfigurator.astro  # calculadora de precio por módulos
    CookieConsent.astro     # banner y panel de consentimiento de cookies
    ModuleList, Process, Pilot, AboutTeaser, Faq, ContactForm, …
  pages/                    # español: cada página llama a su vista; [locale]/[...path].astro genera /en/ y /pt/
                            # guías, legales, 404 y robots.txt solo en español
public/
  sw.js                     # service worker propio (sin dependencias)
  manifest.webmanifest, icons/, favicon.svg, favicon.ico, og.png (+ og-en.png, og-pt.png)
brand/                      # logo de Cubierto: SVG originales y PNG para emails (no se publica)
```

## SEO incluido

- Una página por servicio, con título y H1 pensados para búsquedas concretas ("carta digital QR restaurante", "reservas online restaurante", "página web para restaurantes")
- JSON-LD: `ProfessionalService` con zona de servicio, `Service` con precio, `FAQPage`, `BreadcrumbList`, `ProfilePage`
- Canonical, Open Graph con imagen, `sitemap-index.xml` y `robots.txt` automáticos
- `hreflang` entre las versiones en español, inglés y portugués de cada página (más `x-default` al español), `og:locale` y `og:locale:alternate`, e imagen para compartir en cada idioma
- Fuente autoalojada (41 KB) con `preload`; CSS en línea cuando es pequeño; prefetch al pasar el ratón

Siguiente paso recomendado para posicionar: alta en Google Search Console y en Google Business Profile como servicio de Alcalá de Henares, y más adelante páginas por zona (`/torrejon-de-ardoz/`…) solo si tienes contenido real para cada una.

## PWA

- `sw.js`: páginas con red primero (copia en caché y página sin conexión del idioma de la dirección: `/offline/`, `/en/offline/` o `/pt/offline/`), recursos con hash de Astro con caché primero, el resto se sirve de caché y se actualiza en segundo plano
- Al cambiar la lógica del service worker, sube `VERSION` en `public/sw.js`

## Despliegue

Se publica en **Vercel** con el adaptador `@astrojs/vercel`: todas las páginas son estáticas y solo `/api/contacto/` es una función. Si algún día se mueve a otro sitio, hay que cambiar el adaptador (Netlify, Cloudflare o Node en tu VPS) o volver a un endpoint externo para el formulario. Para `sw.js`, `Cache-Control: no-cache`; para `/_astro/*`, `max-age=31536000, immutable` (lo pone ya el adaptador).
