const express = require('express')

// controller functions
const { postDoctorRating,getDoctorRating }= require('../controllers/ratingController')

const router = express.Router()

// doctor route 
router.patch('/doctor/add', postDoctorRating)
router.get('/doctor', getDoctorRating)
// patient route 
router.patch('/patient/add', postDoctorRating)
router.get('/patient', getDoctorRating)



module.exports = router