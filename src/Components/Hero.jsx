import React from "react";
import "../Css/Home.css";
import Image1 from "../assets/heroImage1.webp";
import Image2 from "../assets/heroImage2.webp";
import Image3 from "../assets/heroImage3.webp";
import Image4 from "../assets/heroImage4.webp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
AOS.init({
  duration: 1000,
  once: true,
});

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Image1}
              className="d-block w-100"
              alt="..."
              loading="lazy"
            />
            <div className="carousel-caption">
              <h1 data-aos="fade-down">Welcome to Safa Tour and Travel</h1>
              <p data-aos="fade-up">
                Safa Tour and Travel offers flights, visa services, hotels,
                holiday packages, forex exchange, and religious pilgrimages like
                Hajj and Umrah, all in one place!
              </p>

              <a href="#services" className="text-decoration-none text-black">
                <button
                  type="button"
                  className="btn btn-light shadow fw-bold my-2">
                  Exlpore More
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Image2}
              loading="lazy"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1>Seamless Travel Solutions</h1>
              <p>
                Discover hassle-free travel arrangements with our comprehensive
                services designed for your convenience.
              </p>
              <a href="#services" className="text-decoration-none text-black">
                <button type="button" className="btn btn-light fw-bold my-2">
                  Exlpore More
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Image3}
              loading="lazy"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1>Experience Unforgettable Journeys</h1>
              <p>
                Create lifelong memories with our specially curated travel
                packages and expert guidance.
              </p>
              <a href="#services" className="text-decoration-none text-black">
                <button type="button" className="btn btn-light fw-bold my-2">
                  Exlpore More
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Image4}
              loading="lazy"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1>Unmatched Convenience</h1>
              <p>
                Book flights, plan vacations, and arrange accommodations
                effortlessly with Safa Tour and Travel.
              </p>
              <a href="#services" className="text-decoration-none text-black">
                <button type="button" className="btn btn-light fw-bold my-2">
                  Exlpore More
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev d-none d-md-block"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-md-block"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
