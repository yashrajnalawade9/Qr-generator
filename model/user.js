const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName : {
        type : String,
        required : true,
    },
    LastName : {
        type : String,
    },
    Report : {
        type : String,
    },
    qrCode :{
        type : String,
    }
})

const User = mongoose.model("user",UserSchema);

module.exports = User;