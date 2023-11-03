import React, {FC} from 'react';

import styles from './index.module.scss';

type Props = {
    isActive:boolean
}

const Search : FC<Props> = ({isActive}) => {
    return (
       
            <svg className={styles['search']} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_181_799)">
                    <path d="M13.7399 13.3582L10.4229 9.93056C11.3268 8.78817 11.7713 7.33046 11.6643 5.85896C11.5573 4.38746 10.907 3.01475 9.84805 2.02476C8.78906 1.03477 7.40236 0.503245 5.97475 0.540129C4.54715 0.577013 3.18789 1.17948 2.1781 2.22292C1.16832 3.26637 0.585287 4.67094 0.549592 6.14613C0.513898 7.62132 1.02828 9.05425 1.98633 10.1485C2.94439 11.2428 4.27282 11.9147 5.69685 12.0253C7.12089 12.1358 8.53157 11.6766 9.63711 10.7425L12.9542 14.1702C13.059 14.2748 13.1993 14.3326 13.345 14.3313C13.4908 14.33 13.6301 14.2696 13.7332 14.1632C13.8362 14.0567 13.8946 13.9127 13.8959 13.7621C13.8972 13.6115 13.8412 13.4665 13.7399 13.3582ZM6.12277 10.893C5.2435 10.893 4.38396 10.6236 3.65287 10.1188C2.92178 9.61398 2.35196 8.89651 2.01548 8.05709C1.67899 7.21767 1.59095 6.29399 1.76249 5.40286C1.93403 4.51173 2.35744 3.69317 2.97918 3.05071C3.60093 2.40824 4.39308 1.97071 5.25546 1.79346C6.11784 1.6162 7.01173 1.70717 7.82407 2.05487C8.63642 2.40258 9.33074 2.99139 9.81924 3.74685C10.3077 4.50231 10.5685 5.39049 10.5685 6.29908C10.5672 7.51704 10.0983 8.68472 9.2649 9.54595C8.43146 10.4072 7.30144 10.8916 6.12277 10.893Z" fill="#6448CE" />
                </g>
                <defs>
                    <clipPath id="clip0_181_799">
                        <rect width="13.3371" height="13.7817" fill="white" transform="translate(0.56543 0.556458)" />
                    </clipPath>
                </defs>
            </svg>

      
    )
}

export default Search;