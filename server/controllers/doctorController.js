const Doctor = require('../models/DoctorModel')


const getAllDoctors=async(req,res)=>{
    try{

   
     const doctors = await Doctor.find({},{},{sort:{'rating.score':-1}})
    res.status(200).json({doctors})
    }catch(err){
        res.status(400).json({error:err})
    }

}

module.exports = { getAllDoctors}