import React, { useEffect, useRef, useState } from "react";
import OutStandModal from "./OutStandModal";
import { DatePicker } from "antd";
import { MdPictureAsPdf, MdInsertDriveFile } from 'react-icons/md';
import DetailsCount from "../DetailsCount";
import useExcelExport from "../../utils/Excel";
import usePDFGenerator from "../../utils/Pdf";
import { fetchOutstandingData } from "../../services/Api";
const { RangePicker } = DatePicker;

function OutstandinTable({selectedvalue}) {
  const componentRef = useRef();
  const [data, SetData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); //modale opening
  const [modalData, setModalData] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  const exportToExcel = useExcelExport(componentRef, 'Return_List', []);
  const generatePDF = usePDFGenerator(componentRef, 'Return_List', []);

  useEffect(() => {
    SetData(fetchOutstandingData());
  }, []);

  const handleDateRangeChange = (dates) => {
    !dates ? setSelectedDateRange([]) : setSelectedDateRange(dates);
  };

// Filter data based on selected date range and supplier
const filteredData = data.filter(item => {
  const itemDate = new Date(item.date);
  const isInDateRange = selectedDateRange.length === 0 ||
    (itemDate >= selectedDateRange[0] && itemDate <= selectedDateRange[1]);
  const isSelectedSupplier = !selectedvalue || item.supplier === selectedvalue;
  return isInDateRange && isSelectedSupplier;
});


  return (
    <>
      <div className="overflow-x-auto min-w-full">
      <div className="mb-3 mt-0 mx-1 flex justify-between items-center">
      <RangePicker onChange={handleDateRangeChange} />
      <div className="align-end flex items-center">
        <button onClick={generatePDF} className="flex items-center bg-white text-black border-md border border-gray-300 rounded-lg p-1 px-3 py-2 cursor-pointer text-xs mx-1">
          PDF <MdPictureAsPdf className="ml-1 text-lg" />
        </button>
        <button onClick={exportToExcel} className="flex items-center bg-white text-black border-md border border-gray-300 rounded-lg p-1 px-3 py-2 cursor-pointer text-xs mx-1">
          Excel  <MdInsertDriveFile className="ml-1 text-lg" />
        </button>
      </div>
     </div>
        <div className="overflow-y-auto h-[390px]">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse"  ref={componentRef}>
            <thead className="sticky  top-0 text-xs text-white font-inter bg-custom-black text-center z-10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4">Date</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Credit date</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Vendor</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Purchase Number</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Invoice number</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Amount</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Amount paid</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Balance</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="even:bg-default odd:bg-[#E9E9E9]  text-center font-inter" >
                  <td className="px-4 py-4 text-black">{item.date}</td>
                  <td className="px-4 py-4 text-black">{item.creditDate}</td>
                  <td className="px-4 py-4 text-black">{item.supplier}</td>
                  <td className="px-4 py-4 text-black">{item.purchaseNumber}</td>
                  <td className="px-4 py-4 text-black">{item.invoiceNumber}</td>
                  <td className="px-4 py-4 text-black">{item.amount}</td>
                  <td className="px-4 py-4 text-black">{item.amountPaid}</td>
                  <td className="px-4 py-4 text-black">{item.balance}</td>
                  <td>
                    <button
                     disabled={item.status}
                      className={`border-md rounded-lg p-1 px-4  ${ item.status? "bg-[#48BC00] text-white" : "bg-[#AE45C6] text-white cursor-pointer"}`}
                      onClick={() => {setIsModalOpen(true);setModalData(item);}}>
                      {item.status ? "Paid" : "Pay"}
                    </button>
                    {isModalOpen && modalData === item && ( <OutStandModal closeModal={() => setIsModalOpen(false)}rowData={modalData}/>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DetailsCount filteredData={filteredData} />
      </>
  );
}

export default OutstandinTable;

