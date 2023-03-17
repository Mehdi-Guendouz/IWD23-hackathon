const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')
const jwt=require('jsonwebtoken')

//jwd token generator
const createtoken=(_id)=>{
  return jwt.sign({_id},process.env.secret_string,{expiresIn:'3d'})
}

// login doctor
const loginDoctor = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await Doctor.login(email, password)
    const token = createtoken(user._id)
    res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
  } catch (error) {
    res.status(400).json({status:'err',error: error.message,user:false})
  }
}

//signup Doctor
const signupDoctor = async function(req, res) {
    
    const {email, password,firstName,familyName} = req.body
    console.log(email)
    try {
      const doctor = await Doctor.signup(password,firstName,familyName,email)
      token =createtoken(doctor._id)
      res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  // login Patient
const loginPatient = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const user = await Patient.login(email, password)
      const token = createtoken(user._id)
      res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
    } catch (error) {
      res.status(400).json({status:'err',error: error.message,user:false})
    }
  }
  
  //signup Patient
  const signupPatient = async function(req, res) {
      
      const {email, password,firstName,familyName} = req.body
      console.log(email)
      try {
        const user = await Patient.signup(password,firstName,familyName,email)
        token =createtoken(user._id)
        res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
      } catch (error) {
        res.status(400).json({error: error.message})
      }
    }
module.exports = { loginDoctor ,signupDoctor,loginPatient,signupPatient}