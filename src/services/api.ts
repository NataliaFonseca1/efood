import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Product[], void>({
      query: () => 'restaurantes'
    }),
    getProducts: builder.query<Product, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})
export const { useGetRestaurantsQuery, useGetProductsQuery } = api
export default api
