const express = require('express')
const Doctor = require('../models/DoctorModel')


const {authPatient}=require('../middleware/auth.js')
const router = express.Router()

//router.get('/',authPatient,async(req, res)=>{
router.post('/',async(req, res)=>{
    try{
    const {speciality}=req.body
        
    const doctors=await Doctor.find({speciality:speciality})

    let sortedDoctors = doctors.sort(
        (p1, p2) => (p1.rating.score < p2.rating.score) ? 1 : (p1.rating.score > p2.rating.score) ? -1 : 0);
    console.log('1',sortedDoctors)
    if (sortedDoctors.length==0){
        const haha=await Doctor.find({firstName:'Anis'})
        console.log('2',haha)
        return res.status(200).json([haha])
    }
   
    res.status(200).json(sortedDoctors)
    }catch(err){
        return res.status(400).json(err)

    }
})


module.exports = router