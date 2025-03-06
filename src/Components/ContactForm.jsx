import React, { useState } from "react";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="contact-form-wrapper"
      id="contact-form-wrapper"
      style={{ display: "flex" }}>
      <div className="contact-form rounded-4">
        <h3 className="text-center fw-bolder text-dark">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <label className="fw-bold" htmlFor="name">
            Name:
          </label>
          <input
            className="form-control fw-semibold my-1"
            type="text"
            id="name"
            placeholder="Enter your full name"
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
            placeholder="Enter your email address"
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
            id="number"
            placeholder="Enter your phone number"
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

          <button type="submit" className="btn btn-success fw-bolder mt-2 me-2">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger mt-2 fw-bolder"
            id="close-form"
            onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
