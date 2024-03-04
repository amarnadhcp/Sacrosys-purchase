import React from "react";
import SearchIcon from "../../assests/images/search.svg";
import { Link } from "react-router-dom";
import Autocomplete from "../AutoComplete/Autocomplete";

function SearchBar({ show,data,onSelect }) {
  const VendorButtonClass = show === "Vendor" ? "bg-purple-600 text-white" : "text-purple-600";
  const ReturnButtonClass = show === "Return" ? "bg-purple-600 text-white" : "text-purple-600";

  return (  
    <div className="flex flex-wrap justify-between items-center bg-default  mb-2">
      <div className="flex">
      <label
          htmlFor="search-input "
          className="mx-1 text-gray-800 text-sm mt-3 font-inter hidden md:block px-2.5 py-2"
        >
          Search
        </label>
        <div className="flex flex-wrap">
          <div className="relative flex items-center justify-center sm:justify-center w-full md:w-auto">
            <Autocomplete
              suggestions={data}
              width="64"
              MinWidth="80"
              height="10"
              onSelect={onSelect} 
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-auto hidden sm:block"
            />
          </div>
          <div className="flex items-center flex-wrap gap-2 md:p-3 justify-center w-full md:w-auto">
            <Link
              to="/supplier"
              className={` rounded-lg px-2.5 py-2 text-xs sm:text-sm  ${VendorButtonClass}`}
            >
              View Vendor List
            </Link>
            <Link
              to="/return"
              className={`rounded-lg px-2.5 py-2 text-xs sm:text-sm  ${ReturnButtonClass}`}
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

