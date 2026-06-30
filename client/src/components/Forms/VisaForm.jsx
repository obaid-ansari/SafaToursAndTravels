import React, { useState, useEffect } from "react";
import allCountryCodes from "../../data/countryCode";
import CountryCodeAutocomplete from "../CountryCodeAutocomplete";
import { visaApi } from "../../services/form.service";
import toast from "react-hot-toast";

const VisaForm = () => {
  const [submitStatus, setSubmitStatus] = useState("Submit");

  // --- State Management ---
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    countryCode: "+91", // Default to US, change as needed
    phone: "",
  });

  const [visaDetails, setVisaDetails] = useState({
    tripType: "single",
    purpose: "Tourism",
    visaType: "Tourist Visa",
    departureDate: "",
    returnDate: "",
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleVisaChange = (e) => {
    const { name, value } = e.target;

    setVisaDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendVisaDetails = async (data) => {
    try {
      setSubmitStatus("Submitting...");
      const response = await visaApi(data);
      if (response.status === 200) {
        setPersonalDetails({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
        });

        setVisaDetails({
          tripType: "single",
          purpose: "Tourism",
          visaType: "Tourist Visa",
          departureDate: "",
          returnDate: "",
        });
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

    if (visaDetails.tripType === "round" && !visaDetails.returnDate) {
      setValidationError("Please select a return date.");
      return;
    }

    const payload = {
      personalDetails,
      visaDetails,
    };

    sendVisaDetails(payload);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="card-body">
        {/* SECTION 1: Personal Details */}

        <div className="card-header text-center text-color mb-3">
          <h1 className="mb-1 fw-bold">Visa Assistance</h1>
        </div>

        <h4 className="mb-2 text-color fw-bold pb-2">Personal Details</h4>
        <div className="row g-2 mb-3">
          <div className="col-md-4">
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

          <div className="col-md-4">
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

          <div className="col-md-4">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Phone Number
            </label>
            <div className="input-group">
              {/* REPLACED THE <select> WITH THIS */}
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
        </div>

        {/* SECTION 2: Flight Details */}

        <h4 className="mb-2 text-color fw-bold pb-2">Visa Details</h4>

        <div className="row g-3 mb-3">
          {/* One Way / Round Trip */}
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Travel Type
            </label>

            <div className="btn-group w-100" role="group">
              <input
                type="radio"
                className="btn-check"
                name="tripType"
                id="oneWay"
                value="single"
                checked={visaDetails.tripType === "single"}
                onChange={handleVisaChange}
              />

              <label
                className="btn trip-btn fw-bold border-1 border-black rounded-3 mx-1"
                htmlFor="oneWay"
              >
                One Way
              </label>

              <input
                type="radio"
                className="btn-check"
                name="tripType"
                id="roundTrip"
                value="round"
                checked={visaDetails.tripType === "round"}
                onChange={handleVisaChange}
              />

              <label
                className="btn trip-btn fw-bold border-1 border-black rounded-3 mx-1"
                htmlFor="roundTrip"
              >
                Round Trip
              </label>
            </div>
          </div>

          {/* Purpose */}
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Purpose of Visa
            </label>

            <select
              className="form-select form-select-lg fs-6"
              name="purpose"
              value={visaDetails.purpose}
              onChange={handleVisaChange}
              required
            >
              <option value="Tourism">Tourism</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Visa Type */}
          <div className="col-md-6">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Type of Visa
            </label>

            <select
              className="form-select form-select-lg fs-6"
              name="visaType"
              value={visaDetails.visaType}
              onChange={handleVisaChange}
              required
            >
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Departure */}
          <div className="col-md-3">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Travel Date
            </label>

            <input
              type="date"
              className="form-control form-control-lg fs-6"
              name="departureDate"
              value={visaDetails.departureDate}
              onChange={handleVisaChange}
              required
            />
          </div>

          {/* Return */}
          {visaDetails.tripType === "round" && (
            <div className="col-md-3">
              <label className="form-label text-muted small fw-bold text-uppercase">
                Return Date
              </label>

              <input
                type="date"
                className="form-control form-control-lg fs-6"
                name="returnDate"
                min={visaDetails.departureDate}
                value={visaDetails.returnDate}
                onChange={handleVisaChange}
                required
              />
            </div>
          )}
        </div>

        {/* Form Action Buttons */}
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
    </>
  );
};

export default VisaForm;
