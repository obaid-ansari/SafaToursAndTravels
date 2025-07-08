import React, { useState } from "react";
import axios, { formToJSON } from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const FlightTickets = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    journeyType: "single",
    departureDate: new Date(),
    returnDate: null,
    PurposeOfVisa: "tourism",
    VisaType: "tourist visa",
  });

  const [submitStatus, setSubmitStatus] = useState("Submit");

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
      ...(id === "journeyType" && value === "single"
        ? { returnDate: null }
        : {}),
    }));
  };

  // Handle Date Selection
  const handleDateChange = (date, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: date, // Keep it as a Date object
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Submitting...");

    // Convert Date objects to 'YYYY-MM-DD' before sending data
    const formattedData = {
      ...formData,
      departureDate: formData.departureDate
        ? format(formData.departureDate, "dd-MM-yyyy")
        : "",
      returnDate: formData.returnDate
        ? format(formData.returnDate, "dd-MM-yyyy")
        : "",
    };

    console.log(formattedData); // Check the formatted data before submission

    try {
      const res = await axios.post(
        "https://safa-backend.onrender.com/api/visa",
        formattedData
      );
      alert(res.data.message);
      setSubmitStatus("Submitted");
    } catch (error) {
      alert("Failed to send message");
      setSubmitStatus("Submit");
    }
  };
  return (
    <div className="form" id="contact-form-wrapper" style={{ display: "flex" }}>
      <div className="form-container rounded-4 p-3">
        <h3 className="text-center fw-bolder text-uppercase">
          Visa Assistance
        </h3>
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
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <h5>Details:</h5>
          <div className="inputs my-2 d-flex flex-wrap gap-2">
            <div className="fare-selection">
              <label>Purpose of Visa:</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="PurposeOfVisa"
                value={formData.PurposeOfVisa}
                onChange={handleChange}>
                <option value="Tourism">Tourism</option>
                <option value="Business">Business</option>
                <option value="Medical Treatment">Medical Treatment</option>
                <option value="Employment">Employment</option>
              </select>
            </div>

            <div className="fare-selection">
              <label>Type of Visa:</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="VisaType"
                value={formData.VisaType}
                onChange={handleChange}>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Medical Visa">Medical Visa</option>
              </select>
            </div>

            {/* Journey Type, Departure Date, and Return Date in Flight Form Style */}
            <div className="fare-selection">
              <label>Journey Type:</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="journeyType"
                value={formData.journeyType}
                onChange={handleChange}>
                <option value="single">One Way</option>
                <option value="return">Round Trip</option>
              </select>
            </div>
            {/* Departure Date Picker */}
            <div
              className="fare-selection"
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <label>Departure Date:</label>
              <DatePicker
                className="form-control my-1 fw-bold"
                selected={formData.departureDate}
                onChange={(date) => handleDateChange(date, "departureDate")}
                dateFormat="dd-MM-yyyy"
                required
              />
            </div>

            {/* Return Date Picker (Only for Round Trip) */}
            <div
              className="fare-selection"
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <label>Return Date:</label>
              <DatePicker
                className="form-control my-1 fw-bold"
                selected={formData.returnDate}
                onChange={(date) => handleDateChange(date, "returnDate")}
                dateFormat="dd-MM-yyyy"
                required={formData.journeyType === "return"}
                disabled={formData.journeyType !== "return"}
                placeholderText="Return date"
              />
            </div>
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

export default FlightTickets;
