
import React, {FC} from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import { Filters } from '../shared'
import { Cards } from '../UI'
import { useSearchParams } from "react-router-dom";
type Props = {}

const Catalog = (props: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <section className="catalog">
            <div className={cn(styles["catalog__container"], "container")}>
                <label htmlFor="search" className={styles["catalog__search-label"]}>  <input type="text" id='search' placeholder='Название, автор, персонаж...' className={styles["catalog__search-field"]} /></label>
               <Filters mixClass={[styles["catalog__filter"]]} urlFilter={searchParams.get('genre') ?? ''}/>
               <Cards names={['Записи','Записи', 'Записи', 'Записи','Записи','Записи', 'Записи', 'Записи','Записи','Записи', 'Записи','Записи']}/>
            </div>
        </section>
    )
}

export default Catalog