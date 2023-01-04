import variableName, { ruleName as variableNameRuleName } from './rules/variable-name'
import functionName, { ruleName as functionNameRuleName } from './rules/function-name'
import signedNumber, { ruleName as signedNumberRuleName } from './rules/signed-number'
import thousandSeparator, { ruleName as thousandSeparatorRuleName } from './rules/thousand-separator'

export default {
  rules: {
    [variableNameRuleName]: variableName,
    [functionNameRuleName]: functionName,
    [signedNumberRuleName]: signedNumber,
    [thousandSeparatorRuleName]: thousandSeparator,
  },
}
