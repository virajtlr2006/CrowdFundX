const mongoose = require("mongoose")
const dbConnect = async () => {
    
    try {
        await mongoose.connect("mongodb+srv://virajtlr2006:virajtlr2006@viraj.g7haxve.mongodb.net/CrowdFundx?retryWrites=true&w=majority&appName=viraj");
        
        console.log("Mongo Connected");
        

    } catch (error) {
        console.log("Connection Failed");
        
    }
}

module.exports = dbConnect