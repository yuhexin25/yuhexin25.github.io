import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const readingNotes = defineCollection({
  type: 'content',
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

export const collections = { 'reading-notes': readingNotes };
