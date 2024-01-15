import React, { useState } from "react";
import PlusIcon from '../../assests/images/AddNew.svg';
import SupplierCreation from './SupplierCreation';

function EntryForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex flex-col items-center ml-24 p-20 w-full max-w-4xl ">
    <form className="transaction-form w-full">
      <div className="flex items-center mb-4">
        <label className="inline-block w-1/4 text-left">Supplier</label>
        <div className="w-3/4 relative">
          <input
            type="text"
            id="supplier"
            name="supplier"
            defaultValue="26855285278"
            className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200"
          />
          <img src={PlusIcon} alt="Add new" className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 cursor-pointer" onClick={toggleModal} />
        </div>
        {isModalOpen && <SupplierCreation />}
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="date" className="inline-block w-1/4 text-left">Date</label>
        <input type="date" id="date" name="date" defaultValue="2023-08-09" className="w-3/4 p-2 border border-gray-300 rounded-lg bg-gray-200" />
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="invoice-number" className="inline-block w-1/4 text-left">Invoice number</label>
        <input
          type="text"
          id="invoice-number"
          name="invoice-number"
          defaultValue="26855285278"
          className="w-3/4 p-2 border border-gray-300 rounded-lg bg-gray-200"
        />
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="amount" className="inline-block w-1/4 text-left">Amount</label>
        <input type="number" id="amount" name="amount" defaultValue="1000" className="w-3/4 p-2 border border-gray-300 rounded-lg bg-gray-200" />
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="vat" className="inline-block w-1/4 text-left">VAT</label>
        <input type="number" id="vat" name="vat" defaultValue="100" className="w-3/4 p-2 border border-gray-300 rounded-lg bg-gray-200" />
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="payment-type" className="inline-block w-1/4 text-left">Cash / Credit</label>
        <select id="payment-type" name="payment-type" defaultValue="cash" className="w-3/4 p-2 border border-gray-300 rounded-lg bg-gray-200">
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
        </select>
      </div>

      <div className="flex justify-end items-center mb-4">
        <label htmlFor="photo-upload" className="text-purple-600 text-right text-base font-inter underline cursor-pointer p-2">
          Upload Photo
        </label>
        <input type="file" id="photo-upload" name="photo-upload" className="hidden" />
      </div>

      <button type="submit" className="mt-4 w-full py-2 px-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-lg focus:outline-none">
        Save
      </button>
    </form>
  </div>
  )
}

export default EntryForm