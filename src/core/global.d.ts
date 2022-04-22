/**
 * 选项
 */
interface Option {
  array: 'union' | 'tuple'
}

/**
 * 基础
 */
type Basic = string | number | boolean | null
type BasicString = 'string' | 'number' | 'boolean' | 'null'

/**
 * 源数据
 */
interface Complex {
  [key: string | number]: Basic | Raw | (Basic | Raw)[]
}

/**
 * 映射
 */
type TypeMap = Record<string, BasicString | TypeMap> | (BasicString | TypeMap)[]
