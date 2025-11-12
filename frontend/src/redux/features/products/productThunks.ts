import { ProductApi } from "../../../api/endpoints/productApi";
import type { fetchProductsResponse } from "./productTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk<
    fetchProductsResponse,
    void,
    { rejectValue: string }
>(
    "cars/fetch",
    async (_, thunkApi) => {
        try {

            return await ProductApi.fetchProducts();

        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)

        }
    }
)