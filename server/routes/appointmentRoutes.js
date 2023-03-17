const express = require('express')

// controller functions
const { requestAppointment,acceptAppointment,myAppointments,myAppointmentsDoctor,requestedAppsDoctor,todaysappointment} = require('../controllers/appointmentController')
const {authPatient,authDoctor}=require('../middleware/auth.js')
const router = express.Router()


//Patient side
    // create an appointment request
        router.post('/request', authPatient,requestAppointment)
    //get all of patient's appointment
        router.get('/my-apps',authPatient,myAppointments)

//Doctor side
    //accept a request
        router.patch('/accept',authDoctor,acceptAppointment)
    //get all accepted appointments  
        router.get('/my-apps-doctor',authDoctor,myAppointmentsDoctor)
    //get the requested appointment
        router.get('/requested',authDoctor,requestedAppsDoctor)
    //get today's appointments
        router.get('/today',authDoctor,todaysappointment)
module.exports = router