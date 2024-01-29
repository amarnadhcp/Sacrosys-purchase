import React, { useEffect, useState } from "react";
import PlusIcon from "../../assests/images/AddNew.svg";
import SupplierCreation from "./SupplierCreation";
import NavigationBar from "../Navbar/NavigationBar";
import { AutoComplete, Spin } from "antd";
import { fetchDataFromApi } from "../../services/Api";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function EntryForm() {
  const [mode, setMode] = useState("dar");

  // modal opeing state management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
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

  const [paymentType, setPayment] = useState(10);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("save");
  };

  //for unmounting the sate
  useEffect(() => {
    return () => setOptions([]);
  }, []);

  return (
    <div className="my-0 mx-auto flex flex-col items-end text-xs md:text-base overflow-auto mt-0 ">
      <NavigationBar />
      <form
        onSubmit={handleSubmit}
        className="transaction-form w-full text-md md:text-base font-inter"
      >
        <div className="flex items-center justify-between mb-4">
          <label className="flex gap-2 w-1/4 text-left">Supplier</label>
          <div className="flex justify-between w-3/4">
            <AutoComplete
              options={options}
              type={"primary"}
              size="large"
              style={{ width: "80%" }}
              placeholder="Search for a supplier"
              variant="filled"
              onSearch={(text) => getPanelValue(text)}
              onSelect={(value) => console.log("Selected:", value)}
            />

            <img
              src={PlusIcon}
              alt="Add new"
              className="cursor-pointer"
              onClick={toggleModal}
            />
          </div>
          {loading && <Spin size="large" style={{ marginLeft: "8px" }} />}
          {isModalOpen && <SupplierCreation />}
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="date" className="inline-block w-1/4 text-left ">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="w-3/4 p-2 cursor-text rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 cursor: pointer; "
          />
        </div>

        <div className="flex items-center mb-4">
          <label
            htmlFor="invoice-number"
            className="inline-block w-1/4 text-left"
          >
            Invoice number
          </label>
          <input
            type="text"
            id="invoice-number"
            name="invoice-number"
            defaultValue="26855285278"
            className="w-3/4 p-2 rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 font-inter"
          />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="amount" className="inline-block w-1/4 text-left">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            defaultValue="1000"
            className="w-3/4 p-2 rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 font-inter"
          />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="vat" className="inline-block w-1/4 text-left">
            VAT
          </label>
          <input
            type="number"
            id="vat"
            name="vat"
            defaultValue="100"
            className="w-3/4 p-2 rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 font-inter"
          />
        </div>

        <div className="flex items-center">
          <label className="inline-block w-1/4 text-left">Cash / Credit</label>
          <Select
            value={paymentType}
            onChange={(event) => setPayment(event.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              width: "77%",
              height: "40px",
              backgroundColor: mode === "dark" ? "#232323" : "#E9E9E9",
              color: mode === "dark" ? "white" : "black",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              "&:hover": {
                outline: "none",
                    border: "1px solid purple", 
              },
            }}
            MenuProps={{
              sx: {
                "& .MuiMenu-paper": {
                  backgroundColor: mode === "dark" ? "#232323" : "#E9E9E9",
                },
              },
            }}
          >
            <MenuItem
              value={10}
              sx={{
                backgroundColor: mode === "dark" ? "#232323" : "#E9E9E9",
                color: mode === "dark" ? "white" : "black",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#121212" : "#CCCCCC", 
                },
              }}
            >
              cash
            </MenuItem>
            <MenuItem
              value={20}
              sx={{
                backgroundColor: mode === "dark" ? "#232323" : "#E9E9E9",
                color: mode === "dark" ? "white" : "black",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#121212" : "#CCCCCC", 
                },
              }}
            >
              credit
            </MenuItem>
          </Select>
        </div>

        <div className="flex justify-end items-center my-2">
          <label
            htmlFor="photo-upload"
            className="text-purple-600 text-right  font-inter underline cursor-pointer text-sm "
          >
            Upload Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photo-upload"
            className="hidden"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-lg focus:outline-none"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EntryForm;
