const express = require('express')

// controller functions
const { postDoctorRating,getDoctorRating }= require('../controllers/ratingController')

const router = express.Router()

// doctor route 
router.post('/doctor/add', postDoctorRating)
router.get('/doctor', getDoctorRating)



module.exports = router