const express = require("express");
const route = express.Router();
const {handleUser} = require("../controller/handleUser")

route.post("/",handleUser);

module.exports = route;