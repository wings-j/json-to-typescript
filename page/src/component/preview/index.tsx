/**
 * @name JSON编辑器
 */

import './style.css'

interface Props {
  className?: string
  raw: string
}

/* public */

/**
 * @name 预览
 */
function component(props: Props) {
  return <div className={props.className ?? ''}></div>
}

export default component
