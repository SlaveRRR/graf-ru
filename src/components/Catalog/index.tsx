
import React, { FC } from 'react'
import { focus, genres, tags, rating, status, viewCounts, sort, size } from '@/data/filters.json'
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
                <Filters filters={
                    [
                        { text: 'Жанры', colorClass: 'genres', filters: genres, filterType: 'default', isActive: false },
                        { text: 'Направленность', colorClass: 'naprav', filters: focus, filterType: 'default', isActive: false },
                        { text: 'Размер', colorClass: 'size', filters: size, filterType: 'default', isActive: false },
                        { text: 'Включить метки', colorClass: 'tags', filters: tags, filterType: 'search', isActive: false },
                        { text: 'Количество оценок', colorClass: 'viewcounts', filters: viewCounts, filterType: 'default', isActive: false },
                        { text: 'Рейтинг', colorClass: 'rating', filters: rating, filterType: 'default', isActive: false },
                        { text: 'Статус', colorClass: 'status', filters: status, filterType: 'default', isActive: false },
                        { text: 'Сортировать', colorClass: '', filters: sort, filterType: 'sort', isActive: false },
                    ]
                } mixClass={[styles["catalog__filter"]]} urlFilter={searchParams.get('genre') ?? ''} />
                <Cards names={['Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи']} />
                <button>Загрузить ещё</button>
            </div>
        </section>
    )
}

export default Catalog