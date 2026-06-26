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
    journal: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    readingTime: z.string().optional(),
    status: z.string().optional(),
    difficulty: z.string().optional(),
    topics: z.array(z.string()).optional(),
    researchAreas: z.array(z.string()).optional(),
    pdfPath: z.string().optional(),
    pdfLabel: z.string().optional(),
    relatedProjects: z
      .array(
        z.object({
          title: z.string(),
          href: z.string(),
          description: z.string().optional(),
        }),
      )
      .optional(),
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
