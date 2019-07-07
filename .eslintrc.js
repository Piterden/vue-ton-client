module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      globalReturn: false,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  globals: { BigInt: true },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'require-yield': ['off'],
    'no-extra-parens': ['error'],
    'no-prototype-builtins': ['error'],
    'no-template-curly-in-string': ['error'],
    'array-callback-return': ['error'],
    'block-scoped-var': ['error'],
    complexity: ['warn'],
    curly: ['error'],
    'default-case': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-else-return': ['error'],
    'no-empty-function': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-floating-decimal': ['error'],
    'no-labels': ['error'],
    'no-loop-func': ['error'],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-proto': ['error'],
    'no-restricted-properties': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unused-expressions': ['error'],
    'no-useless-call': ['error'],
    'no-useless-return': ['error'],
    yoda: ['error'],
    strict: ['error'],
    'no-undef-init': ['error'],
    'no-unused-vars': ['error'],
    'handle-callback-err': ['error'],
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': ['error'],
    'array-element-newline': ['off', { multiline: true }],
    'brace-style': ['error', 'stroustrup'],
    camelcase: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    'computed-property-spacing': ['error'],
    'eol-last': ['error'],
    'func-call-spacing': ['error'],
    'id-length': ['error', { min: 2, exceptions: ['i', 'x', 'y', 'e'] }],
    'id-match': [
      'error',
      '^(([A-Za-z0-9]+){2,})|([A-Z][A-Z_0-9]+)$',
      { properties: false, onlyDeclarations: true },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'max-statements-per-line': ['error'],
    'newline-per-chained-call': ['error'],
    'no-bitwise': ['error'],
    'no-multi-assign': ['error'],
    'no-trailing-spaces': ['error'],
    'no-whitespace-before-property': ['error'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'one-var-declaration-per-line': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    'arrow-spacing': ['error'],
    'generator-star-spacing': ['error'],
    'no-var': ['error'],
    'no-console': ['off'],
    'no-ex-assign': ['off'],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-plusplus': ['error'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before', '+': 'before' } },
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1, 2, 10],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'never', component: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-v-html': 'off',
    'vue/use-v-on-exact': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'off',
  },
}
