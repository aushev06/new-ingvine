import React, {useState} from "react";
import Mobile from './Mobile';
import Desktop from './Desktop';
import './index.css';
import {useQuery} from "@apollo/client";
import { GET_CATEGORIES_WITH_PRODUCTS } from "../../queries";
import {addToCart} from "../../services/api/cartApi";

export const Foods = ({ categories }) => {
    const handleAddToCart = async (food, foodPropertyId) => {
        await addToCart('test', food.id, 1, [foodPropertyId]);
    };

    return (
        <div className={'content grey'}>
            {(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
                ? <Mobile categories={categories} selectFood={handleAddToCart}/>
                : <Desktop categories={categories} selectFood={handleAddToCart}/>
            }
        </div>
    )
}
