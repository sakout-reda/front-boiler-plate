import '../styles/DataTable.css'
import {SortableHeader} from "./SortableHeader.jsx";
export const DataTable = ({ data }) => {
    return (
        <div className="my-4">
            <div className="table-responsive shadow-lg rounded-3 overflow-hidden">
                <table className="table table-borderless table-hover mb-0">
                    <thead className="thead-primary">
                    {/*<tr>*/}
                    {/*    <th scope="col" className="ps-4 py-3 text-white bg-primary bg-gradient">*/}
                    {/*        <span className="d-inline-block animate-slide-in">ID</span>*/}
                    {/*    </th>*/}
                    {/*    <th scope="col" className="py-3 text-white bg-primary bg-gradient">*/}
                    {/*        <span className="d-inline-block animate-slide-in" style={{ animationDelay: '0.1s' }}>Title</span>*/}
                    {/*    </th>*/}
                    {/*    <th scope="col" className="pe-4 py-3 text-white bg-primary bg-gradient">*/}
                    {/*        <span className="d-inline-block animate-slide-in" style={{ animationDelay: '0.2s' }}>Body</span>*/}
                    {/*    </th>*/}
                    {/*</tr>*/}
                    <tr>
                        <SortableHeader columnKey="id" label="ID" />
                        <SortableHeader columnKey="title" label="Title" />
                        <SortableHeader columnKey="body" label="Body" />
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={item.id}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <td className="ps-4 py-3 border-bottom">{item.id}</td>
                            <td className="py-3 border-bottom fw-semibold text-primary">
                                {item.title}
                            </td>
                            <td className="pe-4 py-3 border-bottom text-muted">
                                {item.body}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};
