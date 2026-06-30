import React from "react";
import HotelCardSlider from "./HotelCardSlider";

const Hotels = () => {
  // Hotels in Makkah
  const makkahHotels = [
    {
      delay: 0,
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
      delay: 50,
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
      delay: 100,
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
      delay: 150,
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
      delay: 0,
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
      delay: 50,
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
      delay: 100,
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
      delay: 150,
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
    <>
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5 gold-text">Makkah Hotels</h2>
          <span className="text-muted d-block">
            Swipe on any image to see more
          </span>
        </div>
        <div className="row g-3">
          {makkahHotels.map((hotel, idx) => (
            <div className="col-12 col-lg-3 col-md-6" key={idx}>
              <HotelCardSlider {...hotel} />
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5 gold-text">Madina Hotels</h2>
          <span className="text-muted d-block">
            Swipe on any image to see more
          </span>
        </div>
        <div className="row g-3">
          {madinaHotels.map((hotel, idx) => (
            <div className="col-12 col-lg-3 col-md-6" key={idx}>
              <HotelCardSlider {...hotel} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hotels;
