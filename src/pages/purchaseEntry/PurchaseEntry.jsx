// PurchaseEntry.js
import React from "react";
import EntryTable from "../../component/Entry/EntryTable";
import EntryForm from "../../component/Entry/EntryForm";
function PurchaseEntry() {
  return (
    <>
      <div className="flex flex-wrap-reverse max-w-8xl gap-x-36 bg-default">
        <EntryTable />
        <EntryForm />
      </div>
    </>
  );
}

export default PurchaseEntry;
