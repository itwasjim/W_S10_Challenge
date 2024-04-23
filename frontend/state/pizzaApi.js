import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const initialState = {
    fullName: '',
    size: '',
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
}

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/'}),
    tagTypes: ['Orders'],
    initialState: initialState,
    endpoints: builder => ({ 
        getHistory: builder.query({
            query: () => 'history',
            providesTags: ['Orders'],
        }),
        postOrder: builder.mutation({
            query: postOrder => ({
                url: 'order',
                method: 'POST',
                body: postOrder
            }),
            invalidatesTags: ['Orders'],
        }),
    })
})

export const {
    useGetHistoryQuery, usePostOrderMutation, 
} = pizzaApi