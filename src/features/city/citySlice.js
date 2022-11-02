import {createSlice} from '@reduxjs/toolkit'

export const cities = [
    {
        name: 'Магас',
        slug: 'magas',
    },
    {
        name: 'Назрань',
        slug: 'nazran',
    },
    {
        name: 'Карабулак',
        slug: 'karabulak',
    },
    {
        name: 'Малгобек',
        slug: 'malgobek',
    },
    {
        name: 'Экажево',
        slug: 'ekazhevo',
    },
]


const initialState = {
    cities,
    selectedCity: localStorage.getItem('city') || '',
    showModal: false,
}

export const citySlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload;
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload;
        }

    },
})


// Action creators are generated for each case reducer function
export const {setSelectedCity, setShowModal} = citySlice.actions

export const selectSelectedCity = state => state.city.selectedCity;
export const selectCities = state => state.city.cities;
export const selectShowModal = state => state.city.showModal;

export default citySlice.reducer
