import React from "react";

import Emirates from "../assets/airlines/emirates.webp";
import Qatar from "../assets/airlines/qatar.webp";
import Etihad from "../assets/airlines/etihad.webp";
import Turkish from "../assets/airlines/turkish.webp";
import Saudia from "../assets/airlines/saudia.webp";
import AirIndia from "../assets/airlines/airindia.webp";
import Indigo from "../assets/airlines/indigo.webp";
import Singapore from "../assets/airlines/singapore.webp";
import Lufthansa from "../assets/airlines/lufthansa.webp";
import British from "../assets/airlines/british.webp";
import Cathay from "../assets/airlines/cathay.webp";
import Malaysia from "../assets/airlines/malaysia.webp";

const airlines = [
  Emirates,
  Qatar,
  Etihad,
  Turkish,
  Saudia,
  AirIndia,
  Indigo,
  Singapore,
  Lufthansa,
  British,
  Cathay,
  Malaysia,
];

export default function AirlinesSlider() {
  return (
    <section className="py-5 bg-color overflow-hidden">
      <div className="container text-center mb-5">
        <h2 className="fw-bold gold-text display-5">Our Airline Partners</h2>
        <span className="d-block text-color">
          Fly with the world's most trusted airlines.
        </span>
      </div>

      <div className="logo-slider">
        <div className="logo-track">
          {[...airlines, ...airlines].map((logo, index) => (
            <div className="logo-item shadow-sm rounded-4 mx-2 p-3" key={index}>
              <img src={logo} alt="Airline Logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
