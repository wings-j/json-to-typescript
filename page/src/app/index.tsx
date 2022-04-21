import { useState } from 'react'
import './index.css'
import Edit from '@/component/edit'

function App() {
  const [raw, setRaw] = useState('')

  /**
   * 处理编辑器输入
   */
  function handleEditInput(value: string) {}

  return (
    <div className='p-20px'>
      <Edit onInput={handleEditInput} />
    </div>
  )
}

export default App
