import React from "react";
import SearchIcon from "../../assests/images/search.svg";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="flex flex-wrap overflow-hidden justify-between items-center bg-white my-4">
      <div className="flex">
        <label
          htmlFor="search-input "
          className="mx-4 text-gray-800 font-Inter  text-sm mt-3 font-inter hidden md:block"
        >
          Search
        </label>
        <div className="flex flex-wrap" >
          <div className="relative flex items-center mr-4 w-full md:w-auto">
            <input
              id="search-input"
              className="w-full py-2 pl-2 pr-10 border-2 bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:border-purple-400"
              type="text"
              placeholder="268585225278"
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <div className="flex items-center flex-wrap gap-4 p-3 justify-center w-full md:w-auto">
            <Link
              to="supplier"
              className="text-purple-600 underline text-sm font-Poppins"
            >
              View Supplier List
            </Link>
            <Link
              to="return"
              className="text-purple-600 underline text-sm font-Poppins"
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