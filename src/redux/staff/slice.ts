import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff, StaffSliceState, Status } from "./types";

import { fetchStaff } from "./asyncAction";

const initialState: StaffSliceState = {
    items: [],
    status: Status.LOADING,
};

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Staff[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStaff.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(fetchStaff.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchStaff.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
});

export const { setItems } = staffSlice.actions;

export default staffSlice.reducer;
