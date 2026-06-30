import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import Dubai from "../assets/destinationImg/Dubai.webp";
import Thailand from "../assets/destinationImg/Thailand.webp";
import Georgia from "../assets/destinationImg/Georgia.webp";
import Maldives from "../assets/destinationImg/Maldives.webp";
import Switzerland from "../assets/destinationImg/Switzerland.webp";
import Turkey from "../assets/destinationImg/Turkey.webp";
//
import Goa from "../assets/destinationImg/Goa.webp";
import Kashmir from "../assets/destinationImg/Kashmir.webp";
import Kerala from "../assets/destinationImg/Kerala.webp";
import Mumbai from "../assets/destinationImg/Mumbai.webp";
import Ladakh from "../assets/destinationImg/Ladakh.webp";
import Taj from "../assets/destinationImg/Taj.webp";
import Jaipur from "../assets/destinationImg/Jaipur.webp";
import Andaman from "../assets/destinationImg/Andaman.webp";

const destinations = [
  {
    delay: "0",
    id: "maldives",
    className: "col-lg-6 col-md-5",
    title: "Maldives",
    image: Maldives,
    desc: "Escape to crystal-clear waters, private villas, and romantic beach resorts with tailor-made honeymoon packages.",
  },
  {
    delay: "100",
    id: "dubai",
    className: "col-lg-3 col-md-7",
    title: "Dubai",
    image: Dubai,
    desc: "Experience luxury, desert safaris, Burj Khalifa, shopping festivals, and customized holiday packages for every budget.",
  },
  {
    delay: "200",
    id: "thailand",
    className: "col-lg-3 col-md-7",
    title: "Thailand",
    image: Thailand,
    desc: "Explore tropical islands, vibrant nightlife, ancient temples, and affordable family and group tour packages.",
  },
  {
    delay: "0",
    id: "switzerland",
    className: "col-lg-3 col-md-5",
    title: "Switzerland",
    image: Switzerland,
    desc: "Discover breathtaking Alps, scenic train journeys, charming villages, and premium Europe vacation packages.",
  },
  {
    delay: "100",
    id: "turkey",
    className: "col-lg-3 col-md-5",
    title: "Turkey",
    image: Turkey,
    desc: "Visit Istanbul, Cappadocia, and Pamukkale with customized cultural, luxury, and honeymoon travel packages.",
  },
  {
    delay: "200",
    id: "georgia",
    className: "col-lg-6 col-md-7",
    title: "Georgia",
    image: Georgia,
    desc: "Discover Georgia, where breathtaking mountains, ancient history, and vibrant cities create unforgettable journeys.",
  },
];
const indianDestinations = [
  {
    delay: "0",
    id: "goa",
    className: "col-lg-3 col-md-6",
    title: "Goa",
    image: Goa,
    desc: "A tropical paradise famous for its golden beaches, vibrant nightlife, Portuguese heritage, and relaxing coastal charm.",
  },
  {
    delay: "80",
    id: "kashmir",
    className: "col-lg-3 col-md-6",
    title: "Kashmir",
    image: Kashmir,
    desc: "Known as Paradise on Earth, Kashmir captivates visitors with its snow-capped mountains, serene lakes, and breathtaking valleys.",
  },
  {
    delay: "160",
    id: "kerala",
    className: "col-lg-3 col-md-6",
    title: "Kerala",
    image: Kerala,
    desc: "God's Own Country, celebrated for its tranquil backwaters, lush greenery, tea plantations, and beautiful beaches.",
  },
  {
    delay: "240",
    id: "mumbai",
    className: "col-lg-3 col-md-6",
    title: "Mumbai",
    image: Mumbai,
    desc: "The City of Dreams, renowned for Bollywood, iconic landmarks, bustling markets, and the scenic Marine Drive.",
  },
  {
    delay: "0",
    id: "ladakh",
    className: "col-lg-3 col-md-6",
    title: "Ladakh",
    image: Ladakh,
    desc: "A stunning high-altitude destination known for dramatic landscapes, crystal-clear lakes, monasteries, and adventure tourism.",
  },
  {
    delay: "80",
    id: "tajmahal",
    className: "col-lg-3 col-md-6",
    title: "Taj Mahal",
    image: Taj,
    desc: "One of the Seven Wonders of the World, admired for its magnificent Mughal architecture and timeless symbol of love.",
  },
  {
    delay: "160",
    id: "jaipur",
    className: "col-lg-3 col-md-6",
    title: "Jaipur",
    image: Jaipur,
    desc: "The Pink City of India, famous for its royal palaces, historic forts, vibrant markets, and rich Rajasthani culture.",
  },
  {
    delay: "240",
    id: "andaman",
    className: "col-lg-3 col-md-6",
    title: "Andaman Islands",
    image: Andaman,
    desc: "A tropical paradise known for crystal-clear waters, white-sand beaches, coral reefs, and exciting water sports.",
  },
];

const DestinationCard = () => {
  const [selectedId, setSelectedId] = useState(null);

  const allDestinations = [...destinations, ...indianDestinations];

  const selectedDestination = allDestinations.find(
    (item) => item.id === selectedId,
  );

  return (
    <section className="py-5 bg-color" id="holidays">
      <div className="container">
        <div className="text-center">
          <h2 className="fw-bolder dark-text display-5">
            Popular Destinations
          </h2>

          <span className="lead m-0 text-color d-block">
            Explore International Destinations
          </span>

          <p className="text-color mt-2 mb-4">
            Click on any destination to discover its unique attractions,
            culture, and travel experiences.
          </p>
        </div>

        <LayoutGroup>
          <motion.div className="row g-3">
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                className={destination.className}
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay={destination.delay}
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <motion.div
                  layoutId={`destination-${destination.id}`}
                  className="rounded-4 destination-card"
                  onClick={() => setSelectedId(destination.id)}
                  style={{ cursor: "pointer" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={destination.image}
                    alt={destination.title}
                    loading="lazy"
                  />

                  <motion.div className="card-overlay"></motion.div>

                  <motion.div className="card-content">
                    <motion.h2 className="fw-bold mb-0">
                      {destination.title}
                    </motion.h2>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(null)}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  zIndex: 9999,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <motion.div
                  layoutId={`destination-${selectedId}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-4 overflow-hidden shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "750px",
                  }}
                >
                  <motion.img
                    src={selectedDestination.image}
                    alt={selectedDestination.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                  <motion.div className="p-3 bg-color">
                    <motion.h3 className="fw-bold mb-2 text-color">
                      {selectedDestination.title}
                    </motion.h3>

                    <motion.p className="text-color mb-0">
                      {selectedDestination.desc}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>

      <div className="container mt-5">
        <div className="text-center">
          <span className="lead mb-4 text-color d-block">
            Explore Indian Destinations
          </span>
        </div>

        <LayoutGroup>
          <motion.div className="row g-3">
            {indianDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                className={destination.className}
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay={destination.delay}
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <motion.div
                  layoutId={`destination-${destination.id}`}
                  className="rounded-4 destination-card"
                  onClick={() => setSelectedId(destination.id)}
                  style={{ cursor: "pointer" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={destination.image}
                    alt={destination.title}
                    loading="lazy"
                  />

                  <motion.div className="card-overlay"></motion.div>

                  <motion.div className="card-content">
                    <motion.h2 className="fw-bold mb-0">
                      {destination.title}
                    </motion.h2>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(null)}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  zIndex: 9999,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <motion.div
                  layoutId={`destination-${selectedId}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-4 overflow-hidden shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "750px",
                  }}
                >
                  <motion.img
                    src={selectedDestination.image}
                    alt={selectedDestination.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                  <motion.div className="p-3 bg-color">
                    <motion.h3 className="fw-bold mb-2 text-color">
                      {selectedDestination.title}
                    </motion.h3>

                    <motion.p className="text-color mb-0">
                      {selectedDestination.desc}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>

        <div className="mt-5 text-center">
          <p className="fs-5 text-color mb-2">
            Interested in any destination or holiday package? Contact us on
            WhatsApp for package details, expert travel guidance, and
            personalized holiday planning.
          </p>

          <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
            <a
              href="https://wa.me/8976641643"
              className="text-decoration-none dark-bg text-white fw-semibold d-flex align-items-center p-2 rounded-3 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="me-2 fs-4" />
              +91 89766 41643
            </a>

            <a
              href="https://wa.me/917506105626"
              className="text-decoration-none dark-bg text-white fw-semibold d-flex align-items-center p-2 rounded-3 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="me-2 fs-4" />
              +91 75061 05626
            </a>

            <a
              href="https://wa.me/971527939843"
              className="text-decoration-none dark-bg text-white fw-semibold d-flex align-items-center p-2 rounded-3 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="me-2 fs-4" />
              +971 52 793 9843
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationCard;
