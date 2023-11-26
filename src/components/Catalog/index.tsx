
import React from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import { Filter } from '../shared'
import { Cards } from '../UI'

type Props = {}

const Catalog = (props: Props) => {
    return (
        <section className="catalog">
            <div className={cn(styles["catalog__container"], "container")}>
                <label htmlFor="search" className={styles["catalog__search-label"]}>  <input type="text" id='search' placeholder='Название, автор, персонаж...' className={styles["catalog__search-field"]} /></label>
               <Filter/>
               <Cards names={['Записи','Записи', 'Записи', 'Записи','Записи','Записи', 'Записи', 'Записи','Записи','Записи', 'Записи','Записи']}/>
            </div>
        </section>
    )
}

export default Catalog