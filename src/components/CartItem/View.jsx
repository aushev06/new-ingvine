import clsx from 'clsx';
import React from 'react';

import styles from '../CartDrawer/CartDrawer.module.scss';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

const productCartType = {
  recipe: 'recipes',
  chefStore: 'chefs-store',
  menu: 'menu',
};

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
  product,
}) => {
  return (
    <>
      <ListItem key={id} data-test-cart-product-name={name} className={styles.cartItem}>
        {product ? (
            <Link to={`/${productCartType[product.type]}/${product.slug}`}>
              <ListItemAvatar
                  style={{ marginRight: '20px' }}
                  className={styles.cartItemImage}
              >
                <Avatar style={{ height: 66, width: 66 }} variant="rounded" src={`${image}?width=100&height=100`} />
              </ListItemAvatar>
            </Link>
        ) : (
          <ListItemAvatar
            style={{ marginRight: '20px' }}
            className={styles.cartItemImage}
          >
            <Avatar style={{ height: 66, width: 66 }} variant="rounded" src={`${image}?width=100&height=100`} />
          </ListItemAvatar>
        )}

        <div className={clsx(styles.cartItemInfo, classes?.cartItemInfo)}>
          <ListItemText className={styles.cartItemInfoName} primary={name} secondary={description} />
          <div className={styles.cartItemInfoButtons}>
            {/*<AddCartButtons count={count} size="small" onPlus={onPlus} onMinus={onMinus} />*/}
            <div
              style={{ marginLeft: '15px' }}
              className={styles.cartItemInfoPrice}
            >
              <b>RUB </b>
              <b>{Number(price)?.toFixed(2)}</b>
            </div>
          </div>
        </div>
        <div className={styles.cartRemoveItem} onClick={onRemove}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14.5" cy="14.5" r="14" stroke="#E0E0E0" />
            <path d="M10 10L19 19M10 19L19 10" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </ListItem>
      <Divider className={styles.cartDivider} variant="inset" component="li" />
    </>
  );
};
