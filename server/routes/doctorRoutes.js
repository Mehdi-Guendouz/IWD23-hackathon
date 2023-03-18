const express = require('express')

// controller functions
const { getAllDoctors }= require('../controllers/doctorController')
const {authPatient,authDoctor}=require('../middleware/auth.js')
const router = express.Router()

// doctor route 
router.get('/all',getAllDoctors)




module.exports = router