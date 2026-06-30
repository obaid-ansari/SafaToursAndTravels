import React from "react";
import {
  FaGlobeAsia,
  FaUserFriends,
  FaShieldAlt,
  FaHeadset,
  FaBullseye,
  FaEye,
  FaCompass,
  FaAward,
} from "react-icons/fa";
import Logo from "../assets/logo.webp";

const AboutUs = () => {
  return (
    <>
      <section className="about">
        <section className="bg-color py-5">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div
                className="col-lg-4"
                data-aos="fade"
                data-aos-offset="100"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div>
                  <img
                    src={Logo}
                    alt="Safa Tours And Travels Logo"
                    className="story-img shadow-sm rounded-4"
                  />
                </div>
              </div>
              <div
                className="col-lg-8"
                data-aos="fade"
                data-aos-offset="100"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p className="text-color m-0 text-uppercase">Our Story</p>
                <h3 className="fw-bold my-2 display-5 gold-text">
                  Your Trusted
                  <br />
                  Travel Partner
                </h3>
                <p className="text-color">
                  Founded in 2021, Safa Tours &amp; Travels was born from one
                  simple belief travel should be effortless, personal, and
                  genuinely transformative.
                </p>
                <p className="text-color">
                  From seamless flight bookings and visa assistance to bespoke
                  holiday packages, currency exchange, hotel reservations, and
                  Umrah services our experienced team handles every detail with
                  precision and care.
                </p>
                <p className="text-color">
                  We don't just plan trips. We craft experiences you'll carry
                  with you for a lifetime.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" style={{ background: "#0B1120" }}>
          <div className="container">
            <div className="row g-4">
              {[
                { num: "2021", label: "Established" },
                { num: "50+", label: "Destinations" },
                { num: "24/7", label: "Support" },
                { num: "99%", label: "Commitment" },
              ].map((s, i) => (
                <div key={i} className="col-6 col-lg-3">
                  <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="display-5 fw-bold mb-2 gold-text">
                      {s.num}
                    </h3>
                    <p className="mb-0 fw-bold text-light-emphasis text-uppercase">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-color">
          <div className="container">
            {/* Heading */}
            <div className="text-center mb-5">
              <h4 className="display-5 fw-bold text-color">
                Why Discerning Travelers
                <span className="gold-text fs-2  d-block">Choose Safa</span>
              </h4>
            </div>

            {/* Features */}
            <div className="row">
              {[
                {
                  delay: 0,
                  icon: <FaUserFriends />,
                  title: "Personalized Service",
                  text: "Every itinerary is crafted around your unique travel style, preferences, and aspirations.",
                },
                {
                  delay: 100,
                  icon: <FaGlobeAsia />,
                  title: "Global Reach",
                  text: "Seamless access to domestic and international destinations worldwide.",
                },
                {
                  delay: 200,
                  icon: <FaShieldAlt />,
                  title: "Safe & Reliable",
                  text: "Trusted partners, verified bookings, and dependable solutions you can count on.",
                },
                {
                  delay: 0,
                  icon: <FaHeadset />,
                  title: "24/7 Support",
                  text: "Round-the-clock assistance from our expert team wherever your journey takes you.",
                },
                {
                  delay: 100,
                  icon: <FaAward />,
                  title: "Expert Guidance",
                  text: "Seasoned consultants who bring insider knowledge to every trip we plan.",
                },
                {
                  delay: 200,
                  icon: <FaCompass />,
                  title: "Competitive Pricing",
                  text: "Premium travel experiences thoughtfully priced for exceptional value.",
                },
              ].map((feature, index) => (
                <div className="col-md-6 col-lg-4 p-1" key={index}>
                  <div
                    className="card h-100 rounded-3 bg-white shadow-sm border-0"
                    data-aos="zoom-out-up"
                    data-aos-offset="100"
                    data-aos-delay={feature.delay}
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <div className="card-body p-4">
                      <h4 className="fw-bold gold-text mb-3 d-flex align-items-center">
                        <span
                          className="text-warning bg-warning-subtle rounded-5 me-2 d-flex align-items-center justify-content-center"
                          style={{ height: "50px", width: "50px" }}
                        >
                          {feature.icon}
                        </span>{" "}
                        {feature.title}
                      </h4>

                      <p className="text-color mb-0">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-color">
          <div className="container">
            <div className="text-center mb-5">
              <h5 className="display-5 fw-bold text-color">
                Purpose Behind
                <span className="gold-text fs-2 d-block">Every Journey</span>
              </h5>
            </div>

            <div className="card border-0 shadow rounded-5 overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-4 p-5 ps-4 bg-light">
                  <h6 className="gold-text fw-bold mb-3">OUR MISSION</h6>

                  <h2 className="fw-bold mb-4">Make Travel Effortless</h2>

                  <p className="text-muted mb-0">
                    Through expert planning, trusted partnerships, and dedicated
                    support, we handle every detail.
                  </p>
                </div>

                <div className="col-lg-4 bg-warning-subtle p-5 ps-4">
                  <h6 className="gold-text fw-bold mb-3">OUR PROMISE</h6>

                  <h2 className="fw-bold mb-4">Travel With Confidence</h2>

                  <p className="text-muted mb-0">
                    From the first booking to your return journey, we're
                    committed to making every trip smooth, safe, and memorable.
                  </p>
                </div>

                <div
                  className="col-lg-4 text-light p-5 ps-4"
                  style={{ background: "#0B1120" }}
                >
                  <h6 className="gold-text fw-bold mb-3">OUR VISION</h6>

                  <h2 className="fw-bold mb-4">Inspire Exploration</h2>

                  <p className="mb-0">
                    We want people to discover new cultures, destinations, and
                    experiences that create lifelong memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
