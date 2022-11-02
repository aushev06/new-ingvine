import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../../core/axios";
import {axiosBaseQuery} from "./category";

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: axiosBaseQuery({baseUrl: `${BASE_URL}/api/cart`}),
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: ({...post}) => {
                return ({url: `?_token=${localStorage.getItem('token')}`, method: 'POST', data: post})
            },
        }),
        setQuantity: builder.mutation({
            query: (post) => {
                return ({url: `/cart-property`, method: 'PUT', data: {quantitiesInfo: post}})
            },
        }),
    }),
})

export const {useAddToCartMutation, useSetQuantityMutation} = cartApi
