const mongoose = require('mongoose')

const Schema = mongoose.Schema

  const AppointmentSchema = new Schema({
    status:String,
    patient:{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor :{
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    date:Date,

    
  
},{timestamps:true})

module.exports=mongoose.model('Appointment',AppointmentSchema)