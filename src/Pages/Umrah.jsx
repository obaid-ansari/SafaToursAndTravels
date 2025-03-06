import React, { useState, useEffect } from "react";
import Image3 from "../assets/Umrah.webp";
import Image2 from "../assets/Umrah2.webp";
import Image1 from "../assets/Umrah3.webp";
import HotelList from "../Components/HotelList.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import UmrahPackages from "../Components/UmrahPackages.jsx";

const Umrah = () => {
  useEffect(() => {
    document.title = "Safa Tour And Travel - UMRAH";
  }, []);

  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/*  Show Contact Form */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      {/* Umrah Hero Section */}
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h1 data-aos="fade-down">Umrah with Safa Tour and Travel</h1>
              <p data-aos="fade-up">
                May Allah Accept Your Dua in Umrah
                <br />
                Experience a Spiritual Journey with Comfort and Peace
              </p>
              <a href="#hotels" className="text-decoration-none text-black">
                <button type="button" className="btn btn-light fw-bold my-2">
                  Exlpore More
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h1>Umrah with Safa Tour and Travel</h1>
              <p>
                May Allah Accept Your Dua in Umrah
                <br />
                Experience a Spiritual Journey with Comfort and Peace
              </p>
              <a href="#hotels" className="text-decoration-none text-black">
                <button type="button" className="btn btn-light fw-bold my-2">
                  Exlpore More
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h1>Umrah with Safa Tour and Travel</h1>
              <p>
                May Allah Accept Your Dua in Umrah
                <br />
                Experience a Spiritual Journey with Comfort and Peace
              </p>
              <a href="#hotels" className="text-decoration-none text-black">
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
      {/* Umrah Hotels Section */}
      <section id="hotels">
        <HotelList />
      </section>

      {/* Umrah Economy Packages Section */}
      <UmrahPackages
        textColor="text-success"
        tableColor="table-success"
        bgColor="bg-success-subtle"
        packageName="Economy Umrah Package"
        duration="Duration 15 Days"
        price1="85,999"
        price2="91,999"
        price3="96,999"
        price4="99,999"
        meters1="1600 meters Shuttle Services
                    Available"
        meters2="200-250 meters Walkable"
      />

      {/* Umrah Deluxe Packages Section */}
      <UmrahPackages
        textColor="text-danger"
        tableColor="table-danger"
        bgColor="bg-danger-subtle"
        packageName="Deluxe Umrah Package"
        duration="Duration 15 Days"
        price1="1,00,999"
        price2="1,06,999"
        price3="1,09,999"
        price4="1,16,999"
        meters1="500-600 meters"
        meters2="80-100 meters"
      />

      {/* Umrah For Group Details */}
      <div className="m-3 mt-5 ">
        <div className="bg-ligh container shadow rounded-4 p-3 text-center">
          <h5 className="gradient fw-bold fs-3 py-2">
            Umrah groups available monthly
          </h5>
          <p>
            We organize Umrah groups on specific dates each month, designed to
            accommodate various schedules and preferences. Our carefully planned
            itineraries ensure a fulfilling spiritual journey. For more
            information on upcoming group dates and to reserve your spot, please
            submit your details or contact us directly.
          </p>
          <p>
            A ₹10,000 surcharge will be applied to the above rates due to
            seasonal variations.
          </p>
        </div>
      </div>
      {/* Umrah Package Includes Details */}
      <div className="m-3 mt-5">
        <div className="bg-ligh container p-3 text-center">
          <h5 className="gradient fw-bold fs-3 py-2">Package Includes</h5>
          <p className="fw-semibold">
            All listed prices are negotiable. Please contact us to discuss and
            secure the best possible rates!
          </p>
          <p className="fs-4 fw-semibold">
            Flights{" "}
            <i
              className="fa-solid fa-plane fa-rotate-by"
              style={{ "--fa-rotate-angle": "-45deg" }}></i>
            | Visa <i class="fa-solid fa-passport"></i> | Hotels{" "}
            <i class="fa-solid fa-hotel"></i> | Transportation{" "}
            <i class="fa-solid fa-bus"></i> | Meals{" "}
            <i class="fa-solid fa-utensils"></i> | Laundry{" "}
            <i class="fa-solid fa-shirt"></i> | Zam Zam (5 Ltrs){" "}
            <i class="fa-solid fa-bottle-water"></i>
          </p>
          <p>
            If you require additional days, we can customize your package to
            accommodate your needs. Please note that the total amount will be
            adjusted accordingly. Be sure to mention these details when making
            your booking or submitting the form.
          </p>
          <button
            className="btn btn-primary fw-semibold fs-5 shadow m-2"
            onClick={() => setShowContact(true)}>
            Book Now
          </button>
        </div>
      </div>
      {/* Policies */}
      <div class="accordion container my-5" id="accordionExample">
        <h5 className="fw-semibold fs-3 p-3">Regulations</h5>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne">
              Reservation Terms & Conditions
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul className="fw-semibold">
                <li>
                  For booking, a non refundable deposit of ₹40,000 is required
                  per person.
                </li>
                <li>Balance amount to be paid 14 days prior to departure.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              Children’s Terms & Conditions
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul className="fw-semibold">
                <li>Child Age 0 Yrs To 2 Yrs Of Age - 24,000/-</li>
                <li>
                  Child Age 2 Yrs To 5 Yrs Of Age - Child Fare According To
                  Airlines & 12600/- Visa.
                </li>
                <li>
                  Child Age 5 Yrs To 12 Yrs Without Bed 5,000/- Less Than The
                  Package Cost.
                </li>
                <li>
                  Child Age 5 Yrs To 12 Yrs With Bed Full Package Cost Will Be
                  Applied
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              Terms & Conditions
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul className="fw-semibold">
                <li>
                  Required Document For Booking Passport Scan Copy,Pan Card And
                  1 White Background Photo.
                </li>
                <li>Booking Amount 35,000/- For Booking.</li>
                <li>
                  Balance AmountTo Be Cleared After Visa Or Ticket Issuance.
                </li>
                <li>Wheel Chair If Required Kindly Update Us While Booking.</li>
                <li>All Payments Through Online Transactions Only.</li>
                <li>On Cancellation No Amount Will Be Refunded.</li>
                <li>
                  Arrival On Airport Must Be 4Hours Before The Departure Time .
                </li>
                <li>
                  Kindly Carry Your Medical Needs Tablets And First Aid Kits.
                </li>
                <li>
                  We Will Not Be Responsible For Any Changes In Saudi Hotel Or
                  Buses Delay Done By Saudi Govt.
                </li>
                <li>
                  Airline Delay Is Subject To Airlines Destinations Arrivals.We
                  Will Not Be Responsible For Delays In Flight Or Cancellations
                  From Airlines.
                </li>
                <li>
                  Food Time Are Given Us By Saudi Umrah Ministry Need To Folow
                  It Strictly On Time.
                </li>
                <li>
                  Ziyarat In Makkah And Madina Will Be Done On Time Kindly
                  Follow The Timing System To Make Your Tour Excellent.
                </li>
                <li>Kindly Refer Website For More Details.</li>
                <li>
                  Permits For Al Haram Mosque And Masjid Al Nabwi Are Upon The
                  Saudi Authorities.Any Non Issuance Of Permits We Will Not Be
                  Responsible.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p
        className="bg-primary bg-gradient mb-0 p-3 text-center text-white fs-5 fw-semibold fst-italic"
        style={{ textShadow: "0px 0px 5px white" }}>
        Haram View Room , additional Rs 5000 per person
      </p>
    </>
  );
};

export default Umrah;
