import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const rowData = [
  { asin: "B000123", buyBox: 23.99, roi: 43 },
  { asin: "B000456", buyBox: 17.49, roi: 22 },
  { asin: "B000789", buyBox: 31.25, roi: -5 }
];

export default function DataGrid() {
  const columnDefs = useMemo(() => [
    { field: "asin", headerName: "ASIN", sortable: true, filter: true },
    { field: "buyBox", headerName: "Buy Box", sortable: true, filter: true, valueFormatter: p => `$${p.value.toFixed(2)}` },
    {
      field: "roi",
      headerName: "ROI",
      sortable: true,
      filter: true,
      cellStyle: params => ({
        color: params.value > 0 ? "green" : "red",
        fontWeight: "bold"
      }),
      valueFormatter: p => `${p.value}%`
    }
  ], []);

  return (
    <div className="ag-theme-alpine rounded shadow bg-white p-2" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ flex: 1, minWidth: 100, resizable: true }}
      />
    </div>
  );
}
