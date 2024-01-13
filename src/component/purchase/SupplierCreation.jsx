import React from "react";

function SupplierCreation() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-5/6 lg:w-5/6 xl:w-5/6 2xl:w-5/6 rounded-lg shadow-lg overflow-hidden px-14">
        <div className="flex flex-col p-4">
          {/* Left Column */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-2">
              <label  className="mb-1 ">
                Supplier code
              </label>
              <input
                type="text"
                id="supplier-code"
                name="supplier-code"
                placeholder="26"
                className="border p-2 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-2">
              <label  className="mb-1">
                Supplier name
              </label>
              <input
                type="text"
                id="supplier-name"
                name="supplier-name"
                placeholder="Jhony"
                className="border p-2 w-full"
              />
            </div>
            {/* ... other left column fields ... */}
          </div>
          {/* Right Column */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-2">
              <label  className="mb-1">
                Land phone
              </label>
              <input
                type="tel"
                id="land-phone"
                name="land-phone"
                placeholder="0314 684206"
                className="border p-2 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-2">
              <label  className="mb-1">
                Mobile No
              </label>
              <input
                type="tel"
                id="mobile-no"
                name="mobile-no"
                placeholder="09176543210"
                className="border p-2 w-full"
              />
            </div>
            {/* ... other right column fields ... */}
          </div>
        </div>
        <div className="flex justify-end p-4 mr-7">
          <button className=" border-2 border-red-500  bg-white text-black font-bold py-2  rounded mr-2 px-11 rounded-md">
            Cancel
          </button> 
          <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-bold py-2 px-11 rounded-md font-poppins">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupplierCreation;
