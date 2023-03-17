const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema




const AddressSchema = mongoose.Schema({
    streetNumber: Number,
    streetName: String,
    ZIPcode: Number,
    city:String,
  });




  const DoctorSchema = new Schema({
    
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
    speciality:{type:String},

    rating:{type:Number},
    birthDate:{type:Date,
      },
   
    gender:{
        type :String,
        required:false,
    },
    
    address:AddressSchema,
  
},{timestamps:true})

// static create an account method
DoctorSchema.statics.signup = async function(password,firstName,familyName,email,gender,address,speciality,birthDate) {
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

  const doctor = await this.create({password:hash,firstName,familyName,gender,address,email,speciality,birthDate})

  return doctor
}

// static login method
DoctorSchema.statics.login = async function(email,password) {
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const doctor = await this.findOne({ "email":email })
  if (!doctor) {
    throw Error('Incorrect email')
  }
  const match = await bcrypt.compare(password, doctor.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return doctor
}
module.exports=mongoose.model('Doctor',DoctorSchema)