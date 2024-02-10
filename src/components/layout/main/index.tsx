import React, { FC, useContext } from 'react';
import { ctx } from '../../../context/contextProvider';
import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  const {
    burger: [isActive, setActive],
  } = useContext(ctx);
  return <main className={styles.main} onClick={() => setActive(false)}>{children}</main>;
};

export default Main;
