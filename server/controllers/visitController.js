const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')
const Visit=require('../models/visitModel')



const createVisit=async (req, res)=>{
try{
   const {patient,ordonnance,note}=req.body
   const visit=await Visit.create({doctor:req.user,patient,ordonnance,note})
   const doctor=await Doctor.updateOne({_id:req.user},{ $inc: { patientsNumber: 1 } })
   res.status(200).json(visit)
}catch(err){
    res.status(400).json(err)
}
}


//get all
const getAllVisitsPatient=async (req, res)=>{
    try{
       
       const visits=await Visit.find({patient:req.user})
       res.status(200).json(visits)
    }catch(err){
        res.status(400).json(err)
    }
    }
//get all for doctor
const getAllVisitsDoctor=async (req, res)=>{
    try{
       
       const visits=await Visit.find({doctor:req.user})
       res.status(200).json(visits)
    }catch(err){
        res.status(400).json(err)
    }
    }
  //get last visit for a doctor   
const getlastVisit=async (req, res)=>{
        try{
           
           const last=await Visit.findOne({doctor:req.user},{},{ sort: { 'createdAt' : -1 } })
           res.status(200).json(last)
        }catch(err){
            res.status(400).json(err)
        }
        }
//get on visit patient pov
const getVisitPatient=async (req, res)=>{
    try{
       const {visitID}=req.body
       const visit=await Visit.findOne({_id:visitID,patient:req.user})
       res.status(200).json(visit)
    }catch(err){
        res.status(400).json(err)
    }
    }
//get on visit doctor pov
const getVisitDoctor=async (req, res)=>{
    try{
       const {visitID}=req.body
       const visit=await Visit.findOne({_id:visitID,doctor:req.user})
       res.status(200).json(visit)
    }catch(err){
        res.status(400).json(err)
    }
    }
module.exports = {createVisit,getAllVisitsPatient,getAllVisitsDoctor,getVisitPatient,getVisitDoctor,getlastVisit}