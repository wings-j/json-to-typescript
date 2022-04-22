import { useState } from 'react'
import './index.css'
import Edit from '@/component/edit'
import Preview from '@/component/preview'
import JsonToTypescript from '@/core'
import RightArrow from './image/right-arrow.svg'

function App() {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  /**
   * 处理编辑器输入
   * @param value 源数据
   */
  function handle_edit_input(value: string) {
    try {
      let code = `type Type = ${JsonToTypescript(value)}`
      setCode(code)
      setError(false)
    } catch (er) {
      setError(true)
    }
  }

  return (
    <div className='flex w-screen h-screen p-20px'>
      <Edit className='basis-0 flex-grow flex-shrink-0' onInput={handle_edit_input} />
      <div className='w-120px mt-20px leading-none'>
        <div className='flex items-center'>
          <span className='w-10px h-20px bg-pink-400'></span>
          <span className='ml-5px text-12px'>JSON</span>
        </div>
        <img className='h-30px mx-auto opacity-40' src={RightArrow} />
        <div className='flex items-center justify-end'>
          <span className='mr-5px text-12px'>Typescript</span>
          <span className='w-10px h-20px bg-blue-400'></span>
        </div>
        {error && <div className='mt-20px text-red-500 text-center'>JSON格式错误</div>}
      </div>
      <Preview className='basis-0 flex-grow flex-shrink-0' code={code} />
    </div>
  )
}

export default App
