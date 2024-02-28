import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const usePDFGenerator = (tableRef, fileName, columnsToRemove = []) => {
  const generatePDF = () => {
    if (!tableRef.current) {
      console.error('Table reference is missing.');
      return;
    }

    const input = tableRef.current;
    const pdf = new jsPDF(); // Creating jsPDF instance
    pdf.setFontSize(15);
    pdf.text("Supplier List Report", 105, 10, null, null, "center");
    const table = input.cloneNode(true);    // Clone the table node

    // Remove specified columns
    columnsToRemove.forEach(columnToRemove => {
      const thToRemove = table.querySelector(`th:nth-child(${columnToRemove})`);
      const tdToRemove = table.querySelectorAll(`td:nth-child(${columnToRemove})`);
      thToRemove?.remove();
      tdToRemove.forEach(td => td.remove());
    });

    pdf.autoTable({ html: table, styles: { halign: 'center', valign: 'middle' } });
  
    pdf.save(`${fileName}.pdf`);
  };

  return generatePDF;
};

export default usePDFGenerator;
