import React, { useEffect } from "react";

const FlightTickets = () => {
  useEffect(() => {
    document.title = "Safa Tour And Travel - FLIGHT";
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div className="text-center container">
      <h1 className="text-uppercase text-secondary text-center fw-bold p-3 container">
        <span className="gradient">Flight </span>
        Services
      </h1>
      <p>
        Safely book domestic and international flights at the best prices with
        Safa Travels.
      </p>
    </div>
  );
};

export default FlightTickets;
