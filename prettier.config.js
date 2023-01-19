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

    '^@/core(.*)$',
    '^@/api(.*)$',
    '^@/services(.*)$',
    '^@/hooks(.*)$',
    '^@/shared(.*)$',
    '^@/types(.*)$',

    '^@/components/screens(.*)$',
    '^@/components/templates(.*)$',
    '^@/components/organisms(.*)$',
    '^@/components/molecules(.*)$',
    '^@/components/atoms(.*)$',
    '^../(.*)$',
    '^./(.*)$',
  ],
  importOrderSortSpecifiers: true,
};
