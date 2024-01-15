// PurchaseEntry.js
import React from "react";
import "./purchaseEntry.css";
import EntryTable from "../../component/Entry/EntryTable";
import EntryForm from "../../component/Entry/EntryForm";
function PurchaseEntry() {
  return (
    <>
    <div className="flex">
    <EntryTable/>
    <EntryForm/>
    </div>
    </>
  );
}

export default PurchaseEntry;
