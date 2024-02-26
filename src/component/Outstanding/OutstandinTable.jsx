import React, { useState } from "react";
import SearchBar from "../Navbar/SearchBar";
import NavigationBar from "../Navbar/NavigationBar";
import OutStandModal from "./OutStandModal";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

function OutstandinTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);//modale opening
  const [modalData, setModalData] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  const handleDateRangeChange = (dates) => {
    !dates ? setSelectedDateRange([]) : setSelectedDateRange(dates);
  };

  // Filter data based on selected date range
  const filteredData =
    selectedDateRange.length === 0
      ? data
      : data.filter((item) => {
          const itemDate = new Date(item.date);
          console.log(itemDate);
          return (
            itemDate >= selectedDateRange[0] && itemDate <= selectedDateRange[1]
          );
        });

  return (
    <div className="mx-auto  px-2 overflow-auto my-0 ">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default mb-0 mt-1">
        <NavigationBar showEntry="true" />
        <SearchBar />
      </div>
      <div className="overflow-x-auto min-w-full">
        <div className="mb-3 mt-0 mx-1 ">
          <RangePicker onChange={handleDateRangeChange} />
        </div>
        <div className="overflow-y-auto h-[480px]">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse">
            <thead className="sticky  top-0 text-xs text-white font-inter bg-custom-black text-center z-10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4">Date</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Credit date</th>
                <th className="px-2 py-2 md:px-4 md:py-4">vendor</th>
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
                <tr
                  key={item.id}
                  className="even:bg-default odd:bg-[#E9E9E9]  text-center font-inter"
                >
                  <td className="px-4 py-4 text-black">{item.date}</td>
                  <td className="px-4 py-4 text-black">{item.creditDate}</td>
                  <td className="px-4 py-4 text-black">{item.supplier}</td>
                  <td className="px-4 py-4 text-black">
                    {item.purchaseNumber}
                  </td>
                  <td className="px-4 py-4 text-black">{item.invoiceNumber}</td>
                  <td className="px-4 py-4 text-black">{item.amount}</td>
                  <td className="px-4 py-4 text-black">{item.amountPaid}</td>
                  <td className="px-4 py-4 text-black">{item.balance}</td>
                  <td>
                    <button disabled={item.status}
                      className={`border-md rounded-lg p-1 px-4  ${
                        item.status
                          ? "bg-[#48BC00] text-white"
                          : "bg-[#AE45C6] text-white cursor-pointer"
                      }`}
                      onClick={()=>{setIsModalOpen(true);
                        setModalData(item)}}>
                      {item.status ? "Paid" : "Pay"}
                    </button>
                    {isModalOpen && modalData === item && <OutStandModal closeModal={() => setIsModalOpen(false)} rowData={modalData} />}
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

export default OutstandinTable;

const data = [
  {
    id: 1,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: "Payment in progress",
  },
  {
    id: 2,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: false,
  },
  {
    id: 3,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: false,
  },
  {
    id: 4,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: false,
  },
  {
    id: 5,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: false,
  },
  {
    id: 6,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: true,
  },
  {
    id: 7,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: true,
  },
  {
    id: 8,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: true,
  },
  {
    id: 9,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: true,
  },
  {
    id: 10,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: true,
  },
  {
    id: 11,
    date: "09/08/23",
    creditDate: "09/08/23",
    supplier: "3468346378",
    purchaseNumber: "3468346378",
    invoiceNumber: "3468346378",
    amount: "1000",
    amountPaid: "1000",
    balance: "1000",
    status: true,
  },
];
