import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./productTypes";
import { fetchProducts } from "./productThunks";


interface productsState {
    products: Product[] | null;
    loading: boolean;
    success: boolean | null;
    message: string | null;
    searchResult: Product[] | null
}


const initialState: productsState = {
    products: null,
    loading: false,
    success: null,
    message: null,
    searchResult: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        searchProduct(state, action: PayloadAction<string>) {
            if (state.products) {
                const lowerCaseSearchTerm = action.payload.toLowerCase();
                state.searchResult = state.products.filter(prod =>
                    prod.productName.toLowerCase().includes(lowerCaseSearchTerm)
                );
            }

        }
    },
    extraReducers: (builder) => {
        builder

            // ------------ LOGIN ------------
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.success = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.products = action.payload.products
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.success = false;

                state.message = action.payload as string || "Failed to fetch products"
            })
    }
})


export const { searchProduct } = productsSlice.actions

export default productsSlice.reducer