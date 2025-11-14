import { createAsyncThunk } from "@reduxjs/toolkit";
import type { fetchDashbaordResponse } from "./dashbaordTypes";
import { DashboardApi } from "../../../api/endpoints/dashboardApi";



export const fetchDashboard = createAsyncThunk<
    fetchDashbaordResponse,
    void,
    { rejectValue: string }
>(
    "dashboard/fetch",
    async (_, thunkApi) => {
        try {

            return await DashboardApi.fetchDashboardData();

        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)

        }
    }
)