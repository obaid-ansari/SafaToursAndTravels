const express = require("express");
const router = express.Router();
const { sendForexEmail } = require("../controller/forexController");

// Define the POST route for the contact form
router.post("/", sendForexEmail);

module.exports = router;
