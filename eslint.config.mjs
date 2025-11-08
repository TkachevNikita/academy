import nx from '@nx/eslint-plugin';
import angularEslint from '@angular-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    ignores: ['**/dist', 'node_modules', '.nx', '**/*.config.ts'],
  },
  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': angularEslint,
      '@typescript-eslint': tseslint.plugin,
      prettier: prettier,
    },
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.base.json', 'libs\UI\.storybook\tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            accessors: 'explicit',
            constructors: 'no-public',
            methods: 'explicit',
            properties: 'explicit',
            parameterProperties: 'explicit',
          },
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: [
              'signature',
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'private-field',
              'protected-field',
              'public-field',
              'constructor',
              'public-method',
              'protected-method',
              'private-method',
            ],
            order: 'as-written',
          },
        },
      ],
      '@typescript-eslint/prefer-readonly': 'error',

      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }],
      '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',

      'no-restricted-imports': 'error',
      'max-lines': ['warn', 500],
      'max-lines-per-function': ['warn', { max: 75, skipComments: true, skipBlankLines: true }],
      complexity: ['warn', 10],
      'no-console': 'error',
      'no-debugger': 'error',
      'prettier/prettier': 'error',
    },
  },
];
