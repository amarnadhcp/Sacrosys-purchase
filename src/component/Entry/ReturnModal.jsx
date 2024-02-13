import React, { useState } from "react";

function ReturnModal({ closeModal }) {
  // preview image state
  const [imagePreview, setImagePreview] = useState(null);
console.log("=================",imagePreview);
  // function to handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        console.log(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-default bg-opacity-25 flex justify-center items-center px-4 z-30">
      <div className="bg-custom-cream w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-4 md:p-8">
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className="w-1/4 text-right pr-4">Invoice number</label>
            <input
              type="text"
              name="invoice-number"
              placeholder="26855285278"
              className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-1/4 text-right pr-4">Amount</label>
            <input
              type="text"
              name="amount"
              placeholder="1000"
              className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-1/4 text-right pr-4">VAT</label>
            <input
              type="text"
              name="vat"
              placeholder="1000"
              className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-1/4 text-right pr-4">Remarks</label>
            <textarea
              name="remarks"
              placeholder="dsgksagcjkdgjdkjwehfjefn vwd wsdv,v"
              className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none h-20 ml-2"
            />
          </div>
          <div className="flex items-center mt-2 justify-end">
  {imagePreview && (
    <div className="flex justify-start items-center mb-2">
      <img
        src={imagePreview}
        alt="Preview"
        className="w-16 mb-2 mr-4 object-cover rounded-full border border-gray-300"
      />
    </div>
  )}
  <label
    htmlFor="photo-upload"
    className="text-purple-600 text-left mr-2 font-inter underline cursor-pointer text-sm"
  >
    Upload Photo
  </label>
  <input
    type="file"
    id="photo-upload"
    name="photo-upload"
    className="hidden"
    onChange={handleFileChange}
  />
</div>

        </div>
        <div className="flex justify-end mt-4">
          <button className="py-2  px-12  ml-2 mr-2 rounded-md border-2 border-gray-300 bg-white text-black" onClick={closeModal}>
            Cancel
          </button>
          <button className="py-2 px-12 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-poppins" onClick={closeModal}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReturnModal;
