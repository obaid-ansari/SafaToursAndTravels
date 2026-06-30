import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Flight from "./pages/Flight";
import Visa from "./pages/Visa";
import Hotels from "./pages/Hotels";
import Umrah from "./pages/Umrah";
import Forex from "./pages/Forex";
import Holidays from "./pages/Holidays";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/flight",
          element: <Flight />,
        },
        {
          path: "/visa",
          element: <Visa />,
        },
        {
          path: "/hotels",
          element: <Hotels />,
        },
        {
          path: "/umrah",
          element: <Umrah />,
        },
        {
          path: "/forex",
          element: <Forex />,
        },
        {
          path: "/holidays",
          element: <Holidays />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
