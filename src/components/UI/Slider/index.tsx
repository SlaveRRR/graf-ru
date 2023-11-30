
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss'
import styles from './index.module.scss';
import { Link } from 'react-router-dom';


import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

type Props = {
    arr: string[]
}

const Slider: FC<Props> = ({ arr }) => {
    return (
        <>
            <div className={styles["slider"]}>
                <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                
                pagination={
                    {
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">'+''+'</span>';
                          },
                    }
                }
                
                style={{
                    
                    //@ts-ignore
                    
                    "--swiper-pagination-color":"#7A5AF8",
                    "--swiper-pagination-bullet-inactive-color": "#DFDFDF",
                    "--swiper-pagination-top":"125px",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "6px",
                    "--swiper-pagination-bullet-horizontal-gap": "3px",
                    "paddingBottom":'50px'
                }}
                modules={[Pagination]}
                >
                    {arr.map((text, ind) =>

                        <SwiperSlide 
                        key={ind}
                        className={styles['slide']}>
                        
                            <div className={styles['slide__text-container']}>
                                <p className={styles['slide__text']}>{text}</p>
                                <Link className={styles['slide__link']} to={'/article'}>Читать подробнее</Link>
                            </div>
                            <div className={styles['slide__img']}></div>


                        </SwiperSlide>)}
                         
                </Swiper>
                    
            </div >

        </>


    )
}

export default Slider