/**
 * 预览
 */

import { useState, useEffect, useRef } from 'react'
import * as MonacoEditor from 'monaco-editor'
import { common } from '@/config/monaco'

export default function (props: { className?: string; code: string }) {
  const container = useRef<HTMLDivElement>(null)
  const [editor, setEditor] = useState<MonacoEditor.editor.IStandaloneCodeEditor | null>(null)

  useEffect(() => {
    if (container.current) {
      let editor = MonacoEditor.editor.create(container.current, {
        ...common,
        value: props.code,
        language: 'typescript'
      })

      setEditor(editor)

      return () => {
        editor.dispose()
      }
    }
  }, [container])
  useEffect(() => {
    editor?.setValue(props.code.replace(/;/g, '\r\n'))
    editor?.getAction('editor.action.formatDocument').run()
  }, [props.code])

  return (
    <div className={(props.className ?? '') + ' py-10px border-gray-300 border-1px whitespace-pre-wrap bg-white'}>
      <div style={{ height: '100%' }} ref={container}></div>
    </div>
  )
}
