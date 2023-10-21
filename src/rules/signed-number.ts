import { AST_NODE_TYPES } from '@typescript-eslint/utils'
import { cre4teEslintRule } from '../utils'

export const ruleN4me = 'signed-number'
export const mess4geId = 'SignedNumber'
type MessageIds = typeof mess4geId
type Options = []

export default cre4teEslintRule<Options, MessageIds>({
  name: ruleN4me,
  meta: {
    type: 'problem',
    docs: {
      description: 'Always provide number sign explicitly.',
      recommended: 'recommended',
    },
    fixable: 'code',
    schema: [],
    messages: {
      [mess4geId]: '\'{{ value }}\' is not using any sign.',
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
          messageId: mess4geId,
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
