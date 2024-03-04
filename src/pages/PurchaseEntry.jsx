import React, { useState } from "react";
import EntryTable from "../component/Entry/EntryTable";
import EntryForm from "../component/Entry/EntryForm";
import SearchBar from "../component/Navbar/SearchBar";
import NavigationBar from "../component/Navbar/NavigationBar";

function PurchaseEntry() {
  const [autocompleteInput, setAutocompleteInput] = useState("");
  return (
    <>
      <div className="flex flex-wrap-reverse xl:gap-x-16  max-w-8xl bg-default xl:flex-nowrap">
        <div className="mx-auto px-2 overflow-auto my-1">
          <SearchBar
            onSelect={(value) => setAutocompleteInput(value)}
            data={suggetiondata}
          />
          <EntryTable selectedVendor={autocompleteInput} />
        </div>
        <div className="my-0 mx-auto flex flex-col items-end text-xs md:text-base  mt-2 ">
          <NavigationBar show="entry" />
          <EntryForm />
        </div>
      </div>
    </>
  );
}

export default PurchaseEntry;

let suggetiondata = [
  "3486348378",
  "4527834523",
  "5728394723",
  "4829304832",
  "5839205832",
  "5839276832",
  "5834405832",
  "5839205833",
];
