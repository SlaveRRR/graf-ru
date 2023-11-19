

import React,{FC} from 'react'
import { Card } from '..'
import styles from './index.module.scss'
type Props = {
    names:string[]
}

const Cards : FC<Props> = ({names}) => {
  return (
    <div className={styles["cards"]}>
       {names.map(v => <Card text={v} />)} 
    </div>
    
  )
}

export default Cards