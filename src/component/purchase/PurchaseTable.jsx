import React from "react";
import editIcon from '../../assests/images/Edit.svg';
import EmptyIcon from '../../assests/images/Empty.svg';
import screenshotIcon from '../../assests/images/screenShot.png';
import "./PurchaseTable.css"
function PurchaseTable() {
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
      <div className="outer">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Supplier</th>
                <th>Invoice Number</th>
                <th>Amount</th>
                <th>VAT</th>
                <th>Cash/Credit</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.supplier}</td>
                  <td>{item.invoiceNumber}</td>
                  <td>{item.amount.toFixed(2)}</td>
                  <td>{item.vat.toFixed(2)}</td>
                  <td>{item.paymentType}</td>
                  <td>
                    <img
                      src={screenshotIcon}
                      alt="Screenshot"
                      className="icon-screenshot"
                    />
                  </td>
                  <td className="icons">
                    <img src={editIcon} alt="Edit" className="icon-edit" />
                    <img src={EmptyIcon} alt="Delete" className="icon-delete" />
                  </td>
                  <td>
                    <button className="return-button">Return</button>
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

export default PurchaseTable;
