/**
 * 适配名称
 */

/**
 * 函数
 * @param name 名称
 * @return 结果
 */
function fitName(name: string) {
  if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*/.test(name)) {
    name = `'${name}'`
  }

  return name
}
