import React from "react";

export const PaginationControls = ({
                                       currentPage,
                                       pageSize,
                                       totalItems,
                                       onPageChange,
                                       onPageSizeChange,
                                   }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 3; // Number of pages to show around current page
        const ellipsis = <span className="px-2">...</span>;

        // Always show first page
        pages.push(
            <button
                key={1}
                className={`btn ${currentPage === 1 ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => onPageChange(1)}
            >
                1
            </button>
        );

        // Show previous page button if not on first page
        if (currentPage > 1) {
            pages.push(
                <button
                    key="prev"
                    className="btn btn-outline-primary mx-1"
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    &lt;
                </button>
            );
        }

        // Show pages around current page
        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        // Add ellipsis if there's a gap between first page and current page range
        if (startPage > 2) {
            pages.push(ellipsis);
        }

        // Add page numbers around current page
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={`btn mx-1 ${currentPage === i ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }

        // Add ellipsis if there's a gap between current page range and last page
        if (endPage < totalPages - 1) {
            pages.push(ellipsis);
        }

        // Always show last page if there's more than one page
        if (totalPages > 1) {
            pages.push(
                <button
                    key={totalPages}
                    className={`btn ${currentPage === totalPages ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        // Show next page button if not on last page
        if (currentPage < totalPages) {
            pages.push(
                <button
                    key="next"
                    className="btn btn-outline-primary mx-1"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    &gt;
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 my-4">
            <div className="d-flex align-items-center gap-2">
                <span className="me-2">Page:</span>
                <div className="btn-group">
                    <button
                        className="btn btn-outline-primary"
                        disabled={currentPage <= 1}
                        onClick={() => onPageChange(1)}
                    >
                        First
                    </button>
                    {renderPageNumbers()}
                    <button
                        className="btn btn-outline-primary"
                        disabled={currentPage >= totalPages}
                        onClick={() => onPageChange(totalPages)}
                    >
                        Last
                    </button>
                </div>
            </div>

            <div className="d-flex align-items-center gap-2">
                <span className="me-2">Show:</span>
                <select
                    className="form-select form-select-sm"
                    style={{ width: "auto" }}
                    value={pageSize}
                    onChange={(e) => onPageSizeChange(Number(e.target.value))}
                >
                    {[10, 50, 100].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
                <span>items per page</span>
            </div>
        </div>
    );
};
