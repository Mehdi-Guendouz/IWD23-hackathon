const express=require('express');
const {authDoctor,authPatient} =require('../middleware/auth')
//import from controller
const{
 createVisit,

 getAllVisitsPatient,
 getAllVisitsDoctor,
 getVisitDoctor,
 getVisitPatient,

}=require('../controllers/visitController');


const router = express.Router()
//Doctor side
    // create a visit
        router.post('/add',authDoctor,createVisit)
    //get a visit details
        router.get('/get',authDoctor,getVisitDoctor)
    //get all visists
        router.get('/all-doctor',authDoctor,getAllVisitsDoctor)
//Patient Side
    //get one visit 
        router.get('/',authPatient,getVisitPatient)
    //get all visits
        router.get('/all',authPatient,getAllVisitsPatient)

module.exports=router  