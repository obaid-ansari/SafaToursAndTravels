const express = require("express");
const router = express.Router();
const { sendVisaEmail } = require("../controller/visaController");

// Define the POST route for the contact form
router.post("/", sendVisaEmail);

module.exports = router;
