import React from 'react';

import {CartItemView} from './View';
import {useSetQuantityMutation} from "../../redux/api/cart";
import {useDispatch} from "react-redux";
import {getCartAsync} from "../../features/cart/cartSlice";

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
        handleClickRemove,
        quantity,
        sum
    }
) => {
    const dispatch = useDispatch();
    const [
        setQuantity,
    ] = useSetQuantityMutation()

    const onMinus = async () => {
        await setQuantity([{id, quantity: quantity - 1}])
        dispatch(await getCartAsync())

    };
    const onPlus = async () => {
        await setQuantity([{id, quantity: quantity + 1}])
        dispatch(await getCartAsync())
    };

    const onRemove = () => handleClickRemove(id);

    return (
        <CartItemView
            classes={classes}
            id={id}
            count={quantity}
            name={name}
            image={image}
            price={sum}
            onPlus={onPlus}
            onMinus={onMinus}
            onRemove={onRemove}
            description={''}
            options={options}
        />
    );
};
