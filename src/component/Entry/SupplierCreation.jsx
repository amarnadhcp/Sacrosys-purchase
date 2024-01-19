import React from "react";

function SupplierCreation() {
  return (
    <div className="fixed inset-0 bg-black   bg-opacity-90 flex justify-center items-center px-2">
      <div className="bg-custom-cream w-full max-w-5xl rounded-lg shadow-lg p-4 px-12 ">
        <div className="flex flex-col md:flex-row gap-x-20">
            {/* LEFT */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-2">
              <label
                htmlFor="supplier-code"
                className="block mb-0 flex-shrink-0 text-sm font-poppins ml-2 mr-6"
              >
                Supplier code
              </label>
              <input
                type="text"
                name="supplier-code"
                placeholder="26"
                className="p-1.5 w-full bg-inputColor rounded-lg text-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-2">
              <label
                htmlFor="land-phone"
                className="block mb-0 flex-shrink-0 text-sm focus:shadow-outline font-poppins ml-0 mr-5"
              >
                Supplier name
              </label>
              <input
                type="tel"
                name="land-phone"
                placeholder="0314 684206"
                className="p-1.5 w-full bg-inputColor rounded-lg text-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-2">
              <label
                htmlFor="Supplier type"
                className="block mb-0 flex-shrink-0 text-sm focus:shadow-outline font-poppins ml-3 mr-6"
              >
                Supplier type
              </label>
              <input
                type="tel"
                name="Supplier type"
                placeholder="26855285278"
                className="p-1.5 w-full bg-inputColor rounded-lg text-sm focus:outline-none"
              />
            </div>
            
          </div>
          {/* RIGHT */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center mb-2">
              <label
                htmlFor="supplier-name"
                className="block mb-0 flex-shrink-0 text-sm font-poppins ml-1 mr-6"
              >
                Land phone
              </label>
              <input
                type="text"
                name="supplier-name"
                placeholder="Jhony"
                className="p-1.5 w-full bg-inputColor rounded-lg text-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-2">
              <label
                htmlFor="mobile-no"
                className="block mb-0 flex-shrink-0 text-sm font-poppins ml-7 mr-2"
              >
                Mobile No
              </label>
              <input
                type="tel"
                name="mobile-no"
                placeholder="09176543210"
                className="p-1.5 w-full bg-inputColor rounded-lg text-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-2">
              <label
                htmlFor="mobile-no"
                className="block mb-0 flex-shrink-0 text-sm font-poppins ml-7 mr-2"
              >
                Mobile No
              </label>
              <input
                type="tel"
                name="mobile-no"
                placeholder="09176543210"
                className="p-1.5 w-full bg-inputColor rounded-lg text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="py-1 px-6 mr-1 rounded-md border-2 border-red-500 bg-white text-black">
            Cancel
          </button>
          <button className="py-1 px-6 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-bold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupplierCreation;
