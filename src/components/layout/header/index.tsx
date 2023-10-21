import React, { FC } from 'react'
import { BurgerMenu, Search } from '../../UI/index';

import cn from 'classnames'
import styles from './index.module.scss'




const Header: FC = () => {
    return (
        <header>
            <div className={cn(styles["header-container"],'container')}>
                <BurgerMenu isActive={false} onClick={() => 'ok'} />
                <p>Логотип</p>
                <Search isActive={false} />
            </div>
        </header>
    )
}

export default Header;