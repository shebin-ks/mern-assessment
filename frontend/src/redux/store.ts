import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./features/products/productSlice"
import purchasesReducer from "./features/purchase/purchaseSlice"


export const store = configureStore({
    reducer: {
        products: productsReducer,
        purchases: purchasesReducer
    }
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch