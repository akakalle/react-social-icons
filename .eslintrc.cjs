/* eslint-env commonjs */
/* eslint sort-keys: "error", quote-props: "off" */

const INDENT_SPACES = 2;

module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {

    // this weird rest pattern is just a trick so I can group certain eslint
    // rules and still have eslint enforce they are in alphabetical order
    ...({
      "@typescript-eslint/ban-ts-comment": ["off"],
      "@typescript-eslint/no-unused-vars": ["error"],
    }),

    ...({
      "import/no-unresolved": ["error", { "ignore": ["^social-icons[:]?"] }],
    }),

    // TODO: style rules, aka just use prettier
    // TODO: typescript rules
    // TODO: react rules

    "accessor-pairs": ["error"],
    "array-callback-return": ["error", { "allowImplicit": false, "checkForEach": true }],
    "block-scoped-var": ["error"],
    "class-methods-use-this": ["error"],
    "consistent-return": ["error"],
    "constructor-super": ["error"],
    "curly": ["error", "multi-line", "consistent"],
    "default-case": ["error"],
    "default-case-last": ["error"],
    "default-param-last": ["error"],
    "dot-location": ["error", "property"],
    "dot-notation": ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }], // allow snake case properties
    "eqeqeq": ["error", "smart"],
    "for-direction": ["error"],
    "func-name-matching": ["error"],
    "func-names": ["error", "as-needed"],
    "getter-return": ["error"],
    "grouped-accessor-pairs": ["error"],
    "guard-for-in": ["error"],
    "indent": [ "error", INDENT_SPACES],
    "linebreak-style": [ "error", "unix" ],
    "new-cap": ["error"],
    "no-alert": ["error"],
    "no-array-constructor": ["error"],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-bitwise": ["error"],
    "no-caller": ["error"],
    "no-case-declarations": ["error"],
    "no-class-assign": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error"],
    "no-confusing-arrow": ["error"],
    "no-console": ["warn"],
    "no-const-assign": ["error"],
    "no-constant-binary-expression": ["error"],
    "no-constant-condition": ["error"],
    "no-constructor-return": ["error"],
    "no-continue": ["error"],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-delete-var": ["error"],
    "no-div-regex": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-class-members": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    // conflicts with typescript's "import type", replaced by import/no-duplicates
    "no-duplicate-imports": ["off"],
    "no-else-return": ["error", { "allowElseIf": false }],
    "no-empty": ["error"],
    "no-empty-character-class": ["error"],
    "no-empty-function": ["error"],
    "no-empty-pattern": ["error"],
    "no-empty-static-block": ["error"],
    "no-eq-null": ["error"],
    "no-eval": ["error"],
    "no-ex-assign": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-boolean-cast": ["error", { "enforceForLogicalOperands": true }],
    "no-extra-label": ["error"],
    "no-extra-semi": ["error"],
    "no-fallthrough": ["error"],
    "no-floating-decimal": ["error"],
    "no-func-assign": ["error"],
    "no-global-assign": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implicit-globals": ["error"],
    "no-implied-eval": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": ["error"],
    "no-invalid-this": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-iterator": ["error"],
    "no-label-var": ["error"],
    "no-lone-blocks": ["error"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["error"],
    "no-loss-of-precision": ["warn"],
    "no-magic-numbers": ["error"],
    "no-misleading-character-class": ["error"],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multi-assign": ["error"],
    "no-multi-str": ["error"],
    "no-negated-condition": ["error"],
    "no-nested-ternary": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-native-nonconstructor": ["error"],
    "no-new-object": ["error"],
    "no-new-symbol": ["error"],
    "no-new-wrappers": ["error"],
    "no-nonoctal-decimal-escape": ["error"],
    "no-obj-calls": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error", { "props": true }],
    "no-plusplus": ["error"],
    "no-promise-executor-return": ["error"],
    "no-proto": ["error"],
    "no-prototype-builtins": ["error"],
    "no-redeclare": ["error"],
    "no-regex-spaces": ["error"],
    "no-return-assign": ["error"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-assign": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error", { "allowInParentheses": false }],
    "no-setter-return": ["error"],
    "no-shadow": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-this-before-super": ["error"],
    "no-throw-literal": ["error"],
    "no-undef": ["error"],
    "no-undef-init": ["error"],
    "no-undefined": ["error"],
    "no-underscore-dangle": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unneeded-ternary": ["error"],
    "no-unreachable": ["error"],
    "no-unreachable-loop": ["error"],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": ["error", { "enforceForOrderingRelations": true }],
    "no-unsafe-optional-chaining": ["error", { "disallowArithmeticOperators": true }],
    "no-unused-expressions": ["error"],
    "no-unused-labels": ["error"],
    "no-unused-private-class-members": ["error"],
    "no-unused-vars": "off", // see typescript-eslint/no-unused-vars
    "no-use-before-define": ["error", "nofunc"],
    "no-useless-backreference": ["error"],
    "no-useless-call": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-rename": ["error"],
    "no-useless-return": ["error"],
    "no-var": ["error"],
    "no-void": ["error"],
    "no-with": ["error"],
    "object-shorthand": ["error"],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "prefer-const": ["error"],
    "prefer-exponentiation-operator": ["error"],
    "prefer-named-capture-group": ["error"],
    "prefer-numeric-literals": ["error"],
    "prefer-object-has-own": ["error"],
    "prefer-object-spread": ["error"],
    "prefer-promise-reject-errors": ["error"],
    "prefer-regex-literals": ["error", { "disallowRedundantWrapping": true }],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "quote-props": ["error", "as-needed"],
    "quotes": [ "error", "double" ],
    "radix": ["error"],
    "require-atomic-updates": ["error"],
    "require-await": ["error"],
    "require-unicode-regexp": ["error"],
    "require-yield": ["error"],
    "semi": [ "error", "always" ],
    "strict": ["error", "never"],
    "symbol-description": ["error"],
    "use-isnan": ["error", {"enforceForIndexOf": true, "enforceForSwitchCase": true}],
    "valid-typeof": ["error", { "requireStringLiterals": true }],
    "vars-on-top": ["error"],
    "wrap-iife": ["error"],
    "yoda": ["error"],

  },
  "settings": {
    "import/resolver": {
      "typescript": true,
    },
    "react": {
      "version": "detect",
    },
  },
};
