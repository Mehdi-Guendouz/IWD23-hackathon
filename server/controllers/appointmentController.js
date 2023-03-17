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
       const appointment=await Appointment.updateOne({_id:app},{status:'accepted'})
       res.status(200).json(appointment)
    }catch(err){
        res.status(400).json(err)
    
    }
    }

//get all
const myAppointments=async (req, res)=>{
    try{
       
       const apps=await Appointment.find({patient:req.user})
       res.status(200).json(apps)
    }catch(err){
        res.status(400).json(err)
    }
    }
//doctor version
const myAppointmentsDoctor=async (req, res)=>{
        try{
           
           const apps=await Appointment.find({doctor:req.user,status:"accepted"})
           res.status(200).json(apps)
        }catch(err){
            res.status(400).json(err)
        }
        }
//get requested appointments 
const requestedAppsDoctor=async (req, res)=>{
    try{
       
       const apps=await Appointment.find({doctor:req.user,status:"requested"})
       res.status(200).json(apps)
    }catch(err){
        res.status(400).json(err)
    }
    }

module.exports = { requestAppointment,acceptAppointment,myAppointments,myAppointmentsDoctor,requestedAppsDoctor}