import React from "react";
import editIcon from '../../assests/images/Edit.svg';
import EmptyIcon from '../../assests/images/Empty.svg';
import screenshotIcon from '../../assests/images/screenShot.png';

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

      
    


      <div className="w-100 ml-10 flex justify-between ">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th className="bg-black text-white  text-middle p-2 font-Inter  border-b border-r border-solid border-white/20">Date</th>
                <th className="bg-black text-white  text-middle p-2 font-Inter border-b border-r border-solid border-white/20">Supplier</th>
                <th className="bg-black text-white  text-middle p-2 font-Inter border-b border-r border-solid border-white/20" >Invoice Number</th>
                <th className="bg-black text-white  text-middle p-2 font-Inter border-b border-r border-solid border-white/20" >Amount</th>
                <th className="bg-black text-white  text-middle p-2 font-Inter border-b border-r border-solid border-white/20" >VAT</th>
                <th className="bg-black text-white  text-middle p-2 font-Inter  " >Cash/Credit</th>
                <th className="bg-black text-white  text-middle p-2 font-Inter " ></th>
                <th className="bg-black text-white  text-middle p-2 font-Inter " ></th>
                <th className="bg-black text-white  text-middle p-2 font-Inter " ></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 align-middle ">{item.date}</td>
                  <td className="p-4 align-middle " >{item.supplier}</td>
                  <td className="p-4 align-middle ">{item.invoiceNumber}</td>
                  <td className="p-4 align-middle ">{item.amount.toFixed(2)}</td>
                  <td className="p-4 align-middle ">{item.vat.toFixed(2)}</td>
                  <td className="p-4 align-middle ">{item.paymentType}</td>
                  <td>
                    <img
                      src={screenshotIcon}
                      alt="Screenshot"
                      className="w-10 h-8 mt-2 mr-2 cursor-pointer"
                    />
                  </td>
                  <td className="flex">
                    <img src={editIcon} alt="Edit" className="w-7 h-5 mt-3  cursor-pointer" />
                    <img src={EmptyIcon} alt="Delete" className="w-7 h-5 mt-3   cursor-pointer" />
                  </td>
                  <td>
                    <button className="bg-pink-500 text-white border-md rounded-lg p-1 px-4 cursor-pointer ">Return</button>
                  </td>
                </tr> 
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default EntryTable