import { Link } from "react-router-dom";
import { useState } from "react";

// Material UI
import { DataGrid } from "@mui/x-data-grid";

// Temporary data
import {
  userColumns as columns,
  userRows as rows,
} from "../../datatablesource";

// Style
import "./style.scss";

const Datatable = () => {
  const [data, setData] = useState(rows);

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: params => (
        <div className="cell-actions">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="cell-action btn-view">View</div>
          </Link>
          <div
            className="cell-action btn-delete"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <div className="datatable-title">
        Add New User{" "}
        <Link to="/users/new" className="link">
          <strong>+</strong> Add New
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
