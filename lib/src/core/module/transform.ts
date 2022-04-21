/**
 * 转换
 */

import Config from '../config'

/**
 * 递归
 * @param value 值
 * @return 接口
 */
function recursive(value: TypeMap) {
  if (Array.isArray(value)) {
    let temp: string[] = value.map(a => (typeof a === 'string' ? a : recursive(a)))

    if (Config.array === 'tuple') {
      return `[${temp.join(',')}]`
    } else {
      if (temp.length > 1) {
        return `(${temp.join('|')})[]`
      } else {
        return `${temp.join('')}[]`
      }
    }
  } else {
    let temp: string[] = []
    Object.keys(value).forEach(a => {
      temp.push(`${a}:${typeof value[a] === 'string' ? value[a] : recursive(value[a])}`)
    })

    return `{${temp.join(';')}}`
  }
}

/**
 * 函数
 * @param map 映射
 * @return 接口
 */
function transform(map: TypeMap) {
  return recursive(map)
}

export default transform
