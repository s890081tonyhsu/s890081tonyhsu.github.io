export type CollectionData = {
  title: string;
  subtitle: string;
  image: typeof import('*.png') & { blurhash?: string };
  article?: typeof import('*.md');
  tags: string[];
  projectLink?: string;
  demoLink?: string;
};
