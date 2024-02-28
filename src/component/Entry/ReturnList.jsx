import React, { useRef, useState } from "react";
import SearchBar from "../Navbar/SearchBar";
import NavigationBar from "../Navbar/NavigationBar";
import useExcelExport from "../../utils/Excel";
import usePDFGenerator from "../../utils/Pdf";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function ReturnList() {
  const componentRef = useRef();
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  const exportToExcel = useExcelExport(componentRef, 'Return_List', [7]);
  const generatePDF = usePDFGenerator(componentRef, 'Return_List', [7]);

  const handleDateRangeChange = (dates) => {
    !dates ? setSelectedDateRange([]) : setSelectedDateRange(dates);
  };

  // Filter data based on selected date range
  const filteredData = selectedDateRange.length === 0 ?
    data : data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= selectedDateRange[0] && itemDate <= selectedDateRange[1];
    });

  return (
    <div className="mx-auto px-2 overflow-auto my-0">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default mb-0 mt-1">
        <NavigationBar />
        <SearchBar show="Return" />
      </div>

      <div className="overflow-x-auto min-w-full">
        <div className="mb-3 mt-0 mx-1 flex justify-between">
          <RangePicker onChange={handleDateRangeChange} />
          <div className="align-end">
          <button onClick={generatePDF} className="bg-lime-500 text-white border-md rounded-lg p-1 px-3 py-1.5 cursor-pointer text-xs mx-1">Pdf</button>
          <button onClick={exportToExcel}  className="bg-lime-500 text-white border-md rounded-lg p-1 px-3 py-1.5 cursor-pointer text-xs mx-1">Excel</button>
          </div>
        </div>
        <div className="overflow-y-auto h-[480px]" >
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse"  id="your-table-id" ref={componentRef}>
            <thead className="sticky top-0 text-xs text-white font-inter bg-custom-black text-center z-10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4">Date</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Vendor</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Invoice number</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Return Amount</th>
                <th className="px-2 py-2 md:px-4 md:py-4">VAT</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Remarks</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Photo</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="even:bg-default odd:bg-[#E9E9E9] text-center font-inter"
                >
                  <td className="px-4 py-2 text-black">{item.date}</td>
                  <td className="px-4 py-2 text-black">{item.supplier}</td>
                  <td className="px-4 py-2 text-black">{item.invoiceNumber}</td>
                  <td className="px-4 py-2 text-black">{item.returnAmount}</td>
                  <td className="px-4 py-2 text-black">{item.vat}</td>
                  <td className="px-4 py-2 text-black">{item.remarks}</td>
                  <td className="px-4 py-2 text-black flex justify-center items-center">
                    <img
                      className="h-8 w-16 object-contain"
                      src={item.image}
                      alt="food icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReturnList;





const data = [
  {
    id: 1,
    date: "02/01/29",
    supplier: "343434234",
    invoiceNumber: "3432343342",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "02/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "02/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "02/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "02/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "10/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "12/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "01/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "02/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "04/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    date: "06/01/24",
    supplier: "342323442",
    invoiceNumber: "3423234424",
    returnAmount: "1000.000",
    vat: "100.000",
    remarks: "Main kitchen",
    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  

];