const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')
const Appointment=require('../models/appointmentModel')



const requestAppointment=async (req, res)=>{
try{
   const {doctor,date}=req.body
   console.log(req.body)
   const appointment=await Appointment.create({status:'pending',doctor,date})
   res.status(200).json(appointment)
}catch(err){
    res.status(400).json(err)

}
}
const acceptAppointment=async (req, res)=>{
    try{
       const {app}=req.body
       const appointment=await Appointment.findOneAndUpdate({_id:app},{status:'accepted'})
       res.status(200).json(appointment)
    }catch(err){
        res.status(400).json(err)
    
    }
    }
module.exports = { requestAppointment}