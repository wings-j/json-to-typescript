import { useState } from 'react'
import './index.css'
import Edit from '@/component/edit'

function App() {
  const [raw, setRaw] = useState('')

  /**
   * 处理编辑器输入
   * @param value 源数据
   */
  function handleEditInput(value: string) {
    setRaw(value)
  }

  return (
    <div className='flex w-screen h-screen p-20px'>
      <Edit className='flex-grow' onInput={handleEditInput} />
      <div className='flex-grow'></div>
    </div>
  )
}

export default App
