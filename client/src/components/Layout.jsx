import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import AosAnimation from "./AosAnimation";
const Layout = () => {
  return (
    <>
      <AosAnimation />
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
