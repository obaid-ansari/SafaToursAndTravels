import React, { useState } from "react";
import "../Css/Footer.css";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import FlightTickets from "../Pages/FlightTickets";
import Visa from "../Pages/Visa";
import Hotels from "../Pages/Hotels";
import Forex from "../Pages/Forex";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showFlight, setShowFlight] = useState(false);
  const [showForex, setShowForex] = useState(false);
  const [showVisa, setShowVisa] = useState(false);
  const [showHotels, setShowHotels] = useState(false);

  return (
    <>
      <footer>
        {showContact && <ContactForm onClose={() => setShowContact(false)} />}
        {/* Show Flight Form */}
        {showFlight && <FlightTickets onClose={() => setShowFlight(false)} />}
        {/* Show Visa Form */}
        {showVisa && <Visa onClose={() => setShowVisa(false)} />}
        {/* Show Hotels Form */}
        {showHotels && <Hotels onClose={() => setShowHotels(false)} />}
        {/* Show Forex Form */}
        {showForex && <Forex onClose={() => setShowForex(false)} />}
        <div className="footer-container bg-black">
          <div className="footer p-4">
            <div className="row ">
              <div className="col-md-12  col-lg-3 m-2 text-white">
                <div className="logosec d-flex justify-content-start ">
                  <a
                    href="/"
                    className="logo text-white"
                    aria-label="Safa Tour and Travel logo"
                    style={{ textShadow: "0px 0px 5px white" }}>
                    صٰفَاء
                    <span
                      className="text-white"
                      style={{ textShadow: "0px 0px 5px white" }}>
                      SAFA
                    </span>
                  </a>
                </div>
                <p className="m-0">
                  Your trusted travel partner for Flights, Visa Services,
                  Hotels, Holiday Packages, Forex Exchange, and spiritual
                  journeys.
                </p>
              </div>
              <div className="footerCol-2  col-md-12 col-lg-3 m-2 text-white">
                <h5
                  className="fs-3"
                  style={{ textShadow: "0px 0px 5px white" }}>
                  Quick Links
                </h5>
                <ul className="p-0 m-0">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        setShowFlight(true);
                      }}>
                      Flight Tickets
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        setShowVisa(true);
                      }}>
                      Visa Assistance
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        setShowHotels(true);
                      }}>
                      Hotels Booking
                    </Link>
                  </li>
                  <li>
                    <Link to="/holiday-packages">Holiday Packages</Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        setShowForex(true);
                      }}>
                      Forex Exchange
                    </Link>
                  </li>
                  <li>
                    <Link to="/umrah-packages">Umrah Packages</Link>
                  </li>
                </ul>
              </div>
              <div className="footerCol-3  col-md-12 col-lg-3 m-2 text-white">
                <h5
                  className="fs-3"
                  style={{ textShadow: "0px 0px 5px white" }}>
                  Contact Us
                </h5>
                <p>
                  Grace Square, Moulana Azad Road, Kausa, Mumbra, Thane,
                  Maharashtra, India
                </p>
                <a href="https://wa.me/+918976641643" target="_blank">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a href="mailto:safatoursandtravels7@gmail.com" target="_blank">
                  <i className="fa-solid fa-envelope px-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/safatoursandtravels7/?igsh=bnBuOHQ2OHhiaHJ4"
                  target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook" target="_blank"></i>
                </a>
                <a href="https://x.com/safatravels7">
                  <i className="fa-brands fa-x-twitter" target="_blank"></i>
                </a>
              </div>
              <div className="text-white lower-footer  text-center">
                <p className="m-0 mt-4">
                  &copy; 2022 Safa Tours And Travels. All rights reserved.
                  Developed by
                  <a
                    href="https://wa.me/+919987575016"
                    className="text-decoration-none ps-1 text-warning"
                    target="_blank">
                    Obaid Ansari
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
