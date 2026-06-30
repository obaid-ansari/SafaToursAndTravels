import React, { useState } from "react";
import allCountryCodes from "../../data/countryCode";
import CountryCodeAutocomplete from "../CountryCodeAutocomplete";
import { hotelApi } from "../../services/form.service";
import toast from "react-hot-toast";

const HotelForm = () => {
  const [submitStatus, setSubmitStatus] = useState("Submit");

  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
  });

  const [hotelDetails, setHotelDetails] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    adults: 1,
    children: 0,
    message: "",
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHotelChange = (e) => {
    const { name, value } = e.target;
    setHotelDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendHotelDetails = async (data) => {
    try {
      setSubmitStatus("Submitting...");
      const response = await hotelApi(data);
      if (response.status === 200) {
        setPersonalDetails({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
        });

        setHotelDetails({
          destination: "",
          checkIn: "",
          checkOut: "",
          rooms: 1,
          adults: 1,
          children: 0,
          message: "",
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

    const payload = {
      personalDetails,
      hotelDetails,
    };

    sendHotelDetails(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="card-body">
      {/* Header */}
      <div className="card-header text-center text-color mb-3">
        <h1 className="mb-1 fw-bold">Hotel Enquiry</h1>
      </div>

      {/* Personal Details */}
      <h4 className="mb-2 text-color fw-bold pb-2">Personal Details</h4>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Full Name
          </label>

          <input
            type="text"
            className="form-control form-control-lg fs-6"
            placeholder="e.g. John Doe"
            name="name"
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
            placeholder="john@example.com"
            name="email"
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
              countries={allCountryCodes}
              value={personalDetails.countryCode}
              name="countryCode"
              onChange={handlePersonalChange}
            />

            <input
              type="tel"
              className="form-control form-control-lg fs-6"
              placeholder="Phone Number"
              name="phone"
              value={personalDetails.phone}
              onChange={handlePersonalChange}
              required
            />
          </div>
        </div>

        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Hotel Destination
          </label>

          <input
            type="text"
            className="form-control form-control-lg fs-6"
            placeholder="e.g. Dubai"
            name="destination"
            value={hotelDetails.destination}
            onChange={handleHotelChange}
            required
          />
        </div>
      </div>

      {/* Hotel Details */}
      <h4 className="mb-2 text-color fw-bold pb-2">Hotel Details</h4>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Check In
          </label>

          <input
            type="date"
            className="form-control form-control-lg fs-6"
            name="checkIn"
            value={hotelDetails.checkIn}
            onChange={handleHotelChange}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Check Out
          </label>

          <input
            type="date"
            className="form-control form-control-lg fs-6"
            name="checkOut"
            value={hotelDetails.checkOut}
            onChange={handleHotelChange}
            required
          />
        </div>

        <div className="col-md-2">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Rooms
          </label>

          <input
            type="number"
            min="1"
            className="form-control form-control-lg fs-6"
            name="rooms"
            value={hotelDetails.rooms}
            onChange={handleHotelChange}
            required
          />
        </div>

        <div className="col-md-2">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Adults
          </label>

          <input
            type="number"
            min="1"
            className="form-control form-control-lg fs-6"
            name="adults"
            value={hotelDetails.adults}
            onChange={handleHotelChange}
            required
          />
        </div>

        <div className="col-md-2">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Children
          </label>

          <input
            type="number"
            min="0"
            className="form-control form-control-lg fs-6"
            name="children"
            value={hotelDetails.children}
            onChange={handleHotelChange}
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="form-label text-muted small fw-bold text-uppercase">
          Additional Requirements
        </label>

        <textarea
          rows="3"
          className="form-control fs-6"
          placeholder="Mention hotel preferences, room type, budget, breakfast, airport transfer, or any special requests..."
          name="message"
          value={hotelDetails.message}
          onChange={handleHotelChange}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-100 btn dark-bg text-white fw-bold py-2 border-0 shadow-sm text-uppercase"
        disabled={submitStatus === "Submitting..."}
      >
        <span className="d-block m-0 p-0">{submitStatus}</span>
      </button>
    </form>
  );
};

export default HotelForm;
