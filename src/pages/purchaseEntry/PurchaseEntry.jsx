// PurchaseEntry.js
import React from "react";
import "./purchaseEntry.css";
import PurchaseTable from "../../component/purchase/PurchaseTable";
import PurchaseForm from "../../component/purchase/PurchaseForm"
function PurchaseEntry() {
  return (
    <>
    <div className="flex">
    <PurchaseTable/>
    <PurchaseForm/>
    </div>
    </>
  );
}

export default PurchaseEntry;
