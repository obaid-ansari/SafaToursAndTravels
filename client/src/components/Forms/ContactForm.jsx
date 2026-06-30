import React, { useState } from "react";
import allCountryCodes from "../../data/countryCode";
import CountryCodeAutocomplete from "../CountryCodeAutocomplete";
import { contactApi } from "../../services/form.service";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    service: "",
    umrahPackage: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("Submit");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendInquiry = async () => {
    try {
      setSubmitStatus("Submitting...");
      const response = await contactApi(formData);
      if (response.status === 200) {
        toast.success(response.data.message);

        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          service: "",
          umrahPackage: "",
          message: "",
        });
        setSubmitStatus("Submitted");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send email.");
      setSubmitStatus("Submit");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendInquiry();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card-body rounded-4 px-2 py-3 p-lg-3 container shadow-sm"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(30px)",
      }}
    >
      {/* Header */}
      <div className="card-header text-center text-color mb-3">
        <h2 className="mb-1 fw-bold">Contact Us</h2>
      </div>

      {/* Personal Details */}
      <div className="row g-2 mb-2">
        <div className="col-md-12">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Full Name
          </label>

          <input
            type="text"
            className="form-control form-control-lg fs-6"
            placeholder="e.g. John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Email Address
          </label>

          <input
            type="email"
            className="form-control form-control-lg fs-6"
            placeholder="john@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Phone Number
          </label>

          <div className="input-group">
            <CountryCodeAutocomplete
              countries={allCountryCodes}
              value={formData.countryCode}
              name="countryCode"
              onChange={handleChange}
            />

            <input
              type="tel"
              className="form-control form-control-lg fs-6"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Service Details */}

      <div className="row g-2 mb-2">
        <div className="col-md-12">
          <label className="form-label text-muted small fw-bold text-uppercase">
            Service Required
          </label>

          <select
            className="form-select form-select-lg fs-6"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>

            <option value="Umrah Packages">Umrah Packages</option>
            <option value="Hajj Packages">Hajj Packages</option>
            <option value="Ziyarat (Karbala)">Ziyarat (Karbala)</option>
          </select>
        </div>

        {formData.service === "Umrah Packages" && (
          <div className="col-md-12">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Umrah Package Type
            </label>

            <select
              className="form-select form-select-lg fs-6"
              name="umrahPackage"
              value={formData.umrahPackage}
              onChange={handleChange}
            >
              <option value="">Select Package</option>
              <option value="Economy">Economy Umrah</option>
              <option value="Deluxe">Deluxe Umrah</option>
              <option value="Ramadan">Ramadan Umrah</option>
            </select>
          </div>
        )}
      </div>

      {/* Message */}
      <div className="mb-2">
        <label className="form-label text-muted small fw-bold text-uppercase">
          Message
        </label>

        <textarea
          rows="5"
          className="form-control fs-6"
          placeholder="Tell us about your travel requirements..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
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

export default ContactForm;
