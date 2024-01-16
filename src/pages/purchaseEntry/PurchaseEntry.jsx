// PurchaseEntry.js
import React from "react";
import "./purchaseEntry.css";
import EntryTable from "../../component/Entry/EntryTable";
import EntryForm from "../../component/Entry/EntryForm";
function PurchaseEntry() {
  return (
    <>
      <div className="flex flex-wrap-reverse max-w-7xl mx-auto">
        <EntryTable />
        <EntryForm />
      </div>
    </>
  );
}

export default PurchaseEntry;
