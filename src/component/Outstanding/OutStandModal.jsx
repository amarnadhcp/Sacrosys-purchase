import React from 'react'
import { motion } from "framer-motion";

function OutStandModal({ closeModal, rowData }) {
  return (
    <motion.div className="fixed inset-0 bg-default bg-opacity-80 flex justify-center items-center px-4 z-30"{...modalBackgroundAnimation}>
      <motion.div className="bg-custom-cream w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-4 md:p-8" {...modalContentAnimation}>
        <div className="flex flex-col font-inter text-black text-xs">
          {/* inputs */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <label className="w-1/4 text-right pr-4 text-xs  ">Invoice number</label>
              <input
                readOnly
                type="text"
                name="invoiceNum"
              
                className="p-2 flex-grow bg-inputColor  rounded-lg text-sm focus:outline-none ml-2"
              />
            </div>
          </div>
          
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="py-2  px-12  ml-2 mr-2 rounded-md border-2 border-gray-300 bg-white text-black"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button type="button"
            className="py-2 px-12 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-poppins"
            // onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default OutStandModal


const modalBackgroundAnimation = { //animation design
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.1 },
  };
  
  const modalContentAnimation = {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };