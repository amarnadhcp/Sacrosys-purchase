import React, { useState } from 'react'
import NavigationBar from '../component/Navbar/NavigationBar'
import SearchBar from '../component/Navbar/SearchBar'
import ReturnList from '../component/ReturnList'

function ViewReturnList() {
  const [autocompleteInput, setAutocompleteInput] = useState("");
  return (
    <div className="mx-auto px-2 overflow-auto my-0">
    <div className="flex flex-col md:flex-row-reverse justify-between items-center bg-default mb-0 mt-1">
      <NavigationBar/>
      <SearchBar show="Return"
       onSelect={(value) => setAutocompleteInput(value)}
       data={suggestionData} />
    </div>
    <ReturnList selectedvalue={autocompleteInput}/>
    </div>

  )
}

export default ViewReturnList

let suggestionData = [
  "343434234",
  "123456789",
  "987654321",
  "567890123",
  "456789012",
  "345678901",
  "234567890",
  "876543210",
  "765432109",
  "654321098",
];
