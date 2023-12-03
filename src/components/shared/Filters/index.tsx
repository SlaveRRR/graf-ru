
import React, { FC, useState } from 'react'
import type { FilterItem } from '@/types/filter.type'
import { focus, genres, tags, rating, status, viewCounts, sort } from '@/data/filters.json'
import cn from 'classnames'
import styles from './index.module.scss'
import { MixClass } from '@/types/mixClass.type';
import { Filter, SearchFilter, SortFilter } from '..'



interface IFilter {
    isVisibleGenre: boolean;
    isVisibleNaprav: boolean;
    isVisibleTags: boolean;
    isVisibleSort: boolean;
    isVisibleStatuses: boolean;
    isVisibleViewCounts: boolean;
    isVisibleRating: boolean;

}



type Props = {
    urlFilter?: string
} & MixClass

const Filters: FC<Props> = ({ urlFilter, mixClass }) => {

    const [isVisibleFilter, setVisible] = useState(false)
    const [filtersObj, setFiltersObj] = useState<IFilter>({
        isVisibleGenre: false,
        isVisibleNaprav: false,
        isVisibleTags: false,
        isVisibleSort: false,
        isVisibleRating: false,
        isVisibleStatuses: false,
        isVisibleViewCounts: false,

    })

    const initialState = urlFilter ? [{ text: urlFilter, type: "genres" }] : []

    const [filters, setFilters] = useState<FilterItem[]>(initialState as FilterItem[]);
    const [sortText, setSort] = useState<string>();
    const handleClick = () => {
        setVisible(!isVisibleFilter)
    }

    const handleFilter = (filter: FilterItem, event: React.MouseEvent<HTMLInputElement>): void => {
        const { checked } = event.target as HTMLInputElement

        const { text: filterText, type } = filter

        checked ? setFilters([...filters, { text: filterText, type }]) : setFilters(filters.filter(({ text }) => text !== filterText))
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
                {isVisibleFilter &&  <button onClick={() => setFilters([])} className={styles['filter__reset-btn']}>Сбросить</button>}
                {
                    filters.length > 0 &&
                        <div className={styles["aplly-filters"]}>
                            {filters.map(({ text, type }) => <div className={cn(styles["aplly-filters__item"], styles[`aplly-filters__item--${type}`])}><p className={styles['aplly-filters__text']}>{text}</p><button onClick={() => setFilters(filters.filter(({ text: v }) => v !== text))} className={styles['aplly-filters__btn']}></button></div>)}
                        </div>
                }


                {
                    isVisibleFilter && <>
                        <div className={styles["filter__items"]}>
                            <Filter colorClass='' isActive={filtersObj.isVisibleGenre} filterType='genres' filters={genres} header='Жанры' handleFilter={handleFilter} activeFilters={filters} setActive={() => setFiltersObj({ ...filtersObj, isVisibleGenre: !filtersObj.isVisibleGenre })} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleNaprav: !filtersObj.isVisibleNaprav })} colorClass={"filter__item--naprav"} isActive={filtersObj.isVisibleNaprav} filterType='naprav' filters={focus} header='Направленность' handleFilter={handleFilter} activeFilters={filters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <SearchFilter filterType='tags' colorClass={"filter__item--tags"} handleFilter={handleFilter} setActive={() => setFiltersObj({ ...filtersObj, isVisibleTags: !filtersObj.isVisibleTags })} filters={tags} isActive={filtersObj.isVisibleTags} activeFilters={filters} header='Включить метки' />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleViewCounts: !filtersObj.isVisibleViewCounts })} colorClass={"filter__item--viewcounts"} isActive={filtersObj.isVisibleViewCounts} filterType='viewcounts' filters={viewCounts} header='Количество оценок' handleFilter={handleFilter} activeFilters={filters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleRating: !filtersObj.isVisibleRating })} colorClass={"filter__item--rating"} isActive={filtersObj.isVisibleRating} filterType='rating' filters={rating} header='Рейтинг' handleFilter={handleFilter} activeFilters={filters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <Filter setActive={() => setFiltersObj({ ...filtersObj, isVisibleStatuses: !filtersObj.isVisibleStatuses })} colorClass={"filter__item--status"} isActive={filtersObj.isVisibleStatuses} filterType='status' filters={status} header='Статус' handleFilter={handleFilter} activeFilters={filters} />
                        </div>
                        <div className={styles["filter__items"]}>
                            <SortFilter setSort={setSort} sortText={sortText} setActive={() => setFiltersObj({ ...filtersObj, isVisibleSort: !filtersObj.isVisibleSort })} header='Сортировать' isActive={filtersObj.isVisibleSort} filters={sort} />
                        </div>
                    </>
                }






            </div>


        </div>
    )
}

export default React.memo(Filters)