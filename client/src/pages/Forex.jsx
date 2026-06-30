import React from "react";
// import forexHeroImage from "../assets/hero/forexHero.webp";
import Hero from "../components/Hero";
import ForexForm from "../components/Forms/ForexForm";
import { MdCurrencyExchange } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";

const forexServices = [
  {
    delay: "0",
    icon: <MdCurrencyExchange />,
    title: "Currency Exchange",
    description:
      "Exchange Indian Rupees for major international currencies at competitive rates.",
  },
  {
    delay: "50",
    icon: <FaWallet />,
    title: "Currency Notes",
    description:
      "Get genuine foreign currency notes for your international travel.",
  },
  {
    delay: "100",
    icon: <GiCommercialAirplane />,
    title: "Travel Money Assistance",
    description:
      "Expert guidance to help you carry the right amount of travel money.",
  },
  {
    delay: "150",
    icon: <IoPersonSharp />,
    title: "Pre-Travel Forex Guidance",
    description:
      "Professional assistance before your journey for a smooth travel experience.",
  },
];

const process = [
  "Submit Inquiry",
  "Receive Quote",
  "Verify Documents",
  "Collect Currency",
];

const documents = [
  {
    icon: "bi-passport",
    title: "Passport",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Visa (If Applicable)",
  },
  {
    icon: "bi-airplane",
    title: "Confirmed Air Ticket",
  },
  {
    icon: "bi-credit-card-2-front",
    title: "PAN Card",
  },
  {
    icon: "bi-person-vcard",
    title: "Aadhaar Card (If Required)",
  },
];

const Forex = () => {
  return (
    <main className="bg-color">
      <section
        className="form-hero"
        style={{
          backgroundImage: `url(hero/forexHero.webp)`,
        }}
      >
        <div className="container">
          <div
            className="rounded-4 px-2 py-4 p-lg-4"
            style={{
              backdropFilter: "blur(26px)",
              background: "rgba(255, 255, 255, 0.25)",
            }}
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <ForexForm />
          </div>
        </div>
      </section>

      <section className="container my-5 position-relative">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5 gold-text">Our Forex Services</h2>
          <span className="text-muted d-block">
            Reliable foreign exchange solutions for international travelers.
          </span>
        </div>

        <div className="row g-4">
          {forexServices.map((service, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay={service.delay}
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div
                className="bg-white rounded-4 h-100 p-3 shadow-sm overflow-hidden"
                style={{
                  borderTop: "5px solid #d4af37",
                }}
              >
                {/* Icon */}
                <div
                  className="d-flex mb-3 bg-warning-subtle align-items-center justify-content-center rounded-5"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <span className="text-warning fs-4">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="fs-4 gold-text fw-bold">{service.title}</h3>

                {/* Description */}
                <p className="text-muted m-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold gold-text display-5">Simple Process</h2>
          <span className="text-muted d-block">
            Get your foreign currency in just a few simple steps.
          </span>
        </div>

        <div className="row g-3 justify-content-center">
          {process.map((step, index) => (
            <div
              className="col-6 col-lg-2 col-md-6"
              key={index}
              data-aos="zoom-out"
              data-aos-offset="100"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="p-3 rounded-4 text-center bg-light h-100 shadow-sm">
                <div className="display-6 fw-bold  mb-3 gold-text">
                  0{index + 1}
                </div>

                <span className="d-block fw-bold mb-0">{step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold gold-text display-5">Required Documents</h2>
        </div>

        <div className="d-flex flex-column align-items-center gap-2">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="w-100 shadow-sm rounded-3 p-3 bg-white d-flex align-items-center justify-content-between"
              style={{
                maxWidth: "600px",
                borderLeft: "5px solid #d4af37",
              }}
              data-aos="zoom-out"
              data-aos-offset="100"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="d-flex align-items-center">
                <div
                  className="bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <span className="gold-text fw-bold fs-3">0{index + 1}</span>
                </div>

                {/* Title */}
                <h5 className="mb-0 fw-semibold">{doc.title}</h5>
              </div>

              <i className="bi bi-check2-circle text-success fs-4"></i>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Forex;
