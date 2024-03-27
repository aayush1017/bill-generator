import React from "react";

const InvoiceForm = ({ formData, handleChange, handleSubmit, isFormValid }) => {
  return (
    <div className="max-w-md mx-auto mt-5 p-4 bg-gray-100 rounded-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Name"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Date"
        />
        <input
          type="number"
          name="invoiceNo"
          value={formData.invoiceNo}
          onChange={handleChange}
          className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Invoice No"
        />
        <input
          type="number"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Total Amount"
        />
        <input
          type="number"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
          className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Today's Rate"
        />
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="material"
          >
            Type
          </label>
          <select
            name="material"
            id="material"
            value={formData.material}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
          </select>
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 text-white rounded-md focus:outline-none ${
            isFormValid()
              ? "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600"
              : "bg-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
