module.exports = {
  root: true,
  env: {
    // browser: true,
    // jest: true,
    // 'jest/globals': true,
  },
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/prefer-stateless-function': 2, // only React.FC

    'import/prefer-default-export': 0, // only named exports
    'import/no-default-export': 2, // only named exports

    '@typescript-eslint/member-delimiter-style': 0, // comma in TS interfaces

    'no-console': 1,
    'no-nested-ternary': 0,
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-var-requires': 0,

    // prevent eslint from treating enum TS as error :: https://github.com/typescript-eslint/typescript-eslint/issues/2471
    'no-shadow': 'off', // replaced by ts-eslint rule below
    '@typescript-eslint/no-shadow': 'error',
    semi: 0,
  },
}
