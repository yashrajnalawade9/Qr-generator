const qrcode = require("qrcode");
const User = require("../model/user");


async function handlePrescription(req,res){
    const medicineNames = req.body.medicineName;
    const quantities = req.body.quantity;
    
    const userId = req.query.userId;     
    const user = await User.findById(userId);
    console.log(userId);
    
    let medicines = [];

    for (let i = 0; i < medicineNames.length; i++) {
  
        const medicineObject = {
            medicine: medicineNames[i],
            quantity: quantities[i]
        };
        
        medicines.push(medicineObject);
    }

    const medicinesString = JSON.stringify(medicines);
    qrcode.toDataURL(medicinesString,async(err,src)=>{
        user.qrCode = src;
        await user.save();
        return res.render("prescription",{
            uniqueID : user._id,
            qr_link : src,
        })
    })
    
}

module.exports = {handlePrescription}