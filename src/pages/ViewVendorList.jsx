import React, { useState } from 'react'
import NavigationBar from '../component/Navbar/NavigationBar'
import SearchBar from '../component/Navbar/SearchBar'
import VendorList from '../component/VendorList'
function ViewVendorList() {
  const [autocompleteInput, setAutocompleteInput] = useState("");
  return (
    <div className="mx-auto px-2 overflow-auto my-1 ">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default">
        <NavigationBar />
        <SearchBar show="Vendor"
            onSelect={(value) => setAutocompleteInput(value)}
             data={suggetiondata} />
      </div>
      <VendorList selectedvalue={autocompleteInput}/>
    </div>  
  )
}

export default ViewVendorList


let suggetiondata = [
  "John",
  "Cooper",
  "Vincent",
  "Warner",
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Jackson",
  "Ava"
];
