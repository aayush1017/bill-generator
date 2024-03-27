import React from "react";

const BankankDetails = () => {
  return (
    <div className="border-2 border-gray-400 mt-2 p-4">
      <h1 className="font-semibold text-center underline text-gray-600">
        Bank Details
      </h1>
      <p className="text-sm mt-1 text-gray-600">Bank Name: HDFC Bank</p>
      <p className="text-sm text-gray-600">
        Bank Account Number: 999999441070270
      </p>
      <p className="text-sm text-gray-600">IFSC Code: HDFC0000741</p>
    </div>
  );
};

export default BankankDetails;
