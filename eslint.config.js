import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import html from 'eslint-plugin-html';
import globals from 'globals';

export default [
  { ignores: ['node_modules/**', 'dist/**', '.astro/**'] },
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.astro', '**/*.astro/*.js', '**/*.html'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.html'],
    plugins: { html },
    languageOptions: { sourceType: 'script' },
  },
  {
    files: ['*.config.{js,mjs}'],
    languageOptions: { globals: globals.node },
  },
  prettier,
];
