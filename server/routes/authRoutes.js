const express = require('express')

// controller functions
const { loginDoctor,signupDoctor,loginPatient,signupPatient} = require('../controllers/authController')

const router = express.Router()

// login route 
router.post('/doctor/login', loginDoctor)
router.post('/doctor/signup', signupDoctor)

 
router.post('/patient/login', loginPatient)
router.post('/patient/signup', signupPatient)


module.exports = router