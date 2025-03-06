import React, { useEffect } from "react";

const Forex = () => {
  useEffect(() => {
    document.title = "Safa Tour And Travel - FOREX";
  }, []); // Empty dependency array means this runs only once on m

  return (
    <div className="text-center container">
      <h1 className="text-uppercase text-secondary text-center fw-bold p-3 container">
        <span className="gradient">Forex </span>
        Exchange
      </h1>
      <p>
        Get the best currency exchange rates with fast and reliable services at
        Safa Travels.
      </p>
    </div>
  );
};

export default Forex;
