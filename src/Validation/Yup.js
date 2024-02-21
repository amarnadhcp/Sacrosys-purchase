import * as Yup from "yup";

export const Suppliervalidation = Yup.object().shape({
  supplierCode: Yup.string().required("Supplier Code is required"),
  supplierName: Yup.string().required("Supplier Name is required"),
  supplierType: Yup.string().required("Supplier Type is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  address: Yup.string()
    .required("Address is required")
    .max(100, "Address too long!"),
  postalCode: Yup.number()
    .typeError("Postal Code must be a number")
    .positive("Postal Code must be positive")
    .integer("Postal Code must be an integer")
    .required("Postal Code is required"),
  taxRegNo: Yup.number()
    .typeError("Tax Registration Number must be a number")
    .positive("Tax Registration Number must be positive")
    .integer("Tax Registration Number must be an integer")
    .required("Tax Registration Number is required"),
  fssaiNo: Yup.number()
    .typeError("FSSAI Number must be a number")
    .positive("FSSAI Number must be positive")
    .integer("FSSAI Number must be an integer")
    .required("FSSAI Number is required"),
  panCardNo: Yup.string()
    .required("PAN Card is required")
    .min(10, "PAN Card No too short!")
    .max(10, "PAN Card No too long!")
    .matches(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/, "Invalid PAN Card No format"),
  landPhone: Yup.string()
    .required("Land Phone is required")
    .matches(/^\d+$/, "Invalid Land Phone Number"),
  mobileNo: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d+$/, "Invalid Mobile Number"),
  whatsappNo: Yup.string()
    .required("WhatsApp Number is required")
    .matches(/^\d+$/, "Invalid WhatsApp Number"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  bankName: Yup.string().required("Bank Name is required"),
  accountNo: Yup.string()
    .required("Account Number is required")
    .matches(/^\d+$/, "Invalid Account Number"),
  upi: Yup.string().required("UPI ID is required"),
  iban: Yup.number()
  .typeError("IBAN must be a number")
  .required("IBAN is required"),
  openingBalance: Yup.number()
  .positive("Must be positive")
  .integer("Must be an integer")
  .required("Opening balance is required"),
  balanceType: Yup.mixed()
  .oneOf(["Credit", "Debit"], "Must select either Credit or Debit")
  .nullable(),
  creditedDate: Yup.string() // added this line
  .required("Credited Date is required")
  .matches(
    /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "Invalid date format "
  ),
});
