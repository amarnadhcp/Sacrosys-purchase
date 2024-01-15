import React from 'react';
import SearchIcon from '../../assests/images/search.svg';

function SearchBar() {
  return (
    <div className="flex justify-between items-center bg-white p-4">
      <div className=" flex items-center">
        <label htmlFor="search-input" className="mx-4 text-gray-800 text-sm font-Inter font-bold text-sm">
          Search
        </label>
        <div className="relative flex items-center mr-4">
          <input
            id="search-input"
            className="py-2 pl-2 pr-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-400"
            type="text"
            placeholder="268585225278"
          />
          <img src={SearchIcon} alt="Search Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-purple-600 underline text-sm font-Poppins">
            View Supplier List
          </a>
          <a href="#" className="text-purple-600 underline text-sm font-Poppins">
            View Return List
          </a>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2.5">
        <button className="flex justify-center items-center gap-2.5 px-2.5 py-2 rounded-lg bg-purple-600 text-white">
          Entry
        </button>
        <a href="#" className="text-purple-700 text-sm font-normal">
          Outstanding
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
