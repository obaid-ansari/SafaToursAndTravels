import React from "react";
import Hero from "../components/Hero";

// import flightHeroImage from "../assets/hero/flightHero.webp";
import FlightForm from "../components/Forms/FlightForm";
import AirlinesSlider from "../components/AirrlineSider";

const Flight = () => {
  return (
    <main>
      <section
        className="form-hero"
        style={{
          backgroundImage: `url(hero/flightHero.webp)`,
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
            <FlightForm />
          </div>
        </div>
      </section>
      <AirlinesSlider />
    </main>
  );
};

export default Flight;
