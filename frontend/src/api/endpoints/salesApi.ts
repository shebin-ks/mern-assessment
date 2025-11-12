import { API_ROUTES } from "../core/apiRoutes";
import axiosInstance from "../core/axiosInstance";





export class SalesApi {


    static createSale = async (payload: any): Promise<any> => {

        try {
            console.log(payload);

            const response = await axiosInstance.post(API_ROUTES.SALE.CREATE_SALE, payload);

            return response.data

        } catch (error: any) {
            
            throw new Error(error.response?.data?.message || 'Failed to add products')
        }
    }
}
