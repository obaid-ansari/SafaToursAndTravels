import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <section id="about" className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#dccfff"
            fillOpacity="1"
            d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,101.3C840,85,960,107,1080,138.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div className="about-container pb-5">
          <h1 className="text-uppercase text-secondary text-center fw-bold container">
            <span className="gradient">About </span>
            Us
          </h1>
          <div className="about-content mt-4 container">
            <div className="content shadow p-3 mb-3 rounded-4">
              <h4 className="fw-bold pb-1">
                About
                <span className="gradient"> Safa Tours and Travels</span>
              </h4>
              <p className="m-0">
                <strong>Welcome to Safa Tour and Travel</strong>, your trusted
                gateway to unforgettable journeys. Founded in 2022, Safa Tours
                and Travels is a dynamic and customer-centric travel agency
                committed to delivering the most enriching travel experiences.
              </p>
            </div>

            <div className="content shadow p-3 mb-3 rounded-4">
              <h4 className="fw-bold pb-1">
                Our
                <span className="gradient"> Vision</span>
              </h4>
              <p className="m-0">
                At Safa Tours and Travels, we believe that travel is not just
                about reaching a destination; it's about embarking on a journey
                of discovery, adventure, and personal growth. Our vision is to
                inspire and empower people to explore the world and create
                lifelong memories through hassle-free, well-planned trips.
              </p>
            </div>

            <div className="content shadow p-3 mb-3 rounded-4">
              <h4 className="fw-bold pb-1">
                Our
                <span className="gradient"> Mission</span>
              </h4>
              <p className="m-0">
                Our mission is simple: to offer our clients a seamless travel
                experience. We achieve this by providing expert guidance,
                personalized itineraries, and unwavering support throughout your
                journey. We are committed to making your travel dreams a
                reality.
              </p>
            </div>

            <div className="content shadow p-3 mb-3 rounded-4">
              <h4 className="fw-bold pb-1">
                Why
                <span className="gradient"> Safa Tours and Travels?</span>
              </h4>
              <ul>
                <li>
                  <p>
                    <b>Personalized Service:</b> We understand that no two
                    travelers are the same. That's why we work closely with you
                    to tailor every aspect of your trip to your preferences and
                    needs.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Expertise:</b> Our team consists of experienced travel
                    professionals who have a deep knowledge of various
                    destinations. They can recommend the best activities,
                    accommodations, and hidden gems to make your trip truly
                    exceptional.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Safety and Reliability:</b> Your safety is our top
                    priority. We partner with trusted airlines, accommodations,
                    and service providers to ensure your travel experience is
                    safe and reliable.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Sustainability:</b> We are committed to promoting
                    responsible and sustainable tourism. We encourage
                    eco-friendly practices and support local communities
                    wherever we go.
                  </p>
                </li>
                <li>
                  <p>
                    <b>24/7 Support:</b> We are there for you round the clock.
                    No matter where you are in the world, our customer support
                    team is just a call away to assist you with any issues or
                    concerns.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Global Reach:</b> Safa Tours and Travels offers a wide
                    range of travel options, from exotic international
                    destinations to domestic getaways. Wherever your heart
                    desires to go, we can take you there.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Competitive Pricing:</b> We believe that exceptional
                    travel experiences shouldn't come with a hefty price tag.
                    Our pricing is competitive, and we work to find you the best
                    deals within your budget.
                  </p>
                </li>
              </ul>
            </div>

            <div
              className="content shadow p-3 mb-3`cd form
             rounded-4">
              <h4 className="fw-bold pb-1">
                Our
                <span className="gradient"> Services</span>
              </h4>
              <ul>
                <li>
                  <p>
                    <b>Tour Packages:</b> Discover the world's wonders through
                    our thoughtfully crafted tour packages. From cultural
                    immersions to thrilling adventures, our packages cater to
                    all types of travelers.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Customized Trips:</b> We create bespoke itineraries that
                    align with your interests and preferences, ensuring every
                    trip is a unique and unforgettable experience.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Group Travel:</b> Whether you're planning a family
                    reunion, a corporate retreat, or a school trip, we
                    specialize in organizing group travel experiences.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Honeymoon Specials:</b> Celebrate love in the world's
                    most romantic destinations with our exclusive honeymoon
                    packages.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Corporate Travel:</b> Simplify your business travel with
                    our corporate services, offering cost-effective and
                    efficient solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
