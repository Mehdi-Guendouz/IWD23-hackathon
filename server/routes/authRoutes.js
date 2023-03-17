const express = require('express')

// controller functions
const { loginDoctor,signupDoctor,loginPatient,signupPatient} = require('../controllers/authController')

const router = express.Router()

// login route 
router.post('/doctor/login', loginDoctor)
router.post('/doctor/signup', signupDoctor)

 
router.post('/patient/login', loginPatient)
router.post('/patient/signup', signupPatient)

router.get("/logout", (req, res) => {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      })
      .send({message:"success"});
  });
module.exports = router