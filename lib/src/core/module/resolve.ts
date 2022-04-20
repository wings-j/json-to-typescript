/**
 * 转换对象
 */

import IsJson from '../util/is-json'
import IsBasic from '../util/is-basic'
import Config from '../config'
import { JudgeType } from '@wings-j/js-sdk'

/**
 * 解析基础
 * @param value 值
 * @return 结果
 */
function basic(value: Basic) {
  let type = JudgeType(value) as BasicString

  return type
}

/**
 * 递归
 * @param value 值
 * @return 结果
 */
function recursive(value: Complex) {
  if (IsJson(value)) {
    if (Array.isArray(value)) {
      if (Config.array === 'tuple') {
        let array: (BasicString | Tree)[] = []

        value.forEach(a => {
          let type = IsBasic(a) ? basic(a) : recursive(a)
          if (type) {
            array.push(type)
          }
        })

        return array
      } else {
        let set = new Set<BasicString | Tree>()

        value.forEach(a => {
          let type = IsBasic(a) ? basic(a) : recursive(a)
          if (type) {
            set.add(type)
          }
        })

        return Array.from(set)
      }
    } else {
      let tree: Tree = {}
      Object.keys(value).forEach(a => {
        let type = IsBasic(value[a]) ? basic(value[a]) : recursive(value[a])
        if (type) {
          tree[a] = type
        }
      })

      return tree
    }
  }
}

/**
 * 转换对象
 * @param value 值
 */
function resolveComplex(value: Complex) {
  return recursive(value)
}

export default resolveComplex
