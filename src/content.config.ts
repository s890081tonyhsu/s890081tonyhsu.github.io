import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

export const collections = { collection };
