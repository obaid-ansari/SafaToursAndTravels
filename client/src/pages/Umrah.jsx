import React from "react";
import Hero from "../components/Hero";
import UmrahPackages from "../components/UmrahPackages";
// import umrahHeroImage from "../assets/hero/umrahHero.webp";

const Umrah = () => {
  return (
    <main>
      <Hero heroImage={"hero/umrahHero.webp"} alt={"Hero Image of Umrah"}>
        <div className="container mt-5">
          <div
            className="rounded-4 p-4 mt-4 text-center"
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
              Hajj &amp; Umrah with
              <br />
              <span className="gold-text"> Safa Tours & Travels</span>
            </h1>

            <span className="text-color fw-semibold fs-4 d-block my-2">
              May Allah Accept Your Dua in Umrah Experience a Spiritual Journey
              with Comfort and Peace
            </span>

            <a
              href="#umrah-packages"
              className="btn gold-bg border-0 text-color my-2 fw-bold"
            >
              Umrah Packages
            </a>
          </div>
        </div>
      </Hero>
      <UmrahPackages />
      <div className="py-2 gold-bg text-center">
        <span className="fw-bold text-color fs-5">
          Haram View Room Available
        </span>

        <p className="m-0 fw-semibold text-color fs-5">
          Additional ₹10,000 per person
        </p>
      </div>
    </main>
  );
};

export default Umrah;
