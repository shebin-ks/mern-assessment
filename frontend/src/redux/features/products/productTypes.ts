import type { BaseResponse } from "../../../utils/commonTypes/baseResponse";

export interface Product {
    productId: string;
    productName: string;
    sku: string;
    currentStock: number;
    price: number;
    taxPercentage: number;
    createdAt: string

}



// -------- RESPONSE -------

export interface fetchProductsResponse extends BaseResponse {
    products: Product[]
}