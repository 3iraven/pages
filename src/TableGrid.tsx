import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

type DataTableProps = {
  columns: GridColDef[];
  rows: GridRowsProp;
  pageSize?: number;
};

const DataTable: React.FC<DataTableProps> = ({ columns, rows, pageSize = 5 }) => {
  return (
    <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>

      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={pageSize}
        checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;

