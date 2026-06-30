const express = require("express");
const sendContactEmail = require("../controller/contact.controller");
const contactRouter = express.Router();

contactRouter.post("/contact", sendContactEmail);

module.exports = contactRouter;
