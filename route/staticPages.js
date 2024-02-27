const express = require("express");
const route = express.Router();
const User = require("../model/user");

route.get("/",(req,res)=>{
    return res.render("home");
})

route.get("/patient",(req,res)=>{
    return res.render("patient");
})

route.get("/patient/med",(req,res)=>{
    return res.render("med");
})

route.get("/patient/med/prescription",(req,res)=>{
    return res.render("prescription");
})

route.get("/history",async(req,res)=>{
    return res.render("history",{
        allUser :  await User.find({}),
    });
})

module.exports = route;