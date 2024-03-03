import React, { FC, SetStateAction } from 'react';
import cn from 'classnames';
import { FilterItem } from '@/types/filter.type';
import styles from './index.module.scss';
import { ShowMore } from '..';
type Props = {
  filters: FilterItem[];
  setFilters: React.Dispatch<SetStateAction<FilterItem[]>>;
  mixClass?: string[];
  shortMode?: boolean;
};

const ActiveFilters: FC<Props> = ({ filters, setFilters, mixClass = [], shortMode = false }) => {

const filterItems = filters.map(({ text, colorClass }) => (
    <div className={cn(styles['aplly-filters__item'], styles[`aplly-filters__item--${colorClass}`])}>
      <p className={styles['aplly-filters__text']}>{text}</p>
      <button
        onClick={() => setFilters(filters.filter(({ text: v }) => v !== text))}
        className={styles['aplly-filters__btn']}
      ></button>
    </div>
  ))

  return (
    <>
      {filters.length > 0 && (
        <div className={cn(styles['aplly-filters'], ...mixClass)}>
          
          {shortMode && filterItems.length >= 5 ? filterItems.slice(0,4).concat(<ShowMore content={filterItems.slice(4)}/>) : filterItems}
            
        </div>
      )}
    </>
  );
};

export default ActiveFilters;
