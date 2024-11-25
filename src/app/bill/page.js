"use client";
import InvoiceDetails from "@/components/invoiceDetails";
import InvoiceForm from "@/components/invoiceForm";
import Navbar from "@/components/navbar/navbar";

import React, { useEffect, useState } from "react";

function BillPage() {
  const [beforeTax, setBeforeTax] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    invoiceNo: "",
    date: "",
    totalAmount: "",
    rate: "",
    material: "Silver", // Default material selection
  });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setBeforeTax(Math.floor((formData?.totalAmount / 103) * 100));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    localStorage.setItem("invoiceNo", formData.invoiceNo);
    // localStorage.setItem("rate", formData.rate);
  };

  useEffect(() => {
    const storedInvoiceNo = parseInt(localStorage.getItem("invoiceNo"));
    // console.log(typeof storedInvoiceNo);
    // const storedRate = parseInt(localStorage.getItem("rate"));
    if (storedInvoiceNo) {
      setFormData((prevData) => ({
        ...prevData,
        invoiceNo: storedInvoiceNo + 1,
        // rate: storedRate,
      }));
    }
  }, []);

  const isFormValid = () => {
    return (
      formData.name !== "" &&
      formData.date !== "" &&
      formData.invoiceNo !== "" &&
      formData.totalAmount !== "" &&
      formData.rate !== ""
    );
  };

  //   const handleDownload = () => {
  //     const printableContent = document.getElementById("invoiceDiv").innerHTML;
  //     const printWindow = window.open("", "_blank");
  //     printWindow.document.write(
  //       "<html><head><title>Printable Invoice</title></head><body>"
  //     );
  //     printWindow.document.write(printableContent);
  //     printWindow.document.write("</body></html>");
  //     printWindow.document.close();
  //     printWindow.print();
  //     printWindow.close();
  //   };

  return (
    <>
      {!show ? (
        <>
          {/* <Navbar /> */}
          <InvoiceForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isFormValid={isFormValid}
          />
        </>
      ) : (
        <InvoiceDetails formData={formData} beforeTax={beforeTax} />
      )}
    </>
  );
}

export default BillPage;
