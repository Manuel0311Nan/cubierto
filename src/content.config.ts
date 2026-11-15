import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Guías: artículos para búsquedas de dudas ("qué alérgenos tengo que indicar…").
 * Cada guía es un .md en src/content/guias/. El nombre del archivo es la URL: /guias/<archivo>/.
 * Reglas: datos con fuente (campo `sources`), nada inventado, respuesta directa en el primer párrafo.
 */
const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    /** H1 de la guía. */
    title: z.string(),
    /** <title> para Google (≤ 49 caracteres: se añade " | Cubierto"). Si falta, se usa `title`. */
    seoTitle: z.string().max(49).optional(),
    /** Meta description (≤ 160 caracteres). También es la entradilla del listado. */
    description: z.string().max(160),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Servicio al que lleva la guía: aparece la llamada a la acción y se enlaza desde su página. */
    service: z.enum(['web', 'carta', 'reservas']),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guias };
