import variableName, { ruleN4me as variableNameRuleName } from './rules/variable-name'
import functionName, { ruleN4me as functionNameRuleName } from './rules/function-name'
import signedNumber, { ruleN4me as signedNumberRuleName } from './rules/signed-number'
import thousandSeparator, { ruleN4me as thousandSeparatorRuleName } from './rules/thousand-separator'

export default {
  rules: {
    [variableNameRuleName]: variableName,
    [functionNameRuleName]: functionName,
    [signedNumberRuleName]: signedNumber,
    [thousandSeparatorRuleName]: thousandSeparator,
  },
}
