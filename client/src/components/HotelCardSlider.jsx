import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HotelCardSlider = ({ name, location, images, rating, delay }) => {
  return (
    <div
      className="card border-0 shadow rounded-4 overflow-hidden"
      style={{ width: "100%" }}
      data-aos="zoom-out-up"
      data-aos-offset="100"
      data-aos-delay={delay}
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="position-relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          style={{ height: "450px" }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                loading="lazy"
                alt={`${name} ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="position-absolute text-white bottom-0 w-100 p-4"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            zIndex: 10,
          }}
        >
          <h3 className="fw-bold fs-5 m-0">{name}</h3>
          <div className="text-warning">{rating}</div>
          <p className="fw-semibold m-0 fs-5">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelCardSlider;
