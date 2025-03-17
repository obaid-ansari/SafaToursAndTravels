require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contactRoutes");
const flightRoutes = require("./routes/flightRoutes");
const visaRoutes = require("./routes/visaRoutes");
const hotelsRoutes = require("./routes/hotelsRoutes");
const forexRoutes = require("./routes/forexRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/contact", contactRoutes);
app.use("/api/flight", flightRoutes);
app.use("/api/visa", visaRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/forex", forexRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
