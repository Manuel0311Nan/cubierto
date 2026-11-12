# Web comercial · Zoenlab

Web en **Astro** para vender la plataforma de hostelería: web + mantenimiento, carta digital con QR y reservas online. Estática, instalable como **PWA**, sin cookies y con casi nada de JavaScript.

Lighthouse móvil (home, build local): Rendimiento 100 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100.

## Arrancar

```bash
npm install
cp .env.example .env     # pon la URL de tu webhook de n8n
npm run dev              # http://localhost:4321
npm run build            # genera dist/
npm run preview          # sirve dist/ (el service worker solo funciona aquí, no en dev)
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
- [ ] Si cambias colores o logo: `npm run icons` regenera los iconos de la PWA; `public/og.png` es la imagen para redes

## Formulario de contacto

`PUBLIC_CONTACT_ENDPOINT` recibe un `POST` con JSON:

```json
{
  "name": "Ana", "venue": "Casa Brezo", "phone": "600123456", "email": "",
  "interest": ["carta", "reservas"], "message": "…",
  "source": "/carta-digital-qr/", "consent": true, "sentAt": "2026-11-12T22:00:00.000Z"
}
```

Flujo sugerido en n8n: **Webhook** (POST, responde 200) → **Email** o **Telegram/WhatsApp** a ti → opcionalmente guardar en una hoja o en tu CRM. Activa CORS en el webhook para tu dominio.

Protección: campo trampa oculto (`company`), consentimiento obligatorio y validación en el navegador. Añade rate limit en n8n o en Caddy.

Sin endpoint, el formulario abre el cliente de correo del visitante con el mensaje redactado.

Los botones "Pedir este plan" y "Quiero entrar en el piloto" llevan a `/contacto/?plan=…` o `?motivo=piloto` y el formulario se rellena solo.

## Cookies y consentimiento

Gestor de consentimiento propio, sin dependencias (`src/components/CookieConsent.astro`, configurado en `src/config/cookies.ts`).

- **Sin servicios con cookies no aparece ningún banner.** Ahora mismo la web no usa cookies que necesiten permiso (Umami no las usa), y la política de cookies lo dice.
- Al rellenar `PUBLIC_GA_MEASUREMENT_ID` o `PUBLIC_META_PIXEL_ID` en `.env`, aparecen el banner, el enlace "Configurar cookies" en el pie y la tabla de cookies en `/cookies/`.
- Los scripts de esos servicios se escriben bloqueados (`type="text/plain"`) y solo se ejecutan cuando el visitante acepta su categoría. Antes de aceptar no sale ninguna petición a Google ni a Meta.
- Siguiendo la guía de cookies de la AEPD: Rechazar y Aceptar con el mismo peso visual en la primera capa, nada marcado por defecto, configuración por categorías y retirada del consentimiento siempre disponible. Al retirarlo se borran esas cookies y se recarga la página sin los scripts.
- La elección dura `CONSENT_MAX_AGE_DAYS` (365). Si añades un servicio o cambias finalidades, sube `CONSENT_VERSION` y se volverá a preguntar a todos.
- Para añadir otro servicio (Hotjar, TikTok Pixel…): una entrada en `services` de `src/config/cookies.ts` y su código de carga en `loaders` de `CookieConsent.astro`.
- Otros scripts pueden consultar el consentimiento con `window.zlConsent.has('analytics')` o escuchar el evento `consent:change`.

## Estructura

```
src/
  config/site.ts            # todo lo configurable
  data/                     # textos: módulos, servicios, FAQ, sobre mí
  layouts/
    Base.astro              # <head>, SEO, JSON-LD, registro del service worker
    ServicePage.astro       # plantilla de las 3 páginas de servicio
    Legal.astro
  components/
    MenuDemo.astro          # demo interactiva del hero (panel ↔ carta)
    PackConfigurator.astro  # calculadora de precio por módulos
    CookieConsent.astro     # banner y panel de consentimiento de cookies
    ModuleList, Process, Pilot, AboutTeaser, Faq, ContactForm, …
  pages/                    # / · /web-para-restaurantes/ · /carta-digital-qr/ · /reservas-online/
                            # /sobre-mi/ · /contacto/ · legales · /offline/ · 404 · robots.txt
public/
  sw.js                     # service worker propio (sin dependencias)
  manifest.webmanifest, icons/, favicon.svg, og.png
```

## SEO incluido

- Una página por servicio, con título y H1 pensados para búsquedas concretas ("carta digital QR restaurante", "reservas online restaurante", "página web para restaurantes")
- JSON-LD: `ProfessionalService` con zona de servicio, `Service` con precio, `FAQPage`, `BreadcrumbList`, `ProfilePage`
- Canonical, Open Graph con imagen, `sitemap-index.xml` y `robots.txt` automáticos
- Fuente autoalojada (41 KB) con `preload`; CSS en línea cuando es pequeño; prefetch al pasar el ratón

Siguiente paso recomendado para posicionar: alta en Google Search Console y en Google Business Profile como servicio de Alcalá de Henares, y más adelante páginas por zona (`/torrejon-de-ardoz/`…) solo si tienes contenido real para cada una.

## PWA

- `sw.js`: páginas con red primero (copia en caché y página `/offline/` si no hay conexión), recursos con hash de Astro con caché primero, el resto se sirve de caché y se actualiza en segundo plano
- Al cambiar la lógica del service worker, sube `VERSION` en `public/sw.js`

## Despliegue

Es una web estática: Vercel, Netlify, Cloudflare Pages o tu VPS con Caddy sirviendo `dist/`. Para `sw.js`, configura `Cache-Control: no-cache`; para `/_astro/*`, `max-age=31536000, immutable`.
