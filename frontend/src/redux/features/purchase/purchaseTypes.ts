import type { BaseResponse } from "../../../utils/commonTypes/baseResponse";
import type { Product } from "../products/productTypes";

export interface Purchase {
    purchaseId: string;
    quantity: number;
    purchasePrice: number;
    purchaseDate: string;
    product: Product

}


// ------- PAYLOAD -------- 

export interface AddPurchasePayload {
    productId: string;
    quantity: number;
    purchasePrice: number;
    purchaseDate: string;
}

// -------- RESPONSE -------

export interface fetchPurchasesResponse extends BaseResponse {
    purchases: Purchase[]
}