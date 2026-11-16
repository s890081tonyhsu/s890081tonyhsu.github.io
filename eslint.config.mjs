import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['dist/', '.astro/'] },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Type-only imports must use `import type` (separate statement); fixed on save in VS Code.
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
];
