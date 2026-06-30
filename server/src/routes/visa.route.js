const express = require("express");
const sendVisaEmail = require("../controller/visa.controller");
const visaRouter = express.Router();

visaRouter.post("/visa", sendVisaEmail);

module.exports = visaRouter;
