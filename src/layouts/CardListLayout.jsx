import clsx from 'clsx';
import React from 'react';

import styles from './ChefList.module.scss';

const CardsListLayout = ({ children, classes }) => (
    <div className={styles.cards}>
        <div className={clsx({ [styles.categoryList]: classes?.list === 'categoryList' }, styles.cardsList, classes?.list)}>
            {children}
        </div>
    </div>
);

export const CardsList = ({
    children,
    classes,
    isLoading,
    isLoaded,
    itemsLength,
    skeletonWidth,
    skeletonCount = 6,
}) => {
    return <CardsListLayout classes={classes}>{children}</CardsListLayout>;
};
