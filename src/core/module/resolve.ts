/**
 * 解析
 */

import IsJson from '../util/is-json'
import IsBasic from '../util/is-basic'
import Config from '../config'
import { JudgeType } from '@wings-j/js-sdk'

/**
 * 解析基础
 * @param value 值
 * @return 类型
 */
function basic(value: Basic) {
  let type = JudgeType(value) as BasicString

  return type
}

/**
 * 递归
 * @param value 值
 * @return 映射
 */
function recursive(value: Complex): TypeMap | undefined {
  if (IsJson(value)) {
    if (Array.isArray(value)) {
      if (!value.length) {
        return '[]'
      }

      if (Config.array === 'tuple') {
        let array: TypeMap = []

        value.forEach(a => {
          let type = IsBasic(a) ? basic(a) : recursive(a)
          if (type) {
            array.push(type)
          }
        })

        return array
      } else {
        let set = new Set<BasicString | TypeMap>()

        value.forEach(a => {
          let type = IsBasic(a) ? basic(a) : recursive(a)
          if (type) {
            set.add(type)
          }
        })

        return Array.from(set)
      }
    } else {
      let tree: TypeMap = {}
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
 * 函数
 * @param value 值
 * @return 映射
 */
function resolve(value: Complex): TypeMap | undefined {
  return recursive(value)
}

export default resolve
