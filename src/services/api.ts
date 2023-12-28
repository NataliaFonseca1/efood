import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type productCheckout = {
  id: number
  price: number
}
type PurchasePayload = {
  products: productCheckout[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      addressNumber: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}
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
    }),
    getBanner: builder.query<Product, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})
export const {
  useGetRestaurantsQuery,
  useGetProductsQuery,
  useGetBannerQuery,
  usePurchaseMutation
} = api
export default api
