import React from "react";
import editIcon from "../../assests/images/Edit.svg";
import EmptyIcon from "../../assests/images/Empty.svg";
import screenshotIcon from "../../assests/images/screenShot.png";
import SearchBar from "../Navbar/SearchBar";
function EntryTable() {

  return (
    <>
      <div className="mx-auto px-2 overflow-auto my-4  ">
        <SearchBar />
        <div className="overflow-x-auto min-w-full">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <thead className="text-xs text-white font-inter bg-custom-black text-center ">
              <tr >
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">Date</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">Supplier</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">Invoice Number</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">Amount</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">VAT</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">Cash/Credit</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">Image</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">Action</th>
                <th className="px-2 py-2 md:px-4 md:py-4 border-b border-r border-solid border-white/20">button</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="even:bg-default odd:bg-oddcolor text-center font-inter"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-black ">
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
                    <button className="bg-pink-500 text-white border-md rounded-lg p-1 px-4 cursor-pointer">
                      Return
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default EntryTable;




const data = [
  {
    
    id: 1,
    date: "09/08/23",
    supplier: "3486348378",
    invoiceNumber: "3486348378",
    amount: 1000,
    vat: 100,
    paymentType: "cash",
  },
  {
    id: 2,
    date: "10/08/23",
    supplier: "4527834523",
    invoiceNumber: "4527834523",
    amount: 1500,
    vat: 150,
    paymentType: "credit",
  },
  {
    id: 3,
    date: "11/08/23",
    supplier: "5728394723",
    invoiceNumber: "5728394723",
    amount: 750,
    vat: 75,
    paymentType: "cash",
  },
  {
    id: 4,
    date: "12/08/23",
    supplier: "4829304832",
    invoiceNumber: "4829304832",
    amount: 1200,
    vat: 120,
    paymentType: "credit",
  },
  {
    id: 5,
    date: "13/08/23",
    supplier: "5839205832",
    invoiceNumber: "5839205832",
    amount: 900,
    vat: 90,
    paymentType: "cash",
  },
];