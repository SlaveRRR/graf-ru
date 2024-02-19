import React, { FC, useContext } from 'react';
import { ctx } from '../../../context/contextProvider';
import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  const {setActiveBurger} = useContext(ctx);
  return <main className={styles.main} onClick={() => setActiveBurger(false)}>{children}</main>;
};

export default Main;
