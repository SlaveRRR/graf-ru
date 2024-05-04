

import React,{FC} from 'react'
import cn from 'classnames';
import styles from './index.module.scss'
import FishGiftCard from '../FIshGiftCard';
type Props = {
    names:string[];
    mixClass:string[];
}

const GiftCards : FC<Props> = ({names, mixClass}) => {
  return (
    <div className={cn(styles["cards"],...mixClass)}>
       {names.map(v => <FishGiftCard text={v} />)} 
    </div>
  )
}

export default GiftCards