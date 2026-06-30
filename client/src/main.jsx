import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./css/home.css";
import "./css/holidays.css";
import "./css/contact.css";
import "./css/flight.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      reverseOrder={false}
      containerStyle={{
        zIndex: 10000000,
      }}
      toastOptions={{
        duration: 4000,
      }}
    />
  </StrictMode>,
);
