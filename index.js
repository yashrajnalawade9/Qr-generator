const express = require("express");
const PORT = 8000;
const app = express();
const path = require("path");
const staticPages = require("./route/staticPages");
const newPatient = require("./route/newpatient");
const medicalReport = require("./route/medicalReport");
const prescriptionList = require("./route/prescriptionList");
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/edi").then(()=>{
    console.log("connected successfully")
}).catch(()=>{
    console.log("failed to connect");
})







app.set('view engine' , 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use("/",staticPages);
app.use("/patient",newPatient);
app.use("/patient/med",medicalReport);
app.use("/patient/med/prescription", prescriptionList);

app.listen(PORT,()=>{ console.log("server is running on port number " , PORT)})