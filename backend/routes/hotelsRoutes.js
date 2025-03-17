const express = require("express");
const router = express.Router();
const { sendHotesEmail } = require("../controller/hotelsController");

// Define the POST route for the contact form
router.post("/", sendHotesEmail);

module.exports = router;
