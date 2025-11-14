import { createSlice, } from "@reduxjs/toolkit";
import type { Dashboard, } from "./dashbaordTypes";
import { fetchDashboard, } from "./dashboardThunks";


interface dashboardState {
    dashboard: Dashboard | null;
    loading: boolean;
    success: boolean | null;
    message: string | null;
}


const initialState: dashboardState = {
    dashboard: null,
    loading: false,
    success: null,
    message: null,
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchDashboard.pending, (state) => {
                state.loading = true;
                state.success = null;
            })
            .addCase(fetchDashboard.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.dashboard = action.payload.dashboard
            })
            .addCase(fetchDashboard.rejected, (state, action) => {
                state.loading = false;
                state.success = false;

                state.message = action.payload as string || "Failed to fetch dashboard"
            })
    }
})



export default dashboardSlice.reducer