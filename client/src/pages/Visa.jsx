import React from "react";
// import visaHeroImage from "../assets/hero/visaHero.webp";
import Hero from "../components/Hero";
import VisaForm from "../components/Forms/VisaForm";
import { FaGlobeAsia, FaUserFriends, FaAward } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { RiVisaLine } from "react-icons/ri";
import { FaRegCheckCircle, FaHeadset } from "react-icons/fa";
import { FaFolderClosed, FaRegCalendarCheck } from "react-icons/fa6";

const visaFeatures = [
  {
    delay: 0,
    icon: <FaFolderClosed />,
    title: "Document Review",
    description:
      "We carefully review your documents before submission to reduce mistakes.",
  },
  {
    delay: 100,
    icon: <FaUserFriends />,
    title: "Expert Assistance",
    description:
      "Our team guides you through every step of the tourist visa process.",
  },
  {
    delay: 150,
    icon: <IoTime />,
    title: "Quick Processing",
    description:
      "We help you complete your application quickly and efficiently.",
  },
  {
    delay: 200,
    icon: <FaGlobeAsia />,
    title: "Popular Destinations",
    description:
      "Assistance for tourist visas to leading travel destinations worldwide.",
  },
];

const Visa = () => {
  return (
    <main className="bg-color">
      <section
        className="form-hero"
        style={{
          backgroundImage: `url(hero/visaHero.webp)`,
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
            <VisaForm />
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold gold-text display-5">
            Why Choose Our Tourist Visa Service?
          </h3>
          <span className="d-block text-muted mb-0">
            We make your tourist visa application simple, fast, and hassle-free.
          </span>
        </div>

        <div className="row g-3">
          {visaFeatures.map((item, idx) => {
            return (
              <div
                className="col-lg-6 col-md-6"
                key={idx}
                data-aos="zoom-out-up"
                data-aos-offset="100"
                data-aos-delay={item.delay}
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
                  <h4 className="fw-bold gold-text d-flex align-items-center">
                    <span
                      className="text-warning bg-warning-subtle rounded-5 me-2 d-flex align-items-center justify-content-center"
                      style={{ height: "40px", width: "40px" }}
                    >
                      {item.icon}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-muted m-0">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container pb-5 position-relative">
        <div className="text-center mb-5">
          <h3 className="fw-bold gold-text display-5">Visa Process</h3>
          <span className="d-block text-muted mb-0">
            A simple step-by-step process from enquiry to visa assistance.
          </span>
        </div>

        <div className="row g-3 text-center">
          {[
            {
              delay: 0,
              icon: <FaRegCheckCircle />,
              title: "Submit Enquiry",
              desc: "Complete the online enquiry form.",
            },
            {
              delay: 50,
              icon: <FaHeadset />,
              title: "Consultation",
              desc: "Our visa experts contact you.",
            },
            {
              delay: 100,
              icon: <FaFolderClosed />,
              title: "Document Review",
              desc: "We verify and guide your paperwork.",
            },
            {
              delay: 150,
              icon: <FaRegCalendarCheck />,
              title: "Application Support",
              desc: "Receive assistance throughout the application process.",
            },
            {
              delay: 200,
              icon: <IoTime />,
              title: "Processing",
              desc: "Track your application during processing.",
            },
            {
              delay: 250,
              icon: <RiVisaLine />,
              title: "Receive Visa",
              desc: "Collect your approved visa and prepare to travel.",
            },
          ].map((step, idx) => (
            <div
              className="col-lg-2 col-md-4 col-6"
              key={idx}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay={step.delay}
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div
                className="card text-center shadow-sm rounded-4 h-100 p-3 bg-white"
                style={{
                  borderBottom: "5px solid #d4af37",
                }}
              >
                <div
                  className="rounded-5 bg-warning-subtle text-warning mx-auto fw-bold mb-3 d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  <span className="fs-5">{step.icon}</span>
                </div>

                <h6 className="fw-bold">{step.title}</h6>
                <small className="text-muted">{step.desc}</small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Visa;
