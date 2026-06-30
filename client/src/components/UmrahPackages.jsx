import React, { useState } from "react";

import { FaCcVisa, FaBusSimple, FaBottleWater } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

import { FaHotel, FaTshirt } from "react-icons/fa";
import ContactModal from "./ContactModal";

const Package = ({
  textColor,
  bgColor,
  badgeColor,
  packageName,
  duration,
  prices,
  makkahDistance,
  madinaDistance,
  badgeText,
  btnText,
  priceText,
  onClick,
  delay,
}) => {
  return (
    <div
      className="col-lg-4"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay={delay}
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="card border-0 shadow h-100 overflow-hidden rounded-4">
        <div className={`card-header ${bgColor} p-3 border-0`}>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <h4 className={`mt-1 fw-bold ${textColor}`}>{packageName}</h4>

              <p className={`mb-0 opacity-75  ${textColor}`}>
                <i className="bi bi-calendar-event"></i>
                Duration: {duration}
              </p>
            </div>
            <span
              className={`badge ${textColor} ${bgColor} fw-bolder px-3 py-2 rounded-pill`}
            >
              {badgeText}
            </span>
          </div>
        </div>

        <div className="card-body p-2">
          <div className="row g-3">
            {prices.map((item, index) => (
              <div className="col-6" key={index}>
                <div className={`rounded-4 text-center p-1 h-100 bg-light`}>
                  <h6 className="fw-bold mb-1">{item.title}</h6>

                  <small className="text-muted d-block">{item.subtitle}</small>

                  <h5 className={`fw-bold mt-2 mb-0 ${priceText}`}>
                    {item.price}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          <div className={`rounded-4 p-3 mt-3 bg-light`}>
            <h5 className={`fw-bold mb-3 ${priceText}`}>
              Hotel & Shuttle Details
            </h5>

            <div className="d-flex align-items-start mb-3">
              <div>
                <p className="mb-1 fw-semibold">Makkah</p>

                <small className="text-muted">★★★★☆ | {makkahDistance}</small>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div>
                <p className="mb-1 fw-semibold">Madina</p>

                <small className="text-muted">★★★★★ | {madinaDistance}</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-white border-0 pb-3">
          <button
            className={`btn border-0 fw-bolder ${bgColor} rounded-3 ${textColor} w-100`}
            onClick={onClick}
          >
            <span>{btnText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const UmrahPackages = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container">
      <section className="my-5" id="umrah-packages">
        <div className="text-center mb-3">
          <h2 className="fw-bold display-5 dark-text d-block mb-2">
            Umrah Packages
          </h2>
          <span className="lead mx-auto">
            Carefully planned packages for a comfortable, peaceful, and
            spiritually fulfilling Umrah experience.
          </span>
        </div>
        <div className="row g-3 justify-content-center">
          <Package
            delay={0}
            textColor="text-black"
            bgColor="silver-bg"
            badgeColor="gold-bg"
            priceText="silver-text"
            packageName="Economy Umrah Package"
            duration="15 Days"
            prices={[
              { title: "Quint", subtitle: "5 Person", price: "₹88,999" },
              { title: "Quad", subtitle: "4 Person", price: "₹94,999" },
              { title: "Triple", subtitle: "3 Person", price: "₹99,999" },
              {
                title: "Double",
                subtitle: "2 Person / Couple",
                price: "₹1,02,999",
              },
            ]}
            makkahDistance="1600m Shuttle Service Available"
            madinaDistance="200-250m Walkable"
            badgeText="Affordable"
            btnText="Book Economy Package"
            onClick={() => setShowModal(true)}
          />

          <Package
            delay={100}
            textColor="text-white"
            bgColor="gold-bg"
            badgeColor="gold-bg"
            priceText="gold-text"
            packageName="Deluxe Umrah Package"
            duration="15 Days"
            prices={[
              { title: "Quint", subtitle: "5 Person", price: "₹1,03,999" },
              { title: "Quad", subtitle: "4 Person", price: "₹1,09,999" },
              { title: "Triple", subtitle: "3 Person", price: "₹1,12,999" },
              {
                title: "Double",
                subtitle: "2 Person / Couple",
                price: "₹1,19,999",
              },
            ]}
            makkahDistance="500-600m"
            madinaDistance="80-100m"
            badgeText="Premium"
            btnText="Book Deluxe Package"
            onClick={() => setShowModal(true)}
          />

          <Package
            delay={200}
            textColor="text-white disabled"
            bgColor="dark-bg"
            badgeColor="dark-bg"
            priceText="dark-text"
            packageName="Ramadan Umrah Package"
            duration="15 days | 20 days | 30 days"
            prices={[
              { title: "Quint", subtitle: "5 Person", price: "₹1,55,000" },
              { title: "Quad", subtitle: "4 Person", price: "₹1,75,000" },
              { title: "Triple", subtitle: "3 Person", price: "₹1,85,000" },
              {
                title: "Double",
                subtitle: "2 Person / Couple",
                price: "₹1,95,000",
              },
            ]}
            makkahDistance="1600m Shuttle Service Available"
            madinaDistance="200-250m Walkable"
            badgeText="Unavailable"
            btnText="Book Ramadan Package"
            onClick={() => setShowModal(true)}
          />
        </div>
      </section>

      {/* Monthly Groups */}
      <section className="my-5">
        <div className="p-4 px-1 px-lg-4 rounded-4 mt-5 silver-bg">
          <div className="card-body p-2 dark-text">
            <h4 className="fw-bold fs-1 dark-text d-block mb-2">
              Umrah Groups Available Monthly
            </h4>

            <span className="fw-semibold py-3 fs-5 d-block">
              We organize Umrah groups on specific dates each month, designed to
              accommodate various schedules and preferences. Our carefully
              planned itineraries ensure a fulfilling spiritual journey.
            </span>

            <p className="m-0">
              A <b>₹10,000</b> surcharge will be applied to the above rates due
              to seasonal variations. <br /> All listed prices are negotiable.
              Please contact us to discuss and secure the best possible rates.
            </p>
          </div>
          <div className="card-body p-2 mt-2 w-100">
            <h3 className="fw-bold fs-1 dark-text d-block mb-2">
              Package Includes
            </h3>

            <div className="row gap-3 px-3 justify-content-lg-start justify-content-center">
              {[
                {
                  icon: <GiCommercialAirplane className="fs-4 me-1" />,
                  title: "Flights",
                },
                {
                  icon: <FaCcVisa className="fs-4 me-1" />,
                  title: "Visa",
                },
                {
                  icon: <FaHotel className="fs-4 me-1" />,
                  title: "Hotels",
                },
                {
                  icon: <FaBusSimple className="fs-4 me-1" />,
                  title: "Transportation",
                },
                {
                  icon: <ImSpoonKnife className="fs-4 me-1" />,
                  title: "Meals",
                },
                {
                  icon: <FaTshirt className="fs-4 me-1" />,
                  title: "Laundry",
                },
                {
                  icon: <FaBottleWater className="fs-4 me-1" />,
                  title: "Zam Zam (5L)",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="dark-bg col-10 col-md-3 col-lg-2 text-white fw-bolder rounded-3 px-0 py-2 fw-semibold d-flex justify-content-center align-items-center"
                  style={{ maxWidth: "160px" }}
                >
                  {item.icon}
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="text-center mb-5">
          <h6 className="fw-bold display-5 dark-text d-block mb-2">
            Travel Guidelines & Policies
          </h6>
        </div>

        <div
          className="accordion shadow rounded-4 overflow-hidden"
          id="policyAccordion"
        >
          {/* Reservation Policy */}
          <div className="accordion-item border-0">
            <p className="accordion-header">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#reservationPolicy"
              >
                <i className="bi bi-journal-check me-3"></i>
                Reservation Terms & Conditions
              </button>
            </p>

            <div
              id="reservationPolicy"
              className="accordion-collapse collapse show"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    ✓ For booking, a non-refundable deposit of ₹40,000 is
                    required per person.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Balance amount must be paid 14 days prior to departure.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Children Policy */}
          <div className="accordion-item border-0">
            <p className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#childrenPolicy"
              >
                <i className="bi bi-people-fill me-3"></i>
                Children's Terms & Conditions
              </button>
            </p>

            <div
              id="childrenPolicy"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    ✓ Child Age 0–2 Years: ₹24,000
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Child Age 2–5 Years: Airline fare + ₹12,600 visa charges.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Child Age 5–12 Years (Without Bed): ₹5,000 less than
                    package cost.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Child Age 5–12 Years (With Bed): Full package cost
                    applicable.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="accordion-item border-0">
            <p className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#generalTerms"
              >
                <i className="bi bi-shield-check me-3"></i>
                General Terms & Conditions
              </button>
            </p>

            <div
              id="generalTerms"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    ✓ Passport copy, PAN card and white background photo
                    required.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Booking amount: ₹35,000 per person.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Remaining balance to be cleared after visa or ticket
                    issuance.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Wheelchair requirements must be informed during booking.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Payments accepted through online transactions only.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ No refund applicable after cancellation.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Arrive at the airport at least 4 hours before departure.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Carry your personal medicines and first-aid essentials.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Hotel, transport, or schedule changes by Saudi authorities
                    are beyond our control.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Flight delays and cancellations are subject to airline
                    policies.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Meal timings must be followed as per Saudi Umrah Ministry
                    guidelines.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Follow Ziyarat schedules in Makkah and Madina.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Please refer to our website for additional information.
                  </li>

                  <li className="list-group-item border-0">
                    ✓ Haram permits are subject to Saudi authorities' approval.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default UmrahPackages;
