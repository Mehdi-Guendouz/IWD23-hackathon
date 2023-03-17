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
router.post('/add',authDoctor,createVisit)
router.get('/all',authPatient,getAllVisitsPatient)
router.get('/all-doctor',authDoctor,getAllVisitsDoctor)
//get one visit 
router.get('/',authPatient,getVisitPatient)
router.get('/get',authDoctor,getVisitDoctor)

module.exports=router  