

import React, { FC } from 'react'
import UIContainer from '../UIContainer'
import Header from './header'
import Main from './main'
import styles from './index.module.scss'
import Footer from './footer'

type Props = {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    
    return (
        <>
            <Header />
            <Main>
                {children}
                <UIContainer />
            </Main>

            <Footer />
        </>


    )
}

export default Layout