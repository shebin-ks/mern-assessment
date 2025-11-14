import { createAsyncThunk } from "@reduxjs/toolkit";
import type { fetchSalesResponse } from "./saleTypes";
import { SalesApi } from "../../../api/endpoints/salesApi";



export const fetchSales = createAsyncThunk<
    fetchSalesResponse,
    void,
    { rejectValue: string }
>(
    "sales/fetch",
    async (_, thunkApi) => {
        try {

            return await SalesApi.fetchSales();

        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)

        }
    }
)