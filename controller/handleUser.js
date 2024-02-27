const express = require("express");
const User = require("../model/user");

async function handleUser(req,res){
    const body = req.body;
    try{
        const newUser = await User.create({
            FirstName : body.firstName,
            LastName : body.lastName,
        })

        res.render("med",{
            uniqueID : newUser._id,
        });
    }
    catch(error){
        console.log(error);
        res.render("patient", {
            error : "plz fill the form correctly",
        });
    }
}

module.exports = {
    handleUser
}