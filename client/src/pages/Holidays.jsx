import React from "react";
import Hero from "../components/Hero";
// import holidaysHeroImage from "../assets/hero/holidaysHero.webp";
import DestinationCard from "../components/DestinationCard";

const Holidays = () => {
  return (
    <main>
      <Hero heroImage={"hero/holidaysHero.webp"} alt={"Hero Image of Flight"}>
        <div className="container mt-5">
          <div
            className="rounded-4 p-3 mt-4 text-center"
            style={{
              backdropFilter: "blur(6px)",
              background: "rgba(255, 255, 255, 0.25)",
            }}
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1 className="display-4 fw-bold text-color my-2">
              Discover Your Next
              <br />
              <span className="dark-text">Dream Holiday</span>
            </h1>

            <span className="text-color fw-semibold fs-4 d-block my-2">
              Explore breathtaking destinations, unforgettable experiences, and
              carefully crafted holiday packages designed to create memories
              that last a lifetime.
            </span>

            <a
              href="#holidays"
              className="btn dark-bg border-0 text-white my-2 fw-bold"
            >
              Explore More
            </a>
          </div>
        </div>
      </Hero>
      <DestinationCard />
    </main>
  );
};

export default Holidays;
