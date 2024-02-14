import React, { useState } from "react";
import editIcon from "../../assests/images/Edit.svg";
import EmptyIcon from "../../assests/images/Empty.svg";
import screenshotIcon from "../../assests/images/screenShot.png";
import SearchBar from "../Navbar/SearchBar";
import ReturnModal from "./ReturnModal";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

function EntryTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);//modale opening
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  
  const handleDateRangeChange = (dates) => {
    if (!dates) {
      setSelectedDateRange([]);
      return;
    }
    setSelectedDateRange(dates);
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
      <div className="mx-auto px-2 overflow-auto my-4">
        <SearchBar />
        <div className="overflow-x-auto min-w-full">
          <div className="mb-3 mt-0 ">
            <RangePicker onChange={handleDateRangeChange} />
          </div>
          <div className="overflow-y-auto max-h-96">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse">
            <thead className="sticky z-30 top-0 text-xs text-white font-inter bg-custom-black text-center ">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">Date</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">Supplier</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">Invoice Number</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">Amount</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">VAT</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">Cash/Credit</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">Image</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">Action</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b-2 border-r-2 border-solid border-[#3A3A3A]">button</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="even:bg-default odd:bg-oddcolor text-center font-inter"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-black">
                    {item.date}
                  </td>
                  <td className="px-4 py-2 text-black">{item.supplier}</td>
                  <td className="px-4 py-2 text-black">{item.invoiceNumber}</td>
                  <td className="px-4 py-2 text-black">{item.amount.toFixed(2)}</td>
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
                    />
                    <img
                      src={EmptyIcon}
                      alt="Delete"
                      className="w-7 h-5 mt-3 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <button className="bg-pink-500 text-white border-md rounded-lg p-1 px-4 cursor-pointer"
                    onClick={()=>setIsModalOpen(true)}>
                      Return
                    </button>
                    {isModalOpen && <ReturnModal closeModal={() => setIsModalOpen(false)} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EntryTable;

const data = [
  {
    id: 1,
    date: "2023-08-09",
    supplier: "3486348378",
    invoiceNumber: "3486348378",
    amount: 1000,
    vat: 100,
    paymentType: "cash",
  },
  {
    id: 2,
    date: "2023-08-10",
    supplier: "4527834523",
    invoiceNumber: "4527834523",
    amount: 1500,
    vat: 150,
    paymentType: "credit",
  },
  {
    id: 3,
    date: "2023-08-11",
    supplier: "5728394723",
    invoiceNumber: "5728394723",
    amount: 750,
    vat: 75,
    paymentType: "cash",
  },
  {
    id: 4,
    date: "2023-08-12",
    supplier: "4829304832",
    invoiceNumber: "4829304832",
    amount: 1200,
    vat: 120,
    paymentType: "credit",
  },
  {
    id: 5,
    date: "2023-08-13",
    supplier: "5839205832",
    invoiceNumber: "5839205832",
    amount: 900,
    vat: 90,
    paymentType: "cash",
  },
  {
    id: 6,
    date: "2023-08-13",
    supplier: "5839276832",
    invoiceNumber: "5839205532",
    amount: 900,
    vat: 90,
    paymentType: "cash",
  },
  {
    id: 7,
    date: "2023-08-13",
    supplier: "5834405832",
    invoiceNumber: "5839275832",
    amount: 900,
    vat: 90,
    paymentType: "cash",
  },
  {
    id: 8,
    date: "2023-08-13",
    supplier: "5839205833",
    invoiceNumber: "5899205832",
    amount: 900,
    vat: 90,
    paymentType: "cash",
  },
];