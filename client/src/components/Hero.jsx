import React from "react";
const Hero = ({ heroImage, alt, children }) => {
  return (
    <section className="hero-container border-0">
      <div
        className="hero d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Hero;
