import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL} from "../../core/axios";


export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api/foods`}),
    endpoints: (builder) => ({
        getCategories: '/',
    }),
})

console.log(categoryApi);

export const { useGetCategoriesQuery } = categoryApi
