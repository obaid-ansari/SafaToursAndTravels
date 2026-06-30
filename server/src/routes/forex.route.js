const express = require("express");
const sendForexEmail = require("../controller/forex.controller");
const forexRouter = express.Router();

forexRouter.post("/forex", sendForexEmail);

module.exports = forexRouter;
