import type { AddPurchasePayload, fetchPurchasesResponse } from "../../redux/features/purchase/purchaseTypes";
import type { BaseResponse } from "../../utils/commonTypes/baseResponse";
import { API_ROUTES } from "../core/apiRoutes";
import axiosInstance from "../core/axiosInstance";

export class PurchaseApi {

    static fetchPurchases = async (): Promise<fetchPurchasesResponse> => {
        try {
            
            const response = await axiosInstance.get(API_ROUTES.PURCHASE.GET_ALL_PURCHASE);

            
            return response.data;
        } catch (error: any) {
            console.log(error);
            
            throw new Error(error.response?.data?.message || 'Failed to fetch purchases');
        }
    };

    static createPurchase = async (payload: AddPurchasePayload): Promise<BaseResponse> => {

        try {

            const response = await axiosInstance.post(API_ROUTES.PURCHASE.ADD_PURCHASE, payload);

            return response.data

        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to add purchase')
        }
    }
}
