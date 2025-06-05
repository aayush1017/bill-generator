import React, { useEffect } from "react";
import BankankDetails from "./bankDetails";
import Signature from "./signature";
import { wordify } from "./amountInwords";

const InvoiceDetails = ({ formData, beforeTax }) => {
  const handlePrint = () => {
    window.document.title = `Invoice_${formData.invoiceNo}`;
    window.print();
    // Reset the title after printing
    window.document.title = "Original Title";
    // window.location.reload();
  };

  useEffect(() => {
    const handleBeforePrint = () => {
      // Set the filename as the title of the print window
      window.document.title = `Invoice_${formData.invoiceNo}`;
    };

    window.addEventListener("beforeprint", handleBeforePrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
    };
    window.location.reload();
  }, [formData.invoiceNo]); // Re-run effect when invoiceNo changes

  const handleAfterPrint = () => {
    // Reset the title after printing
    window.document.title = "Original Title";
    // Refresh the page
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-end my-4">
        <button
          className="print-hidden bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePrint}
        >
          Print
        </button>
        {/* <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleDownload}
            >
              Download
            </button> */}
      </div>

      <div
        id="invoiceDiv"
        className="max-w mx-5 mt-5 p-4 bg-white shadow-lg rounded-md border border-gray-500"
      >
        <h6 className="text-m text-center underline mb-2">Tax Invoice</h6>
        <div className="flex place-content-between mb-2">
          <h6 className="text-sm">GSTIN: 37AIYPS2678G1ZB</h6>
          <div className="flex gap-2">
            <h6 className="text-sm">Cell:</h6>
            <h6 className="text-sm">
              9441070270
              <br />
              7330623466
            </h6>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold italic">
            Sri Rajendra Jewel Palace
          </h2>
          <div className="flex place-items-center justify-center">
            <p className="text-sm">Proprietor: </p>
            <p className="ml-2">Rajendra Kumar Jain Sait</p>
          </div>
          <p>19-2-25, Vanguri Vari Street, Tanuku - 534211, W.G. Dt, AP.</p>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between mb-2">
            <span>{`Name: ${formData.name}`}</span>
            <span>{`Invoice No: ${formData.invoiceNo}`}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Address: Tanuku</span>
            <span>{`Date: ${formData.date}`}</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table
            style={{ height: "250px" }}
            className=" min-w-full border-collapse border border-gray-300"
          >
            <thead className="bg-gray-200">
              <tr className="">
                <th className="border border-gray-300 ">S No.</th>
                <th className="border border-gray-300 ">Description</th>
                <th className="border border-gray-300 ">HSN Code</th>
                <th className="border border-gray-300">Weight</th>
                <th className="border border-gray-300">Rate</th>
                <th className="border border-gray-300 px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 text-center">1</td>
                <td className="border border-gray-300 text-center">
                  {formData.material === "Gold"
                    ? "Pure Gold"
                    : formData.material === "Silver"
                    ? "Silver Article"
                    : "Silver Jewellery"}
                </td>
                <td className="border border-gray-300 text-center">
                  {`${formData.material === "Gold" ? "7113" : "7114"}`}
                </td>
                <td className="border border-gray-300 text-center">
                  {`${
                    ["Silver", "Silver Jewellery"].includes(formData.material)
                      ? Math.floor(beforeTax / formData.rate)
                      : parseFloat((beforeTax / formData.rate).toFixed(3))
                  } grams`}
                </td>
                <td className="border border-gray-300 text-center">
                  {formData.rate}
                </td>
                <td className="border border-gray-300 text-center">
                  {beforeTax}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-t border-gray-300 pt-4 flex mb-4 justify-between">
          <div>
            <span className="font-semibold underline text-sm">
              Total Invoice Amount Inwords:{" "}
            </span>
            <span className="pl-2 pr-6 text-sm">
              {wordify(formData.totalAmount)}{" "}
            </span>
            <br />
            <BankankDetails />
          </div>
          <div>
            <div className="flex justify-end mb-2 gap-10">
              <span className="font-semibold text-sm">
                Total Amount before tax
              </span>
              <span>{beforeTax}</span>
            </div>
            <div className="flex justify-end mb-2 gap-10">
              <span className="font-semibold text-sm">CGST 1.5%</span>
              <span className="text-sm">
                {(formData.totalAmount - beforeTax) / 2}
              </span>
            </div>
            <div className="flex justify-end mb-2 gap-10">
              <span className="font-semibold text-sm">SGST 1.5%</span>
              <span className="text-sm">
                {(formData.totalAmount - beforeTax) / 2}
              </span>
            </div>
            <div className="flex justify-end gap-10">
              <span className="font-semibold text-sm">Total:</span>
              <span className="text-sm">{formData.totalAmount}</span>
            </div>
          </div>
        </div>
        <Signature />
        <div className="border-t border-gray-300 pt-2 text-center">
          <span className="text-xs text-gray-600">
            This is a Computer Generated Invoice
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
