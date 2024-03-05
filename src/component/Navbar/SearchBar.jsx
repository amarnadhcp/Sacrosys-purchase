import React, { useState } from "react";
import SearchIcon from "../../assests/images/search.svg";
import { Link } from "react-router-dom";
import Autocomplete from "../AutoComplete/Autocomplete";

function SearchBar({ show, data, onSelect }) {
  const VendorButtonClass = show === "Vendor" ? "bg-purple-600 text-white" : "text-purple-600";
  const ReturnButtonClass = show === "Return" ? "bg-purple-600 text-white" : "text-purple-600";

  const [inputValue, setInputValue] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setInputValue(value);
    setIsSearchActive(true);
  };

  const handleClear = () => {
    onSelect(null); 
    setInputValue(""); 
    setIsSearchActive(false); 
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-default mb-2">
      <div className="flex">
        <label
          htmlFor="search-input"
          className="mx-1 text-gray-800 text-sm mt-3 font-inter hidden md:block px-2.5 py-2"
        >
          Search
        </label>
        <div className="flex flex-wrap items-center">
          <div className="relative flex items-center justify-center sm:justify-center w-full md:w-auto">
            <Autocomplete
              suggestions={data}
              width="64"
              MinWidth="80"
              height="10"
              onSelect={handleSelect}
              value={inputValue}
            />
            {isSearchActive && (
              <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none transition ease-in duration-200"

                onClick={handleClear}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
            {!isSearchActive && (
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4"
              />
            )}
          </div>
          <div className="flex items-center flex-wrap gap-2 md:p-3 justify-center w-full md:w-auto">
            <Link
              to="/supplier"
              className={`rounded-lg px-2.5 py-2 text-xs sm:text-sm ${VendorButtonClass}`}
            >
              View Vendor List
            </Link>
            <Link
              to="/return"
              className={`rounded-lg px-2.5 py-2 text-xs sm:text-sm ${ReturnButtonClass}`}
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
