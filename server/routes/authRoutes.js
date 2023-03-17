const express = require('express')

// controller functions
const { loginDoctor} = require('../controllers/authController')

const router = express.Router()

// login route 
router.post('/doctor/login', loginDoctor)
router.post('/doctor/signup', sigupDoctor)

 
router.post('/patient/login', loginDoctor)
router.post('/patient/signup', sigupDoctor)


module.exports = router