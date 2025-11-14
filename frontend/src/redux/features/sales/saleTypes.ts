import type { BaseResponse } from "../../../utils/commonTypes/baseResponse";
import type { Product } from "../products/productTypes";

export interface Sale {
    saleId: string;
    customerNumber: string | null;
    salePrice: string;
    discount: number;
    createdAt: string;
    saleItems: SaleItem[]

}

export interface SaleItem {
    saleItemId: string;
    quantity: number;
    saleItemPrice: string
    product:Product

}


// -------- RESPONSE -------

export interface fetchSalesResponse extends BaseResponse {
    sales: Sale[]
}