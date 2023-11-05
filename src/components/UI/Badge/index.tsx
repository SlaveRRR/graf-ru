
import React,{FC} from 'react'

import styles from './index.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    text:string;
    url:string;
}

const Badge : FC<Props> = ({text,url}) => {
  return (
    <Link className={styles['badge']} to={url}>{text}</Link>
  )
}

export default Badge