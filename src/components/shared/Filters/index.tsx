
import React, { FC, useState } from 'react'
import type { IFilter, FilterItem } from '@/types/filter.type'

import cn from 'classnames'
import styles from './index.module.scss'
import { MixClass } from '@/types/mixClass.type';
import { Filter, SearchFilter, SortFilter } from '..'




type Props = {
    urlFilter?: string
    filters: IFilter[]
} & MixClass


const Filters: FC<Props> = ({ urlFilter, mixClass, filters }) => {

    const [isVisibleFilter, setVisible] = useState(false)

    const [visbileFilters, setVisibleFilters] = useState<IFilter[]>(filters)

    const initialState = urlFilter ? [{ text: urlFilter, colorClass: "genres" }] : []

    const [activeFilters, setFilters] = useState<FilterItem[]>(initialState as FilterItem[]);
    const [sortText, setSort] = useState<string>();
    const handleClick = () => {
        setVisible(!isVisibleFilter)
    }
    console.log(visbileFilters)
    const handleFilter = (filter: IFilter, event: React.MouseEvent<HTMLInputElement>): void => {
        const { checked } = event.target as HTMLInputElement

        const { text: filterText, colorClass } = filter

        checked ? setFilters([...activeFilters, { text: filterText, colorClass }]) : setFilters(activeFilters.filter(({ text }) => text !== filterText))
    }

    const setActive = (elem) : void => {

        setVisibleFilters(visbileFilters.map((v) => {
            if (v['text'] === elem['text']) {
                return { ...v, isActive: !v['isActive'] }
            }
            return v
        }))
    }
    return (
        <div className={cn(styles["filter__container"], ...mixClass)}>
            <div className={styles["filter__filters"]}>
                <button onClick={() => handleClick()} className={styles["filter__button"]}><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 5H9.5" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 5L16.5 5" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.5 12L16.5 12" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.5 12H4.5" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="6.5" cy="12" r="2" stroke="black" stroke-width="1.3" />
                    <circle cx="11.5" cy="5" r="2" stroke="black" stroke-width="1.3" />
                </svg>
                    Фильтр
                    <svg className={cn({
                        [styles['filter__arrow-icon--active']]: isVisibleFilter
                    })} width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_758_1358)">
                            <path d="M4 6C3.57093 6.00062 3.15658 5.77907 2.83532 5.37725C2.64365 5.13626 2.46195 4.9019 2.34296 4.73379L0.658953 2.39516C0.555317 2.2393 0.498371 2.03285 0.500036 1.81902C0.5017 1.60519 0.561846 1.40056 0.667883 1.24797C0.77392 1.09537 0.917627 1.00664 1.06892 1.00036C1.22021 0.994073 1.36736 1.07072 1.47956 1.21424L3.16767 3.55702C3.27786 3.71188 3.44199 3.92222 3.61256 4.13671C3.71964 4.27015 3.85751 4.34379 4.00029 4.34379C4.14308 4.34379 4.28095 4.27015 4.38803 4.13671C4.55801 3.92305 4.72214 3.71271 4.82881 3.56282L6.52044 1.21424C6.63264 1.07072 6.77979 0.994073 6.93108 1.00036C7.08237 1.00664 7.22608 1.09537 7.33212 1.24797C7.43815 1.40056 7.4983 1.60519 7.49996 1.81902C7.50163 2.03285 7.44468 2.2393 7.34105 2.39516L5.65411 4.73793C5.53688 4.90356 5.35693 5.13543 5.16585 5.37476C4.84463 5.77806 4.42973 6.00057 4 6Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_758_1358">
                                <rect width="7" height="7" fill="white" transform="matrix(1 0 0 -1 0.5 7)" />
                            </clipPath>
                        </defs>
                    </svg>


                </button>

                {isVisibleFilter && <button onClick={() => setFilters([])} className={styles['filter__reset-btn']}>Сбросить</button>}
                {
                    activeFilters.length > 0 &&
                    <div className={styles["aplly-filters"]}>
                        {activeFilters.map(({ text, colorClass }) => <div className={cn(styles["aplly-filters__item"], styles[`aplly-filters__item--${colorClass}`])}><p className={styles['aplly-filters__text']}>{text}</p><button onClick={() => setFilters(activeFilters.filter(({ text: v }) => v !== text))} className={styles['aplly-filters__btn']}></button></div>)}
                    </div>
                }


                {
                    isVisibleFilter && <>

                        {...visbileFilters.map((elem) => {

                            switch (elem['filterType']) {
                                case "default": return <div className={styles["filter__items"]}>
                                    <Filter handleFilter={handleFilter} setActive={() => setActive(elem)} header={elem['text']} isActive={elem['isActive']} filters={elem['filters']} activeFilters={activeFilters} colorClass={elem['colorClass']} />
                                </div>

                                case "search": return <div className={styles["filter__items"]}>
                                    <SearchFilter handleFilter={handleFilter} setActive={() => setActive(elem)} header={elem['text']} isActive={elem['isActive']} filters={elem['filters']} activeFilters={activeFilters} colorClass={elem['colorClass']} />
                                </div>

                                case "sort": return <div className={styles["filter__items"]}>
                                    <SortFilter setActive={() => setActive(elem)} header={elem['text']} setSort={setSort} sortText={sortText} isActive={elem['isActive']} filters={elem['filters']} />
                                </div>


                            }


                        })}
                        {/* <div className={styles["filter__items"]}>
                            <Filter colorClass='' isActive={filtersObj.isVisibleGenre} filterType='genres' filters={genres} header='Жанры' handleFilter={handleFilter} activeFilters={activeFilters} setActive={() => setFiltersObj({ ...filtersObj, isVisibleGenre: !filtersObj.isVisibleGenre })} />
                        </div> */}
                        {/* <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleNaprav: !filtersObj.isVisibleNaprav })} colorClass={"filter__item--naprav"} isActive={filtersObj.isVisibleNaprav} filterType='naprav' filters={focus} header='Направленность' handleFilter={handleFilter} activeFilters={activeFilters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleSize: !filtersObj.isVisibleSize })} colorClass={"filter__item--size"} isActive={filtersObj.isVisibleSize} filterType='size' filters={size} header='Размер' handleFilter={handleFilter} activeFilters={activeFilters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <SearchFilter filterType='tags' colorClass={"filter__item--tags"} handleFilter={handleFilter} setActive={() => setFiltersObj({ ...filtersObj, isVisibleTags: !filtersObj.isVisibleTags })} filters={tags} isActive={filtersObj.isVisibleTags} activeFilters={activeFilters} header='Включить метки' />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleViewCounts: !filtersObj.isVisibleViewCounts })} colorClass={"filter__item--viewcounts"} isActive={filtersObj.isVisibleViewCounts} filterType='viewcounts' filters={viewCounts} header='Количество оценок' handleFilter={handleFilter} activeFilters={activeFilters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleRating: !filtersObj.isVisibleRating })} colorClass={"filter__item--rating"} isActive={filtersObj.isVisibleRating} filterType='rating' filters={rating} header='Рейтинг' handleFilter={handleFilter} activeFilters={activeFilters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleStatuses: !filtersObj.isVisibleStatuses })} colorClass={"filter__item--status"} isActive={filtersObj.isVisibleStatuses} filterType='status' filters={status} header='Статус' handleFilter={handleFilter} activeFilters={activeFilters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <SortFilter setSort={setSort} sortText={sortText} setActive={() => setFiltersObj({ ...filtersObj, isVisibleSort: !filtersObj.isVisibleSort })} header='Сортировать' isActive={filtersObj.isVisibleSort} filters={sort} />
                        </div> */}
                    </>
                }






            </div>


        </div>
    )
}

export default React.memo(Filters)