import React from "react";
import EntryTable from "../../component/Entry/EntryTable";
import EntryForm from "../../component/Entry/EntryForm";

function PurchaseEntry() {
  return (
    <>
      <div className="flex flex-wrap-reverse xl:gap-x-16  max-w-8xl bg-default xl:flex-nowrap">
        <EntryTable  />
        <EntryForm />
      </div>
    </>
  );
}

export default PurchaseEntry;
