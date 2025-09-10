// require all 

const express = require("express");
const cors = require("cors");
const app = express()
// middleware
app.use(express.json())

app.use(cors())

app.listen(8080,async () => {
    console.log("Welcome to crowdfund");
    
})
// root route
app.get("/",async (req,res) => {
    res.json({
        "msg":"root working"
    })
    
})