import React, { useEffect, useRef, useState } from "react";
import editIcon from "../../assests/images/Edit.svg";
import EmptyIcon from "../../assests/images/Empty.svg";
import screenshotIcon from "../../assests/images/screenShot.png";
import SearchBar from "../Navbar/SearchBar";
import ReturnModal from "./ReturnModal";
import EditModal from "./EditModal";
import { MdPictureAsPdf, MdInsertDriveFile } from 'react-icons/md';
import { DatePicker } from 'antd';
import useExcelExport from "../../utils/Excel";
import usePDFGenerator from "../../utils/Pdf";
import DetailsCount from "../DetailsCount";
import { fetchEntryData } from "../../services/Api";
const { RangePicker } = DatePicker;

function EntryTable() {
  const componentRef = useRef();
  const [data, SetData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);//modale opening
  const [EditModalOpen, setModalOpen] = useState(false);//modale opening
  const [modalData, setModalData] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  const exportToExcel = useExcelExport(componentRef, 'purchase_List', [9,10,11]);
  const generatePDF = usePDFGenerator(componentRef, 'purchase_List', [9,10,11]);

  useEffect(() => {
       SetData(fetchEntryData());
  }, []);
  
  const handleDateRangeChange = (dates) => {
    !dates ? setSelectedDateRange([]) : setSelectedDateRange(dates);
  };
  
  // Filter data based on selected date range
  const filteredData = selectedDateRange.length === 0 ?
    data :
    data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= selectedDateRange[0] && itemDate <= selectedDateRange[1];
    });

  return (
    <>
      <div className="mx-auto px-2 overflow-auto my-1">
        <SearchBar />
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
          <div className="overflow-y-auto h-[384px]">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse"  ref={componentRef}>
            <thead className="sticky  top-0 text-xs text-white font-inter bg-custom-black text-center ">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Date</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Vendor</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Invoice </th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Amount</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Paid</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Ballance</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">VAT</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Payment mode</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Image</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Action</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Button</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="even:bg-default odd:bg-[#E9E9E9]  text-center font-inter"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-black">
                    {item.date}
                  </td>
                  <td className="px-4 py-2 text-black">{item.vendor}</td>
                  <td className="px-4 py-2 text-black">{item.invoiceNumber}</td>
                  <td className="px-4 py-2 text-black">{item.amount}</td>
                  <td className="px-4 py-2 text-black">{item.amountPaid}</td>
                  <td className="px-4 py-2 text-black">{item.balance}</td>
                  <td className="px-4 py-2 text-black">{item.vat.toFixed(2)}</td>
                  <td className="px-4 py-2 text-black">{item.paymentType}</td>
                  <td className="px-4 py-2">
                    <img
                      src={screenshotIcon}
                      alt="Screenshot"
                      className="w-10 h-8 mt-2 mr-2 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-2 flex">
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="w-7 h-5 mt-3 cursor-pointer"
                      onClick={()=>{setModalOpen(true);
                        setModalData(item)}}
                    />
                      {EditModalOpen && modalData === item && <EditModal closeModal={() => setModalOpen(false)} rowData={modalData} />}
                    <img
                      src={EmptyIcon}
                      alt="Delete"
                      className="w-7 h-5 mt-3 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <button className="bg-pink-500 text-white border-md rounded-lg p-1 px-4 cursor-pointer"
                    onClick={()=>{setIsModalOpen(true);
                     setModalData(item)}}>
                      Return
                    </button>
                    {isModalOpen && modalData === item && <ReturnModal closeModal={() => setIsModalOpen(false)} rowData={modalData} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
        <DetailsCount filteredData={filteredData} />
      </div>
    </>
  );
}

export default EntryTable;

