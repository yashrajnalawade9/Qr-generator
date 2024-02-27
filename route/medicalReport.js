const express = require("express");
const route = express.Router();
const {handleReport} = require("../controller/handleReport");

route.post("/", handleReport)

module.exports = route;
