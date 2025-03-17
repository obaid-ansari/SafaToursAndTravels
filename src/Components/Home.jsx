import React, { useState, useEffect } from "react";
import "../Css/Home.css";
import Cards from "../Components/Cards";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Flight from "../assets/Flight.webp";
import Visa from "../assets/Visa.png";
import Hotels from "../assets/Hotels.webp";
import Holidays from "../assets/Holidays.webp";
import Forex from "../assets/Forex.webp";
import Hajj from "../assets/Hajj.webp";
import Umrah from "../assets/Umrah.webp";
import Ramadan from "../assets/Ramadan.webp";
import Umrahramadan from "../assets/Umrahramadan.webp";
import Karbala from "../assets/Karbala.webp";
import ContactForm from "./ContactForm";
import FlightTickets from "../Pages/FlightTickets";
import ForexExchange from "../Pages/Forex";
import HotlesBooking from "../Pages/Hotels";
import VisaBooking from "../Pages/Visa";

const Home = () => {
  useEffect(() => {
    document.title = "Safa Tour And Travel";
  }, []); // Empty dependency array means this runs only once on mount

  const [showContact, setShowContact] = useState(false);
  const [showFlight, setShowFlight] = useState(false);
  const [showForex, setShowForex] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [showVisa, setShowVisa] = useState(false);

  return (
    <main>
      {/* Show Contact Form */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      {/* Show Flight Form */}
      {showFlight && <FlightTickets onClose={() => setShowFlight(false)} />}
      {/* Show Forex Form */}
      {showForex && <ForexExchange onClose={() => setShowForex(false)} />}
      {/* Show Hotels Form */}
      {showHotels && <HotlesBooking onClose={() => setShowHotels(false)} />}
      {/* Show Visa Form */}
      {showVisa && <VisaBooking onClose={() => setShowVisa(false)} />}
      <Hero />
      {/* Services Section */}
      <section id="services">
        <div className="services-container bg-white pb-4">
          <h1 className="text-uppercase text-secondary text-center fw-bold p-4 container">
            <span className="gradient">Our </span>
            Services
          </h1>
          <div className="cards-container container">
            <div className="row px-4">
              <Cards
                image={Flight}
                title="Flight Tickets"
                description="Safely book domestic and international flights at the best prices with Safa Travels."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowFlight(true)}>
                  Book Flight
                </button>
              </Cards>

              <Cards
                image={Visa}
                title="Visa Assistance"
                description="Expert visa assistance to make your travel process smooth and stress-free."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowVisa(true)}>
                  Apply Now
                </button>
              </Cards>

              <Cards
                image={Hotels}
                title="Hotels Booking"
                description="Discover and reserve the perfect hotels to match your comfort
                and budget."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowHotels(true)}>
                  Book Hotel
                </button>
              </Cards>

              <Cards
                image={Holidays}
                title="Holiday Packages"
                description="Enjoy tailor-made holiday packages crafted for unforgettable
                  experiences."
                btnText="Discover More"
                link="/holiday-packages"
              />

              <Cards
                image={Forex}
                title="Forex Exchange"
                description="Get the best currency exchange rates with fast and reliable
                services at Safa Travels."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowForex(true)}>
                  Exchange Now
                </button>
              </Cards>
            </div>
          </div>
        </div>
      </section>

      {/* Pilgrimages  Section */}
      <section id="pilgrimages">
        <div className="pilgrimages-container bg-white">
          <h1 className="text-uppercase text-secondary text-center fw-bold p-4 container">
            <span className="gradient">Religious </span>
            Pilgrimages
          </h1>
          <div className="cards-container container">
            <div className="row px-4">
              <Cards
                image={Umrah}
                title="Umrah Packages"
                description="Explore our Umrah packages with seamless travel,
                  accommodations, and guidance."
                btnText="Book Now"
                link="/umrah-packages"
              />

              <Cards
                image={Hajj}
                title="Hajj Packages"
                description=" Discover our Hajj packages with travel, accommodations, and
                  guided experiences."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowContact(true)}>
                  Book Now
                </button>
              </Cards>

              <Cards
                image={Ramadan}
                title="Ramadan packages"
                description="Ramadan is a month of fasting, happiness, reflection for Muslims
                  worldwide."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowContact(true)}>
                  Book Now
                </button>
              </Cards>

              <Cards
                image={Umrahramadan}
                title="Umrah Ramadan Package"
                description="Ramadan is a month of fasting, reflection for Muslims
                  worldwide."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowContact(true)}>
                  Book Now
                </button>
              </Cards>

              <Cards
                image={Karbala}
                title="Karbala"
                description="Ziyarat of Karbala is a pilgrimage to the shrine of Imam Hussain, a symbol of sacrifice and faith in Islam."
                btnHide="d-none">
                <button
                  className="btn btn-dark bg-gradient m-2"
                  onClick={() => setShowContact(true)}>
                  Book Now
                </button>
              </Cards>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs loading="lazy" />
    </main>
  );
};

export default Home;
