import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice";
import { categoryApi } from "../redux/api/category";
import {setupListeners} from "@reduxjs/toolkit/query/react";

export const store = configureStore({
    devTools: true,
    reducer: {
        cart: cartReducer,
        [categoryApi.reducerPath]: categoryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware),
})

setupListeners(store.dispatch)
