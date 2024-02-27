import React from "react";

function DetailsCount({filteredData}) {
    // Calculate details count
const detailsCountData = filteredData.reduce((acc, item) => {
    acc.numberOfBills += 1;
    acc.totalAmount += item.amount;
    acc.totalAmountPaid += item.amountPaid;
    acc.totalBalance += item.balance;
    return acc;
  }, { numberOfBills: 0, totalAmount: 0, totalAmountPaid: 0, totalBalance: 0 });

  return (
    <div className="flex flex-col font-inter font-medium md:flex-row md:items-center mt-6 mx-7 gap-10">
      <div className="flex md:w-1/4 items-center justify-end md:pr-4">
        <label className="w-full  md:w-auto text-xs text-right md:text-left mb-2 md:mb-0 mr-3">No of Purchase Bills</label>
        <input
          readOnly
          value={detailsCountData.numberOfBills}
          type="number"
          name="amount1"
          className="p-3 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none "
        />
      </div>
      <div className="flex md:w-1/4 items-center  md:pr-4">
        <label className="w-full md:w-auto text-xs text-right md:text-left mb-2 md:mb-0 mr-3">Total      Amount </label>
        <input
          readOnly
          value={detailsCountData.totalAmount}
          type="number"
          name="amount2"
          className="p-3 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none "
        />
      </div>
      <div className="flex md:w-1/4 items-center  md:pr-4">
        <label className="w-full md:w-auto text-xs text-right md:text-left mb-2 md:mb-0 mr-3">Amount Paid</label>
        <input
          readOnly
          value={detailsCountData.totalAmountPaid}
          type="number"
          name="amount3"
          className="p-3 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none "
        />
      </div>
      <div className="flex md:w-1/4 items-center ">
        <label className="w-full md:w-auto text-xs text-right md:text-left mb-2 md:mb-0 mr-3">Balance </label>
        <input
          readOnly
          value={detailsCountData.totalBalance}
          type="number"
          name="amount4"
          className="p-3 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none "
        />
      </div>
    </div>
  );
}

export default DetailsCount;
