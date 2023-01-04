import { addSeparator, createEslintRule, hasSeparator } from '../utils'

export const ruleName = 'thousand-separator'
export const messageId = 'ThousandSeparator'
type MessageIds = typeof messageId
type Options = []

export default createEslintRule<Options, MessageIds>({
  name: ruleName,
  meta: {
    type: 'problem',
    docs: {
      description: 'Always use thousand separators for any number.',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
    messages: {
      [messageId]: '\'{{ value }}\' is not using thousand separators.',
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      Literal(node) {
        if (typeof node.value !== 'number') {
          return
        }

        if (node.raw.includes('.')) {
          return
        }

        if (!hasSeparator(node.raw)) {
          context.report({
            node,
            loc: node.loc,
            messageId: messageId,
            data: {
              value: node.value,
            },
            fix(fixer) {
              return fixer.replaceText(node, addSeparator(node.value.toString()))
            },
          })
        }
      },
    }
  },
})
