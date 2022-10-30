import {createSlice} from '@reduxjs/toolkit'
import {cartApi} from "../../service/cart";
import {getFoods} from "../../service/foods";

const initialState = {
    data: null
}

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        setFoods: (state, action) => {
            state.data = action.payload;
        }

    },
})

export const getFoodsAsync = () => (dispatch) => {
    getFoods().then((response) => {
        dispatch(setFoods(response.data))
    })
}

// Action creators are generated for each case reducer function
export const {setFoods} = foodSlice.actions

export const selectCategories = state => state.food.data;

export default foodSlice.reducer
