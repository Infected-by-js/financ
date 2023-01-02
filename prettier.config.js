module.exports = {
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  trailingComma: 'es5',
  endOfLine: 'lf',
  tabWidth: 2,
  semi: true,

  importOrder: [
    '^react$',
    '^react-native$',
    '^native-base$',
    '^@react(.*)$',
    '<THIRD_PARTY_MODULES>',

    '^@/hooks/(.*)$',
    '^@/components/(.*)$',

    // start feature sliced
    '^@/app/(.*)$',
    '^@/processes/(.*)$',
    '^@/screens/(.*)$',
    '^@/widgets/(.*)$',
    '^@/features/(.*)$',
    '^@/entities/(.*)$',
    '^@/shared/(.*)$',
    // end feature sliced

    '^@/(.*)/(.*)$',
    '^../(.*)',
    '^./(.*)',
  ],
  importOrderSortSpecifiers: true,
};
