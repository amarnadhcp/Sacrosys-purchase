import React, { useState } from "react";
import SearchBar from "../../component/Navbar/SearchBar";
import NavigationBar from "../../component/Navbar/NavigationBar";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

function SupplierList() {
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
    <div className="mx-auto px-2 overflow-auto my-1 ">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default">
        <NavigationBar  />
        <SearchBar show="Vendor" />
      </div>
      <div className="overflow-x-auto min-w-full">
        <div className="mb-3 mt-0 mx-1 ">
          <RangePicker onChange={handleDateRangeChange} />
        </div>
        <div className="overflow-y-auto h-[480px]">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0 border-collapse">
            <thead className="sticky  top-0 text-xs text-white font-inter bg-custom-black text-center z-10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-4">Code</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Vendor name</th>
                <th className="px-2 py-2 md:px-4 md:py-4 ">Country</th>
                <th className="px-2 py-2 md:px-4 md:py-4">FSSAI No</th>
                <th className="px-2 py-2 md:px-4 md:py-4">PAN Card No</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Bank Name</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Account No</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Balance type</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Credit date</th>
                <th className="px-2 py-2 md:px-4 md:py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="even:bg-default odd:bg-[#E9E9E9]  text-center font-inter"
                >
                  <td className="px-4 py-3 whitespace-nowrap text-black">{item.code}</td>
                  <td className="px-4 py-3 text-black">{item.supplierName}</td>
                  <td className="px-4 py-3 text-black">{item.country}</td>
                  <td className="px-4 py-3 text-black">{item.fbsmNo}</td>
                  <td className="px-4 py-3 text-black">{item.ribCardNo}</td>
                  <td className="px-4 py-3 text-black">{item.bankName}</td>
                  <td className="px-4 py-3 text-black">{item.accountNo}</td>
                  <td className="px-4 py-3 text-black">{item.balanceType}</td>
                  <td className="px-4 py-3 text-black">{item.creditDate}</td>
                  <td className="px-4 md:py-4 text-black py-7 flex items-center justify-center">
                    <span className="mr-2 text-center">Active</span>
                    <label className="relative inline-flex items-center">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        checked={item.state}  
                        className="peer relative h-5 w-5 appearance-none rounded-sm border border-black  focus:outline-none"
                      />
                      {item.state && ( 
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 top-0 h-full w-full pointer-events-none"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </label>
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

export default SupplierList;

const data = [
  {
    id: 1,
    code: "26",
    supplierName: "John",
    country: "Qatar",
    fbsmNo: "1000",
    ribCardNo: "ex1234567890a",
    bankName: " bank of qatar",
    accountNo: "ex1234567890a",
    balanceType: "Credit",
    creditDate: "01/06/2023",
    state: true,
  },
  {
    id: 2,
    code: "28",
    supplierName: "James Cooper",
    country: "Qatar",
    fbsmNo: "2000",
    ribCardNo: "ex9876543210b",
    bankName: " bank of qatar",
    accountNo: "ex9876543210b",
    balanceType: "Debit",
    creditDate: "02/06/2023",
    state: true,
  },
  {
    id: 3,
    code: "29",
    supplierName: "Esther Vincent",
    country: "Qatar",
    fbsmNo: "3000",
    ribCardNo: "ex1234987650c",
    bankName: " bank of qatar",
    accountNo: "ex1234987650c",
    balanceType: "Credit",
    creditDate: "03/06/2023",
    state: true,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: " bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state: false,
  },
];
