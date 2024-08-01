/**
 * https://eslint.org/docs/v8.x/
 *
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [],
  rules: {
    // https://eslint.org/docs/latest/rules/
    "eol-last": ["error", "always"],
    "default-param-last": ["error"],
    "no-trailing-spaces": ["error"],
    "arrow-spacing": ["error"],
    "prefer-const": ["error"],
    "no-console": ["error", { allow: ["debug", "warn", "error"] }],

    // https://typescript-eslint.io/rules/
    "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],

    // https://github.com/lydell/eslint-plugin-simple-import-sort
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^@?\\w"], ["^\\./", "^\\.\\./"], ["^/"]],
      },
    ],
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["**/*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
