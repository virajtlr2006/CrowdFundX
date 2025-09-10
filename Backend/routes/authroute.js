
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

module.exports = router