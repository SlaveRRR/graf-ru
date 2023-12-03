
import React, { FC, useState, useEffect } from 'react'
import type { MixClass } from '../../../types/mixClass.type'
import cn from 'classnames'
import styles from './index.module.scss'

type Props = {
    tabs: string[];
    children: React.ReactNode;
} & MixClass

type ScrollActive = {
    left: number;
    width: number
}



const containerWidth = 293

const Tabs: FC<Props> = ({ tabs, children, mixClass }) => {

    const [numActive, setNumActive] = useState<number>(0)

    const [scrollActive, setScrollActive] = useState<ScrollActive>({
        left: 0,
        width: Math.round((containerWidth - 21 * tabs.length - 1) / tabs.length - 1)
    })

    const [tabsWidths, setTabsWidths] = useState<number[]>([])



    const changeActive = (index: number) => {

        setNumActive(index)
        const { left,right } = document.querySelectorAll(`.${styles["btns__item"]}`).item(index).getBoundingClientRect()
    
        setScrollActive({ ...scrollActive, width: tabsWidths[index], left: left - tabsWidths[index] / 4  })
    }


    useEffect(() => {
        const widths: number[] = []

        document.querySelectorAll(`.${styles["btns__item"]}`).forEach((v) => widths.push(v.clientWidth))

        setTabsWidths(widths.map(v => v + v/4))

        const { left } = document.querySelectorAll(`.${styles["btns__item"]}`).item(0).getBoundingClientRect()
       
        setScrollActive({ ...scrollActive, width: widths[0], left: left - widths[0] / 4 })

        setNumActive(0)



    }, [])

    
    return (
        <div className={"tabs"}>
            <div className={cn(styles["tabs__scroller"], ...mixClass)}>
                <div className={cn(styles["tabs__btns"], styles["btns"])}>

                    {tabs.map((value, index) => <button onClick={() => changeActive(index)} key={index} className={cn(styles["btns__item"], {
                        [styles["btns__item--active"]]: numActive === index
                    })}>{value}</button>)}
                </div>
                <span style={{
                        left: `${scrollActive.left}px`,
                        width: `${scrollActive.width}px`,
                    }} className={styles["tabs__active"]}></span>
            </div>

            <div className={styles["tabs__content"]}>
                {children[numActive]}
            </div>
        </div>
    )
}

export default Tabs