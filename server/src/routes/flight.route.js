const express = require("express");
const sendFlightEmail = require("../controller/flight.controller");
const flightRouter = express.Router();

flightRouter.post("/flight", sendFlightEmail);

module.exports = flightRouter;
