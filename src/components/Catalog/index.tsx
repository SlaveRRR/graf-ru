
import React, { FC, useEffect, useState, useCallback } from 'react'
import { focus, genres, tags, rating, status, viewCounts, sort, size } from '@/data/filters.json'
import cn from 'classnames'
import styles from './index.module.scss'
import { Filters } from '../shared'
import { Cards } from '../UI'
import { useSearchParams } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
type Props = {}

const Catalog = (props: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [scroll, setScroll] = useState<number>(0)
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const handleScroll = useCallback(() => {
        setScroll(window.scrollY)
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
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
                <Cards mixClass={[styles['catalog__cards']]} names={['Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи', 'Записи']} />
                <button className={styles['catalog__load-more']}>Загрузить ещё</button>
                <CSSTransition timeout={200} in={scroll > 100} unmountOnExit classNames={{
                     enter:styles['catalog__start-btn-enter'],
                     enterActive:styles['catalog__start-btn-enter-active'],
                     exit:styles['catalog__start-btn-exit'],
                     exitActive:styles['catalog__start-btn-exit-active'],
                }}>
                    <button onClick={() => handleClick()} className={styles['catalog__start-btn']}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 7.79169L18 28.2084" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.209 18L18.0007 7.79169L7.79232 18" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </CSSTransition>

            </div>
        </section>
    )
}

export default Catalog