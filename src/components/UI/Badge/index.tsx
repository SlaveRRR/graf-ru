import React, { FC } from 'react';
import cn from  'classnames'
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
  url: string;
  mixClass?: string[];
};

const Badge: FC<Props> = ({ text, url, mixClass = [] }) => {
  return (
    <Link className={cn(styles['badge'],...mixClass)} to={url}>
      {text}
    </Link>
  );
};

export default Badge;
