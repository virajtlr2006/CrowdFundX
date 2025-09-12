const express = require("express")
const Pitch = require("../model/PitchSchema.js")
const Payment = require("../model/paymentschema.js")

const router = express.Router()

// get all pitches
router.get("/all", async (req, res) => {
    const allPitches = await Pitch.find({})
    res.json({ allPitches })
})

// add new pitch
router.post("/new", async (req, res) => {
    const { raisefund, compname, description, email, image, totalfund, singleprice, team } = req.body

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

    res.json({ msg: "Successfully added" })
})

// get single pitch + funds info
router.post("/single", async (req, res) => {
    const { id, email } = req.body

    const singlepitch = await Pitch.findById(id)

    // all payments for this pitch
    const rasiedfund = await Payment.find({ pitchid: id })

    // total fund = price × number of payments
    const fund = singlepitch.singleprice * rasiedfund.length

    // how many times this user funded
    const a = rasiedfund.filter(f => f.email == email).length

    res.json({
        singlepitch,
        fund,
        userfund: a
    })
})

// get all pitches created by this user
router.post("/userpitch", async (req, res) => {
    const { email } = req.body
    const Email = await Pitch.find({ email })
    res.json(Email)
})

// save new payment
router.post("/payment", async (req, res) => {
    const { fullname, pitchid, cardnumber, zip, upi, email } = req.body

    const newentry = new Payment({
        fullname,
        pitchid,
        cardnumber,
        zip,
        upi,
        email
    })
    await newentry.save()

    res.json({ name: "success save" })
})

// get all pitches that user funded
router.post("/myfund", async (req, res) => {
  const { email } = req.body;

  // all payments done by this user
  const payments = await Payment.find({ email });

  // extract pitch ids
  const pitchIds = payments.map(p => p.pitchid);

  // get pitch details
  const pitches = await Pitch.find({ _id: { $in: pitchIds } });

  // default stats
  let totalInvested = 0;
  let highestInvestment = 0;

  // calculate stats
  pitches.forEach(pitch => {
    const userPayments = payments.filter(pay => pay.pitchid == pitch._id);
    const investedAmount = userPayments.length * pitch.singleprice;

    totalInvested += investedAmount;
    if (investedAmount > highestInvestment) {
      highestInvestment = investedAmount;
    }
  });

  res.json({
    pitches, // list of pitches user funded
    totalInvested,
    campaignsFunded: [...new Set(pitchIds)].length, // unique campaigns
    highestInvestment
  });
});


module.exports = router
