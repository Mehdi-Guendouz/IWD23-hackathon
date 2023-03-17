const mongoose = require('mongoose')

const Schema = mongoose.Schema






  const VisitSchema = new Schema({
    
    doctor :{
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    date:Date,
    note:String,

    
  
},{timestamps:true})

module.exports=mongoose.model('Visit',VisitSchema)