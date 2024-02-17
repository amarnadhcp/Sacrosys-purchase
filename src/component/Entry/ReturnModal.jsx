import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ReturnModal({ closeModal, rowData }) {
  const [imagePreview, setImagePreview] = useState(null); // preview image state

  useEffect(() => { // Close modal when clicked outside
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("bg-default")) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeModal]);

  const handleFileChange = (e) => { // function to handle file change
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div className="fixed inset-0 bg-default bg-opacity-80 flex justify-center items-center px-4 z-30"{...modalBackgroundAnimation}>
      <motion.div className="bg-custom-cream w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-4 md:p-8" {...modalContentAnimation}>
        <div className="flex flex-col font-inter text-black text-xs">
          <div className="flex items-center">
            <label className="w-1/4 text-right pr-4 text-xs  ">
              Invoice number
            </label>
            <input
              type="text"
              name="invoice-number"
              value={rowData.invoiceNumber}
              className="p-2 flex-grow bg-inputColor  rounded-lg text-sm focus:outline-none ml-2"
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-1/4 text-right pr-4">Amount</label>
            <input
              type="text"
              name="amount"
              value={rowData.amount}
              className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-1/4 text-right pr-4">VAT</label>
            <input
              type="text"
              name="vat"
              value={rowData.vat}
              className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="w-1/4 text-right pr-4">Remarks</label>
            <textarea
              name="remarks"
              className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none h-20 ml-2"
            />
          </div>
          <div className="flex items-center mt-2 justify-end">
            {imagePreview && (
              <div className="flex justify-start items-center mb-2 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-16 mb-2 h-auto mr-4"
                />
                <button
                  className="absolute top-0 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition ease-in duration-200"
                  onClick={() => setImagePreview(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 11.414l4.95 4.95a1 1 0 001.414-1.414L11.414 10l4.95-4.95a1 1 0 00-1.414-1.414L10 8.586 5.05 3.636a1 1 0 00-1.414 1.414L8.586 10l-4.95 4.95a1 1 0 001.414 1.414L10 11.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
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
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="py-2  px-12  ml-2 mr-2 rounded-md border-2 border-gray-300 bg-white text-black"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="py-2 px-12 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-poppins"
            onClick={closeModal}
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ReturnModal;

const modalBackgroundAnimation = {//animation design 
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.1 },
};

const modalContentAnimation = {
  initial: { scale: 0.8, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};
