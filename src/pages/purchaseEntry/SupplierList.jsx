import React, { useState } from 'react'
import SearchBar from "../../component/Navbar/SearchBar";
import NavigationBar from "../../component/Navbar/NavigationBar";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function SupplierList() {

  const [selectedDateRange, setSelectedDateRange] = useState([]);
  
  const handleDateRangeChange = (dates) => {
    !dates ? setSelectedDateRange([]) : setSelectedDateRange(dates);
  };

    // Filter data based on selected date range
    const filteredData = selectedDateRange.length === 0 ?
    data :
    data.filter(item => {
      const itemDate = new Date(item.date);
      console.log(itemDate);
      return itemDate >= selectedDateRange[0] && itemDate <= selectedDateRange[1];
    });

  return (
    <div className="mx-auto px-2 overflow-auto my-1 ">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default">
        <NavigationBar  />
        <SearchBar  />
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
            <th className="px-2 py-2 md:px-4 md:py-4 ">Supplier name</th>
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
              <td className="px-4 py-4 whitespace-nowrap text-black">
                {item.code}
              </td> 
              <td className="px-4 py-2 text-black">{item.supplierName}</td>
              <td className="px-4 py-2 text-black">{item.country}</td>
              <td className="px-4 py-2 text-black">{item.fbsmNo}</td>
              <td className="px-4 py-2 text-black">{item.ribCardNo}</td>
              <td className="px-4 py-2 text-black">{item.bankName}</td>
              <td className="px-4 py-2 text-black">{item.accountNo}</td>
              <td className="px-4 py-2 text-black">{item.balanceType}</td>
              <td className="px-4 py-2 text-black">{item.creditDate}</td>
              {/* <td className="px-4 py-2 text-black">{item.balanceType}</td> */}
              <td className="px-4 py-2 text-black flex items-center z-0">
              <span className="mr-2">Active</span>
               <input
                type="checkbox"
                id="checkbox1"
                className="peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] 
              checked:bg-gray-500 hover:ring hover:ring-gray-300 focus:outline-none"
             />
             </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  </div>
  )
}

export default SupplierList






const data = [
  {
    id: 1,
    code: "26",
    supplierName: "John",
    country: "Qatar",
    fbsmNo: "1000",
    ribCardNo: "ex1234567890a",
    bankName: "example bank of qatar",
    accountNo: "ex1234567890a",
    balanceType: "Credit",
    creditDate: "01/06/2023",
    state:true
  },
  {
    id: 2,
    code: "28",
    supplierName: "James Cooper",
    country: "Qatar",
    fbsmNo: "2000",
    ribCardNo: "ex9876543210b",
    bankName: "example bank of qatar",
    accountNo: "ex9876543210b",
    balanceType: "Debit",
    creditDate: "02/06/2023",
    state:true
  },
  {
    id: 3,
    code: "29",
    supplierName: "Esther Vincent",
    country: "Qatar",
    fbsmNo: "3000",
    ribCardNo: "ex1234987650c",
    bankName: "example bank of qatar",
    accountNo: "ex1234987650c",
    balanceType: "Credit",
    creditDate: "03/06/2023",
    state:true
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  },
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }
  ,
  {
    id: 4,
    code: "30",
    supplierName: "Waldo Warner",
    country: "Qatar",
    fbsmNo: "4000",
    ribCardNo: "ex8765432109d",
    bankName: "example bank of qatar",
    accountNo: "ex8765432109d",
    balanceType: "Debit",
    creditDate: "04/06/2023",
    state:false
  }

  
];