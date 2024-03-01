import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const useExcelExport = (tableRef, fileName, columnsToRemove = []) => {
  const exportToExcel = () => {
    if (!tableRef.current) {
      console.error('Table reference is missing.');
      return;
    }

    // Clone the table to manipulate it without affecting the UI
    const tableClone = tableRef.current.cloneNode(true);

    // Remove the specified columns
    columnsToRemove.reverse().forEach(columnToRemove => {
      const thToRemove = tableClone.querySelector(`th:nth-child(${columnToRemove})`);
      const tdToRemove = tableClone.querySelectorAll(`td:nth-child(${columnToRemove})`);

      thToRemove?.remove();
      tdToRemove.forEach(td => td.remove());
    });

    // Convert the modified table to a worksheet
    const worksheet = XLSX.utils.table_to_sheet(tableClone);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Convert the workbook to an Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Create a Blob from the Excel buffer and save it
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, `${fileName}.xlsx`);
  };

  return exportToExcel;
};

export default useExcelExport;
