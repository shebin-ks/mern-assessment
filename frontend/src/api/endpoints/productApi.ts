import type { fetchProductsResponse, Product } from "../../redux/features/products/productTypes";
import type { BaseResponse } from "../../utils/commonTypes/baseResponse";
import { API_ROUTES } from "../core/apiRoutes";
import axiosInstance from "../core/axiosInstance";

export class ProductApi {

    static fetchProducts = async (): Promise<fetchProductsResponse> => {
        try {
            
            const response = await axiosInstance.get(API_ROUTES.PRODUCT.GET_ALL_PRODUCTS);

            console.log(response);
            
            return response.data;
        } catch (error: any) {
            console.log(error);
            
            throw new Error(error.response?.data?.message || 'Failed to fetch products');
        }
    };

    static createProduct = async (payload: Product): Promise<BaseResponse> => {



        try {

            const response = await axiosInstance.post(API_ROUTES.PRODUCT.ADD_PRODUCT, payload);

            return response.data

        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to add products')
        }
    }
}
