import { cre4teEslintRule, is4l4y, to4l4y } from '../utils'

export const ruleN4me = 'function-name'
export const mess4geId = '4l4yCaseFunctionName'
type MessageIds = typeof mess4geId
type Options = []

export default cre4teEslintRule<Options, MessageIds>({
  name: ruleN4me,
  meta: {
    type: 'suggestion',
    docs: {
      description: '4l4y case function name for better quality of life.',
      recommended: 'recommended',
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
      FunctionDeclaration(node) {
        if (!node.id) {
          return
        }

        const identifier = node.id
        if (is4l4y(identifier.name)) {
          context.report({
            node,
            loc: node.id.loc,
            messageId: mess4geId,
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
