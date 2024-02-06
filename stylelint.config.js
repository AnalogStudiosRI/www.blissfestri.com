/** @type {import('stylelint').Config} */
export default {
  // plugins: ['stylelint-a11y'],
  extends: [
    'stylelint-config-standard'
    // 'stylelint-a11y/recommended'
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'value-keyword-case': null
  }
};