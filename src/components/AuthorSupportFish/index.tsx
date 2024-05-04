
import { FC } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { routes } from '@/config/routing'
import FishGiftCards from '../UI/FishGiftCards'
import {Button} from '../UI'



const Donation: FC = () => {
    return (
        <>
        <section className={styles["donation"]}>
            <div className={styles["donation__header"]}>
                <Link className={styles["donation__header-back"]} to={routes['Профиль автора']}>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.40512e-06 4C-0.000667787 3.50964 0.237712 3.0361 0.670052 2.66894C0.92934 2.44989 1.1815 2.24222 1.36238 2.10624L3.87863 0.18166C4.04632 0.0632194 4.26845 -0.00186189 4.49852 4.05637e-05C4.72859 0.00194301 4.94876 0.0706814 5.11295 0.191867C5.27713 0.313052 5.3726 0.477288 5.37936 0.650194C5.38612 0.823099 5.30366 0.991269 5.14923 1.1195L2.62852 3.04876C2.4619 3.1747 2.23558 3.36227 2.00481 3.55721C1.86123 3.67958 1.782 3.83715 1.782 4.00033C1.782 4.16352 1.86123 4.32109 2.00481 4.44346C2.23469 4.63773 2.46101 4.8253 2.62229 4.94722L5.14923 6.8805C5.30366 7.00873 5.38612 7.1769 5.37936 7.34981C5.3726 7.52271 5.27713 7.68695 5.11295 7.80813C4.94876 7.92932 4.72859 7.99806 4.49852 7.99996C4.26845 8.00186 4.04632 7.93678 3.87863 7.81834L1.35792 5.89041C1.17972 5.75644 0.930231 5.55078 0.672725 5.3324C0.238792 4.96529 -0.000616351 4.49112 1.40512e-06 4Z" fill="#7A5AF8"/>
                </svg> Вернуться назад</Link>
                <p>9999</p>
            </div>
            <div className={styles["donation__container"]}>
                <p className={styles["donation__title"]}>Подарить рыбок</p>
                <section className={styles["gift__container"]}>
                    <p className={styles["gift__text"]}>Выберите количество</p>
                    <FishGiftCards
                        mixClass={[styles['gift__cards']]}
                        names={[
                            '100 рыбок',
                            '300 рыбок',
                            '1000 рыбок'
                        ]}
                        />
                </section>
                <section className={styles["counter__container"]}>
                    <Button mixClass={[styles['counter__button-less']]}>-</Button>
                        <input 
                            type="number"
                            value="000000"
                            className={styles["counter__input"]} 
                        />
                    <Button mixClass={[styles['counter__button-more']]}>+</Button>
                </section>
                <section className={styles["message__container"]}>
                    <p className={styles["message__text"]}>Напишите послание автору</p>
                    <textarea className={styles["message__field"]}
                        placeholder="Ваши слова поддержки"
                        ></textarea>
                </section>
                <div className={styles["payment__container"]}>
                    <p className={styles["payment__total"]}>Итого: 100 </p>
                    <Link className={styles["payment__button"]} to={routes['Профиль']}>Оплатить</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default Donation;