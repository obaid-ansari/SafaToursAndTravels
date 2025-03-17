import { useState, useEffect } from "react";

const HotelCard = ({ hotel }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % hotel.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [hotel.images.length, isHovered]);

  const hotelCardCss = {
    backgroundImage: `url(${hotel.images[currentImageIndex]})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  return (
    <div
      className="bg-light shadow rounded-4 mx-4 mb-5 mt-3 p-0 card-horizon"
      data-aos="fade-down"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      loading="lazy"
      style={hotelCardCss}>
      <div
        className="text-white text-center rounded-bottom-4 p-1"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(0, 0, 0, 0.01)",
          width: "100%",
          textShadow: "0px 0px 2px white",
        }}>
        <p className="m-0 fw-bold">{hotel.name}</p>
        <div
          className="hotel-rating"
          style={{ textShadow: "0px 0px 1px yellow" }}>
          {hotel.rating}
        </div>
        <p className="m-0 fw-normal">{hotel.location}</p>
      </div>
    </div>
  );
};

const HotelList = () => {
  // Hotels in Makkah
  const makkahHotels = [
    {
      name: "Olayan Palace Hotel",
      rating: "★★★★★",
      location: "Makkah",
      images: [
        "Hotelimages/Makkah/OlyanPalace/image1.WebP",
        "Hotelimages/Makkah/OlyanPalace/image2.WebP",
        "Hotelimages/Makkah/OlyanPalace/image3.WebP",
        "Hotelimages/Makkah/OlyanPalace/image4.WebP",
      ],
    },
    {
      name: "Qasswa Tower Hotel",
      rating: "★★★★★",
      location: "Makkah",
      images: [
        "Hotelimages/Makkah/QaswaTower/image1.WebP",
        "Hotelimages/Makkah/QaswaTower/image2.WebP",
        "Hotelimages/Makkah/QaswaTower/image3.WebP",
        "Hotelimages/Makkah/QaswaTower/image4.WebP",
      ],
    },
    {
      name: "Elaf Ajyad Hotel",
      rating: "★★★★☆",
      location: "Makkah",
      images: [
        "Hotelimages/Makkah/ElafAjyad/image1.WebP",
        "Hotelimages/Makkah/ElafAjyad/image2.WebP",
        "Hotelimages/Makkah/ElafAjyad/image3.WebP",
        "Hotelimages/Makkah/ElafAjyad/image4.WebP",
      ],
    },
    {
      name: "Saraya Al Misk Hotel",
      rating: "★★★☆☆",
      location: "Makkah",
      images: [
        "Hotelimages/Makkah/Saraya/image1.WebP",
        "Hotelimages/Makkah/Saraya/image2.WebP",
        "Hotelimages/Makkah/Saraya/image3.WebP",
        "Hotelimages/Makkah/Saraya/image4.WebP",
      ],
    },
  ];

  // Hotels in Madina
  const madinaHotels = [
    {
      name: "Pullman Zamzam Hotel",
      rating: "★★★★★",
      location: "Madina",
      images: [
        "Hotelimages/Madina/PullmanZamzam/image1.WebP",
        "Hotelimages/Madina/PullmanZamzam/image2.WebP",
        "Hotelimages/Madina/PullmanZamzam/image3.WebP",
        "Hotelimages/Madina/PullmanZamzam/image4.WebP",
      ],
    },
    {
      name: "Taiba Front Hotel",
      rating: "★★★★★",
      location: "Madina",
      images: [
        "Hotelimages/Madina/TaibaFront/image1.WebP",
        "Hotelimages/Madina/TaibaFront/image2.WebP",
        "Hotelimages/Madina/TaibaFront/image3.WebP",
        "Hotelimages/Madina/TaibaFront/image4.WebP",
      ],
    },
    {
      name: "Amjad Al Salam Hotel",
      rating: "★★★☆☆",
      location: "Madina",
      images: [
        "Hotelimages/Madina/AmjatSalam/image1.WebP",
        "Hotelimages/Madina/AmjatSalam/image2.WebP",
        "Hotelimages/Madina/AmjatSalam/image3.WebP",
        "Hotelimages/Madina/AmjatSalam/image4.WebP",
      ],
    },
    {
      name: "Riadh Al Zahra Hotel",
      rating: "★★☆☆☆",
      location: "Madina",
      images: [
        "Hotelimages/Madina/AlRiyaz/image1.WebP",
        "Hotelimages/Madina/AlRiyaz/image2.WebP",
        "Hotelimages/Madina/AlRiyaz/image3.WebP",
        "Hotelimages/Madina/AlRiyaz/image4.WebP",
      ],
    },
  ];

  return (
    <div className="row m-0 bg-white px-lg-5">
      <h2 className="gradient text-uppercase text-secondary text-center fw-bold fs-1 p-4">
        Hotels
      </h2>
      {/* Section for Makkah Hotels */}
      <h3 className="text-center text-dark fw-bold">Makkah Hotels</h3>
      <p className="text-center fw-light">
        Swipe & click on any image to see more
      </p>
      <div className="horizontal-scroll">
        {makkahHotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
      {/* Section for Madina Hotels */}
      <h3 className="text-center text-dark fw-bold">Madina Hotels</h3>
      <p className="text-center fw-light">
        Swipe & click on any image to see more
      </p>
      <div className=" d-flex horizontal-scroll">
        {madinaHotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
