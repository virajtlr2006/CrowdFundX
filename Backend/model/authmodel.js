const mongoose = require("mongoose")

// making Schema

const authSchema = new mongoose.Schema({
    email : String,
    fullname : String,
    password :String
})

const User = mongoose.model("User",authSchema)

module.exports = User