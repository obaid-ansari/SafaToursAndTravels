import React from "react";
import Hero from "../components/Hero";
// import homeHeroImage from "../assets/hero/homeHero.webp";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  return (
    <main>
      <Hero heroImage={"hero/homeHero.webp"} alt={"Hero Image of City"}>
        <div className="container mt-5">
          <div
            className="rounded-4 p-3 pt-2 mt-4 text-center"
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
              Discover The World With
              <br />
              <span className="gold-text"> Safa Tours & Travels</span>
            </h1>

            <span className="text-color fw-semibold fs-4 d-block my-2">
              Safa Tour and Travel offers flights, visa services, hotels,
              holiday packages, forex exchange, and religious pilgrimages like
              Hajj and Umrah, all in one place!
            </span>

            <a
              href="#services"
              className="btn gold-bg border-0 text-color my-2 fw-bold"
            >
              Our Services
            </a>
          </div>
        </div>
      </Hero>
      <Services />
      <AboutUs />
      <HomeBanner />
    </main>
  );
};

export default Home;
