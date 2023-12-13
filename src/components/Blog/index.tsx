
import React, { FC } from 'react'
import {theme,author,sortSmall} from '@/data/data.json'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { ArrowLink, Filters } from '../shared'
import { Cards, SliderArticles } from '../UI'
import { routes } from '@/config/routing'
import styles from './index.module.scss'



const Blog: FC = () => {


    return (
        <>
            <section className="blog-header">
                <div className={cn(styles["blog__container"], "container")}>
                    <label htmlFor="search" className={styles["blog__search-label"]}>  <input type="text" id='search' placeholder='Название, автор, персонаж...' className={styles["blog__search-field"]} /></label>
                    <header className={styles['blog__header']}>
                        <p className={styles['blog__header-text']}>Есть чем поделиться?</p>
                        <Link className={styles['blog__header-link']} to={routes['Профиль']}>Напиши статью</Link>
                    </header>

                    <ArrowLink mixClass={[styles['blog__link']]} text='Новости' url='/news' />
                    <SliderArticles arr={['Статья №1', 'Статья №2', 'Статья №3']} />

                   
                </div>
            </section>
            <section className={styles['blog-articles']}>
                <div className="container">
                    <ArrowLink mixClass={[styles['blog__link']]} text='Полезные статьи' url='/articles' />
                    <div className={styles["articles"]}>
                        <div className={styles["articles__item"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles["filter-section"]}>
                <div className="container">
                    <Filters filters={
                         [
                            { text: 'Тема', colorClass: 'theme', filters: theme, filterType: 'default', isActive: false },
                            { text: 'Автор', colorClass: 'author', filters: author, filterType: 'search', isActive: false },
                            { text: 'Сортировать', colorClass: '', filters: sortSmall, filterType: 'sort', isActive: false },
                        ]
                    } mixClass={[styles["catalog__filter"]]} />
                     <div className={styles["articles-card"]}>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        <div className={styles["articles__item-card"]}>
                            <header className={styles['articles__header']}>Название статьи</header>
                            <p className={styles["articles__short"]}>Кратко о статье</p>
                            <Link className={styles['articles__link']} to={'/article'}>Читать статью</Link>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog