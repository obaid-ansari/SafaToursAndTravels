const express = require("express");
const router = express.Router();
const { sendFlightEmail } = require("../controller/flightController");

// Define the POST route for the contact form
router.post("/", sendFlightEmail);

module.exports = router;
