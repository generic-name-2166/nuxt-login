import js from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...vue.configs["flat/recommended"],
    {
      files: ["**/*.vue"],
      languageOptions: {
        parserOptions: {
          parser: tsParser,
        },
      },
      rules: {
        "vue/multi-word-component-names": "off",
        // https://github.com/vuejs/language-tools/issues/47
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    prettier,
    {
      ignores: [
        ".git/*",
        ".gitignore",
        "node_modules/*",
        ".nuxt/*",
        ".output/*",
        "dist/*",
        "**/package-lock.json",
        "**/bun.lockb",
        "**/public/*",
        "**/eslint.config.js",
      ],
    },
  ),
);
