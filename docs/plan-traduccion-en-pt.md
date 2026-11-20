# Plan de ejecución: la web en inglés y portugués

**Estado:** v1.0 (fases 1 a 5 hechas) · **Fecha:** 20/11/2026 · **Owner:** Manuel · **Repo:** `zoenlab-web` (`cubierto.site`)

## Estado (20/11/2026)

- **Hecho:** fases 1 a 5, en la rama `feat/i18n`. Inglés de EE. UU. en `/en/` y portugués de Portugal en `/pt/`: 15 páginas por idioma, más la 404 que cambia de idioma según la dirección.
- **Decidido:** D1 = **portugués de Portugal**; inglés = **de EE. UU.** (`en-US`). D2 a D7, como se propone abajo.
- **Pendiente:** la revisión de una persona nativa (D6) antes de anunciarlo, y la fase 6 (guías y textos legales).
- **Cambio sobre el plan:** la demo de la portada y el plano de sala no cambian de idioma de la carta: enseñan un restaurante español, con la carta del cliente en español y el interruptor a inglés, en las tres versiones. Lo que sí sale traducido es la carta de ejemplo (`/en/qr-menu/example/`, `/pt/menu-digital-qr/exemplo/`), como la vería un cliente con la traducción de la carta (MENU-07).
- **Extra:** el email que te llega del formulario dice en qué idioma te escribieron (`[EN]`, `[PT]` en el asunto) y el teléfono sale con `+34` en inglés y portugués.

---

Plan para publicar `cubierto.site` en **inglés** y **portugués** además del español, sin perder lo que ya funciona: las URL en español, Lighthouse 100, la web estática, el funcionamiento sin JavaScript y el formulario. Está pensado para ejecutarse por fases, cada una con su commit o PR, y para que añadir un idioma más después sea añadir archivos, no rehacer código.

---

## 1. Antes de empezar: decisiones

Las cuatro primeras cambian textos y direcciones, así que hay que cerrarlas antes de la fase 2. La propuesta es lo que se hará si no se decide otra cosa.

| # | Decisión | Opciones | Propuesta |
|---|---|---|---|
| D1 | **¿Portugués de Portugal o de Brasil?** | `pt-PT` o `pt-BR`. Cambia vocabulario ("ementa"/"cardápio", "contacto"/"contato"), el trato y las direcciones | Depende de a quién quieres llegar: hosteleros brasileños en Madrid → `pt-BR`; Portugal o portugueses → `pt-PT`. **Hay que elegir una**: mezclarlas suena raro a las dos |
| D2 | **Direcciones traducidas o iguales** | `/en/qr-menu/` o `/en/carta-digital-qr/` | **Traducidas**: se leen mejor, se comparten mejor por WhatsApp y ayudan algo en Google |
| D3 | **Páginas legales** (aviso legal, privacidad, cookies) | Traducirlas o enlazar a las de español | **En la primera versión, enlazar a las de español**, marcadas "(en español)", porque aún tienen huecos (`[NIF]`). Sí se traducen el texto de consentimiento del formulario y un resumen de privacidad junto a él, porque quien envía datos tiene que entender para qué. Traducción completa cuando los textos estén cerrados, con la cláusula "en caso de discrepancia prevalece la versión en español" |
| D4 | **Guías** (6 artículos, unas 4.500 palabras) | Todas, algunas o ninguna en la primera versión | **Ninguna en la primera versión**; después, las dos más útiles para un dueño extranjero: cuánto cuesta una web y reducir no-shows. Son guías sobre normativa española: se adaptan ("en España…"), no se traducen palabra por palabra |
| D5 | **Selector de idioma** | Enlaces en cabecera y pie, o además redirigir según el navegador | **Solo enlaces** ("ES · EN · PT") que llevan a la misma página en el otro idioma. Sin redirección automática: confunde a Google y a quien comparte un enlace |
| D6 | **Quién revisa** | Solo la traducción de Claude, o además una persona nativa | Claude traduce con un glosario. **Una persona nativa revisa al menos la portada, precios, contacto y una página de servicio** antes de publicar, sobre todo en portugués |
| D7 | **Formato de precios** | "24 €" en todos los idiomas, o el formato de cada idioma (`€24`) | El de cada idioma con `Intl` (es `24 €`, en `€24`, pt `24 €`). Los importes no cambian y siguen saliendo solo de `pricing` en `site.ts` |

**Para más adelante, no ahora:** si el objetivo son dueños de locales de Alcalá que no son españoles, conviene mirar qué idiomas pesan más en la zona (por ejemplo, el rumano). Con este plan, añadir un idioma es un diccionario, sus datos y una entrada en la configuración.

---

## 2. Cómo quedará

### Direcciones

El español **no cambia de dirección** (no hay redirecciones ni se pierde posicionamiento). Inglés y portugués cuelgan de `/en/` y `/pt/`.

| Español (igual que hoy) | Inglés (EE. UU.) | Portugués (Portugal) |
|---|---|---|
| `/` | `/en/` | `/pt/` |
| `/web-para-restaurantes/` | `/en/restaurant-website/` | `/pt/site-para-restaurantes/` |
| `/carta-digital-qr/` | `/en/qr-menu/` | `/pt/menu-digital-qr/` |
| `/carta-digital-qr/ejemplo/` | `/en/qr-menu/example/` | `/pt/…/exemplo/` |
| `/reservas-online/` | `/en/online-reservations/` | `/pt/reservas-online/` |
| `/precios/` | `/en/pricing/` | `/pt/precos/` |
| `/sobre-mi/` | `/en/about/` | `/pt/sobre-mim/` |
| `/contacto/` | `/en/contact/` | `/pt/contacto/` |
| `/gracias/` · `/no-enviado/` | `/en/thanks/` · `/en/not-sent/` | `/pt/obrigado/` · `/pt/nao-enviado/` |
| `/herramientas/` (+ 3 herramientas) | `/en/tools/` (`allergen-chart`, `no-show-calculator`, `qr-code-generator`) | `/pt/ferramentas/` (`tabela-alergenios`, `calculadora-no-shows`, `gerador-qr`) |
| `/guias/` | `/en/guides/` (cuando haya guías traducidas) | `/pt/guias/` |
| `/offline/` | `/en/offline/` | `/pt/offline/` |
| `/aviso-legal/`, `/privacidad/`, `/cookies/` | Enlazan a las de español (D3) | Igual |

### Qué ve el visitante

- En la cabecera y el pie, "ES · EN · PT", que lleva a **la misma página** en el otro idioma (o a la portada de ese idioma si esa página no está traducida, como una guía).
- Todo traducido en las páginas de cada idioma: menú, botones, formularios, demos, calculadoras, mensajes de error y datos estructurados.
- **La demo de la carta** de la portada: el panel del dueño va en el idioma de la página; la carta del cliente, en español con el interruptor a inglés (ver Estado).

### Lo que no cambia

- Precios, email, teléfono y dominio, que siguen solo en `site.ts`.
- La web estática con una única ruta de servidor (`/api/contacto/`).
- Sin frameworks de cliente ni librerías de i18n: un diccionario tipado en TypeScript basta.
- El email que te llega del formulario sigue en español, con una línea que dice en qué idioma te escribieron.

---

## 3. Cómo se monta (técnico)

### 3.1 Idiomas y diccionarios

```
src/i18n/
  config.ts      # locales = ['es','en','pt'], defaultLocale = 'es', códigos BCP 47 y og:locale
  routes.ts      # mapa de rutas: clave de página → dirección en cada idioma (tabla de §2)
  es.ts          # textos de la interfaz en español: FUENTE DE VERDAD
  en.ts          # mismo objeto en inglés: tipo Dict = estructura de es.ts
  pt.ts          # ídem
  index.ts       # t(locale), localizedPath(key, locale), alternates(key)
  format.ts      # money(), number(), date() con Intl según el idioma
```

- `es.ts` exporta `const es = {…} as const`. `en.ts` y `pt.ts` se declaran como `Dict`, un tipo que exige **las mismas claves**: si falta una traducción, `npm run check` falla. No hay textos a medias en producción.
- Los datos largos de `src/data/` (`services.ts`, `faq.ts`, `modules.ts`, `about.ts`, `herramientas.ts`, `ejemplo-carta.ts`, `alergenos.ts`) pasan a exportar `Record<Locale, …>`, o una carpeta por idioma si un archivo crece demasiado. La regla del repo se mantiene: **el texto vive en `src/data/`, `src/config/` y `src/i18n/`, no en los componentes.**
- **Alérgenos:** se usan las denominaciones oficiales del Reglamento (UE) 1169/2011 en cada idioma, no una traducción libre. Para `pt-BR`, comprobar los términos de ANVISA (D1).

### 3.2 Páginas sin duplicar código

- El contenido de cada página pasa a un componente "vista" en `src/views/` (`Home.astro`, `Pricing.astro`, …) que recibe `locale`.
- **Español:** los archivos de `src/pages/` se quedan donde están y solo llaman a su vista con `locale="es"`. Las URL no se tocan.
- **Inglés y portugués:** una sola ruta `src/pages/[locale]/[...path].astro` cuyo `getStaticPaths()` recorre `routes.ts` y genera todas las páginas de `en` y `pt` con su vista. Sigue siendo 100 % estático.
- `ServicePage.astro`, `Legal.astro` y `Base.astro` reciben `locale`.
- **`404`:** es un único archivo estático. Muestra el texto según el prefijo de la dirección (`/en/`, `/pt/`) con un script mínimo, y en español sin JavaScript.

### 3.3 Componentes con script (demos, calculadoras, cookies)

`MenuDemo`, `FloorPlanDemo`, `PackConfigurator`, `ContactForm`, `CookieConsent`, la calculadora de no-shows, el generador de QR y la tabla de alérgenos tienen textos dentro del `<script>`.

- Esos textos se pasan desde el servidor en un atributo `data-i18n` (JSON) en la raíz del componente, y el script los lee de ahí. Así siguen funcionando con varias instancias y sin framework.
- Los `Intl.NumberFormat('es-ES', …)` y `toLocaleString('es-ES')` repartidos por el código se sustituyen por `format.ts`, al que se le pasa el idioma por `data-locale`.
- **Tabla de alérgenos:** la hoja que imprime el dueño sale en el idioma de la página. Es un extra útil: un local puede imprimirla también en inglés para sus clientes.

### 3.4 Formulario y `/api/contacto/`

- El formulario envía un campo oculto `locale` (`es` | `en` | `pt`). `parseLead` lo valida contra la lista; si falta, `es`.
- **Sin JavaScript**, la función redirige a `/gracias/`, `/en/thanks/` o `/pt/obrigado/` (y lo mismo para los errores) según `locale`. Las respuestas JSON no cambian.
- **El email que te llega:** asunto con el idioma (`[EN] Nuevo contacto: …`) y una línea "Te escribió desde la web en inglés: responde en inglés". El resto, en español.
- El teléfono ya admite prefijos internacionales (`+351…`, `+55…`) y el enlace de WhatsApp los respeta. Hay que añadir un test con un número extranjero.
- Los mensajes de error del formulario se buscan en el diccionario por su código (`consent`, `phone`…), no se escriben en el script.
- Se mantienen el campo trampa, el consentimiento obligatorio y el prerrelleno con `?plan=` y `?motivo=`.

### 3.5 SEO

- `<html lang>` con el código del idioma (`es`, `en`, `pt-PT` o `pt-BR`).
- En cada página: `canonical` a sí misma y `<link rel="alternate" hreflang>` a **todas** sus versiones (incluida ella misma), más `x-default` → español. Solo a versiones que existan: una guía sin traducir no anuncia alternativas.
- `og:locale` y `og:locale:alternate`. La imagen para compartir (`og.png`) lleva una frase en español: se hace una por idioma (`og-en.png`, `og-pt.png`) con el mismo diseño.
- **JSON-LD:** `inLanguage` por página; `availableLanguage: ['es','en','pt']` en el negocio; las migas de pan (`BreadcrumbList`) con nombres traducidos; las preguntas frecuentes (`FAQPage`) en el idioma de la página.
- **Títulos y descripciones escritos para cada idioma**, no traducidos literalmente, respetando los límites (descripción ≤ 160 caracteres).
- **Sitemap:** el `i18n` de `@astrojs/sitemap` solo agrupa versiones con la misma dirección, y aquí están traducidas. Se dejan las alternativas en el HTML (suficiente para Google) y el sitemap lista todas las páginas. Opcional: añadir las alternativas al sitemap con `serialize` leyendo `routes.ts`.
- **Expectativa realista:** las páginas en inglés y portugués no van a competir por búsquedas en español. Sirven para que un dueño que prefiere esos idiomas entienda la oferta y para enviarle el enlace en su idioma.

### 3.6 PWA y cookies

- `public/sw.js`: añadir `/en/offline/` y `/pt/offline/` a `PRECACHE`; la página sin conexión que se sirve depende del prefijo de la dirección. **Subir `VERSION` a `v4`.**
- `manifest.webmanifest` sigue en español (uno solo). Un manifiesto por idioma solo si algún día se quiere instalar la web en inglés con nombre propio.
- `CookieConsent`: textos al diccionario. El consentimiento es el mismo en todos los idiomas (misma clave de almacenamiento).

---

## 4. Fases

Cada fase termina con `npm run build` y `npm run check` limpios y un commit propio. Estimaciones de trabajo de Claude con tu revisión.

### Fase 0 · Decisiones (tú, 15–30 min)
- [x] Cerrar D1 a D7 (§1): portugués de Portugal, inglés de EE. UU.; el resto, como se propone.
- [ ] Confirmar quién hace la revisión nativa (D6).

### Fase 1 · Preparar el código sin cambiar nada visible (1–1,5 días)
- [x] Hacer un `npm run build` y guardar `.vercel/output/static` como referencia.
- [x] Crear `src/i18n/` (config, rutas, `es.ts`, `format.ts`, helpers).
- [x] Sacar a `es.ts` o a `src/data/` todos los textos que siguen dentro de componentes y páginas.
- [x] Pasar las páginas a vistas en `src/views/` con `locale`; `Base`, `ServicePage` y `Legal` con `locale`.
- [x] Cambiar los `Intl`/`toLocaleString` por `format.ts`.
- [x] Componentes con script: textos por `data-i18n`.
- [x] **Hecho cuando:** el HTML generado en español es **idéntico** a la referencia (comparación de `dist` antes y después, salvo atributos nuevos sin efecto visible) y Lighthouse sigue en 100.
- Commit: `refactor(i18n): move copy into dictionaries and views without visible changes`

### Fase 2 · Glosario y textos en inglés (1 día)
- [x] Glosario (§5) aprobado por ti.
- [x] `en.ts` y datos en inglés: portada, tres servicios, precios, contacto, sobre mí, gracias/no enviado, 404, sin conexión, cabecera, pie y cookies.
- [x] Ruta `[locale]/[...path].astro` con las páginas de `routes.ts`.
- [x] Selector "ES · EN · PT" (el PT aún oculto).
- [x] Formulario con `locale`, redirecciones y email con idioma (§3.4); test con teléfono extranjero.
- [x] Títulos, descripciones, `hreflang`, `og:locale` y JSON-LD en inglés.
- Commit: `feat(i18n): add English version of core pages`

### Fase 3 · Portugués (1 día + revisión)
- [x] `pt.ts` y datos en la variante elegida en D1.
- [ ] Revisión nativa (D6) y correcciones.
- [x] Mostrar "PT" en el selector.
- Commit: `feat(i18n): add Portuguese version of core pages`

### Fase 4 · Herramientas y demos (0,5–1 día)
- [x] Carta de ejemplo de Casa Brezo en los tres idiomas (la demo arranca en el idioma de la página).
- [x] Plano de sala, configurador del pack, calculadora de no-shows, generador de QR y tabla de alérgenos con nombres oficiales.
- Commit: `feat(i18n): translate tools and interactive demos`

### Fase 5 · SEO, PWA y comprobaciones finales (0,5 día)
- [x] `sw.js` (`VERSION` v4) y página sin conexión por idioma, probado con `npm run preview` sin conexión.
- [x] Comprobaciones de §6.
- [x] README y `CLAUDE.md` actualizados (§7).
- [ ] Despliegue en preview de Vercel, revisión tuya en el móvil y paso a producción.
- [ ] Search Console: comprobar que las páginas `/en/` y `/pt/` se indexan y que no hay errores de `hreflang` (a las 1–2 semanas).
- Commit: `feat(seo): add hreflang alternates and localized structured data`

### Fase 6 · Guías y páginas legales (después, cuando toque)
- [ ] Guías elegidas en D4, adaptadas, con la colección organizada en `src/content/guias/{es,en,pt}/` y un campo `translationOf` para enlazar versiones. Las fuentes siguen siendo las españolas, marcadas "(en español)".
- [ ] Textos legales completos cuando estén cerrados en español, con cláusula de prevalencia (D3).

**Total estimado:** unos 4–5 días de trabajo para fases 1 a 5, más la revisión nativa. La fase 6, aparte.

---

## 5. Cómo se traduce

- **Glosario antes de traducir**, en `src/i18n/glosario.md`, con cada término en los tres idiomas y cuándo no se traduce. Primeros términos: Cubierto (no se traduce), carta / carta digital, menú del día, cubiertos (comensales), no-show, alta (pago único), cuota, pack, piloto, sin permanencia, IVA incluido / sin IVA, local, dueño, sala, turno, reserva, agotado, alérgenos (términos oficiales), Casa Brezo (no se traduce).
- **Tono:** el mismo que en español. Cercano, frases cortas, desde el punto de vista del dueño ("cambias un precio"), sin tecnologías en los textos y botones que dicen lo que pasa. En inglés, "you"; en portugués, el trato habitual de la variante elegida.
- **IVA:** "excl. VAT" / "VAT included"; "sem IVA" / "IVA incluído". Las cifras salen siempre de `pricing`.
- **Nada de traducción automática en el navegador** ni en tiempo de ejecución: los textos se revisan y se guardan en el repo.
- **Contexto español, explícito:** cuando un texto hable de normativa (carta en papel obligatoria en Madrid, alérgenos, AEPD), se dice que es la normativa española. No se adapta a la de otros países.

---

## 6. Comprobaciones

| Qué | Cómo |
|---|---|
| Español idéntico tras la fase 1 | Comparar `.vercel/output/static` antes y después |
| No falta ninguna traducción | Tipos (`npm run check`) y un script `npm run i18n:check` que comprueba que cada ruta de `routes.ts` existe en los tres idiomas |
| No quedan textos en español en `/en/` y `/pt/` | El mismo script busca palabras típicas ("Pedir", "carta", "reservas", "IVA") en el HTML de esas carpetas y avisa |
| Enlaces que no cambian de idioma sin querer | El script avisa si una página `/en/` enlaza a una página en español, salvo legales y fuentes |
| `hreflang` recíprocos | Cada página que anuncia una alternativa tiene la vuelta, comprobado sobre el HTML generado |
| Formulario | Envío en los tres idiomas, con y sin JavaScript: llega el email con `[EN]`/`[PT]` y se redirige a la página de gracias correcta |
| Lighthouse | Móvil ≥ 95 (objetivo 100) en `/`, `/en/`, `/pt/` y una página de servicio por idioma |
| Diseño | Revisado a 412 y 1366 px, modo claro y oscuro. Ojo: el inglés suele ser más corto y el portugués más largo; vigilar botones y la cabecera |
| Sin conexión | `npm run preview`, cortar la red y abrir `/en/` |

---

## 7. Cambios en `CLAUDE.md` y README

- **Reglas de contenido:** "Todo texto nuevo se añade en los tres idiomas (`src/i18n/` y `src/data/`); si aún no hay traducción, la página no se publica en ese idioma". Glosario obligatorio.
- **SEO:** `hreflang` y `canonical` por idioma ya los pone `Base`; títulos y descripciones propios en cada idioma.
- **Estructura:** añadir `src/i18n/`, `src/views/` y `src/pages/[locale]/`.
- **Qué NO hacer:** no escribir textos en componentes; no redirigir por idioma del navegador; no traducir con servicios automáticos en el navegador; no cambiar las direcciones en español.
- **README:** cómo añadir un texto, una página o un idioma nuevo, y el formato del campo `locale` del formulario.

---

## 8. Riesgos

| Riesgo | Cómo se reduce |
|---|---|
| Cada cambio de texto pasa a ser triple y la web se desincroniza | Los tipos obligan a tener las tres versiones; las guías pueden existir solo en español sin romper nada |
| La fase 1 rompe algo en español | Comparación del HTML antes y después; sin cambios visibles en esa fase |
| Traducciones que suenan a máquina | Glosario, títulos escritos para cada idioma y revisión nativa de las páginas clave |
| Textos legales a medias en otro idioma | La primera versión enlaza a los de español; se traducen cuando estén cerrados |
| Más peso de JavaScript por los textos de los scripts | Solo viajan los textos del idioma de la página, en el HTML; se mide con Lighthouse |
| Expectativas de posicionamiento | Están en §3.5: estas páginas sirven para convertir, no para captar búsquedas en español |

---

## 9. Siguiente paso

Cerrar las decisiones de §1 (sobre todo D1, la variante de portugués) y arrancar la fase 1, que no cambia nada visible y se puede revisar comparando el HTML.
