import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

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

// Data files list entries in any order; pages sort by this field. Astro 6+ stores entries sorted by id.
const order = z
  .number()
  .int()
  .describe('Display order, ascending. Leave gaps (10, 20, 30) so entries can be inserted later.');

const links = defineCollection({
  loader: file('src/data/links.json'),
  schema: z.object({
    id: z.string(),
    order,
    name: z.string(),
    text: z.string(),
    href: z.url().optional(),
    sections: z.array(z.enum(['contact', 'profile', 'social'])).nonempty(),
  }),
});

// No custom regex message: Astro emits it as an `errorMessage` object that VS Code shows as
// "[object Object]". The description is shown on hover instead.
const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/)
  .describe('Year and month as `YYYY-MM`, e.g. `2023-05`.');

const experiences = defineCollection({
  loader: file('src/data/experiences.json'),
  schema: z.object({
    id: z.string(),
    kind: z.enum(['work', 'volunteer', 'education']),
    name: z.string(),
    suffix: z.string().optional(),
    text: z.string().describe('One-sentence summary.'),
    highlights: z.array(z.string()).optional().describe('Bullet points shown under the summary.'),
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
    order,
    era: z.enum(['current', 'past']),
    name: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        joinable: z
          .boolean()
          .optional()
          .describe('Render `items` inline as "name: a, b" instead of a nested list.'),
        items: z.array(z.string()).optional(),
      }),
    ),
  }),
});

const languages = defineCollection({
  loader: file('src/data/languages.json'),
  schema: z.object({
    id: z.string(),
    order,
    name: z.string(),
    text: z.string(),
  }),
});

const featuredSkills = defineCollection({
  loader: file('src/data/featured-skills.json'),
  schema: z.object({
    id: z.string(),
    order,
    name: z.string(),
    items: z.array(z.string()).nonempty(),
  }),
});

export const collections = { collection, links, experiences, skills, languages, featuredSkills };
