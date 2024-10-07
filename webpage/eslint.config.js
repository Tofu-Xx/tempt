import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  formatters: true,
  rules: {
    'vue/no-export-in-script-setup': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'import/no-mutable-exports': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
})
