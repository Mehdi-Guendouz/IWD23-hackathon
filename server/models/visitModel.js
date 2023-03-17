const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ordonnanceSchema = new Schema({
    med:[{
        name:String,

    }]

},{timestamps:true})

  const VisitSchema = new Schema({
    
    doctor :{
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    ordonnance :{type:ordonnanceSchema},
    date:Date,
    note:String,

    
  
},{timestamps:true})

const request =Schema({
    doctor :       { type: Schema.Types.ObjectId,
    ref: 'Doctor'}
})

module.exports=mongoose.model('Visit',VisitSchema)