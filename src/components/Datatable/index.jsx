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
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => (
        <div className="cell-actions">
          <div className="cell-action btn-view">View</div>
          <div className="cell-action btn-delete">Delete</div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
