

import React, { FC } from 'react'
import UIContainer from '../UIContainer'
import Header from './header'
import styles from './index.module.scss'
import Footer from './footer'
type Props = {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles['main']}>
                {children}
                <UIContainer />
            </main>
            <Footer/>
        </>


    )
}

export default Layout