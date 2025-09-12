const express = require("express")
const Pitch = require("../model/PitchSchema.js")
const Payment = require("../model/paymentschema.js")


const router = express.Router()

router.get("/all",async (req,res) => {
    const allPitches = await Pitch.find({})
        res.json({
            allPitches
        })
})

router.post("/new",async (req,res) => {
    const { raisefund,
    compname,
    description,
    email,
    image,
    totalfund,
    singleprice,
    team } = req.body

    const pitch = new Pitch({
        raisefund,
    compname,
    description,
    singleprice,
    email,
    image,
    totalfund,
    team
    })
   await pitch.save()
    console.log();
    
    res.json({
        "msg":"Successfully added"
    });
    
})

router.post("/single",async (req,res) => {
    const{id,email} = req.body
    console.log(id,email);
    
    const singlepitch =await Pitch.findById(id)
    const rasiedfund = await Payment.find({
        "pitchid":id
    })
    
    console.log(rasiedfund.length);
    const fund = singlepitch.singleprice * rasiedfund.length;
    
    const a = rasiedfund.filter((f) => f.email == email).length
    
    
    res.json({
        "singlepitch":singlepitch,
        "fund":fund,
        "userfund":a

    });
    
})

router.post("/userpitch",async (req,res) => {
    const {email} = req.body
    const Email = await Pitch.find({email})
    res.json(Email)
    
})

router.post("/payment",async (req,res) => {
    const { fullname,
    pitchid,
    cardnumber,
    zip,
    upi,
email} = req.body
    const newentry = new Payment({
        fullname,
        pitchid,
        cardnumber,
        zip,
        upi,
        email
    })
    await newentry.save()
    res.json({
        "name":"success save"
    })
})

router.post("/myfund",async (req,res) => {
    const {email} = req.body
    const allpitch = await Pitch.find({
        email
    })
    console.log(allpitch);
    res.json(allpitch)
})

module.exports=router