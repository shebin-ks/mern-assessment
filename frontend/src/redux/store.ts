import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./features/products/productSlice"
import purchasesReducer from "./features/purchase/purchaseSlice"
import dashboardRouter from "./features/dashboard/dashboardSlice"
import salesRouter from "./features/sales/saleSlice"


export const store = configureStore({
    reducer: {
        products: productsReducer,
        purchases: purchasesReducer,
        dashboard: dashboardRouter,
        sales: salesRouter,
    }
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch