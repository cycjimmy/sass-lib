export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  ignoreFiles: [
    '.release/**',
    'node_modules/**',
  ],
  rules: {
    // Keep longhand declarations in the published CSS so the reset/mixins
    // stay compatible with older mobile webviews.
    'declaration-block-no-redundant-longhand-properties': null,
    // Keep the legacy rgba()/numeric-alpha output used by the reset files.
    'color-function-notation': 'legacy',
    'color-function-alias-notation': 'with-alpha',
    'alpha-value-notation': 'number',
  },
}
