import React from "react";

function SupplierCreation() {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg">
        <div className="p-4">
          <div className="flex md:flex-row flex-col gap-x-4">
          <div className="md:w-1/2 w-full flex flex-col mx-2 mb-4">
            <div className="w-full flex  px-2 mb-2 md:mb-4 items-center">
              <label
                htmlFor="supplier-code"
                className="block mb-1 flex-shrink-0 ml-1 mr-2"
              >
                Supplier code
              </label>
              <input
                type="text"
                name="supplier-code"
                placeholder="26"
                className="p-2 w-full bg-gray-300 border-gray-300 rounded-lg "
              />
            </div>
            <div className="w-full flex  px-2 items-center">
              
              <label htmlFor="land-phone" className="block mb-1 flex-shrink-0 ml-4 mr-2">
                Land phone
              </label>
              <input
                type="tel"
                name="land-phone"
                placeholder="0314 684206"
                className="p-2 w-full bg-gray-300 border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full flex flex-col mx-2 mb-4">
            <div className="w-full flex  px-2 mb-2 md:mb-4 items-center">
            <label
                htmlFor="supplier-name"
                className="block mb-1 flex-shrink-0 mr-2"
              >
                Supplier name
              </label>
              <input
                type="text"
                name="supplier-name"
                placeholder="Jhony"
                className="p-2 w-full bg-gray-300 border-gray-300 rounded-lg"
              />
              
            </div>
            <div className="w-full flex  px-2 items-center">
              <label htmlFor="mobile-no" className="block mb-1 flex-shrink-0  ml-6 mr-2">
                Mobile No
              </label>
              <input
                type="tel"
                name="mobile-no"
                placeholder="09176543210"
                className="p-2 w-full bg-gray-300 border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
          </div>

        <div className="flex justify-end p-4">
          <button className="border-2 border-red-500 bg-white text-black font-bold py-2 mr-2 px-11 rounded-md">
            Cancel
          </button>
          <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-bold py-2 px-11 rounded-md font-poppins">
            Save
          </button>
        </div>
      </div>
    </div>

    </>
  );
}

export default SupplierCreation;
