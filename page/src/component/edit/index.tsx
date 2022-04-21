/**
 * JSON编辑器
 */

import React, { useEffect, useRef, memo } from 'react'
import JsonEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'

interface Props {
  onInput: (value: string) => void
}

/**
 * @name 编辑
 */
function Edit(props: Props) {
  const textarea = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let editor: JsonEditor

    if (textarea.current) {
      new JsonEditor(textarea.current, {
        mode: 'code',
        mainMenuBar: false,
        statusBar: false,
        onChange: () => props.onInput(editor.get())
      })
    }

    return () => {
      editor.destroy()
    }
  })

  return (
    <div className='Edit'>
      <div ref={textarea}></div>
    </div>
  )
}

export default memo(Edit, () => true)
