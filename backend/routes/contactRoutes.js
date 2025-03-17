const express = require("express");
const router = express.Router();
const { sendContactEmail } = require("../controller/contactController");

// Define the POST route for the contact form
router.post("/", sendContactEmail);

module.exports = router;
