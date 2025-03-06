import React, { useEffect } from "react";

const Hotels = () => {
  useEffect(() => {
    document.title = "Safa Tour And Travel - HOTELS";
  }, []); // Empty dependency array means this runs only once on m

  return (
    <div className="text-center container">
      <h1 className="text-uppercase text-secondary text-center fw-bold p-3 container">
        <span className="gradient">Hotels </span>
        Booking
      </h1>
      <p>
        Discover and reserve the perfect hotels to match your comfort and
        budget.
      </p>
    </div>
  );
};

export default Hotels;
