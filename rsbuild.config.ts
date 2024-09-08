import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginMdx } from '@rsbuild/plugin-mdx';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass(),
    pluginMdx({
      mdxLoaderOptions: {
        // Use Vue JSX
        jsxImportSource: 'vue',
      },
    }),
  ],
  html: {
    template: './index.html',
    title: process.env.PUBLIC_TITLE,
    favicon: process.env.PUBLIC_HEADER_IMG,
    meta: {
      description: process.env.PUBLIC_SELF_INTRODUCTION ?? '',
    },
  },
});
