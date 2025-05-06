import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import WishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/cartSlice'


const cartStore= configureStore({
    reducer:{
             productReducers : productSlice,
             WishlistReducer : WishlistSlice,
             cartReducer : cartSlice
    }
})

export default cartStore