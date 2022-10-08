module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['react-app', 'plugin:react/recommended', 'airbnb', 'plugin:jest/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb/hooks', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'security', 'react-hooks', 'prettier', 'jest'],
  'ignorePatterns': ['*.test.tsx', '*.spec.tsx', '*.stories.tsx', '*.css', '*.svg', '*.scss'],
  rules: {
    'semi': ['error', 'always'],
    'linebreak-style': 'off',
    '@typescript-eslint/semi': ['error'],
    'no-unexpected-multiline': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
    'react/jsx-filename-extension': ['error', {
      extensions: [
        '*.module.css',
        '.ts',
        '.tsx'
      ]
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'max-len': ['error', {
      code: 250
    }],
    'no-inline-comments': 'error',
    'line-comment-position': ['error', {
      position: 'above'
    }],
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      beforeLineComment: false,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      allowArrayStart: true
    }],
    'multiline-comment-style': ['error', 'bare-block'],
    'spaced-comment': ['error', 'always', {
      block: {
        balanced: true
      }
    }],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 0,
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/no-array-index-key': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '*.module.css', '.svg'],
        moduleDirectory: ['node_modules', './src/**/*']
      }
    }
  }
};
