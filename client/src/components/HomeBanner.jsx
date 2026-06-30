import React from "react";

const HomeBanner = () => {
  return (
    <section className="py-5 bg-color px-2">
      {/* Banner */}
      <div className="about-banner container shadow-sm p-4 p-lg-5 rounded-5">
        <div className="row">
          <div className="text-color">
            <span className="text-uppercase">
              Safa Tours &amp; Travels
            </span>
            <h4 className="display-3 my-3 fw-bold">
              The World Awaits.
              <span className="fs-1 d-block">Travel with Confidence.</span>
            </h4>
            <span className="m-0">
              Since 2022, we have crafted journeys that transcend destinations
              meticulously planned, personally guided, and always unforgettable.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
