const express = require("express");
const cors = require("cors");
const contactRouter = require("./src/routes/contact.route");
const forexRouter = require("./src/routes/forex.route");
const hotelRouter = require("./src/routes/hotel.route");
const flightRouter = require("./src/routes/flight.route");
const visaRouter = require("./src/routes/visa.route");
require("dotenv").config();

// App
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Routes
app.use("/api", contactRouter);
app.use("/api", forexRouter);
app.use("/api", hotelRouter);
app.use("/api", flightRouter);
app.use("/api", visaRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Server is running...",
  });
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
