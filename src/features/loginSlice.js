import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    showModal: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setShowLoginModal: (state, action) => {
            state.showModal = action.payload;
        }

    },
})


// Action creators are generated for each case reducer function
export const {setShowLoginModal} = loginSlice.actions

export const selectShowLoginModal = state => state.login.showModal;

export default loginSlice.reducer
