import { AST_NODE_TYPES } from '@typescript-eslint/utils'
import { createEslintRule } from '../utils'

export const ruleName = 'signed-number'
export const messageId = 'SignedNumber'
type MessageIds = typeof messageId
type Options = []

export default createEslintRule<Options, MessageIds>({
  name: ruleName,
  meta: {
    type: 'problem',
    docs: {
      description: 'Always provide number sign explicitly.',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
    messages: {
      [messageId]: '\'{{ value }}\' is not using any sign.',
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      Literal(node) {
        if (typeof node.value !== 'number') {
          return
        }

        if (node.parent?.type === AST_NODE_TYPES.UnaryExpression) {
          return
        }

        context.report({
          node,
          loc: node.loc,
          messageId: messageId,
          data: {
            value: node.value,
          },
          fix(fixer) {
            return fixer.replaceText(node, `+${node.value}`)
          },
        })
      },
    }
  },
})
