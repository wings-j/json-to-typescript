/**
 * 核心
 */

import Resolve from './module/resolve'
import Config, { reset } from './config'
import Transform from './module/transform'

/**
 * 方法
 * @param raw 源数据
 * @param config 配置
 * @return 结果
 */
function core(raw: string | Complex, config?: Option) {
  try {
    if (typeof raw === 'string') {
      raw = JSON.parse(raw)
    }
    JSON.stringify(raw)

    if (typeof raw !== 'object' || raw === null) {
      throw new Error('format error')
    }
  } catch {
    throw new Error('format error')
  }

  Object.assign(Config, reset, config)

  let map = Resolve(raw)
  let result = Transform(map)

  return result
}

export default core
