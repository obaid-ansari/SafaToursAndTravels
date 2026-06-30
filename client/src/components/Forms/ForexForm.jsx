import React, { useState, useEffect } from "react";
import allCountryCodes from "../../data/countryCode";
import CountryCodeAutocomplete from "../CountryCodeAutocomplete";
import { forexApi } from "../../services/form.service";
import toast from "react-hot-toast";

const ForexForm = () => {
  // --- State Management ---
  const [submitStatus, setSubmitStatus] = useState("Submit");

  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    location: "",
  });

  const [forexDetails, setForexDetails] = useState({
    currency: "USD",
    quantity: 0,
    purpose: "Business",
  });

  const [rates, setRates] = useState({});
  const [convertedPrice, setConvertedPrice] = useState(0);

  // Fetch exchange rates on mount
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/INR")
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch((err) => console.error("Error fetching rates:", err));
  }, []);

  // Calculate converted price whenever currency or quantity changes
  useEffect(() => {
    if (rates[forexDetails.currency] && forexDetails.quantity > 0) {
      // Rates are base INR, so 1 INR = X Currency.
      // To get INR value: Quantity / Rate
      const price = forexDetails.quantity / rates[forexDetails.currency];
      setConvertedPrice(Math.ceil(Number(price.toFixed(2))));
    } else {
      setConvertedPrice(0);
    }
  }, [forexDetails.currency, forexDetails.quantity, rates]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleForexChange = (e) => {
    const { name, value } = e.target;
    setForexDetails((prev) => ({ ...prev, [name]: value }));
  };

  const sendForexDetails = async (data) => {
    try {
      setSubmitStatus("Submitting...");
      const response = await forexApi(data);
      if (response.status === 200) {
        setPersonalDetails({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          location: "",
        });

        setForexDetails({
          currency: "USD",
          quantity: 0,
          purpose: "Business",
        });

        setConvertedPrice(0);
        toast.success(response.data.message);
        setSubmitStatus("Submitted");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send email.");
      setSubmitStatus("Submit");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { personalDetails, forexDetails, convertedPrice };
    sendForexDetails(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="card-body">
      <div className="card-header text-center text-color mb-3">
        <h1 className="mb-1 fw-bold">Forex Exchange</h1>
      </div>

      {/* SECTION 1: Personal Details */}
      <h4 className="mb-2 text-color fw-bold pb-2">Personal Details</h4>
      <div className="row g-2 mb-3">
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Full Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg fs-6"
            name="name"
            placeholder="e.g. Jane Doe"
            value={personalDetails.name}
            onChange={handlePersonalChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Email Address
          </label>
          <input
            type="email"
            className="form-control form-control-lg fs-6"
            name="email"
            placeholder="e.g. jane@example.com"
            value={personalDetails.email}
            onChange={handlePersonalChange}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Phone Number
          </label>
          <div className="input-group">
            <CountryCodeAutocomplete
              name="countryCode"
              value={personalDetails.countryCode}
              onChange={handlePersonalChange}
              countries={allCountryCodes}
            />

            <input
              type="tel"
              className="form-control form-control-lg fs-6"
              name="phone"
              placeholder="Phone number"
              value={personalDetails.phone}
              onChange={handlePersonalChange}
              required
            />
          </div>
        </div>

        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Your Location
          </label>
          <input
            type="text"
            className="form-control form-control-lg fs-6"
            name="location"
            placeholder="e.g. Mumbai"
            value={personalDetails.location}
            onChange={handlePersonalChange}
            required
          />
        </div>
      </div>

      {/* SECTION 2: Exchange Details */}
      <h4 className="mb-2 text-color fw-bold pb-2">Exchange Details</h4>
      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Currency
          </label>
          <select
            className="form-select form-select-lg fs-6"
            name="currency"
            value={forexDetails.currency}
            onChange={handleForexChange}
          >
            {Object.keys(rates).map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Quantity
          </label>
          <input
            type="number"
            min={1}
            className="form-control form-control-lg fs-6"
            name="quantity"
            value={forexDetails.quantity}
            onChange={handleForexChange}
            onKeyDown={(e) => {
              if (
                e.key === "-" ||
                e.key === "+" ||
                e.key === "e" ||
                e.key === "E"
              ) {
                e.preventDefault();
              }
            }}
            onPaste={(e) => {
              const text = e.clipboardData.getData("text");
              if (text.includes("-")) {
                e.preventDefault();
              }
            }}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Purpose
          </label>
          <select
            className="form-select form-select-lg fs-6"
            name="purpose"
            value={forexDetails.purpose}
            onChange={handleForexChange}
          >
            <option value="Business Travel">Business</option>
            <option value="Education">Education</option>
            <option value="Personal">Travel</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Converted Price (INR)
          </label>
          <input
            type="text"
            className="form-control form-control-lg fs-6"
            value={`₹ ${convertedPrice}`}
            disabled
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-100 btn border-0 dark-bg text-white fw-bold shadow-sm py-2 text-uppercase"
          disabled={submitStatus === "Submitting..."}
        >
          <span className="d-block m-0 p-0">{submitStatus}</span>
        </button>
      </div>
    </form>
  );
};

export default ForexForm;
