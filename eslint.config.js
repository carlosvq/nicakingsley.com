import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { resolve } from "path";
import tseslint from "typescript-eslint";

const project = resolve(process.cwd(), "tsconfig.json");

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
      ignores: ["dist/**", "node_modules/**", "coverage/**", "public/**", "*.config.js"],
    },
    {
      plugins: {
        import: importPlugin,
        react,
        "react-hooks": reactHooks,
        astro,
      },
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.browser,
          React: true,
          JSX: true,
        },
        parser: tsParser,
        parserOptions: {
           project: true,
          tsconfigRootDir: import.meta.dirname,
          ecmaVersion: "latest",
          sourceType: "module",
          extraFileExtensions: [".astro"],
        },
      },
      settings: {
        "import/parsers": {
          espree: [".js", ".cjs", ".mjs", ".jsx"],
        },
        "import/resolver": {
          node: true,
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        ...importPlugin.configs.recommended.rules,
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-base-to-string": "warn",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-extraneous-class": "warn",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { varsIgnorePattern: "_", argsIgnorePattern: "_" },
        ],
        "@typescript-eslint/only-throw-error": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          { allowNumber: true },
        ],
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
        "import/named": "warn",
        "import/namespace": "warn",
        "import/no-unresolved": "warn",
        "import/no-default-export": "off",
        "import/no-named-as-default": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-named-as-default-member": "off",
        "import/order": [
          "error",
          {
            alphabetize: { order: "asc", caseInsensitive: true },
            "newlines-between": "always",
            groups: [
              ["type"],
              ["builtin", "external"],
              ["index"],
              ["parent"],
              ["internal"],
              ["sibling"],
            ],
          },
        ],
        "no-empty-pattern": "off",
        "react/function-component-definition": "off",
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            reservedFirst: true,
          },
        ],
      },
    },
    {
      files: ["**/*.js"],
      ...tseslint.configs.disableTypeChecked,
    },
  ),
];
