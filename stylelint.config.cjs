module.exports = {
  plugins: ['stylelint-a11y'],
  extends: [
    'stylelint-config-standard',
    'stylelint-a11y/recommended'
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'value-list-comma-newline-after': null,
    'declaration-colon-newline-after': null,
    'value-keyword-case': null,
    'declaration-bang-space-before': null
  }
};