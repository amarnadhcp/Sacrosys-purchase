import React, { useState } from "react";
import "./PurchaseForm.css";
import PlusIcon from '../../assests/images/AddNew.svg';
import SupplierCreation from "./SupplierCreation";
function PurchaseForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="form-container">
      <form className="transaction-form">
      <div className="supplier-field">
        <label htmlFor="supplier">Supplier</label>
        <input
          type="text"
          id="supplier"
          name="supplier"
          defaultValue="26855285278"
          className="smaller-input"
        />
           <img src={PlusIcon} alt="Add new" className="plus-icon"  onClick={toggleModal} />
           {isModalOpen && <SupplierCreation />}
          </div>

        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" defaultValue="2023-08-09" />

        <label htmlFor="invoice-number">Invoice number</label>
        <input
          type="text"
          id="invoice-number"
          name="invoice-number"
          defaultValue="26855285278"
        />

        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" defaultValue="1000" />

        <label htmlFor="vat">VAT</label>
        <input type="number" id="vat" name="vat" defaultValue="100" />

        <label htmlFor="payment-type">Cash / Credit</label>
        <select id="payment-type" name="payment-type" defaultValue="cash">
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
        </select>

        <label htmlFor="photo-upload" className="custom-file-upload">
          Upload Photo
        </label>
        <input type="file" id="photo-upload" name="photo-upload" />

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default PurchaseForm;
