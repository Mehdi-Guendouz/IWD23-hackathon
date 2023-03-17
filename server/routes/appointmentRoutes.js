const express = require('express')

// controller functions
const { requestAppointment,acceptAppointment,myAppointments,myAppointmentsDoctor,requestedAppsDoctor} = require('../controllers/appointmentController')
const {authPatient,authDoctor}=require('../middleware/auth.js')
const router = express.Router()



router.post('/request', authPatient,requestAppointment)
router.patch('/accept',authDoctor,acceptAppointment)
router.get('/my-apps',authPatient,myAppointments)
router.get('/my-apps-doctor',authDoctor,myAppointmentsDoctor)
router.get('/requested',authDoctor,requestedAppsDoctor)

module.exports = router