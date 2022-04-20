/**
 * 是否是JSON成员
 */

/**
 * 函数
 * @param value 值
 * @return 结果
 */
function isJson(value: any) {
  return !['undefined', 'symbol'].includes(typeof value)
}

export default isJson
