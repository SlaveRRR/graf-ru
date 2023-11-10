

import React,{FC} from 'react'
import styles from  './index.module.scss'
import cn from 'classnames'
type Props = {
    children:React.ReactNode;
    bg?:boolean
}

const Button : FC<Props> = ({children,bg = false}) => {
  return (
    <button className={cn(styles['button'], {
        [styles['button__transparent']] : bg
    })}>
        {children}
    </button>
  )
}

export default Button