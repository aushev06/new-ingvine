import EmptyCartIcon from '../../assets/icons/empty-cart.svg';
import React from 'react';

import styles from './CartDrawer.module.scss';
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import {Icon} from "../Icon";
import {CartItem} from "../CartItem";
import {cartApi} from "../../service/cart";

export const CartDrawer = ({onClose, items, opened = false, totalPrice, totalCount}) => {
    const handleClickRemove = async (cartProductId) => {
        if (window.confirm('Вы действительно хотите удалить ? ')) {
            await cartApi.destroyProperty(cartProductId);
        }
    };

    let cartContent = null;

    if (!items.length) {
        cartContent = (
            <div className={styles.cartIsEmptyInfo}>
                <img src={EmptyCartIcon}/>
                <Typography>Корзина пуста</Typography>
                <Button onClick={onClose} variant="contained" color="secondary">
                    Назад
                </Button>
            </div>
        );
    }

    if (items.length) {
        cartContent = (
            <>
                <div className={styles.cardDetails}>
                    <List classes={{root: styles.cartList}}>
                        {items.map((cartItem) => {
                            return (
                                <CartItem
                                    key={cartItem.id}
                                    id={cartItem.id}
                                    name={cartItem.name}
                                    image={cartItem.img}
                                    quantity={cartItem.quantity}
                                    price={cartItem.price}
                                    options={cartItem.options}
                                    handleClickRemove={handleClickRemove}
                                />
                            );
                        })}
                    </List>
                </div>
            </>
        );
    }


    return (
        <Drawer
            anchor={'right'}
            classes={{paper: styles.cartPaper}}
            open={opened}
            onClose={onClose}
        >
            <div className={styles.cardRoot}>
                <div className={styles.cartHeader}>
                    <h1>Заказ</h1>
                    <IconButton data-test-id="cart-drawer-close-btn" className={styles.closeButton} onClick={onClose}>
                        <Icon type="close"/>
                    </IconButton>
                </div>
                {cartContent}

                {items.length && (
                    <div>
                        <Button className={styles.button}>
                        <span className={styles.buttonText}>
                            Оформить
                        </span>
                            <span>{totalPrice} ₽</span>
                        </Button>
                    </div>
                )}
            </div>
        </Drawer>
    );
};
