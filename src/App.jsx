import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Visa from "./Pages/Visa";
import FlightTickets from "./Pages/FlightTickets";
import Hotels from "./Pages/Hotels";
import Holidays from "./Pages/Holidays";
import Forex from "./Pages/Forex";
import Umrah from "./Pages/Umrah";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          loading="lazy"
          path="/flight-tickets"
          element={<FlightTickets />}
        />
        <Route loading="lazy" path="/visa-assistance" element={<Visa />} />
        <Route loading="lazy" path="/hotels-booking" element={<Hotels />} />
        <Route loading="lazy" path="/holiday-packages" element={<Holidays />} />
        <Route loading="lazy" path="/forex-exchange" element={<Forex />} />
        <Route loading="lazy" path="/umrah-packages" element={<Umrah />} />
      </Routes>
      <Footer loading="lazy" />
    </Router>
  );
}

export default App;
