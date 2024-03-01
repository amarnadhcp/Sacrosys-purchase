import React from 'react';

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
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-5 mx-3 mb-2">
      {/* Input 1 */}
      <div className="flex flex-col md:w-1/2 items-center md:pr-4 md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-center md:text-left mb-2 md:mb-0 mr-3">
          No of Purchase
        </label>
        <input
          readOnly
          type="number"
          name="amount1"
          value={detailsCountData.numberOfBills}
          className="p-2 md:p-3 w-full bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Input 2 */}
      <div className="flex flex-col md:w-1/2 items-center md:pr-4 md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-center md:text-left mb-2 md:mb-0 mr-3">
          Total Amount
        </label>
        <input
          readOnly
          type="number"
          name="amount2"
          value={detailsCountData.totalAmount}
          className="p-2 md:p-3 w-full bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Input 3 */}
      <div className="flex flex-col md:w-1/2 items-center md:pr-4 md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-center md:text-left mb-2 md:mb-0 mr-3">
          Paid Amount
        </label>
        <input
          readOnly
          type="number"
          name="amount3"
          value={detailsCountData.totalAmountPaid}
          className="p-2 md:p-3 w-full bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Input 4 */}
      <div className="flex flex-col md:w-1/2 items-center md:pr-4 md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-center md:text-left mb-2 md:mb-0 mr-3">
          Balance
        </label>
        <input
          readOnly
          type="number"
          name="amount4"
          value={detailsCountData.totalBalance}
          className="p-2 md:p-3 w-full bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Add more input fields here */}
    </div>
  );
}

export default DetailsCount;