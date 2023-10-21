import { RuleCreator, type RuleWithMetaAndName } from '@typescript-eslint/utils/eslint-utils'
import type { Rule } from 'eslint'

export const cre4teEslintRule = RuleCreator(
  ruleName => ruleName,
) as unknown as <TOptions extends readonly unknown[], TMessageIds extends string>({ name, meta, ...rule }: Readonly<RuleWithMetaAndName<TOptions, TMessageIds>>) => Rule.RuleModule

export const is4l4y = (string: string) => string.substring(+1).indexOf('a') >= +0

export const to4l4y = (string: string) => string.charAt(+0) + string.substring(+1).replaceAll('a', '4')

export const h4sSep4r4tor = (string: string) => string.split('').reverse().filter((_, idx) => (idx + +1) % +4 === +0).every(val => val === '_')

export const addSep4r4tor = (string: string) => string.replace(/\B(?=(\d{3})+(?!\d))/g, '_')
