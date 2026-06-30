import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaCcVisa,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdCurrencyRupee, MdCurrencyExchange } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import {
  FaWhatsapp,
  FaInstagramSquare,
  FaHotel,
  FaMosque,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../assets/safaLogo.webp";
import Iata from "../assets/ITIA.webp";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#d4af37" : "#0B1120",
  });

  useEffect(() => {
    const navbar = document.getElementById("navbarNav");

    if (!navbar) return;

    const closeNavbar = () => {
      navbar.classList.remove("show");
    };

    const navLinks = document.querySelectorAll(
      "#navbarNav .nav-link, #navbarNav .btn",
    );

    navLinks.forEach((link) => {
      link.addEventListener("click", closeNavbar);
    });

    const handleOutsideClick = (event) => {
      const isInsideNavbar =
        navbar.contains(event.target) ||
        event.target.closest(".navbar-toggler");

      if (!isInsideNavbar) {
        closeNavbar();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);

      navLinks.forEach((link) => {
        link.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  return (
    <>
      <header
        className="d-flex flex-column align-items-center w-100 top-0"
        style={{
          position: "fixed",
          zIndex: 1000,
        }}
      >
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg w-100 d-flex justify-content-center p-2"
          style={{ maxWidth: "1100px" }}
        >
          <div
            className="rounded-5 px-3 shadow-sm container"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(12px)",
            }}
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-once="true"
          >
            {/* Brand */}

            <div className="d-flex align-items-center">
              <NavLink to="/">
                <img
                  src={Logo}
                  className="logo p-1"
                  alt="Safa Tours And Travels Logo"
                />
              </NavLink>

              <img
                src={Iata}
                className="iata"
                alt="Safa Tours And Travels Logo"
              />
            </div>

            {/* Mobile Toggle */}
            <button
              className="bg-transparent d-block d-lg-none fs-5 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon border-0"></span>
            </button>

            {/* Navigation Links */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav align-items-lg-center gap-lg-3 ps-lg-0 ps-1">
                {[
                  {
                    link: "/",
                    logo: <AiFillHome className="fs-3" />,
                    text: "Home",
                  },
                  {
                    link: "/flight",
                    logo: <GiCommercialAirplane className="fs-3" />,
                    text: "Flight",
                  },
                  {
                    link: "/visa",
                    logo: <FaCcVisa className="fs-3" />,
                    text: "Visa",
                  },
                  {
                    link: "/hotels",
                    logo: <FaHotel className="fs-3" />,
                    text: "Hotels",
                  },
                  {
                    link: "/umrah",
                    logo: <FaMosque className="fs-3" />,
                    text: "Umrah",
                  },
                  {
                    link: "/forex",
                    logo: <MdCurrencyExchange className="fs-3" />,
                    text: "Forex",
                  },
                  {
                    link: "/holidays",
                    logo: <FaUmbrellaBeach className="fs-3" />,
                    text: "Holidays",
                  },
                ].map((item, idx) => {
                  return (
                    <li className="link" key={idx}>
                      <NavLink
                        className="nav-link d-flex justify-content-center flex-column align-items-lg-center fw-semibold"
                        to={item.link}
                        style={navLinkStyle}
                      >
                        {item.logo}
                        <span className="m-0">{item.text}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
