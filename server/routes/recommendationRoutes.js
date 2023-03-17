const express = require('express')
const Doctor = require('../models/DoctorModel')


const {authPatient}=require('../middleware/auth.js')
const router = express.Router()

router.get('/',async(req, res)=>{
    try{
    const {speciality}=req.body
 
    const doctors=await Doctor.find({speciality:speciality})
    if (!doctors){
        res.status(200).json([])
    }
    let sortedDoctors = doctors.sort(
        (p1, p2) => (p1.rating.score < p2.rating.score) ? 1 : (p1.rating.score > p2.rating.score) ? -1 : 0);
    res.status(200).json(sortedDoctors)
    }catch(err){
        return res.status(400).json(err)

    }
})


module.exports = router