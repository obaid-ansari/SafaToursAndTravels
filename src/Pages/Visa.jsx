import React, { useEffect } from "react";

const Visa = () => {
  useEffect(() => {
    document.title = "Safa Tour And Travel - VISA";
  }, []); // Empty dependency array means this runs only once on m

  return (
    <div className="text-center container">
      <h1 className="text-uppercase text-secondary text-center fw-bold p-3 container">
        <span className="gradient">Visa </span>
        Assistance
      </h1>
      <p>
        Expert visa assistance to make your travel process smooth and
        stress-free.
      </p>
    </div>
  );
};

export default Visa;
