module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  globals: {},
  rules: {
    'lines-between-class-members': 0,
    'no-else-return': 0,
    'import/order': 0,
    'implicit-arrow-linebreak': 0,
    'no-multiple-empty-lines': 0,
    'operator-linebreak': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'function-paren-newline': 0,
    'prefer-destructuring': 0,
    'object-curly-newline': 0
  },
};
