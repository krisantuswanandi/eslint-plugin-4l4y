import { createEslintRule, is4l4y, to4l4y } from '../utils'

export const ruleName = 'function-name'
export const messageId = '4l4yCaseFunctionName'
type MessageIds = typeof messageId
type Options = []

export default createEslintRule<Options, MessageIds>({
  name: ruleName,
  meta: {
    type: 'suggestion',
    docs: {
      description: '4l4y case function name for better quality of life.',
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
      FunctionDeclaration(node) {
        if (!node.id) {
          return
        }

        const identifier = node.id
        if (is4l4y(identifier.name)) {
          context.report({
            node,
            loc: node.id.loc,
            messageId: messageId,
            data: {
              name: identifier.name,
            },
            fix(fixer) {
              return fixer.replaceText(identifier, to4l4y(identifier.name))
            },
          })
        }
      },
    }
  },
})
