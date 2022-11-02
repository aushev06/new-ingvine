import React from 'react';

import styles from '../CartDrawer/CartDrawer.module.scss';
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'


import {IncrementOrDecrementButton} from "../IncrementOrDecrementButton";


export const CartItemView = ({
                                 classes,
                                 id,
                                 image,
                                 name,
                                 count,
                                 price,
                                 onPlus,
                                 onMinus,
                                 onRemove,
                                 description,
                                 options = []
                             }) => {
    return (
        <>
            <ListItem key={id} className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                    <img src={image}/>
                </div>
                <div className={styles.cartItemInfoName}>
                    <Typography variant={"h6"} className={styles.name}>
                        {name}
                    </Typography>

                    <div>
                        {options.map((option => {
                            return (
                                <div key={option.id} className={styles.optionName}>
                                    {option.name} x {option.quantity}
                                </div>
                            )
                        }))}
                    </div>

                    <div>
                        {price} ₽
                    </div>

                </div>

                <div>
                    <IncrementOrDecrementButton quantity={count} onDecrement={onMinus} onIncrement={onPlus}/>
                </div>


            </ListItem>
            <Divider className={styles.cartDivider} variant="inset" component="li"/>
        </>
    );
};
