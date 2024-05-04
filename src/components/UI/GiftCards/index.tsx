

import React,{FC} from 'react'
import cn from 'classnames';
import styles from './index.module.scss'
import GiftCard from '../GiftCard';
type Props = {
    names:string[];
    prices:string[];
    mixClass:string[];
}

const GiftCards : FC<Props> = ({names, prices, mixClass}) => {
  return (
    <div className={cn(styles["cards"], ...mixClass)}>
      {names.map((name, index) => (
        <GiftCard key={index} text={name} price={prices[index]} />
      ))}
    </div>
  )
}

export default GiftCards