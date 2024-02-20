import React, { useState } from "react";
import SearchIcon from "../../assests/images/search.svg";
import { Link } from "react-router-dom";
import Autocomplete from "../AutoComplete/Autocomplete";

function SearchBar() {
  const [autocompleteInput, setAutocompleteInput] = useState("");
  const handleAutocompleteInput = (input) => {
    setAutocompleteInput(input);
    console.log(autocompleteInput);
  };
  return (
    <div className="flex flex-wrap  justify-between items-center bg-default mt-2 mb-2">
      <div className="flex">
        <label
          htmlFor="search-input "
          className="mx-1 text-gray-800 text-sm mt-3 font-inter hidden md:block"
        >
          Search
        </label>
        <div className="flex flex-wrap">
          <div className="relative flex items-center justify-center sm:justify-center  w-full  md:w-auto">
            <Autocomplete
              suggestions={data}
              width="64"
              MinWidth="80"
              height="10"
              onInputChange={handleAutocompleteInput}
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-auto hidden sm:block"
            />
          </div>
          <div className="flex items-center flex-wrap gap-4 md:p-3 justify-center w-full md:w-auto">
            <Link
              to="/supplier"
              className="text-purple-600 underline text-xs sm:text-sm font-poppins"
            >
              View Supplier List
            </Link>
            <Link
              to="/return"
              className="text-purple-600 underline text-xs sm:text-sm font-poppins"
            >
              View Return List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

let data = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Federated States Of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
