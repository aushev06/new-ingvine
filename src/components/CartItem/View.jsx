import clsx from 'clsx';
import React from 'react';

import styles from '../CartDrawer/CartDrawer.module.scss';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {Link} from "react-router-dom";
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
                                    {option.name}
                                </div>
                            )
                        }))}
                    </div>

                    <div>
                        {price} ₽
                    </div>

                </div>

                <div>
                    <IncrementOrDecrementButton quantity={1} onDecrement={() => {
                    }} onIncrement={() => {
                    }}/>
                </div>


            </ListItem>
            <Divider className={styles.cartDivider} variant="inset" component="li"/>
        </>
    );
};
