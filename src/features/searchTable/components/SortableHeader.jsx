import { useDispatch, useSelector } from 'react-redux';
import { setSortConfig } from '../store/searchTableSlice';

export const SortableHeader = ({ columnKey, label }) => {
    const dispatch = useDispatch();
    const sortConfig = useSelector((state) => state.searchTable.sortConfig);

    const isActive = sortConfig.key === columnKey;
    const sortDirection = isActive ? sortConfig.direction : null;

    const handleSort = () => {
        let direction = 'asc';
        if (isActive && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        dispatch(setSortConfig({ key: columnKey, direction }));
    };

    return (
        <th
            className="px-4 py-3 cursor-pointer select-none"
            onClick={handleSort}
        >
            <div className="flex items-center gap-1">
                <span>{label}</span>
                {isActive && (
                    <span className="text-sm">
            {sortDirection === 'asc' ? '↑' : '↓'}
          </span>
                )}
                {!isActive && (
                    <span className="text-sm text-gray-400 opacity-0 hover:opacity-100">↕</span>
                )}
            </div>
        </th>
    );
};
