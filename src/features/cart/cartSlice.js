import {createSlice} from '@reduxjs/toolkit'
import {cartApi} from "../../service/cart";

const initialState = {
    data: null,
    open: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.data = [];
        },
        setCart: (state, action) => {
            state.data = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        }

    },
})

export const addToCartAsync = (foodPropertyId, options = []) => (dispatch) => {
    cartApi.addToCart({foodPropertyId, quantity: 1, options})
        .then(response => {
            cartApi.getCart().then(response => {
                dispatch(setCart(response.data.cart));
            })
        })
}

export const getCartAsync = () => dispatch => {
    cartApi.getCart().then(response => {
        dispatch(setCart(response.data.cart));
    })
}

export const {addToCart, setCart, setOpen} = cartSlice.actions

export const selectCart = state => state.cart.data;
export const selectOpenedCart = state => state.cart.open;

export default cartSlice.reducer
