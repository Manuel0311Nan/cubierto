/**
 * POST /api/contacto/ — recibe el formulario de contacto y te lo envía por email con Resend.
 * Es la única ruta que se ejecuta en el servidor (función de Vercel); el resto de la web es estática.
 */
import type { APIRoute } from 'astro';
import { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } from 'astro:env/server';
import { buildLeadEmail, parseLead } from '../../lib/contact';

export const prerender = false;

// Quita espacios y comillas que se cuelan al pegar valores en el panel de Vercel.
const env = (v: string | undefined) => v?.trim().replace(/^(["'])(.*)\1$/, '$2').trim() ?? '';

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export const POST: APIRoute = async ({ request }) => {
  // Solo se acepta desde la propia web (producción, previews de Vercel y local).
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return json(403, { ok: false });

  // Con JavaScript, el formulario envía JSON y espera JSON. Sin JavaScript, el navegador envía
  // el formulario normal y se le redirige a /gracias/ o /no-enviado/ (CLAUDE.md §7).
  const type = request.headers.get('content-type') ?? '';
  const isJson = type.includes('application/json');
  const isForm = type.includes('application/x-www-form-urlencoded') || type.includes('multipart/form-data');
  if (!isJson && !isForm) return json(415, { ok: false });

  const done = (ok: boolean, status: number, reason?: string) =>
    isJson
      ? json(status, reason ? { ok, reason } : { ok })
      : Response.redirect(new URL(ok ? '/gracias/' : '/no-enviado/', request.url), 303);

  let body: unknown;
  try {
    if (isJson) {
      const raw = await request.text();
      if (raw.length > 10_000) return done(false, 413);
      body = JSON.parse(raw);
    } else {
      const form = await request.formData();
      body = {
        name: form.get('name'),
        venue: form.get('venue'),
        phone: form.get('phone'),
        email: form.get('email'),
        interest: form.getAll('interest'),
        message: form.get('message'),
        source: form.get('source'),
        company: form.get('company'),
        consent: form.get('consent') === 'yes',
      };
    }
  } catch {
    return done(false, 400);
  }

  const parsed = parseLead(body);
  if (!parsed.ok) {
    // Un bot que rellena el campo trampa recibe un "ok" para que no reintente; no se envía nada.
    return parsed.reason === 'honeypot' ? done(true, 200) : done(false, 400, parsed.reason);
  }

  const apiKey = env(RESEND_API_KEY);
  const from = env(CONTACT_FROM);
  const to = env(CONTACT_TO).split(',').map((s) => s.trim()).filter(Boolean);

  if (!apiKey || !from || to.length === 0) {
    console.error('[contacto] Faltan RESEND_API_KEY, CONTACT_TO o CONTACT_FROM');
    return done(false, 503);
  }

  const { subject, html, text } = buildLeadEmail(parsed.lead);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        reply_to: parsed.lead.email || undefined,
        subject,
        html,
        text,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      // Código y motivo de Resend, con cualquier dirección de email tapada: nada de datos personales en los logs.
      const detail = await res
        .json()
        .then((d: { name?: string; message?: string }) => `${d.name ?? ''} ${d.message ?? ''}`)
        .catch(() => '');
      console.error(`[contacto] Resend respondió ${res.status} ${detail.replace(/[^\s<>"'`]+@[^\s<>"'`]+/g, '[email]').slice(0, 300)}`);
      return done(false, 502);
    }
  } catch (err) {
    console.error('[contacto] No se pudo contactar con Resend', err instanceof Error ? err.name : '');
    return done(false, 502);
  }

  return done(true, 200);
};

// Cualquier otro método: 405.
export const ALL: APIRoute = () => json(405, { ok: false });
