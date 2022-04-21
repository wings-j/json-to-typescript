/**
 * 编辑器
 */

import { useEffect, useRef, memo } from 'react'
import './index.css'
import JsonEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'

interface Props {
  className?: string
  onInput: (value: string) => void
}

/**
 * @name 编辑
 */
function component(props: Props) {
  const textarea = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textarea.current) {
      let editor: JsonEditor = new JsonEditor(textarea.current, {
        mode: 'code',
        mainMenuBar: false,
        statusBar: false,
        onChange: () => {
          try {
            props.onInput(editor.get())
            textarea.current?.classList.remove('error')
          } catch (er) {
            textarea.current?.classList.add('error')
          }
        }
      })

      return () => {
        editor.destroy()
      }
    }
  })

  return (
    <div className={props.className ?? ''}>
      <div className='h-full' ref={textarea}></div>
    </div>
  )
}

export default memo(component, () => true)
