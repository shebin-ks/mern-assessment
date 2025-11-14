import { createSlice } from "@reduxjs/toolkit";
import type { Purchase } from "./purchaseTypes";
import { fetchPurchase } from "./purchaseThunks";


interface purchasesState {
    purchases: Purchase[] | null;
    loading: boolean;
    success: boolean | null;
    message: string | null;
}


const initialState: purchasesState = {
    purchases: null,
    loading: false,
    success: null,
    message: null,
}

const purchasesSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchPurchase.pending, (state) => {
                state.loading = true;
                state.success = null;
            })
            .addCase(fetchPurchase.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.purchases = action.payload.purchases
            })
            .addCase(fetchPurchase.rejected, (state, action) => {
                state.loading = false;
                state.success = false;

                state.message = action.payload as string || "Failed to fetch purchases"
            })
    }
})



export default purchasesSlice.reducer