import React, { FC, useContext } from 'react'

import { ctx } from '../../../context/contextProvider';


import { BurgerMenu, Search } from '../../UI/index';

import cn from 'classnames'
import styles from './index.module.scss'
import { Link } from 'react-router-dom';


const navLinks = {
    'Логотип': '/',
    'Регистрация': '/signup',
    'Авторизация': '/signin',
    'Профиль': '/profile',
    "Каталог": '/catalog',
    "Популярное": '/popular',
    'Блог': '/blog',

}



const Header: FC = () => {
    const { burger: [isActive, setActive] } = useContext(ctx);
    const handleBurgerClick = () => setActive(!isActive)
    return (
        <header className={styles['header']}>
            <div className={cn(styles["header-container"], 'container')}>

                <nav onClick={() => setActive(false)} className={cn(styles['nav'],{
                    [styles['nav--active']] : isActive
                })}>
                    {
                        Object.entries(navLinks).map(([text, url], i) => <Link className={styles['nav__item']} key={i + 1} to={url}>{text}</Link>)
                    }
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