
const express = require("express")
const User = require("../model/authmodel.js")

const router = express.Router()

router.post("/signup", async (req, res) => {

    const { email, fullname, password } = req.body

    const newUser = new User({
        email,
        fullname,
        password
    })

    await newUser.save()

    console.log(email, fullname, password)

    res.json({
        "msg": "Signed Up! Success"
    })
})

router.post("/signin",async (req,res) => {
    const { email,password} = req.body

    // checking terminal for log
    console.log(email,password);

    const checkUser = await User.find({
        email
        // email:email
    })  //search user in db
    // console.log(checkUser[0].password);
    
    // sign in signup condition
    if (checkUser.length==0) {
        res.json({
            "msg":"Please Signup first!"
        })
    }
    // sign in wrong pass condition
    if (checkUser[0].password!=password) {
        res.json({

            "msg":"Wrong Password Check Again"
        })

    }
    // login success
    res.json({
        "msg":"Signed Successfully"
    })
    

    
})

router.post("/profile", async (req,res) => {
    const {email} = req.body

    console.log(email);
    const checkUser = await User.find({email})
    console.log(checkUser);
     if (checkUser.length==0) {
        res.json({
            "msg":"Invalid Email!"
        })
    }

    // console.log(checkUser[0]);
    
    res.json({
        "profile": checkUser[0]
    })
    
    
})

module.exports = router