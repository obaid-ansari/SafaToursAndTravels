import React, { useState } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns"; // Import date-fns for formatting

const FlightTickets = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    journeyType: "single",
    departureDate: new Date(),
    returnDate: null,
    adults: 1,
    children: 0,
    infants: 0,
    classType: "Economy",
    fareType: "Regular",
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
      // const res = await axios.post("api/flight", formattedData);
      const res = await axios.post(
        "https://safa-backend.onrender.com/api/flight",
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
        <h3 className="text-center fw-bolder text-uppercase">Flight Tickets</h3>
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

          <h5>Flight Details</h5>
          <div
            className="inputs my-2"
            style={{ display: "flex", flexWrap: "wrap", gap: "0px 10px" }}>
            <input
              className="form-control my-1 fw-bold"
              type="text"
              id="from"
              placeholder="From"
              value={formData.from}
              onChange={handleChange}
              required
            />
            <input
              className="form-control my-1 fw-bold"
              type="text"
              id="to"
              placeholder="To"
              value={formData.to}
              onChange={handleChange}
              required
            />
            <select
              className="form-control my-1 py-0 fw-bold"
              id="journeyType"
              value={formData.journeyType}
              onChange={handleChange}>
              <option value="single">One Way</option>
              <option value="return">Round Trip</option>
            </select>

            {/* Departure Date Picker */}
            <DatePicker
              className="form-control my-1 fw-bold"
              selected={formData.departureDate}
              onChange={(date) => handleDateChange(date, "departureDate")}
              dateFormat="dd-MM-yyyy"
              required
            />

            {/* Return Date Picker (Only for Round Trip) */}
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

          <h5>Passenger Details</h5>
          <div
            className="inputs my-2"
            style={{ display: "flex", flexWrap: "wrap", gap: "0px 10px" }}>
            <div className="passenger-selection">
              <label>ADULTS (12y +)</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="adults"
                value={formData.adults}
                onChange={handleChange}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="passenger-selection">
              <label>CHILDREN (2y - 12y)</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="children"
                value={formData.children}
                onChange={handleChange}>
                {[...Array(7).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="passenger-selection">
              <label>INFANTS (under 2y)</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="infants"
                value={formData.infants}
                onChange={handleChange}>
                {[...Array(7).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="fare-selection">
              <label>Class</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="classType"
                value={formData.classType}
                onChange={handleChange}>
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business Class">Business Class</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
            <div className="fare-selection">
              <label>Fare Type</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="fareType"
                value={formData.fareType}
                onChange={handleChange}>
                <option value="Regular">Regular</option>
                <option value="Student">Student</option>
                <option value="Corporate">Corporate</option>
                <option value="Marine">Marine</option>
              </select>
            </div>
          </div>
          <p className="d-none d-lg-flex">
            Maximum 9 passengers allowed in any combination of Adults and
            Childrens
          </p>
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
