import { PurchaseApi } from "../../../api/endpoints/purchaseApi";
import type { fetchPurchasesResponse } from "./purchaseTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchPurchase = createAsyncThunk<
    fetchPurchasesResponse,
    void,
    { rejectValue: string }
>(
    "purchase/fetch",
    async (_, thunkApi) => {
        try {

            return await PurchaseApi.fetchPurchases();

        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)

        }
    }
)