import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
const Card = ({
  image,
  title,
  description,
  btnText,
  link,
  children,
  btnHide,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return (
    <div
      className="col-md-5 col-lg-3 m-4 shadow rounded-4 pb-1 cards"
      data-aos="fade-up">
      <img loading="lazy" className="rounded-top-4" src={image} alt={title} />
      <h2 className="ps-2 p-1 m-0 fw-bold fs-4">{title}</h2>
      <p className="ps-2 p-1 m-0 fw-semibold">{description}</p>
      <div className="d-flex">
        <button
          type="button"
          className={`${btnHide} btn btn-dark fw-semibold bg-gradient m-2`}
          onClick={handleNavigation}>
          {btnText}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Card;
