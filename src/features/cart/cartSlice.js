import {createSlice} from '@reduxjs/toolkit'
import {cartApi} from "../../service/cart";

const initialState = {
    data: null
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

// Action creators are generated for each case reducer function
export const {addToCart, setCart} = cartSlice.actions

export const selectCart = state => state.cart.data;

export default cartSlice.reducer
