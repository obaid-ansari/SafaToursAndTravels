import React, { useState } from "react";
import Logo from "../assets/safaLogo.webp";
import { NavLink } from "react-router-dom";
import ContactModal from "../components/ContactModal";

const SerivceCard = ({
  number,
  heading,
  content,
  link,
  btnText,
  onClick,
  delay,
}) => {
  return (
    <>
      <div
        className="col-lg-4"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay={delay}
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="luxury-card rounded-4 p-3 bg-white text-black">
          <p className="fw-bolder display-3 text-warning text-opacity-50 m-0">
            {number}
          </p>

          <h2 className="fw-bolder fs-3 py-1 text-color">{heading}</h2>

          <p className="text-color">{content}</p>

          {link ? (
            <>
              <NavLink
                to={link}
                className="btn gold-bg fw-bold border-0 text-white"
              >
                {btnText}
              </NavLink>
            </>
          ) : (
            <>
              <button
                onClick={onClick}
                className="btn gold-bg fw-bold border-0 text-white"
              >
                {btnText}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="services-section bg-color" id="services">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold gold-text display-5">
            Book Your Next Journey With Safa
          </h2>
          <span className="lead d-block m-0 text-color">
            Experience seamless travel solutions tailored to your needs.
          </span>
        </div>

        <div className="row g-4">
          <SerivceCard
            number="01"
            heading="Flight Tickets"
            content="Safely book domestic and international flights at the best prices with Safa Travels."
            link="/flight"
            btnText="Book Flights"
            delay={0}
          />

          <SerivceCard
            number="02"
            heading="Visa Assistance"
            content="Expert visa assistance to make your travel process smooth and stress-free."
            link="/visa"
            btnText="Apply Now"
            delay={100}
          />

          <SerivceCard
            number="03"
            heading="Hotels Booking"
            content="Discover and reserve the perfect hotels to match your comfort and budget."
            link="/hotels"
            btnText="Book Hotels"
            delay={200}
          />

          <SerivceCard
            number="04"
            heading="Forex Exchange"
            content="Get the best currency exchange rates with fast and reliable services at Safa Travels."
            link="/forex"
            btnText="Exchange Now"
            delay={0}
          />

          <SerivceCard
            number="05"
            heading="Hajj & Umrah Packages"
            content="Discover our Hajj & Umrah packages with travel, accommodations, and guided experiences."
            onClick={() => setShowModal(true)}
            btnText="Book Now"
            delay={100}
          />

          <SerivceCard
            number="06"
            heading="Karbala"
            content="Ziyarat of Karbala is a pilgrimage to Imam Hussain's shrine, symbolizing sacrifice and faith in Islam."
            onClick={() => setShowModal(true)}
            btnText="Book Now"
            delay={200}
          />
        </div>
      </div>
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Services;
