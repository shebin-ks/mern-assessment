import { createSlice } from "@reduxjs/toolkit";
import type { Sale } from "./saleTypes";
import { fetchSales } from "./saleThunks";


interface salesState {
    sales: Sale[] | null;
    loading: boolean;
    success: boolean | null;
    message: string | null;
}


const initialState: salesState = {
    sales: null,
    loading: false,
    success: null,
    message: null,
}

const salesReducer = createSlice({
    name: 'sales',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchSales.pending, (state) => {
                state.loading = true;
                state.success = null;
            })
            .addCase(fetchSales.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.sales = action.payload.sales
            })
            .addCase(fetchSales.rejected, (state, action) => {
                state.loading = false;
                state.success = false;

                state.message = action.payload as string || "Failed to fetch products"
            })
    }
})



export default salesReducer.reducer