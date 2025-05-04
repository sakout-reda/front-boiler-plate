export const LoadingIndicator = () => {
    return (
        <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-1/12"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/12"></div>
                    <div className="h-4 bg-gray-200 rounded w-7/12"></div>
                </div>
            ))}
        </div>
    );
};
