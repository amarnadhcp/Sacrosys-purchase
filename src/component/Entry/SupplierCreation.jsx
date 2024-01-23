import React from "react";

function SupplierCreation() {
  return (
    <div className="fixed inset-0 bg-default bg-opacity-80 flex justify-center items-center px-4">
      <div className="bg-custom-cream w-full max-w-5xl rounded-lg shadow-lg p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between ">
          
          {/* LEFT */}
          <div className="flex gap-x-3 md:gap-6 mx-1">
            <div className="flex flex-col items-end justify-around text-sm font-poppins">
              <div className="flex items-end">
                <label className="block flex-shrink-0">
                  Supplier code
                </label>
              </div>
              <div className="flex items-end ">
                <label className="block flex-shrink-0">
                  Supplier name
                </label>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex items-center ">
                <input
                  type="text"
                  name="supplier-code"
                  placeholder="26"
                  className="p-1.5 w-full md:w-72 my-1 bg-inputColor rounded-lg text-sm focus:outline-none"
                />
              </div>
              <div className="flex items-center ">
                <input
                  type="tel"
                  name="land-phone"
                  placeholder="0314 684206"
                  className="p-1.5 w-full md:w-72 my-1 bg-inputColor rounded-lg text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex gap-x-3 md:gap-x-6 mx-1">
            <div className="flex flex-col items-end justify-around text-sm font-poppins">
              <div className="flex items-end">
                <label className="block flex-shrink-0">Land phone</label>
              </div>
              <div className="flex items-end ">
                <label className="block flex-shrink-0">opening Balance</label>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex items-end ">
                <input
                  type="text"
                  name="supplier-code"
                  placeholder="26"
                  className="p-1.5 w-full md:w-72 my-1 bg-inputColor rounded-lg text-sm focus:outline-none"
                />
              </div>
              <div className="flex items-end ">
                <input
                  type="tel"
                  name="land-phone"
                  placeholder="0314 684206"
                  className="p-1.5 w-full md:w-72 my-1 bg-inputColor rounded-lg text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button className="py-1 px-6 ml-2 mr-2 rounded-md border-2 border-red-500 bg-white text-black">
            Cancel
          </button>
          <button className="py-1 px-8 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-poppins">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupplierCreation;