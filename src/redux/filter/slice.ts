import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { FilterSliceState } from './types'

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 'all',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<string>) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.categoryId = action.payload.categoryId
            } else {
                state.categoryId = 'all'
            }
        }
    }
})

export const { setCategoryId, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer
