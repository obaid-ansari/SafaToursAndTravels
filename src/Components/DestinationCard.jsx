import { useEffect } from "react";

const DestinationCard = ({ customClass, image, title, description }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`${customClass} text-white shadow bg-light mx-4 rounded-4 card-horizon 
      `}
      loading="lazy"
      style={{
        backgroundImage: `url(${image})`,
      }}
      data-aos="fade-up">
      <h2
        className="fw-bold fs-3 m-0 ps-2 pt-2 pb-2"
        style={{ textShadow: "0px 0px 3px white" }}>
        {title}
      </h2>
      <p
        className="fw-bolder fs-5 ps-2"
        style={{ textShadow: "0px 0px 3px white" }}>
        {description}
      </p>
    </div>
  );
};

export default DestinationCard;
