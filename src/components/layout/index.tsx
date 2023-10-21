

import React, { FC } from 'react'
import UIContainer from '../UIContainer'
import Header from './header'

type Props = {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
                <UIContainer />
            </main>
        </>


    )
}

export default Layout