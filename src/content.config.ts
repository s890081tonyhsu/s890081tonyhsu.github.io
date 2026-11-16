import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const collection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/collections' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      subtitle: z.string(),
      image: image(),
      tags: z.array(z.string()),
      projectLink: z.string().optional(),
      demoLink: z.string().optional(),
    }),
});

const links = defineCollection({
  loader: file('src/data/links.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    text: z.string(),
    href: z.string().url().optional(),
    sections: z.array(z.enum(['contact', 'profile', 'social'])).nonempty(),
  }),
});

const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use YYYY-MM');

const experiences = defineCollection({
  loader: file('src/data/experiences.json'),
  schema: z.object({
    id: z.string(),
    kind: z.enum(['work', 'volunteer', 'education']),
    name: z.string(),
    suffix: z.string().optional(),
    text: z.string(),
    time: z.object({
      from: yearMonth,
      to: z.union([yearMonth, z.literal('now')]),
    }),
  }),
});

const skills = defineCollection({
  loader: file('src/data/skills.json'),
  schema: z.object({
    id: z.string(),
    era: z.enum(['current', 'past']),
    name: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        /** Render `items` inline as "name: a, b" instead of a nested list. */
        joinable: z.boolean().optional(),
        items: z.array(z.string()).optional(),
      }),
    ),
  }),
});

const languages = defineCollection({
  loader: file('src/data/languages.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    text: z.string(),
  }),
});

export const collections = { collection, links, experiences, skills, languages };
