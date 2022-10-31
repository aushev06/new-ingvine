import React from 'react';

import styles from './FoodCard.module.scss';
import Skeleton from "@mui/material/Skeleton";

export const CardSkeleton = () => {
    const defaultWidth = 272;
    return (
        <div className={styles.skeletonCardItem} style={{width: defaultWidth}}>
            <Skeleton variant="rect" width={272} height={200}/>
            <div className="p-20">
                <Skeleton width="60%"/>
                <Skeleton width="70%"/>
                <div className="d-flex align-items-center">
                    <Skeleton width="60px" height={35}/>
                </div>
                <Skeleton width="90%"/>
                <div className="d-flex align-items-center justify-content-between"
                     style={{position: 'relative', top: 5}}>
                    <Skeleton width="20%" height={35}/>
                    <Skeleton width="40px" height="65px" className={styles.skeletonCardItemButton}/>
                </div>
            </div>
        </div>
    );
};
