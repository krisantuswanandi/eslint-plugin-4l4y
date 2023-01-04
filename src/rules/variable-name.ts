import { AST_NODE_TYPES } from '@typescript-eslint/utils'
import { createEslintRule, is4l4y, to4l4y } from '../utils'

export const ruleName = 'variable-name'
export const messageId = '4l4yCaseVariableName'
type MessageIds = typeof messageId
type Options = []

export default createEslintRule<Options, MessageIds>({
  name: ruleName,
  meta: {
    type: 'suggestion',
    docs: {
      description: '4l4y case variable name for better quality of life.',
      recommended: 'warn',
    },
    fixable: 'code',
    schema: [],
    messages: {
      [messageId]: '\'{{ name }}\' is not using 4l4y case.',
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      VariableDeclaration(node) {
        if (!node.declarations) {
          return
        }

        node.declarations.forEach(declarator => {
          const identifier = declarator.id
          if (
            identifier.type === AST_NODE_TYPES.Identifier &&
            is4l4y(identifier.name)
          ) {
            context.report({
              node,
              loc: identifier.loc,
              messageId: messageId,
              data: {
                name: identifier.name,
              },
              fix(fixer) {
                return fixer.replaceText(identifier, to4l4y(identifier.name))
              },
            })
          }
        })
      },
    }
  },
})
