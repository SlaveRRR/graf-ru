
import React from 'react';

import styles from './index.module.scss';

import cn from 'classnames';
import { ArrowLink } from '../shared/index';
import { Badge, Button, Slider,Card } from '../UI';
import { Link } from 'react-router-dom';

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <section className={styles['image-section']}>
            <div className={styles["cards"]}>
                        <div className={cn(styles["cards__item--start"],styles["cards__item"])} />
                        <div className={styles["cards__item"]} />
                        <div className={styles["cards__item"]} />
                        <div className={styles["cards__item"]} />
                      
                    </div>
                <div className={styles['image-container']}>
                    <div className={styles['image-container__text-container']}>
                        <h1 className={styles['image-container__slogan']}>Создаем вселенную комиксов вместе</h1>
                        <p className={styles['image-container__text']}>Здесь каждый комикс находит своего читателя</p>
                        <Button>Добавить комикс</Button>
                    </div>
                </div>
                <div className={styles["cards"]}>
                        <div className={styles["cards__item"]} />
                        <div className={styles["cards__item"]} />
                        <div className={styles["cards__item"]} />
                        <div className={styles["cards__item"]} />
                       
                    </div>
            </section>
            <section className={styles['popular-section']}>
                <div className={cn(styles['popular-container'], "container")}>
                    <ArrowLink mixClass={[styles['popular-container__link']]} text='Популярные' url='/popular' />

                    <div className={styles["popular-cards"]}>
                        <Card text='Название' />
                        <Card text='Название' />
                        <Card text='Название' />
                    </div>

                </div>
            </section>
            <section className={styles['novelty-section']}>
                <div className={cn(styles['novelty-container'], "container")}>
                    <ArrowLink mixClass={[styles['novelty-container__link']]} text='Новинки' url='/novelty' />

                    <div className={styles["novelty-cards"]}>
                        <Card text='Название' />
                        <Card text='Название' />
                        <Card text='Название' />
                    </div>

                </div>
            </section>
            <section className={styles["genre-section"]}>

                <ArrowLink mixClass={[styles['genre-container__link']]} text='Жанры' url='/genres' />
                <div className={styles["genres"]}>
                    <Badge text='Повседневность' url='/usually' />
                    <Badge text='Фантастика' url='/fantastic' />
                    <Badge text='Детектив' url='/detective' />
                    <Badge text='Трагедия' url='/tragedy' />
                    <Badge text='Романтика' url='/roman' />
                </div>
            </section>
            <section className={styles["slider-section"]}>
                <div className={cn(styles['slider-container'],"container")}>
                <ArrowLink mixClass={[styles['slider-container__link']]} text='Новости' url='/news' />
                <Slider arr={['Статья №1','Статья №2','Статья №3']}/>
                </div>
            </section>
            <section className="article-section">
                <div className="container">
                <ArrowLink mixClass={[styles['slider-container__link']]} text='Полезные статьи' url='/articles' />
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
            
        </>

    )
}

export default Home