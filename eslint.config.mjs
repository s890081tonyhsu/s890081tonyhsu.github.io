import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    "react/jsx-first-prop-new-line": "always",
  },
  { ignores: ['dist/'] },
];
