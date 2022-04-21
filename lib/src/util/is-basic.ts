/**
 * 是否是基础值
 */

import { JudgeType } from '@wings-j/js-sdk'

/**
 * 函数
 * @param value 值
 * @return 结果
 */
function isBasic(value: any) {
  return ['string', 'number', 'boolean', 'null'].includes(JudgeType(value))
}

export default isBasic
