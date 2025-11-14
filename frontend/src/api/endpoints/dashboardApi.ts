
import { API_ROUTES } from "../core/apiRoutes";
import axiosInstance from "../core/axiosInstance";

export class DashboardApi {

    static fetchDashboardData = async (): Promise<any> => {
        try {
            
            const response = await axiosInstance.get(API_ROUTES.DASHBOARD.GET_DASHBOARD_DATA);

            console.log(response);
            
            return response.data;
        } catch (error: any) {
            console.log(error);
            
            throw new Error(error.response?.data?.message || 'Failed to fetch dashbaord data');
        }
    };

}
