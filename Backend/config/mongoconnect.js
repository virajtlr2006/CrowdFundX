const mongoose = require("mongoose")
const dbConnect = async () => {
    
    try {
        await mongoose.connect("mongodb+srv://parekhyash1103_db_user:Yash-Parekh-1103@cluster0.6thw74j.mongodb.net/?appName=Cluster0");
        console.log("Mongo Connected");
    
    } catch (error) {
        console.log("Connection Failed");
        
    }
}

module.exports = dbConnect