import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchTableApi = createApi({
    reducerPath: "searchTableApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getTableData: builder.query({
            query: ({ query, page, pageSize, sortConfig }) => ({
                url: "/posts",
                params: {
                    q: query,
                    _page: page,
                    _limit: pageSize,
                    _sort: sortConfig.key,
                    _order: sortConfig.direction,
                },
            }),
            // Transform response to match your UI needs
            transformResponse: (response, meta) => {
                const totalCount = Number(meta?.response?.headers.get("X-Total-Count") || 100);
                return { results: response, total: totalCount };
            },
        }),
    }),
});

export const { useGetTableDataQuery } = searchTableApi;
