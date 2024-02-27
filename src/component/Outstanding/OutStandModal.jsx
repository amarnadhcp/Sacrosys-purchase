import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Select } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

function OutStandModal({ closeModal, rowData }) {
  const [imagePreview, setImagePreview] = useState(null); // preview image state

  useEffect(() => { // Close modal when clicked outside
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("bg-default")) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeModal]);

  const initialValues = {
    paymentType: "cash",
    amount: "",
    checkDate: new Date().toISOString().split("T")[0],
    checkNumber: "",
  };

  // schema based on paymentType
  const validationSchema = Yup.lazy((values) => {
    switch (values.paymentType) {
      case "cash": return cashSchema;
      case "check": return checkSchema;
      default: return Yup.object();
    }
  });

  const { values,errors,touched,handleBlur,handleSubmit,handleChange,setFieldValue, } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await validationSchema.validate(values, { abortEarly: false });
        console.log("Form values:", values);
        closeModal();
      } catch (error) {
        console.error("Validation error:", error);
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFieldValue("imageUrl", reader.result);
      };
      reader.readAsDataURL(file);
    } 
  };
  

  return (
    <motion.div className="fixed inset-0 bg-default bg-opacity-80 flex justify-center items-center px-4 z-30"{...modalBackgroundAnimation}>
      <motion.div className="bg-custom-cream w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-4 md:p-6"{...modalContentAnimation}>
        <div className="flex flex-col font-inter text-black text-xs">
          {/* Payment Method */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <label className="w-1/4 text-right pr-4 text-xs">
                Payment Method
              </label>
              <Select
                name="paymentType"
                variant="filled"
                value={values.paymentType}
                style={{ flex: 1, height: 35 }}
                options={[
                  { value: "cash", label: "CASH" },
                  { value: "check", label: "CHECK" },
                ]}
                alignContent="start"
                onChange={(value) => {
                  console.log(value);
                  setFieldValue("paymentType", value);
                }}
              />
              {touched.paymentType && errors.paymentType && (
                <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                  {errors.paymentType}
                </span>
              )}
            </div>
          </div>

          {/* Conditional Rendering */}
          {values.paymentType === "check" && (
            <>
              <div className="flex flex-col mt-2">
                <div className="flex items-center">
                  <label className="w-1/4 text-right pr-4 text-xs">
                    Cheque No
                  </label>
                  <input
                    type="number"
                    name="checkNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.checkNumber}
                    className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none"
                  />
                </div>
                  {touched.checkNumber && errors.checkNumber && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.checkNumber}
                    </span>
                  )}
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex items-center">
                  <label
                    htmlFor="date"
                    className="w-1/4 text-right pr-4 text-xs"
                  >
                    Cheque Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="checkDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.checkDate}
                    className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none"
                  />
                </div>
                  {touched.checkDate && errors.checkDate && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.checkDate}
                    </span>
                  )}
              </div>
            </>
          )}

          {/* Amount Input */}
          <div className="flex flex-col mt-2">
            <div className="flex items-center">
              <label className="w-1/4 text-right pr-4 text-xs">Amount</label>
              <input
                type="number"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
                className="p-2 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none"
              />
            </div>
            {touched.amount && errors.amount && (
                <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                  {errors.amount}
                </span>
              )}
          </div>

          {values.paymentType === "check" && (
          <>
          <div className="flex items-center mt-2 justify-end">
            {imagePreview && (
              <div className="flex justify-start items-center mb-2 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-16 mb-2 h-auto mr-4"
                />
                <button
                  className="absolute top-0 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition ease-in duration-200"
                  onClick={() =>{ setImagePreview(null); setFieldValue("imageUrl", "")}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 11.414l4.95 4.95a1 1 0 001.414-1.414L11.414 10l4.95-4.95a1 1 0 00-1.414-1.414L10 8.586 5.05 3.636a1 1 0 00-1.414 1.414L8.586 10l-4.95 4.95a1 1 0 001.414 1.414L10 11.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
            <label
              htmlFor="photo-upload"
              className="text-purple-600 text-left mr-2 font-inter underline cursor-pointer text-sm"
            >
              Upload Photo
            </label>
            <input
            key={Math.random()} 
              type="file"
              id="photo-upload"
              name="photo-upload"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          </>
          )}

          {/* Buttons */}
          <div className="flex justify-end mt-4">
            <button
              className="py-2 px-12 ml-2 mr-2 rounded-md border-2 border-gray-300 bg-white text-black"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-2 px-12 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-poppins"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default OutStandModal;

  // schema for cash payment
  const cashSchema = Yup.object().shape({
    amount: Yup.number()
      .required("Amount is required")
      .positive("Amount must be a positive number"),
  });

  // schema for check payment
  const checkSchema = Yup.object().shape({
    amount: Yup.number().required("Amount is required")
    .positive("Amount must be a positive number"),
    checkNumber: Yup.string().required("Check Number is required"),
    checkDate: Yup.date()
      .required("Check Date is required")
      .max(new Date(), "Check Date must be today or earlier"),
  });

const modalBackgroundAnimation = {
  //animation design
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.1 },
};

const modalContentAnimation = {
  initial: { scale: 0.8, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};
