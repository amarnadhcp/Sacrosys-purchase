import React from 'react'
import SearchBar from '../Navbar/SearchBar';
import foodIcon from "../../assests/images/food.svg";  


function ReturnList() {
  return (
    <div className="mx-auto  px-2 overflow-auto my-4 ">
    <SearchBar/>
  <div className="overflow-x-auto min-w-full">
    <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-stone-50 font-light  bg-gray-50 dark:bg-gray-900">
        <tr>
          <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Date</th>
          <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Supplier</th>
          <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Invoice number</th>
          <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Return Amount</th>
          <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">VAT</th>
          <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Remarks</th>
          <th className="bg-neutral-900 text-white px-4 py-3 text-center border-b border-r border-solid border-white/20">Photo</th>
         
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr
            key={item.id}
            className="even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-700  dark:border-gray-700"
          >
          
            <td className="px-4 py-2 text-center">{item.date}</td>
            <td className="px-4 py-2 text-center">{item.supplier}</td>
            <td className="px-4 py-2 text-center">{item.invoiceNumber}</td>
            <td className="px-4 py-2 text-center">{item.returnAmount}</td>
            <td className="px-4 py-2 text-center">{item.vat}</td>
            <td className="px-4 py-2 text-center">{item.remarks}</td>   
            <td className='px-4 py-2 text-center'> <img className='h-11 w-22' src={foodIcon} alt="food icon" /> </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default ReturnList











const tableData = [
    {
      id: 1,
      date: "09/08/23",
      supplier: "343434234",
      invoiceNumber: "3432343342",
      returnAmount: "1000.000",
      vat: "100.000",
      remarks: "fhsdlcs;lckdklkjlkljkljljjdf;of fj efjoejwf ioejwfoef ij ewfooe jjofjio feojiof ofejojefj   ",
      active: true
    },
    {
      id: 2,
      date: "09/08/23",
      supplier: "342323442",
      invoiceNumber: "3423234424",
      returnAmount: "1000.000",
      vat: "100.000",
      remarks: "Main kitchen",
    }
  ];
  