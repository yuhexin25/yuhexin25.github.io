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
      category: z.enum([
        'FAA / Operations',
        'BTS / Delay Data',
        'Academic Papers',
        'Airline Networks',
        'Transportation Geography',
      ]),
      url: z.string().url(),
    }),
    topic: z.string(),
    noteSlug: z.string(),
    sourceTitle: z.string(),
    authors: z.string().optional(),
    sourceDate: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.union([z.string(), z.date()]),
    category: z.string(),
    readingTime: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, 'reading-notes': readingNotes };
