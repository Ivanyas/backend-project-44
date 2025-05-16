import stylistic from '@stylistic/eslint-plugin';
import airbnbBase from 'eslint-config-airbnb-base';
import pluginImport from 'eslint-plugin-import';

// Convert the Airbnb config to flat format
const airbnbRules = {
  ...airbnbBase.rules,
  // Customize or override any rules here
};

export default [
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      import: pluginImport,
      '@stylistic': stylistic,
    },
    rules: {
      ...airbnbRules,
      // Additional Stylistic rules
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/max-len': ['error', { code: 100 }],
    },
  },
];
