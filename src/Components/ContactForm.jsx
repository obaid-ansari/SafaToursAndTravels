import React, { useState } from "react";
import axios from "axios";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("Submit");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Submitting...");

    try {
      const res = await axios.post("/api/contact", formData);
      alert(res.data.message);
      setSubmitStatus("Submitted");
    } catch (error) {
      alert("Failed to send message");
      setSubmitStatus("Submit");
    }
  };

  return (
    <div
      className="contact-form-wrapper"
      id="contact-form-wrapper"
      style={{ display: "flex" }}>
      <div className="position-relative contact-form rounded-4">
        <h3 className="text-center fw-bolder text-uppercase">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <label className="fw-bold" htmlFor="name">
            Name:
          </label>
          <input
            className="form-control fw-semibold my-1"
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="fw-bold" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control fw-semibold my-1"
            type="email"
            id="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="fw-bold" htmlFor="number">
            Phone Number:
          </label>
          <input
            className="form-control fw-semibold my-1"
            type="tel"
            id="phone"
            placeholder="Your phone Number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <label className="fw-bold" htmlFor="message">
            Message:
          </label>
          <textarea
            className="form-control fw-semibold my-1"
            id="message"
            rows="4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required></textarea>

          {/* Submit button with dynamic text */}
          <button
            type="submit"
            className="btn btn-success fw-bolder mt-2 w-100"
            disabled={submitStatus === "Submitting..."}>
            {submitStatus}
          </button>

          <button
            type="button"
            className="btn btn-lg mt-2 fw-bolder"
            id="close-form"
            onClick={onClose}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
