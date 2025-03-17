import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
import ITIA from "../assets/ITIA.webp";
import ContactForm from "./ContactForm";
import FlightTickets from "../Pages/FlightTickets";
import Visa from "../Pages/Visa";
import Hotels from "../Pages/Hotels";
import Forex from "../Pages/Forex";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsToggled(false);
      removeBlur();
    }
  };

  useEffect(() => {
    if (isToggled) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isToggled]);

  const [showContact, setShowContact] = useState(false);
  const [showFlight, setShowFlight] = useState(false);
  const [showForex, setShowForex] = useState(false);
  const [showVisa, setShowVisa] = useState(false);
  const [showHotels, setShowHotels] = useState(false);

  const blurrybg = () => {
    // document.body.style.overflow = "hidden"; // Prevent scrolling

    // Get all elements **after** the navbar
    const nav = document.querySelector(".navbar");
    let nextElements = nav ? nav.nextElementSibling : null;

    while (nextElements) {
      nextElements.style.filter = "blur(10px)"; // Apply blur effect
      nextElements = nextElements.nextElementSibling;
    }
  };

  // Function to remove the blur effect
  const removeBlur = () => {
    // document.body.style.overflow = "auto"; // Allow scrolling again

    // Remove blur from all elements after navbar
    const nav = document.querySelector(".navbar");
    let nextElements = nav ? nav.nextElementSibling : null;

    while (nextElements) {
      nextElements.style.filter = "none"; // Remove blur
      nextElements = nextElements.nextElementSibling;
    }
  };

  return (
    <>
      {/* Show Contact Form */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      {/* Show Flight Form */}
      {showFlight && <FlightTickets onClose={() => setShowFlight(false)} />}
      {/* Show Visa Form */}
      {showVisa && <Visa onClose={() => setShowVisa(false)} />}
      {/* Show Hotels Form */}
      {showHotels && <Hotels onClose={() => setShowHotels(false)} />}
      {/* Show Forex Form */}
      {showForex && <Forex onClose={() => setShowForex(false)} />}
      {/* Contact Information */}
      <div className="contact-container d-none d-lg-flex" data-aos="fade-down">
        <div className="address">
          <i class="fa-solid fa-location-dot px-2"></i>
          <p>Grace Square, Moulana Azad Rd, Kausa, Mumbra, Thane 400612</p>
          <a
            className="text-decoration-none ms-1 text-white"
            href="https://wa.me/+918976641643"
            target="_blank">
            <i className="fa-solid fa-phone px-1"></i>
            +91 8976641643
          </a>
          <a
            className="text-decoration-none ms-1 text-white"
            href="mailto:safatoursandtravels7@gmail.com"
            target="_blank">
            <i className="fa-solid fa-envelope px-1"></i>
            safatoursandtravels
          </a>
        </div>

        <div className="social">
          <a
            className="text-decoration-none"
            href="https://wa.me/+918976641643"
            target="_blank">
            <i class="fa-brands fa-whatsapp" target="_blank"></i>
          </a>
          <a href="https://www.instagram.com/safatoursandtravels7/?igsh=bnBuOHQ2OHhiaHJ4">
            <i className="fa-brands fa-instagram" target="_blank"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook" target="_blank"></i>
          </a>
          <a href="https://x.com/safatravels7">
            <i className="fa-brands fa-x-twitter" target="_blank"></i>
          </a>
        </div>
      </div>
      {/* Navbar Section */}
      <nav
        id="nav"
        className="navbar navbar-expand-lg bg-white p-0"
        ref={navRef}>
        <div className="container navbar-container">
          <div className="logosec ">
            <a href="/" className="logo p-0 m-0">
              صٰفَاء<span>SAFA</span>
            </a>
            <img loading="lazy" src={ITIA} alt="ITIA LOGO" />
          </div>
          <button
            className="d-lg-none border border-white"
            type="button"
            onClick={() => {
              setIsToggled(!isToggled);
              isToggled ? removeBlur() : blurrybg(); // Toggle blur effect
            }}>
            <span className="navbar-toggler-icon fs-5 bg-white border border-white"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isToggled ? "show" : ""
            }`}>
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              onClick={(e) => {
                if (!e.target.closest(".dropdown")) setIsToggled(false);
              }}>
              <li className="nav-item">
                <Link
                  className="nav-link fs-4 fw-bolder mx-1 text-center"
                  to="/"
                  onClick={() => {
                    removeBlur();
                  }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-4 fw-bolder mx-1 text-center"
                  href="/#about"
                  onClick={() => {
                    removeBlur();
                  }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-4 fw-bolder mx-1 text-center"
                  to="/umrah-packages"
                  onClick={() => {
                    removeBlur();
                  }}>
                  Umrah
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fs-4 fw-bolder mx-1 text-center dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown">
                  Services
                </Link>
                <ul
                  className="dropdown-menu border border-white"
                  onClick={(e) => {
                    if (e.target.closest(".dropdown"))
                      setIsToggled(false), removeBlur();
                  }}>
                  <li>
                    <Link
                      className="dropdown-item fw-bolder text-center"
                      onClick={() => {
                        setShowFlight(true);
                        removeBlur();
                      }}>
                      Flight
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fw-bolder text-center"
                      onClick={() => {
                        setShowVisa(true);
                        removeBlur();
                      }}>
                      Visa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fw-bolder text-center"
                      onClick={() => {
                        setShowHotels(true);
                        removeBlur();
                      }}>
                      Hotels
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fw-bolder text-center"
                      to="/holiday-packages">
                      Holidays
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fw-bolder text-center"
                      onClick={() => {
                        setShowForex(true);
                        removeBlur();
                      }}>
                      Forex
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-center">
                <button
                  className="btn btn-outline-success m-1 fw-bolder fs-5"
                  onClick={() => {
                    setShowContact(true);
                    removeBlur();
                  }}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
