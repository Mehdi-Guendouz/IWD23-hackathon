const express = require('express')

// controller functions
const { requestAppointment} = require('../controllers/appointmentController')
const {authPatient}=require('../middleware/auth.js')
const router = express.Router()



router.post('/request', authPatient,requestAppointment)



module.exports = router