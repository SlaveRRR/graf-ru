import React, { FC, useContext } from 'react'

import { ctx } from '../../../context/contextProvider';


import { BurgerMenu, Search } from '../../UI/index';

import cn from 'classnames'
import {routes} from '@/config/routing'
import { Link,NavLink } from 'react-router-dom';
import styles from './index.module.scss'






const Header: FC = () => {
    const { burger: [isActive, setActive] } = useContext(ctx);
    const handleBurgerClick = () => setActive(!isActive)
    return (
        <header className={styles['header']}>
            <div className={cn(styles["header-container"], 'container')}>

                <nav onClick={() => setActive(false)} className={cn(styles['nav'],{
                    [styles['nav--active']] : isActive
                })}>
                    <figure className={styles['avatar']}>
                        <img className={styles['avatar__img']} src='./avatar.svg'/>
                        <figcaption className={styles['avatar__name']}>Никнейм</figcaption>
                    </figure>
                    
                    {
                        Object.entries(routes).map(([text, url], i) => <NavLink className={({isActive}) => isActive ? cn(styles['nav__item'],styles['nav__item--active']) : styles['nav__item'] } key={i + 1} to={url}>{text}</NavLink>)
                    }
                    <button className={styles['auth-btn']}>Выйти</button>
                </nav>




                <BurgerMenu isActive={isActive} onClick={handleBurgerClick} />
                <p>Логотип</p>
                <Link className={styles['signin-link']} to={'/signin'}>Войти</Link>
                <Search isActive={false} />
            </div>
        </header>
    )
}

export default Header;