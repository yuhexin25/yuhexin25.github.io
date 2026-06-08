import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const readingNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reading-notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    dateRange: z.string(),
    sources: z.array(
      z.object({
        title: z.string(),
        authors: z.string().optional(),
        publisher: z.string().optional(),
        url: z.string().url(),
        note: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { readingNotes };
