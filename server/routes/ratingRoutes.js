const express = require('express')

// controller functions
const { postDoctorRating,getDoctorRating }= require('../controllers/ratingController')
const {authPatient,authDoctor}=require('../middleware/auth.js')
const router = express.Router()

// doctor route 
router.patch('/doctor/add',authPatient,postDoctorRating)
router.get('/doctor', authPatient,getDoctorRating)
// patient route 
router.patch('/patient/add',authDoctor, postDoctorRating)
router.get('/patient', authDoctor,getDoctorRating)



module.exports = router