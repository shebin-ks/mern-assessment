import type { BaseResponse } from "../../../utils/commonTypes/baseResponse";

export interface Dashboard {

    totalSaleAmount: number,
    totalSales: number
}



// -------- RESPONSE -------

export interface fetchDashbaordResponse extends BaseResponse {
    dashboard: Dashboard
}