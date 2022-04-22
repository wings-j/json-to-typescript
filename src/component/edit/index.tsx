/**
 * 编辑
 */

import { useEffect, useRef } from 'react'
import * as Monaco from 'monaco-editor'
import { common } from '@/config/monaco'

export default function (props: { className?: string; onInput: (value: string) => void }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      let editor = Monaco.editor.create(container.current, {
        ...common,
        language: 'json'
      })
      editor.onKeyUp(() => {
        props.onInput(editor.getValue())
      })

      return () => {
        editor.dispose()
      }
    }
  }, [container])

  return (
    <div className={(props.className ?? '') + ' py-10px border-gray-300 border-1px whitespace-pre-wrap bg-white'}>
      <div style={{ height: '100%' }} ref={container}></div>
    </div>
  )
}
