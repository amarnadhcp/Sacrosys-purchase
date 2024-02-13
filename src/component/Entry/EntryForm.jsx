import React, { useState } from "react";
import PlusIcon from "../../assests/images/AddNew.svg";
import SupplierCreation from "./SupplierCreation";
import NavigationBar from "../Navbar/NavigationBar";
import Autocomplete from "../AutoComplete/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as Yup from "yup";
import { useFormik } from "formik";

function EntryForm() {
  const [mode, setMode] = useState("dar");
   /// autcomplete seggestions
  const [autocompleteInput, setAutocompleteInput] = useState("");
  const handleAutocompleteInput = (input) => {
    setAutocompleteInput(input);
  };
  // formik initialValues
  const initialValues = {
    invoiceNum: "",
    date: new Date().toISOString().split("T")[0],
    amount: "",
    vat: "",
    paymentType: "",
  };
  // modal opeing state management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  /// cash or credit selection
  const [paymentType, setPayment] = useState(10);

  //form submition function and validation
  const { values, errors, touched, handleBlur, handleSubmit, handleChange,setFieldValue ,isValid } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        if (isValid) {
          console.log(values);
        }
      },
    });

    //   preview image statte
    const [imagePreview, setImagePreview] = useState(null);

    // function to  file  change
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <div className="my-0 mx-auto flex flex-col items-end text-xs md:text-base overflow-auto mt-0 ">
      <NavigationBar />
      <form
        onSubmit={handleSubmit}
        className="transaction-form w-full text-md md:text-base font-inter "
      >
        <div className="flex items-center justify-between mb-4">
          <label className="flex gap-2 w-1/4 text-left">Supplier</label>
          <div className="flex justify-between w-3/4 ">
            <Autocomplete
              suggestions={data}
              heigh="10"
              onInputChange={handleAutocompleteInput}
              onSelect={(value) => setAutocompleteInput(value)}
            />

            <img
              src={PlusIcon}
              alt="Add new"
              className="cursor-pointer"
              onClick={toggleModal}
            />
          </div>
          {isModalOpen && <SupplierCreation />}
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="date" className="inline-block w-1/4 text-left ">
            Date
          </label>
          <div className="w-3/4 flex flex-col">
            <input
              type="date"
              id="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
              className="w-full p-2 cursor-text rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 cursor: pointer; "
            />
            {touched.date && errors.date && (
              <span className="text-red-500 text-xs mt-0 text-end mr-1">
                {errors.date}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label
            htmlFor="invoice-number"
            className="inline-block w-1/4 text-left"
          >
            Invoice number
          </label>
          <div className="w-3/4 flex flex-col">
            <input
              type=""
              name="invoiceNum"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.invoiceNum}
              className="w-full p-2 rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 font-inter"
            />
            {touched.invoiceNum && errors.invoiceNum && (
              <span className="text-red-500 text-xs mt-0.5 text-end mr-1  ">
                {errors.invoiceNum}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="amount" className="inline-block w-1/4 text-left">
            Amount
          </label>
          <div className="w-3/4 flex flex-col">
            <input
              type="number"
              id="amount"
              name="amount"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amount}
              
              className="w-full p-2 rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 font-inter"
            />
            {touched.amount && errors.amount && (
              <span className="text-red-500 text-xs mt-0 text-end mr-1">
                {errors.amount}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="vat" className="inline-block w-1/4 text-left">
            VAT
          </label>
          <div className="w-3/4 flex flex-col">
            <input
              type="number"
              id="vat"
              name="vat"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.vat}
              className="w-full p-2 rounded-lg bg-inputColor border focus:outline-none focus:border-purple-700 font-inter"
            />
            {touched.vat && errors.vat && (
              <span className="text-red-500 text-xs mt-0 text-end mr-1">
                {errors.vat}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <label className="inline-block w-1/4 text-left">Cash / Credit</label>
          <Select
            value={values.paymentType}
            onChange={(event) => {
              setFieldValue("paymentType", event.target.value);
            }}
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
              value="cash"
              sx={{
                backgroundColor: mode === "dark" ? "#232323" : "#E9E9E9",
                color: mode === "dark" ? "white" : "black",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#121212" : "#999999",
                },
              }}
            >
              Cash
            </MenuItem>
            <MenuItem
              value="credit"
              sx={{
                backgroundColor: mode === "dark" ? "#232323" : "#E9E9E9",
                color: mode === "dark" ? "white" : "black",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#121212" : "#999999",
                },
              }}
            >
              Credit
            </MenuItem>
          </Select>
        </div>
        {touched.paymentType && errors.paymentType && (
          <span className="text-red-500 text-xs text-end mt-1 ml-2 block">
            {errors.paymentType}
          </span>
        )}

        


        <div className="flex justify-end items-center my-2">
        {imagePreview && (
          <div className="flex justify-start items-center mb-2">
            <img src={imagePreview} alt="Preview" className="w-16 mb-2 h-auto mr-4" />
          </div>
        )}
          <label
            htmlFor="photo-upload"
            className="text-purple-600 text-left mr-2 font-inter underline cursor-pointer text-sm"
          >
            Upload Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photo-upload"
            className="hidden"
            onChange={handleFileChange}
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

//validation schema
const validationSchema = Yup.object().shape({
  date: Yup.string()
    .required("Date is required")
    .matches(
      /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Invalid date format "
    ),
  invoiceNum: Yup.string().required("Invoice Number is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  vat: Yup.number()
    .required("VAT is required")
    .positive("VAT must be a positive number"),
    paymentType: Yup.string().required("Payment Type is required")
});

//date to render
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
