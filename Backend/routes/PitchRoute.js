const express = require("express")
const Pitch = require("../model/PitchSchema.js")


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
    fullname,
    email,
    image,
    totalfund,
    team } = req.body

    const pitch = new Pitch({
        raisefund,
    compname,
    description,
    fullname,
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

router.get("/:id",async (req,res) => {
    const{id} = req.params
    const singlepitch =await Pitch.findById(id)
    res.json(singlepitch);
    
})

router.post("/userpitch",async (req,res) => {
    const {email} = req.body
    const Email = await Pitch.find({email})
    res.json(Email)
    
})


module.exports=router