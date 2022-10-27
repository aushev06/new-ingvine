import React from 'react';
import {Button as MaterialButton, CircularProgress} from "@mui/material";

import styles from './Button.module.scss';

export const Button = ({loading = false, children, ...rest}) => {
    return (
        <div className={styles.button}>
            <MaterialButton disabled={rest.disabled || loading} {...rest}>
                {loading ?
                    <CircularProgress className={styles.circleProgressColor} color="secondary" size={20}/> : children}
            </MaterialButton>
        </div>
    );
};
