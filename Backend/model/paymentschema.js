const mongoose = require("mongoose")

// making Schema

const paymentschema = new mongoose.Schema({
    pitchid:String,
    cardnumber:String,
    fullname:String,
    zip:String,
    upi:String,
    email:String
})

const Payment = mongoose.model("payment",paymentschema)

module.exports = Payment