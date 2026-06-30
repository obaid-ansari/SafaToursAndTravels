import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Logo from "../assets/safaLogo.webp";

const Footer = () => {
  return (
    <>
      <footer className="pt-5" style={{ background: "#0b1120" }}>
        <div className="container">
          <div className="row gy-4">
            {/* Brand */}
            <div className="col-lg-5">
              <img
                src={Logo}
                className="logo"
                alt="Safa Tours And Travels Logo"
                style={{ filter: "invert(1)" }}
              />

              <span className="text-light d-block mb-4 pt-2">
                Your trusted travel partner for Flights, Visa Services, Hotels,
                Holiday Packages, Forex Exchange, and spiritual journeys.
              </span>

              <div className="d-flex gap-3">
                <a
                  href="https://wa.me/918976641643"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-warning fs-3" />
                </a>

                <a
                  href="mailto:safatoursandtravels7@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoGmail className="text-warning fs-3" />
                </a>

                <a
                  href="https://www.instagram.com/safatoursandtravels7/?igsh=bnBuOHQ2OHhiaHJ4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-warning fs-3" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="col-md-6 col-lg-3">
              <h5 className="gold-text fw-bold mb-4">Our Services</h5>

              <ul className="list-unstyled d-flex flex-column gap-3">
                <li>
                  <Link
                    to="/flight"
                    className="text-decoration-none text-white"
                  >
                    Flight Booking
                  </Link>
                </li>

                <li>
                  <Link to="/visa" className="text-decoration-none text-white">
                    Visa Assistance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/hotels"
                    className="text-decoration-none text-white"
                  >
                    Hotel Booking
                  </Link>
                </li>

                <li>
                  <Link
                    to="/holidays"
                    className="text-decoration-none text-white"
                  >
                    Holiday Packages
                  </Link>
                </li>

                <li>
                  <Link to="/forex" className="text-decoration-none text-white">
                    Forex Exchange
                  </Link>
                </li>

                <li>
                  <Link to="/umrah" className="text-decoration-none text-white">
                    Umrah Packages
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-6 col-lg-4">
              <h5 className="gold-text fw-bold mb-4">Contact Us</h5>
              <div className="mb-3">
                <span className="text-light">
                  <FaLocationDot className="me-2 text-light" />
                  Grace Square, Moulana Azad Road, Kausa, Mumbra, Thane 400612
                </span>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-2 text-light" />
                <a
                  href="https://wa.me/918976641643"
                  className="text-decoration-none text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 8976641643
                </a>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-2 text-light" />
                <a
                  href="https://wa.me/917506105626"
                  className="text-decoration-none text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 7506105626
                </a>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-2 text-light" />
                <a
                  href="https://wa.me/971527939843"
                  className="text-decoration-none text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971 527939843
                </a>
              </div>

              <div className="d-flex align-items-center">
                <FaEnvelope className="me-2 text-light" />
                <a
                  href="mailto:safatoursandtravels7@gmail.com"
                  className="text-decoration-none text-white"
                >
                  safatoursandtravels7@gmail.com
                </a>
              </div>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="text-center py-3">
            <span className="mb-0 text-white">
              &copy; 2021 Safa Tours & Travels. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
