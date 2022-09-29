module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'security', 'react-hooks'],
    ignorePatterns: ['*.spec.tsx', '*.test.tsx', '*.css', '*.svg', '*.scss'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error'],
        'no-unexpected-multiline': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-use-before-define': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-unused-vars': 'warn',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.tsx'],
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'max-len': ['error', { 'code': 130 }],

        // Comments
        'no-inline-comments': 'error',
        'line-comment-position': ['error', { 'position': 'above' }],
        'lines-around-comment': [
            'error',
            {
                'beforeBlockComment': true,
                'beforeLineComment': false,
                'allowBlockStart': true,
                'allowClassStart': true,
                'allowObjectStart': true,
                'allowArrayStart': true
            }
        ],
        'multiline-comment-style': ['error', 'bare-block'],
        'spaced-comment': ['error', 'always', { 'block': { 'balanced': true } }],
    },
};
