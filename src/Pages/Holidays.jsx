import React, { useState, useEffect, useRef } from "react";
import "../Css/Pages.css";

import DestiCards from "../Components/DestinationCard";
import Istanbul from "../assets/Istanbul.webp";
import Dubai from "../assets/Dubai.webp";
import Thailand from "../assets/Thailand.webp";
import Us from "../assets/US.webp";
import Japan from "../assets/Japan.webp";
import Chicago from "../assets/Chicago.webp";
import Goa from "../assets/Goa.webp";
import Kashmir from "../assets/Kashmir.webp";
import Kerala from "../assets/Kerala.webp";
import Mumbai from "../assets/Mumbai.webp";
import Ladakh from "../assets/Ladakh.webp";
import Taj from "../assets/Taj.webp";

import Visitingdestiny from "../Components/Visitingdestiny";
import ContactForm from "../Components/ContactForm.jsx";

const Holidays = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.title = "Safa Tour And Travel - HOLIDAYS";
  }, []); // Empty dependency array means this runs only once on mount

  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/*  Show Contact Form */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      <h1 className="text-uppercase text-secondary text-center fw-bold p-4 container">
        <span className="gradient">Popular </span>
        Destination
      </h1>
      {/* International Destinations */}
      <h3 className="container text-center fw-normal">
        International Destinations
      </h3>
      <div className="position-relative">
        <button
          className="btn d-none d-lg-block scroll-btn left-btn fs-3 shadow"
          onClick={() => scroll(scrollRef1, "left")}>
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <p className="text-center p-0 m-0 gradient">
          Swipe left to see more <i className="fa-solid fa-angle-right"></i>
        </p>
        <div ref={scrollRef1} className="p-4 container horizontal-scroll">
          <DestiCards
            customClass="ms-lg-0 ms-3"
            image={Istanbul}
            title="Istanbul"
            description="A vibrant city bridging Europe and Asia, rich in history, culture, and stunning architecture."
          />

          <DestiCards
            image={Dubai}
            title="Dubai"
            description="A futuristic metropolis known for its luxury, skyscrapers, and thrilling desert adventures."
          />

          <DestiCards
            image={Thailand}
            title="Thailand"
            description="A tropical paradise with golden beaches, vibrant markets, and rich cultural heritage."
          />

          <DestiCards
            image={Us}
            title="United States"
            description="A diverse destination offering everything from bustling cities and natural wonders to iconic road trips."
          />

          <DestiCards
            image={Japan}
            title="Japan"
            description="A harmonious blend of ancient traditions from serene temples to bustling cityscapes."
          />

          <DestiCards
            customClass="me-lg-0 me-3"
            image={Chicago}
            title="Chicago"
            description="A dynamic city on Lake Michigan, famous for its stunning architecture, deep-dish pizza, and vibrant arts scene."
          />
          <button
            className="btn d-none d-lg-block scroll-btn right-btn fs-3 shadow"
            onClick={() => scroll(scrollRef1, "right")}>
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      {/* Indian Destinations */}
      <h3 className="container text-center fw-normal mt-5">
        Indian Destinations
      </h3>
      <div className="cards-container position-relative">
        <button
          className="btn d-none d-lg-block scroll-btn left-btn fs-3 shadow"
          onClick={() => scroll(scrollRef2, "left")}>
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <p className="text-center p-0 m-0 gradient">
          Swipe left to see more <i className="fa-solid fa-angle-right"></i>
        </p>

        <div ref={scrollRef2} className="p-4 container horizontal-scroll">
          <DestiCards
            customClass="ms-lg-0 ms-3"
            image={Goa}
            title="Goa"
            description="A tropical paradise with golden beaches, vibrant nightlife, and Portuguese heritage."
          />

          <DestiCards
            image={Kashmir}
            title="Kashmir"
            description="A futuristic metropolis known for its luxury, skyscrapers, and thrilling desert adventures."
          />

          <DestiCards
            image={Kerala}
            title="Kerala"
            description="God's Own Country, famed for its backwaters, lush greenery, and tranquil beaches."
          />

          <DestiCards
            image={Mumbai}
            title="Mumbai"
            description="The City of Dreams, known for its bustling nightlife, iconic Gateway of India, Bollywood industry, and Marine Drive."
          />

          <DestiCards
            image={Ladakh}
            title="Ladakh"
            description="A high-altitude desert known for its stunning landscapes, crystal-clear lakes, and thrilling adventure experiences."
          />

          <DestiCards
            customClass="me-lg-0 me-3"
            image={Taj}
            title="Taj Mahal"
            description="A symbol of love and one of the Seven Wonders of the World, known for its breathtaking Mughal architecture."
          />
          <button
            className="btn d-none d-lg-block scroll-btn right-btn fs-3 shadow"
            onClick={() => scroll(scrollRef2, "right")}>
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <p className="text-center fs-3  mt-5">
        For application inquiries, please
        <button
          className="btn btn-primary bg-gradient fs-5 my-2 fw-bold ms-2"
          onClick={() => setShowContact(true)}>
          Contact Us
        </button>
      </p>
      {/* Visiting Destinations */}
      <h3 className="container text-center fw-normal mt-5">
        Best Destinations to Visit in India
      </h3>
      <Visitingdestiny />
    </>
  );
};

export default Holidays;
