import React from 'react';

import {CartItemView} from './View';
import {removeFromCart} from "../../services/api/cartApi";

export const CartItem = (
    {
        classes,
        id,
        name,
        image,
        price,
        product,
        options = [],
        type,
        handleClickRemove
    }
) => {
    // const { onPlus, onMinus, onRemove, count } = useCartItem({
    //   item: {
    //     id: Number(id),
    //     image,
    //     name,
    //     price,
    //     product,
    //     options,
    //     type,
    //   },
    // });

    const count = 0;
    const onMinus = () => {
    };
    const onPlus = () => {
    };

    const onRemove = () => handleClickRemove(id);

    return (
        <CartItemView
            classes={classes}
            id={id}
            count={count}
            name={'wef'}
            image={image}
            price={price}
            onPlus={onPlus}
            onMinus={onMinus}
            onRemove={onRemove}
            description={options?.[0].name}
            product={product}
        />
    );
};
