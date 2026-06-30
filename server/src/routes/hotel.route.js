const express = require("express");
const sendHotelEmail = require("../controller/hotel.controller");
const hotelRouter = express.Router();

hotelRouter.post("/hotel", sendHotelEmail);

module.exports = hotelRouter;
