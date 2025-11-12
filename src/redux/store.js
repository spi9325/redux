import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './slice'
import postsReducer from "./fetchProductSlice"

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    post:postsReducer
  },
})