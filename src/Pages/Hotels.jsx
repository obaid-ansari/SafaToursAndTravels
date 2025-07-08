import React, { useState } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const Hotels = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    hotelStar: "3-star",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    rooms: 1,
    guests: 1,
  });

  const [submitStatus, setSubmitStatus] = useState("Submit");

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle Date Selection
  const handleDateChange = (date, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: date,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Submitting...");

    // Convert Date objects to 'YYYY-MM-DD' before sending data
    const formattedData = {
      ...formData,
      checkInDate: formData.checkInDate
        ? format(formData.checkInDate, "dd-MM-yyyy")
        : "",
      checkOutDate: formData.checkOutDate
        ? format(formData.checkOutDate, "dd-MM-yyyy")
        : "",
    };

    console.log(formattedData); // Check the formatted data before submission

    try {
      const res = await axios.post(
        "https://safa-backend.onrender.com/api/hotels",
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
    <div
      className="form"
      id="hotel-booking-form-wrapper"
      style={{ display: "flex" }}>
      <div className="form-container rounded-4 p-3">
        <h3 className="text-center fw-bolder text-uppercase">Hotel Booking</h3>
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

          <h5>Hotel Details</h5>

          <div className="inputs my-2 d-flex flex-wrap gap-2">
            <div
              className="fare-selection"
              style={{ display: "flex", flexDirection: "column" }}>
              <label>Hotel location:</label>
              <input
                className="form-control my-1 fw-bold"
                type="text"
                id="location"
                placeholder="Hotel Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="fare-selection"
              style={{ display: "flex", flexDirection: "column" }}>
              <label>Star Rating:</label>
              <select
                className="form-control my-1 py-0 fw-bold"
                id="hotelStar"
                value={formData.hotelStar}
                onChange={handleChange}>
                <option value="3-star">3 Star</option>
                <option value="4-star">4 Star</option>
                <option value="5-star">5 Star</option>
              </select>
            </div>
            {/* Check-in Date Picker */}
            <div
              className="fare-selection"
              style={{ display: "flex", flexDirection: "column" }}>
              <label>Check-in Date:</label>
              <DatePicker
                className="form-control my-1 fw-bold"
                selected={formData.checkInDate}
                onChange={(date) => handleDateChange(date, "checkInDate")}
                dateFormat="dd-MM-yyyy"
                required
              />
            </div>
            {/* Check-out Date Picker */}
            <div
              className="fare-selection"
              style={{ display: "flex", flexDirection: "column" }}>
              <label>Check-out Date:</label>
              <DatePicker
                className="form-control my-1 fw-bold"
                selected={formData.checkOutDate}
                onChange={(date) => handleDateChange(date, "checkOutDate")}
                dateFormat="dd-MM-yyyy"
                required
              />
            </div>

            <div
              className="fare-selection"
              style={{ display: "flex", flexDirection: "column" }}>
              <label>Rooms:</label>
              <input
                className="form-control my-1 fw-bold"
                type="number"
                id="rooms"
                placeholder="Rooms"
                value={formData.rooms}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div
              className="fare-selection"
              style={{ display: "flex", flexDirection: "column" }}>
              <label>Guest:</label>
              <input
                className="form-control my-1 fw-bold"
                type="number"
                id="guests"
                placeholder="Guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
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

export default Hotels;
