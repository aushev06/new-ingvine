import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "../../core/axios";
import {axiosBaseQuery} from "./category";

export const authApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: axiosBaseQuery({baseUrl: `${BASE_URL}/auth/login`}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                return ({url: ``, method: 'POST', data})
            },
        }),
    }),
})

export const {useLoginMutation} = authApi
