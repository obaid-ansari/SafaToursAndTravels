import React, { useState, useEffect } from "react";
import allCountryCodes from "../../data/countryCode";
import airports from "../../data/airports";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import AirportAutocomplete from "../AirportAutocomplete";
import CountryCodeAutocomplete from "../CountryCodeAutocomplete";
import { flightApi } from "../../services/form.service";
import toast from "react-hot-toast";

const FlightForm = () => {
  // --- State Management ---
  const [submitStatus, setSubmitStatus] = useState("Submit");

  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    countryCode: "+91", // Default to US, change as needed
    phone: "",
  });

  const [flightDetails, setFlightDetails] = useState({
    tripType: "single",
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    flightClass: "Economy",
    fareType: "Regular",
  });

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [childAges, setChildAges] = useState([]);
  const [infantAges, setInfantAges] = useState([]);
  const [validationError, setValidationError] = useState("");

  // --- Dynamic Handlers ---

  // Sync child ages array
  useEffect(() => {
    setChildAges((prev) => {
      const current = [...prev];
      if (current.length < passengers.children) {
        while (current.length < passengers.children) current.push("3");
      } else {
        current.length = passengers.children;
      }
      return current;
    });
  }, [passengers.children]);

  // Sync infant ages array
  useEffect(() => {
    setInfantAges((prev) => {
      const current = [...prev];
      if (current.length < passengers.infants) {
        while (current.length < passengers.infants) current.push("0");
      } else {
        current.length = passengers.infants;
      }
      return current;
    });
  }, [passengers.infants]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFlightChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePassengerCount = (type, operation) => {
    setPassengers((prev) => {
      const currentTotal = prev.adults + prev.children;

      if (operation === "increment") {
        // Max 9 passengers rule (Adults + Children)
        if ((type === "adults" || type === "children") && currentTotal >= 9) {
          setValidationError(
            "Maximum of 9 passengers (Adults + Children) allowed per booking.",
          );
          return prev;
        }
        // Infants cannot exceed adults
        if (type === "infants" && prev.infants >= prev.adults) {
          setValidationError(
            "Number of infants cannot exceed the number of adults.",
          );
          return prev;
        }
        setValidationError("");
        return { ...prev, [type]: prev[type] + 1 };
      } else {
        if (type === "adults" && prev.adults <= 1) return prev; // At least 1 adult
        if (prev[type] <= 0) return prev;

        setValidationError("");
        const updated = { ...prev, [type]: prev[type] - 1 };

        // Auto-adjust infants if adults drop below infant count
        if (type === "adults" && updated.adults < updated.infants) {
          updated.infants = updated.adults;
        }
        return updated;
      }
    });
  };

  const handleAgeChange = (index, value, type) => {
    if (type === "child") {
      const updated = [...childAges];
      updated[index] = value;
      setChildAges(updated);
    } else {
      const updated = [...infantAges];
      updated[index] = value;
      setInfantAges(updated);
    }
  };

  const sendFlightDetails = async (data) => {
    try {
      setSubmitStatus("Submitting...");
      const response = await flightApi(data);
      if (response.status === 200) {
        setPersonalDetails({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
        });

        setFlightDetails({
          tripType: "single",
          from: "",
          to: "",
          departureDate: "",
          returnDate: "",
          flightClass: "Economy",
          fareType: "Regular",
        });

        setPassengers({
          adults: 1,
          children: 0,
          infants: 0,
        });
        toast.success(response.data.message);
        setSubmitStatus("Submitted");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send email.");
      setSubmitStatus("Submit");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (flightDetails.tripType === "round" && !flightDetails.returnDate) {
      setValidationError("Please select a return date for your round trip.");
      return;
    }

    const payload = {
      personalDetails,
      flightDetails,
      passengers: {
        ...passengers,
        childAges,
        infantAges,
      },
    };

    sendFlightDetails(payload);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="card-body">
        {/* SECTION 1: Personal Details */}

        <div className="card-header text-center text-color mb-3">
          <h1 className="mb-1 fw-bold">Flight Reservation</h1>
        </div>

        <h4 className="mb-2 text-color fw-bold pb-2">Personal Details</h4>
        <div className="row g-2 mb-3">
          <div className="col-md-4">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Full Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg fs-6"
              name="name"
              placeholder="e.g. Jane Doe"
              value={personalDetails.name}
              onChange={handlePersonalChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg fs-6"
              name="email"
              placeholder="e.g. jane@example.com"
              value={personalDetails.email}
              onChange={handlePersonalChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Phone Number
            </label>
            <div className="input-group">
              <CountryCodeAutocomplete
                name="countryCode"
                value={personalDetails.countryCode}
                onChange={handlePersonalChange}
                countries={allCountryCodes}
              />

              <input
                type="tel"
                className="form-control form-control-lg fs-6"
                name="phone"
                placeholder="Phone number"
                value={personalDetails.phone}
                onChange={handlePersonalChange}
                required
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Flight Details */}

        <h4 className="mb-2 text-color fw-bold pb-2">Flight Details</h4>
        <div className="row g-3 mb-3 align-items-center">
          <div className="col-md-4">
            <div className="btn-group w-100" role="group">
              <input
                type="radio"
                className="btn-check"
                name="tripType"
                id="singleTrip"
                value="single"
                checked={flightDetails.tripType === "single"}
                onChange={handleFlightChange}
              />
              <label
                className="btn trip-btn fw-bold border-1 border-black rounded-3 mx-1"
                htmlFor="singleTrip"
              >
                One Way
              </label>

              <input
                type="radio"
                className="btn-check"
                name="tripType"
                id="roundTrip"
                value="round"
                checked={flightDetails.tripType === "round"}
                onChange={handleFlightChange}
              />
              <label
                className="btn trip-btn fw-bold border-1 border-black rounded-3 mx-1"
                htmlFor="roundTrip"
              >
                Round Trip
              </label>
            </div>
          </div>

          <div className="col-md-4">
            <select
              className="form-select form-select-lg fs-6"
              name="flightClass"
              value={flightDetails.flightClass}
              onChange={handleFlightChange}
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business Class</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-select form-select-lg fs-6"
              name="fareType"
              value={flightDetails.fareType}
              onChange={handleFlightChange}
            >
              <option value="Regular">Regular Fare</option>
              <option value="Student">Student Fare</option>
              <option value="Senior Citizen">Corporate Fare</option>
              <option value="Armed Forces">Marine Fare</option>
            </select>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-3">
            <label className="fw-bold mb-1">From</label>
            <AirportAutocomplete
              name="from"
              placeholder="City or Airport (e.g. BOM)"
              value={flightDetails.from}
              onChange={handleFlightChange}
              airports={airports}
            />
          </div>
          <div className="col-md-3">
            <label className="fw-bold mb-1">To</label>
            <AirportAutocomplete
              name="to"
              placeholder="City or Airport (e.g. DEL)"
              value={flightDetails.to}
              onChange={handleFlightChange}
              airports={airports}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label text-muted small fw-bold text-uppercase">
              Departure Date
            </label>
            <input
              type="date"
              className="form-control form-control-lg fs-6"
              name="departureDate"
              value={flightDetails.departureDate}
              onChange={handleFlightChange}
              required
            />
          </div>

          {flightDetails.tripType === "round" && (
            <div className="col-md-3">
              <label className="form-label text-muted small fw-bold text-uppercase">
                Return Date
              </label>
              <input
                type="date"
                className="form-control form-control-lg fs-6"
                name="returnDate"
                min={flightDetails.departureDate}
                value={flightDetails.returnDate}
                onChange={handleFlightChange}
                required
              />
            </div>
          )}
        </div>

        {/* SECTION 3: Passenger Details */}
        <h4 className="mb-2 text-color fw-bold pb-2">Passenger Details</h4>

        <div className="rounded-3 mb-3">
          <div className="row g-3 align-items-center text-center text-sm-start">
            {/* Adults Counter */}
            <div className="col-sm-4 border-end-sm">
              <div className="d-flex justify-content-between align-items-center px-2">
                <div>
                  <p className="mb-0 fw-bold fs-5">Adults</p>
                  <small className="text-muted">12+ years</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn rounded-5 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      background: "rgba(255, 255, 255, 0.6) ",
                    }}
                    onClick={() => handlePassengerCount("adults", "decrement")}
                  >
                    <FaMinus className="color-text small" />
                  </button>
                  <span className="fw-bold fs-5 px-2">{passengers.adults}</span>
                  <button
                    type="button"
                    className="btn rounded-5 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      background: "rgba(255, 255, 255, 0.6) ",
                    }}
                    onClick={() => handlePassengerCount("adults", "increment")}
                  >
                    <FaPlus className="color-text small" />
                  </button>
                </div>
              </div>
            </div>

            {/* Children Counter */}
            <div className="col-sm-4 border-end-sm">
              <div className="d-flex justify-content-between align-items-center px-2">
                <div>
                  <p className="mb-0 fw-bold fs-5">Children</p>
                  <small className="text-muted">2 - 12 years</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn rounded-5 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      background: "rgba(255, 255, 255, 0.6) ",
                    }}
                    onClick={() =>
                      handlePassengerCount("children", "decrement")
                    }
                  >
                    <FaMinus className="color-text small" />
                  </button>
                  <span className="fw-bold fs-5 px-2">
                    {passengers.children}
                  </span>
                  <button
                    type="button"
                    className="btn rounded-5 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      background: "rgba(255, 255, 255, 0.6) ",
                    }}
                    onClick={() =>
                      handlePassengerCount("children", "increment")
                    }
                  >
                    <FaPlus className="color-text small" />
                  </button>
                </div>
              </div>
            </div>

            {/* Infants Counter */}
            <div className="col-sm-4">
              <div className="d-flex justify-content-between align-items-center px-2">
                <div>
                  <p className="mb-0 fw-bold fs-5">Infants</p>
                  <small className="text-muted">Under 2 years</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn rounded-5 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      background: "rgba(255, 255, 255, 0.6) ",
                    }}
                    onClick={() => handlePassengerCount("infants", "decrement")}
                  >
                    <FaMinus className="color-text small" />
                  </button>
                  <span className="fw-bold fs-5 px-2">
                    {passengers.infants}
                  </span>
                  <button
                    type="button"
                    className="btn rounded-5 d-flex align-items-center justify-content-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      background: "rgba(255, 255, 255, 0.6) ",
                    }}
                    onClick={() => handlePassengerCount("infants", "increment")}
                  >
                    <FaPlus className="color-text small" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Child Age Selectors */}
          {childAges.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 text-color fw-bold pb-2">
                Specify Child Ages
              </h4>
              <div className="row g-3">
                {childAges.map((age, idx) => (
                  <div
                    key={`child-age-${idx}`}
                    className="col-6 col-sm-4 col-md-3"
                  >
                    <label className="form-label small text-muted fw-bold mb-1">
                      Child {idx + 1} Age
                    </label>
                    <select
                      className="form-select"
                      value={age}
                      onChange={(e) =>
                        handleAgeChange(idx, e.target.value, "child")
                      }
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 3} value={i + 3}>
                          {i + 3} yrs
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Infant Age Selectors */}
          {infantAges.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 text-color fw-bold pb-2">
                Specify Infant Ages
              </h4>
              <div className="row g-3">
                {infantAges.map((age, idx) => (
                  <div
                    key={`infant-age-${idx}`}
                    className="col-6 col-sm-4 col-md-3"
                  >
                    <label className="form-label small text-muted fw-bold mb-1">
                      Infant {idx + 1} Age
                    </label>
                    <select
                      className="form-select"
                      value={age}
                      onChange={(e) =>
                        handleAgeChange(idx, e.target.value, "infant")
                      }
                    >
                      <option value="0">0-11 Months</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {validationError && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Notice:</strong> {validationError}
            <button
              type="button"
              className="btn-close"
              onClick={() => setValidationError("")}
            ></button>
          </div>
        )}

        <p className="m-0 fw-semibold text-black">
          This is an enquiry form only. Our team will contact you within a few
          hours via phone or email with the best available flight options.
        </p>

        {/* Form Action Buttons */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-100 btn border-0 dark-bg text-white fw-bold shadow-sm py-2 text-uppercase"
            disabled={submitStatus === "Submitting..."}
          >
            <span className="d-block m-0">{submitStatus}</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default FlightForm;
