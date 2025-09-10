// require all 

const express = require("express");
const dbConnect = require("./config/mongoconnect.js")
const authrouter = require("./routes/authroute.js")
const cors = require("cors");
const app = express()
// middleware
app.use(express.json())

app.use(cors())

app.listen(8080,async () => {

    await dbConnect()
    console.log("Welcome to crowdfund");
    
})
// root route
app.get("/",async (req,res) => {
    res.json({
        "msg":"root working"
    })
    
})

app.use("/auth",authrouter)