import React from "react";
// import hotelsHeroImage from "../assets/hero/hotelsHero.webp";
import HotelForm from "../components/Forms/HotelForm";
import Hotels from "../components/Hotels";

const Hotesl = () => {
  return (
    <main className="bg-color">
      <section
        className="form-hero"
        style={{
          backgroundImage: `url(hero/hotelsHero.webp)`,
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
            <HotelForm />
          </div>
        </div>
      </section>
      <Hotels />
    </main>
  );
};

export default Hotesl;
