const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')

const getDoctorRating=async(req,res)=>{
    try{
        console.log(req.body)
    const {docID}=req.body
   
    const doctor = await Doctor.findOne({_id:docID})
    res.status(200).json({rating:doctor.rating})
    }catch(err){
        res.status(400).json({error:err})
    }

}
const postDoctorRating=async(req,res)=>{
try{
        const {docID,rating}=req.body
        const doctor = await Doctor.findOne({_id:docID})
        if (doctor.rating.number==0){
            const updated = await Doctor.updateOne({_id:docID},{'rating.score':rating,'rating.number':1})
        }else{
        const updated = await Doctor.updateOne({_id:docID},{'rating.score':(doctor.rating.score+rating)/2,'rating.number':doctor.rating.number+1})
        }
        res.status(200).json({message:'success'})
        
        }catch(err){
            res.status(400).json({error:err})
        }

}

const getPatientRating=async(req,res)=>{
    try{
    const userID=req.body
    const patient = await Patient.findOne({_id:userID})

    res.status(200).json({rating:patient.rating})
    }catch(err){
        res.status(400).json({error:err})
    }

}
const postPatientRating=async(req,res)=>{
    try{
            const {userID,rating}=req.body
            const patient = await Patient.findOne({_id:docID})
            if (patient.rating.number==0){
                const updated = await Patient.updateOne({_id:docID},{'rating.score':rating,'rating.number':1})
            }else{
            const updated = await Patient.updateOne({_id:docID},{'rating.score':(patient.rating.score+rating)/2,'rating.number':doctor.rating.number+1})
            }
            res.status(200).json({message:'success'})
            
            }catch(err){
                res.status(400).json({error:err})
            }
    
    }
module.exports = { getDoctorRating,postDoctorRating,getPatientRating,postPatientRating}