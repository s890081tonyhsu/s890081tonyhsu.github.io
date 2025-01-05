import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  build: {
    // NOTE: github doesn't build folders with `_` prefix.
    // Ref: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#configuring-jekyll-in-your-github-pages-site
    assets: 'assets',
    format: 'file',
  },
  site: 'https://s890081tonyhsu.github.io',
  integrations: [vue(), mdx()],
  vite: {
    css: {
      transformer: "sass",
    },
  },
});