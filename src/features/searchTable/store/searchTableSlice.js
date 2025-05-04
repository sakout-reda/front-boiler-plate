import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
    searchParams: {
        query: "",
        page: 1,
        pageSize: 10,
        sortConfig: {
            key: 'id',
            direction: 'asc',
        },
    },
    totalResults: 0,
};

const searchTableSlice = createSlice({
    name: "searchTable",
    initialState,
    reducers: {
        setSearchParams: (state, action) => {
            state.searchParams = { ...state.searchParams, ...action.payload };
        },
        setSortConfig: (state, action) => {
            state.sortConfig = action.payload;
        },
        resetSearch: (state) => {
            state.searchParams = initialState.searchParams;
        },
    },
});

// Export the reducer as default
export const searchTableReducer = searchTableSlice.reducer;

// Export actions
export const { setSearchParams, resetSearch, setSortConfig } = searchTableSlice.actions;
