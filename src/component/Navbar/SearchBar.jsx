import React, { useEffect, useState } from "react";
import SearchIcon from "../../assests/images/search.svg";
import { Link } from "react-router-dom";
import {  AutoComplete } from "antd";
import { fetchDataFromApi } from "../../services/Api";

function SearchBar() {
    /// auto complete state
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
  
    // function Debound reduce api calingg
    const debounce = (func, delay) => {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };
  
    // Api calling with Debouncing
    const getPanelValue = debounce(async (searchText) => {
      try {
        setLoading(true);
        !searchText.trim()
          ? setOptions([])
          : setOptions(
              await fetchDataFromApi(searchText).then((results) =>
                results.map((result) => ({ value: result.name }))
              )
            );
      } catch (error) {
        console.error("Error :", error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, 300);
    
    //form submition function 
    const handleSubmit=(e)=>{
      e.preventDefault();
    console.log("save");
    }
  
    //for unmounting the sate
    useEffect(() => {
      return () => setOptions([]);
    }, []);

  return (
    <div className="flex flex-wrap overflow-hidden justify-between items-center bg-default my-4 ">
      <div className="flex">
        <label
          htmlFor="search-input "
          className="mx-4 text-gray-800 text-sm mt-3 font-inter hidden md:block"
        >
          Search
        </label>
        <div className="flex flex-wrap">
          <div className="relative flex items-center mr-4 w-full md:w-auto">
          <AutoComplete
              options={options}
              type={"primary"}
              size="large"
              style={{ width: "100%",minWidth: "200px" }}
              placeholder="Search for a supplier"
              variant="filled"
              onSearch={(text) => getPanelValue(text)}
              onSelect={(value) => console.log("Selected:", value)}
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <div className="flex items-center flex-wrap gap-4 p-3 justify-center w-full md:w-auto">
            <Link
              to="/supplier"
              className="text-purple-600 underline text-sm font-poppins"
            >
              View Supplier List
            </Link>
            <Link
              to="/return"
              className="text-purple-600 underline text-sm font-poppins"
            >
              View Return List
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar