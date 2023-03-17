const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema






  const PatientSchema = new Schema({
    
    firstName :{
        type :String,
        required: true
    },
    familyName:{
        type :String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
      },
    password: {
        type: String,
        required: [true, 'Please add a password'],
      },

    rating:{score:Number,number:Number},
    birthDate:{type:Date,
      },
   
    gender:{
        type :String,   
        required:false,
    },
    

  
},{timestamps:true})

// static create an account method
PatientSchema.statics.signup = async function(password,firstName,familyName,email,gender,address,speciality,birthDate) {
  // validation
  if (!email || !password) {
    throw Error('You must fill the email and the password field')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
 // if (!validator.isStrongPassword(password)) {
   // throw Error('Password not strong enough')
  //}
  const exists = await this.findOne({ "email":email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const rating={
    score:0,
    number:0,
  }
  const Patient = await this.create({password:hash,firstName,familyName,gender,address,email,rating,speciality,birthDate})

  return Patient
}

// static login method
PatientSchema.statics.login = async function(email,password) {
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const patient = await this.findOne({ "email":email })
  if (!patient) {
    throw Error('Incorrect email')
  }
  const match = await bcrypt.compare(password, patient.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return patient
}
module.exports=mongoose.model('Patient',PatientSchema)