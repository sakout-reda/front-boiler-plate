import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SearchForm = ({initialValues, onSearch, onReset}) => {
    const [filters, setFilters] = React.useState({
        id: initialValues.id || "",
        firstName: initialValues.firstName || "",
        lastName: initialValues.lastName || "",
        startDate: initialValues.startDate || null,
        endDate: initialValues.endDate || null
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({...prev, [name]: value}));
    };

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setFilters(prev => ({
            ...prev,
            startDate: start,
            endDate: end
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            ...filters,
            startDate: filters.startDate?.toISOString().split('T')[0] || "",
            endDate: filters.endDate?.toISOString().split('T')[0] || ""
        });
    };

    const handleReset = () => {
        setFilters({
            id: "",
            firstName: "",
            lastName: "",
            startDate: null,
            endDate: null
        });
        onReset();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
            <div className="row g-3">
                <div className="col-md-2">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        value={filters.id}
                        onChange={handleChange}
                        placeholder="Search ID"
                    />
                </div>

                <div className="col-md-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={filters.firstName}
                        onChange={handleChange}
                        placeholder="Search first name"
                    />
                </div>

                <div className="col-md-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={filters.lastName}
                        onChange={handleChange}
                        placeholder="Search last name"
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="dateRange" className="form-label">Date Range</label>
                    <DatePicker
                        selectsRange
                        startDate={filters.startDate}
                        endDate={filters.endDate}
                        onChange={handleDateChange}
                        isClearable
                        placeholderText="Select date range"
                        className="form-control"
                        id="dateRange"
                    />
                </div>

                <div className="col-md-12 d-flex justify-content-end gap-2 mt-3">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleReset}
                    >
                        <i className="bi bi-arrow-counterclockwise me-2"></i>
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        <i className="bi bi-search me-2"></i>
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};
