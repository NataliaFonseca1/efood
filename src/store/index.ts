import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cart from './reducers/cart'
import checkoutReducer from './reducers/checkout'

export const store = configureStore({
  reducer: {
    cart: cart,
    checkout: checkoutReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
