import {configureStore} from "@reduxjs/toolkit";
import {searchTableApi} from "./features/searchTable/store/searchTableApi";
import {searchTableReducer} from "./features/searchTable/store/searchTableSlice";

export const store = configureStore({
    reducer: {
        searchTable: searchTableReducer,
        [searchTableApi.reducerPath]: searchTableApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchTableApi.middleware),
});
