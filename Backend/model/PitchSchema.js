const mongoose = require("mongoose")

// making Schema

const pitchSchema = new mongoose.Schema({
    compname:String,
    description:String,
    fullname:String,
    image:String,
    email:String,
    team:[{
        name:String,
        description:String,
        image:String,
        role:String
}],
    totalfund:Number,
    raisefund:{
        type:Number,
        default:0
    }

})

const Pitch = mongoose.model("Pitch",pitchSchema)

module.exports = Pitch