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

export const collections = { collection, links };
