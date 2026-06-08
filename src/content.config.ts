import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const readingNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    source: z.object({
      name: z.string(),
      slug: z.string(),
      category: z.enum(['Industry Reports', 'News & Analysis', 'Academic Literature']),
      url: z.string().url(),
    }),
    topic: z.string(),
    noteSlug: z.string(),
    sourceTitle: z.string(),
    authors: z.string().optional(),
    sourceDate: z.string().optional(),
  }),
});

export const collections = { 'reading-notes': readingNotes };
