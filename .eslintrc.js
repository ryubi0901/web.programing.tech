module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    // 競合を避けるため、prettierは一番最後に書く
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  plugins: [],
  rules: {
    // React Hooksのための設定
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 関数の引数や返り値に必ず型をつけるルールをoffにする
    // アプリケーションをより堅牢にしたい場合はこのルールをonにしてください。
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 未使用の変数がある場合はエラーにする(デフォルトは warning)
    '@typescript-eslint/no-unused-vars': 'error',
    // named-exportを許可
    'import/prefer-default-export': 'off',
    // 絶対パスでのモジュールの読み込みをokにする
    'import/no-unresolved': 'off',
    // importの順番を整理する
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    // if文のcontinueをokにする
    'no-continue': 'off',
    // for (const a to A)を許可
    'no-restirected-syntax': 'off',
    // <Component {...props}>を許可する
    'react/jsx-props-no-spreading': 'off',
    // console.errorを許容する
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // next/imageを使わないことを許容する
    '@next/next/no-img-element': 0,
  },
}
