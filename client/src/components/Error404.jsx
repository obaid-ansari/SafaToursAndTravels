import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-vh-100 silver-bg d-flex align-items-center justify-content-center"
      style={{ paddingTop: "100px", paddingBottom: "60px" }}
    >
      <div className="text-center">
        <h1
          className="display-1 m-0 fw-bold dark-text"
          style={{ fontSize: "8rem", lineHeight: 1 }}
        >
          404
        </h1>

        <p className="fw-bold fs-3 mt-0 mb-3">Oops! Page Not Found</p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <button
            className="btn btn-light-dark border border-black px-4 py-2 fw-semibold rounded-pill"
            onClick={() => navigate(-1)}
          >
            <span className="fw-bold">Go Back</span>
          </button>

          <Link
            to="/"
            className="btn dark-bg text-white px-4 py-2 fw-semibold rounded-pill"
          >
            <span className="fw-bold">Go to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
