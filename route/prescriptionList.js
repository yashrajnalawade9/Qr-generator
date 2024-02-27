const express = require("express");
const route = express.Router();
const {handlePrescription} = require("../controller/handlePrescription")

route.post("/",handlePrescription);

module.exports = route;