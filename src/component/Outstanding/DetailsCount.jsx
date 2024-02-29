import React from 'react';

function DetailsCount() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-5 mx-3 mb-2">
      {/* Input 1 */}
      <div className="flex md:w-1/2 items-center justify-end md:pr-4  md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-right md:text-left mb-2 md:mb-0 mr-3">
          No of Purchase
        </label>
        <input
          readOnly
          type="number"
          name="amount1"
          className="p-2 md:p-3 flex-grow bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Input 2 */}
      <div className="flex md:w-1/2 items-center justify-end md:pr-4  md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-right md:text-left mb-2 md:mb-0 mr-3">
          No of Purchase
        </label>
        <input
          readOnly
          type="number"
          name="amount2"
          className="p-2 md:p-3 flex-grow bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Input 3 */}
      <div className="flex md:w-1/2 items-center justify-end md:pr-4  md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-right md:text-left mb-2 md:mb-0 mr-3">
          No of Purchase
        </label>
        <input
          readOnly
          type="number"
          name="amount3"
          className="p-2 md:p-3 flex-grow bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Input 4 */}
      <div className="flex md:w-1/2 items-center justify-end md:pr-4  md:mt-0">
        <label className="w-full md:w-auto text-xs xs:text-sm text-right md:text-left mb-2 md:mb-0 mr-3">
          No of Purchase
        </label>
        <input
          readOnly
          type="number"
          name="amount4"
          className="p-2 md:p-3 flex-grow bg-inputColor rounded-lg text-xs xs:text-sm md:text-sm focus:outline-none"
        />
      </div>
      {/* Add more input fields here */}
    </div>
  );
}

export default DetailsCount;
