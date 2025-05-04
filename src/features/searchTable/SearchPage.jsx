import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {resetSearch, setSearchParams} from "./store/searchTableSlice.js";
import {useGetTableDataQuery} from "./store/searchTableApi.js";
import {SearchForm} from "./components/SearchForm.jsx";
import {LoadingIndicator} from "./components/LoadingIndicator.jsx";
import {DataTable} from "./components/DataTable.jsx";
import {PaginationControls} from "./components/PaginationControls.jsx";

export const SearchPage = () => {
    const dispatch = useDispatch();
    const { searchParams, sortConfig } = useSelector((state) => state.searchTable);
    const { data, isLoading, isError, error } = useGetTableDataQuery({ ...searchParams, sortConfig });

    const handleSearch = (newParams) => {
        dispatch(setSearchParams({ ...newParams, page: 1 }));
    };

    const handlePageChange = (page) => {
        dispatch(setSearchParams({ ...searchParams, page }));
    };

    const handlePageSizeChange = (pageSize) => {
        dispatch(setSearchParams({ ...searchParams, pageSize, page: 1 }));
    };

    const handleReset = () => {
        dispatch(resetSearch());
    };

    return (
        <div className="container-fluid mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Search Filters</h5>
                </div>
                <div className="card-body">
                    <SearchForm
                        initialValues={searchParams}
                        onSearch={handleSearch}
                        onReset={handleReset}
                    />
                </div>
            </div>

            <div className="card shadow-sm mt-4">
                <div className="card-body">
                    {isLoading ? (
                        <LoadingIndicator />
                    ) : isError ? (
                        <div className="alert alert-danger">
                            Error loading data: {error?.data?.message || error?.message || "Unknown error"}
                        </div>
                    ) : (
                        <>
                            <div className="table-responsive">
                                <DataTable
                                    data={data?.results || []}
                                    isLoading={isLoading}
                                />
                            </div>

                            {data?.results?.length > 0 && (
                                <div className="mt-3">
                                    <PaginationControls
                                        currentPage={searchParams.page || 1}
                                        pageSize={searchParams.pageSize || 10}
                                        totalItems={data?.total || 0}
                                        onPageChange={handlePageChange}
                                        onPageSizeChange={handlePageSizeChange}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
