import React from 'react'
import SearchBar from "../../component/SearchBar/SearchBar";
function SupplierList() {

  return (
    <div className="mx-auto  px-2 overflow-auto my-4 ">
      <SearchBar/>
    <div className="overflow-x-auto min-w-full">
      <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-stone-50 font-light  bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Code</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Supplier name</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Country</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">FSSAI No</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">PAN Card No</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Bank Name</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Account No</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Balance type</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Credit date</th>
            <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr
              key={item.id}
              className="even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-700  dark:border-gray-700"
            >
              <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                {item.code}
              </td> 
              <td className="px-4 py-2 text-center">{item.supplierName}</td>
              <td className="px-4 py-2 text-center">{item.country}</td>
              <td className="px-4 py-2 text-center">{item.fbsmNo}</td>
              <td className="px-4 py-2 text-center">{item.ribCardNo}</td>
              <td className="px-4 py-2 text-center">{item.bankName}</td>
              <td className="px-4 py-2 text-center">{item.accountNo}</td>
              <td className="px-4 py-2 text-center">{item.balanceType}</td>
              <td className="px-4 py-2 text-center">{item.creditDate}</td>
              <td className="px-4 py-2 text-center">{item.balanceType}</td>
              {/* <td className="px-4 py-2 text-center">Active
              <input type="checkbox" className="form-checkbox h-5 w-5 text-black border-black rounded custom-checkbox" checked={item.state} />
              </td> */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default SupplierList






const tableData = [
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
  }
];