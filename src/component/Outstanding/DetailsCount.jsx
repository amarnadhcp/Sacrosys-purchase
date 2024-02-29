import React from 'react';

function MyForm() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-5 mx-3 mb-2">
      {/* Input 1 */}
      <div className="flex md:w-1/2 items-center justify-end md:pr-4 mt-0 md:mt-0">
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
      <div className="flex md:w-1/2 items-center justify-end md:pr-4 mt-0 md:mt-0">
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
      <div className="flex md:w-1/2 items-center justify-end md:pr-4 mt-0 md:mt-0">
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

       <div className="flex md:w-1/2 items-center justify-end md:pr-4 mt-0 md:mt-0">
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
      {/* Add similar code for Input 2 */}

      {/* Input 3 */}
      {/* Add similar code for Input 3 */}

      {/* Input 4 */}
      {/* Add similar code for Input 4 */}
    </div>
  );
}

export default MyForm;
