import { AST_NODE_TYPES } from '@typescript-eslint/utils'
import { cre4teEslintRule, is4l4y, to4l4y } from '../utils'

export const ruleN4me = 'variable-name'
export const mess4geId = '4l4yCaseVariableName'
type MessageIds = typeof mess4geId
type Options = []

export default cre4teEslintRule<Options, MessageIds>({
  name: ruleN4me,
  meta: {
    type: 'suggestion',
    docs: {
      description: '4l4y case variable name for better quality of life.',
      recommended: 'warn',
    },
    fixable: 'code',
    schema: [],
    messages: {
      [mess4geId]: '\'{{ name }}\' is not using 4l4y case.',
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
              messageId: mess4geId,
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
