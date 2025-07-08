import React, { useState, useEffect } from "react";
import axios from "axios";

const Forex = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    currency: "",
    quantity: "",
    purpose: "",
    amount: "",
  });

  const [exchangeRates, setExchangeRates] = useState({});
  const [currencyNames, setCurrencyNames] = useState({});
  const [submitStatus, setSubmitStatus] = useState("Submit");

  useEffect(() => {
    // Fetch exchange rates from API
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/INR"
        );
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (formData.currency && formData.quantity) {
      const rate = exchangeRates[formData.currency];
      if (rate) {
        const convertedAmount = Math.ceil(formData.quantity / rate); // Always round up to nearest integer
        setFormData((prevState) => ({
          ...prevState,
          amount: convertedAmount,
        }));
      }
    }
  }, [formData.currency, formData.quantity, exchangeRates]);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Submitting...");
    try {
      const res = await axios.post(
        "/api/forex",
        formData
      );
      alert(res.data.message);
      setSubmitStatus("Submitted");
    } catch (error) {
      alert("Failed to send message");
      setSubmitStatus("Submit");
    }
    console.log(formData); // Check the formatted data before submission
  };

  return (
    <div
      className="form"
      id="forex-exchange-form-wrapper"
      style={{ display: "flex" }}>
      <div className="form-container rounded-4 p-3">
        <h3 className="text-center fw-bolder text-uppercase">Forex Exchange</h3>
        <form onSubmit={handleSubmit}>
          <h5>Personal Details</h5>
          <div className="flex-container my-2">
            <input
              className="form-control my-1 fw-bold"
              type="text"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="form-control my-1 fw-bold"
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="form-control my-1 fw-bold"
              type="tel"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <h5>Exchange Details</h5>
          <div className="inputs my-2 d-flex flex-wrap gap-2">
            <input
              className="form-control my-1 fw-bold"
              type="text"
              id="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <select
              className="form-control my-1 fw-bold"
              id="currency"
              value={formData.currency}
              onChange={handleChange}>
              <option value="">Select Currency</option>
              {Object.keys(exchangeRates).map((curr) => (
                <option key={curr} value={curr}>{`${curr}`}</option>
              ))}
            </select>
            <input
              className="form-control my-1 fw-bold"
              type="number"
              id="quantity"
              placeholder="Enter Quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
            />
            <select
              className="form-control my-1 fw-bold"
              id="purpose"
              value={formData.purpose}
              onChange={handleChange}>
              <option value="">Select Purpose</option>
              <option value="Business">Business</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
            </select>
            <input
              className="form-control my-1 fw-bold"
              type="number"
              id="amount"
              placeholder="Amount INR"
              value={formData.amount}
              readOnly
            />
          </div>

          <button
            type="submit"
            className="btn btn-success fw-bold col-12"
            disabled={submitStatus === "Submitting..."}>
            {submitStatus}
          </button>
        </form>
        <button
          type="button"
          className="btn btn-lg mt-3 fw-bold mx-3"
          onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default Forex;
