

import React, { FC, useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
    text: string;
    mixClass?: string[];
}

const FishGiftCard: FC<Props> = ({ text, mixClass = [] }) => {
    const navigate = useNavigate();

    return (
        <div className={styles["card"]}>
            <div onClick={() => navigate('/preview')} className={cn(styles["card__img"], ...mixClass)}>
            </div>  
            <p className={styles["card__text"]}>{text}</p>
        </div>
    )
}

export default React.memo(FishGiftCard)