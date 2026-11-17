/**
 * Formulario de contacto: validación y email de aviso.
 * Funciones puras (sin red ni variables de entorno) para que el endpoint quede fino.
 */
import { modules } from '../data/modules';

export interface Lead {
  name: string;
  venue: string;
  phone: string;
  email: string;
  interest: string[];
  message: string;
  source: string;
}

export type ParseResult = { ok: true; lead: Lead } | { ok: false; reason: string };

const clean = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const interestKeys = new Set(modules.map((m) => m.key as string));
const interestName = (key: string) => modules.find((m) => m.key === key)?.name ?? key;

/** Valida lo que envía ContactForm.astro. Mismas reglas que el formulario, repetidas en el servidor. */
export function parseLead(input: unknown): ParseResult {
  if (!input || typeof input !== 'object') return { ok: false, reason: 'body' };
  const b = input as Record<string, unknown>;

  if (b.company) return { ok: false, reason: 'honeypot' };
  if (b.consent !== true) return { ok: false, reason: 'consent' };

  const lead: Lead = {
    name: clean(b.name, 80),
    venue: clean(b.venue, 100),
    phone: clean(b.phone, 20),
    email: clean(b.email, 120),
    interest: Array.isArray(b.interest)
      ? [...new Set(b.interest.map((i) => clean(i, 20)).filter((i) => interestKeys.has(i)))]
      : [],
    message: clean(b.message, 1500),
    source: clean(b.source, 200),
  };

  if (lead.name.length < 2 || lead.venue.length < 2) return { ok: false, reason: 'name' };
  if (!/^[+0-9 ]{9,20}$/.test(lead.phone)) return { ok: false, reason: 'phone' };
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return { ok: false, reason: 'email' };

  return { ok: true, lead };
}

/** Asunto, HTML y texto del email que te llega a ti. */
export function buildLeadEmail(lead: Lead, receivedAt = new Date()) {
  const interestText = lead.interest.map(interestName).join(', ');
  const isPilot = /piloto/i.test(lead.source);
  const digits = lead.phone.replace(/\D/g, '');
  const waNumber = digits.length === 9 ? `34${digits}` : digits;
  const when = receivedAt.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

  const subject = `${isPilot ? '[Piloto] ' : ''}Nuevo contacto: ${lead.venue}${interestText ? ` (${interestText})` : ''}`;

  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#4B6158;vertical-align:top">${k}</td><td style="padding:6px 0">${v}</td></tr>`;
  const html = `<div style="font-family:system-ui,sans-serif;color:#14281F;font-size:15px">
<h2 style="margin:0 0 12px;font-size:18px">${esc(subject)}</h2>
<table style="border-collapse:collapse">
${row('Nombre', esc(lead.name))}
${row('Local', esc(lead.venue))}
${row('Teléfono', `<a href="tel:${esc(lead.phone.replace(/\s/g, ''))}">${esc(lead.phone)}</a> &nbsp; <a href="https://wa.me/${waNumber}">Escribir por WhatsApp</a>`)}
${row('Email', lead.email ? `<a href="mailto:${esc(lead.email)}">${esc(lead.email)}</a>` : '-')}
${row('Le interesa', esc(interestText || '-'))}
${row('Desde', esc(lead.source || '-'))}
${row('Recibido', esc(when))}
</table>
<p style="white-space:pre-wrap;margin-top:16px;padding:12px;background:#F7F8F5;border-radius:8px">${esc(lead.message || '(sin mensaje)')}</p>
</div>`;

  const text = [
    subject,
    '',
    `Nombre: ${lead.name}`,
    `Local: ${lead.venue}`,
    `Teléfono: ${lead.phone}`,
    `Email: ${lead.email || '-'}`,
    `Le interesa: ${interestText || '-'}`,
    `Desde: ${lead.source || '-'}`,
    `Recibido: ${when}`,
    '',
    lead.message || '(sin mensaje)',
  ].join('\n');

  return { subject, html, text };
}
