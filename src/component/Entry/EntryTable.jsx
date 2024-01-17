import React from "react";
import editIcon from "../../assests/images/Edit.svg";
import EmptyIcon from "../../assests/images/Empty.svg";
import screenshotIcon from "../../assests/images/screenShot.png";
import SearchBar from "../SearchBar/SearchBar";

function EntryTable() {
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

  return (
    <>
      <div className="mx-auto px-2 overflow-auto my-4 ">
        <SearchBar />
        <div className="overflow-x-auto min-w-full">
          <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="bg-black text-white px-4 py-3">Date</th>
                <th className="bg-black text-white px-4 py-3">Supplier</th>
                <th className="bg-black text-white px-4 py-3">Invoice Number</th>
                <th className="bg-black text-white px-4 py-3">Amount</th>
                <th className="bg-black text-white px-4 py-3">VAT</th>
                <th className="bg-black text-white px-4 py-3">Cash/Credit</th>
                <th className="bg-black text-white px-4 py-3"></th>
                <th className="bg-black text-white px-4 py-3"></th>
                <th className="bg-black text-white px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.date}
                  </td>
                  <td className="px-4 py-2">{item.supplier}</td>
                  <td className="px-4 py-2">{item.invoiceNumber}</td>
                  <td className="px-4 py-2">{item.amount.toFixed(2)}</td>
                  <td className="px-4 py-2">{item.vat.toFixed(2)}</td>
                  <td className="px-4 py-2">{item.paymentType}</td>
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