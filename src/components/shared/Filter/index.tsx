
import React, { FC, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
type Props = {}
const data = ['фантастика','детектив','трагедия','повседневность','романтика','драма','спорт','ужасы']
const sortData = ['по названию (А-Я)','по дате добавления','по дате обновления глав','по дате чтения','по количеству глав (по возрастанию)','по количеству глав (по убыванию)','по рейтингу','по просмотрам','по количеству лайков']
const otherData = ['au','ангст','нецензурная лексика','hurt/comfort','психология','смерть основных персонажей','дружба','насилие','фэнтези']
const Filter: FC = (props: Props) => {

    const [isVisibleFilter, setVisible] = useState(false)

    const [isVisibleGenre, setVisibleGenre] = useState(false)
    
    const [isVisibleNaprav,setVisibleNaprav] = useState(false)

    const [isVisibleTags,setVisibleTags] = useState(false)
    const [isVisibleSort,setVisibleSort] = useState(false)
    const handleClick = () => {
        setVisible(!isVisibleFilter)
    }
    return (
        <div className="filter__container">
            <div className="filter__filters">
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
                {
                    isVisibleFilter && <>
                    <div className={styles["filter__items"]}>
                            <div className={styles["filter__item-container"]}>

                            <button onClick={() => setVisibleGenre(!isVisibleGenre)} className={styles["filter__header"]}>Жанры  <svg className={cn({
                        [styles['filter__arrow-icon--active']]: isVisibleGenre
                    })} width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_758_1358)">
                            <path d="M4 6C3.57093 6.00062 3.15658 5.77907 2.83532 5.37725C2.64365 5.13626 2.46195 4.9019 2.34296 4.73379L0.658953 2.39516C0.555317 2.2393 0.498371 2.03285 0.500036 1.81902C0.5017 1.60519 0.561846 1.40056 0.667883 1.24797C0.77392 1.09537 0.917627 1.00664 1.06892 1.00036C1.22021 0.994073 1.36736 1.07072 1.47956 1.21424L3.16767 3.55702C3.27786 3.71188 3.44199 3.92222 3.61256 4.13671C3.71964 4.27015 3.85751 4.34379 4.00029 4.34379C4.14308 4.34379 4.28095 4.27015 4.38803 4.13671C4.55801 3.92305 4.72214 3.71271 4.82881 3.56282L6.52044 1.21424C6.63264 1.07072 6.77979 0.994073 6.93108 1.00036C7.08237 1.00664 7.22608 1.09537 7.33212 1.24797C7.43815 1.40056 7.4983 1.60519 7.49996 1.81902C7.50163 2.03285 7.44468 2.2393 7.34105 2.39516L5.65411 4.73793C5.53688 4.90356 5.35693 5.13543 5.16585 5.37476C4.84463 5.77806 4.42973 6.00057 4 6Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_758_1358">
                                <rect width="7" height="7" fill="white" transform="matrix(1 0 0 -1 0.5 7)" />
                            </clipPath>
                        </defs>
                    </svg></button>
                            <div className={styles["filter__content"]}>
                                    {isVisibleGenre && data.map((text,i) =>  <label htmlFor={`${text}id`} className={styles["filter__item"]}>{text} <input id={`${text}id`}  type="checkbox" className='myvisuallyhidden' /></label>)}
                            </div>
                               
                               
                            </div>
                        </div>
                 <div className={styles["filter__items"]}>
                 <div className={styles["filter__item-container"]}>

                 <button onClick={() => setVisibleNaprav(!isVisibleNaprav)} className={styles["filter__header"]}>Направленность  <svg className={cn({
             [styles['filter__arrow-icon--active']]: isVisibleNaprav
         })} width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g clip-path="url(#clip0_758_1358)">
                 <path d="M4 6C3.57093 6.00062 3.15658 5.77907 2.83532 5.37725C2.64365 5.13626 2.46195 4.9019 2.34296 4.73379L0.658953 2.39516C0.555317 2.2393 0.498371 2.03285 0.500036 1.81902C0.5017 1.60519 0.561846 1.40056 0.667883 1.24797C0.77392 1.09537 0.917627 1.00664 1.06892 1.00036C1.22021 0.994073 1.36736 1.07072 1.47956 1.21424L3.16767 3.55702C3.27786 3.71188 3.44199 3.92222 3.61256 4.13671C3.71964 4.27015 3.85751 4.34379 4.00029 4.34379C4.14308 4.34379 4.28095 4.27015 4.38803 4.13671C4.55801 3.92305 4.72214 3.71271 4.82881 3.56282L6.52044 1.21424C6.63264 1.07072 6.77979 0.994073 6.93108 1.00036C7.08237 1.00664 7.22608 1.09537 7.33212 1.24797C7.43815 1.40056 7.4983 1.60519 7.49996 1.81902C7.50163 2.03285 7.44468 2.2393 7.34105 2.39516L5.65411 4.73793C5.53688 4.90356 5.35693 5.13543 5.16585 5.37476C4.84463 5.77806 4.42973 6.00057 4 6Z" fill="black" />
             </g>
             <defs>
                 <clipPath id="clip0_758_1358">
                     <rect width="7" height="7" fill="white" transform="matrix(1 0 0 -1 0.5 7)" />
                 </clipPath>
             </defs>
         </svg></button>
                 <div className={styles["filter__content"]}>
                         {isVisibleNaprav && data.map((text,i) =>  <label htmlFor={`${text}id`} className={styles["filter__item"]}>{text} <input id={`${text}id`}  type="checkbox" className='myvisuallyhidden' /></label>)}
                 </div>
                    
                    
                 </div>
             </div>
             <div className={styles["filter__items"]}>
                 <div className={styles["filter__item-container"]}>
                
                 <button onClick={() => setVisibleTags(!isVisibleTags)} className={styles["filter__header"]}>Включить метки  <svg className={cn({
             [styles['filter__arrow-icon--active']]: isVisibleTags
         })} width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g clip-path="url(#clip0_758_1358)">
                 <path d="M4 6C3.57093 6.00062 3.15658 5.77907 2.83532 5.37725C2.64365 5.13626 2.46195 4.9019 2.34296 4.73379L0.658953 2.39516C0.555317 2.2393 0.498371 2.03285 0.500036 1.81902C0.5017 1.60519 0.561846 1.40056 0.667883 1.24797C0.77392 1.09537 0.917627 1.00664 1.06892 1.00036C1.22021 0.994073 1.36736 1.07072 1.47956 1.21424L3.16767 3.55702C3.27786 3.71188 3.44199 3.92222 3.61256 4.13671C3.71964 4.27015 3.85751 4.34379 4.00029 4.34379C4.14308 4.34379 4.28095 4.27015 4.38803 4.13671C4.55801 3.92305 4.72214 3.71271 4.82881 3.56282L6.52044 1.21424C6.63264 1.07072 6.77979 0.994073 6.93108 1.00036C7.08237 1.00664 7.22608 1.09537 7.33212 1.24797C7.43815 1.40056 7.4983 1.60519 7.49996 1.81902C7.50163 2.03285 7.44468 2.2393 7.34105 2.39516L5.65411 4.73793C5.53688 4.90356 5.35693 5.13543 5.16585 5.37476C4.84463 5.77806 4.42973 6.00057 4 6Z" fill="black" />
             </g>
             <defs>
                 <clipPath id="clip0_758_1358">
                     <rect width="7" height="7" fill="white" transform="matrix(1 0 0 -1 0.5 7)" />
                 </clipPath>
             </defs>
         </svg></button>
         
                 <div className={styles["filter__content"]}>
                 <label htmlFor="search-tags" className={styles["filter__search-label"]}>  <input type="text" id='search-tags' placeholder='Название, автор, персонаж...' className={styles["filter__search-field"]} /></label>
                         {isVisibleTags && otherData.map((text,i) =>  <label htmlFor={`${text}id`} className={cn(styles["filter__item"],styles["filter__item--tags"])}>{text} <input id={`${text}id`}  type="checkbox" className='myvisuallyhidden' /></label>)}
                 </div>
                    
                    
                 </div>
             </div>
             <div className={styles["filter__items"]}>
                 <div className={styles["filter__item-container"]}>
                
                 <button onClick={() => setVisibleSort(!isVisibleSort)} className={styles["filter__header"]}>Сортировать <svg className={cn({
             [styles['filter__arrow-icon--active']]: isVisibleSort
         })} width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g clip-path="url(#clip0_758_1358)">
                 <path d="M4 6C3.57093 6.00062 3.15658 5.77907 2.83532 5.37725C2.64365 5.13626 2.46195 4.9019 2.34296 4.73379L0.658953 2.39516C0.555317 2.2393 0.498371 2.03285 0.500036 1.81902C0.5017 1.60519 0.561846 1.40056 0.667883 1.24797C0.77392 1.09537 0.917627 1.00664 1.06892 1.00036C1.22021 0.994073 1.36736 1.07072 1.47956 1.21424L3.16767 3.55702C3.27786 3.71188 3.44199 3.92222 3.61256 4.13671C3.71964 4.27015 3.85751 4.34379 4.00029 4.34379C4.14308 4.34379 4.28095 4.27015 4.38803 4.13671C4.55801 3.92305 4.72214 3.71271 4.82881 3.56282L6.52044 1.21424C6.63264 1.07072 6.77979 0.994073 6.93108 1.00036C7.08237 1.00664 7.22608 1.09537 7.33212 1.24797C7.43815 1.40056 7.4983 1.60519 7.49996 1.81902C7.50163 2.03285 7.44468 2.2393 7.34105 2.39516L5.65411 4.73793C5.53688 4.90356 5.35693 5.13543 5.16585 5.37476C4.84463 5.77806 4.42973 6.00057 4 6Z" fill="black" />
             </g>
             <defs>
                 <clipPath id="clip0_758_1358">
                     <rect width="7" height="7" fill="white" transform="matrix(1 0 0 -1 0.5 7)" />
                 </clipPath>
             </defs>
         </svg></button>
         
                 <div className={styles["filter__sort-content"]}>
             
                         {isVisibleSort && sortData.map((text,i) =>  <label htmlFor={`${text}id`} className={cn(styles["filter__sort"])}><input name='radiobtn' id={`${text}id`}  type="radio" className={styles['filter__sort-inp']} /> {text}</label>)}
                 </div>
                    
                    
                 </div>
             </div>
             </>
                }
                    

                    
                


            </div>


        </div>
    )
}

export default Filter