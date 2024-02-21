import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { Suppliervalidation } from "../../Validation/Yup";

function SupplierCreation({ closeModal }) {
  useEffect(() => {
    //stoping baground scrolling
    const body = document.querySelector("body");
    body.style.overflow = closeModal ? "hidden" : "auto";
    // Close modal when clicked outside
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("bg-default")) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeModal]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Suppliervalidation,
    onSubmit: async (values) => {
      if (isValid) {
        console.log(values);
      }
    },
  });

  return (
    <motion.div className="fixed inset-0 bg-default bg-opacity-80 flex justify-center items-center px-4 z-50 overflow-auto"{...modalBackgroundAnimation}>
      <motion.div className="bg-custom-cream w-full max-w-4xl rounded-lg shadow-lg p-4 md:p-6 overflow-y-auto max-h-screen mt-10 md:mt-24 mb-10 md:mb-20"{...modalContentAnimation}>
        <div className="flex flex-col md:flex-row justify-between gap-3 overflow-y-auto">
          {/* LEFT */}
          <div className="w-full md:w-1/2 md:pr-4 ">
            <div className="font-poppins text-black text-xs  md:mb-4">
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">supplierCode</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="supplierCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.supplierCode}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.supplierCode && errors.supplierCode && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.supplierCode}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Supplier name</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="supplierName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.supplierName}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.supplierName && errors.supplierName && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.supplierName}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Supplier type</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="supplierType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.supplierType}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.supplierType && errors.supplierType && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.supplierType}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Country</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.country && errors.country && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.country}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">State</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.state}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.state && errors.state && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.state}
                    </span>
                  )}
                </div>
              </div>
              {/* Input  */}
              <div className="flex items-center mb-2">
                <label className="w-1/3 text-right pr-4">Address</label>
                <div className="w-2/3 flex flex-col">
                  <textarea
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    className="p-1 flex-grow h-[74px] bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.address && errors.address && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.address}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Postal code</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="postalCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postalCode}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.postalCode && errors.postalCode && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.postalCode}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">TAX reg No</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="taxRegNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.taxRegNo}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.taxRegNo && errors.taxRegNo && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.taxRegNo}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">FSSAI No</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="fssaiNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fssaiNo}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.fssaiNo && errors.fssaiNo && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.fssaiNo}
                    </span>
                  )}
                </div>
              </div>
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">PAN card No</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="panCardNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.panCardNo}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.panCardNo && errors.panCardNo && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.panCardNo}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE INPUTS  */}
          <div className="w-full md:w-1/2 md:pl-4">
            <div className="font-poppins text-black text-xs mb-4">
              {/* inputs */}
              <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Land phone</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="landPhone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.landPhone}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.landPhone && errors.landPhone && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.landPhone}
                    </span>
                  )}
                </div>
              </div>
               {/* inputs */}
               <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Mobile No</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="mobileNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobileNo}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.mobileNo && errors.mobileNo && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.mobileNo}
                    </span>
                  )}
                </div>
              </div>
               {/* inputs */}
               <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Whatsapp No</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="whatsappNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.whatsappNo}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.whatsappNo && errors.whatsappNo && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.whatsappNo}
                    </span>
                  )}
                </div>
              </div>
                {/* inputs */}
                <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Email</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
                {/* inputs */}
                <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Bank name</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="bankName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bankName}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.bankName && errors.bankName && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.bankName}
                    </span>
                  )}
                </div>
              </div>
                {/* inputs */}
                <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Account No</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="accountNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.accountNo}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.accountNo && errors.accountNo && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.accountNo}
                    </span>
                  )}
                </div>
              </div>
                {/* inputs */}
                <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">UPI</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="upi"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.upi}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.upi && errors.upi && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.upi}
                    </span>
                  )}
                </div>
              </div>
                {/* inputs */}
                <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">IBAN</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="iban"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.iban}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.iban && errors.iban && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.iban}
                    </span>
                  )}
                </div>
              </div>
                 {/* inputs */}
                 <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Opening balance</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="number"
                    name="openingBalance"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.openingBalance}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.openingBalance && errors.openingBalance && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.openingBalance}
                    </span>
                  )}
                </div>
              </div>
                 {/* inputs */}
                 <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Balance type</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="text"
                    name="balanceType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.balanceType}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.balanceType && errors.balanceType && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.balanceType}
                    </span>
                  )}
                </div>
              </div>
                 {/* inputs */}
                 <div className="flex items-center mb-2 ">
                <label className="w-1/3 text-right pr-4">Credit date</label>
                <div className="w-2/3 flex flex-col">
                  <input
                    type="date"
                    name="creditedDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.creditedDate}
                    className="p-1.5 flex-grow bg-inputColor rounded-lg text-sm focus:outline-none ml-2"
                  />
                  {touched.creditedDate && errors.creditedDate && (
                    <span className="text-red-500 text-[10px] mt-0 text-end mr-1">
                      {errors.creditedDate}
                    </span>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button
            className="py-1 px-6 ml-2 mr-2 rounded-md border-2 border-red-500 bg-white text-black font-poppins"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="py-1 px-8 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:bg-purple-700 text-white font-poppins"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SupplierCreation;

const initialValues = {
  supplierCode: "",
  supplierName: "",
  supplierType: "",
  country: "",
  state: "",
  address: "",
  postalCode: "",
  taxRegNo: "",
  fssaiNo: "",
  panCardNo: "",
  landPhone: "",
  mobileNo: "",
  whatsappNo: "",
  email: "",
  bankName: "",
  accountNo: "",
  upi: "",
  iban: "",
  openingBalance: "",
  balanceType: "",
  creditedDate: new Date().toISOString().split("T")[0], // added this line
};


const modalBackgroundAnimation = { //animation design
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.1 },
};

const modalContentAnimation = {
  initial: { scale: 0.8, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};
