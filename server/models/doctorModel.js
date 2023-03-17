const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema




const AddressSchema = mongoose.Schema({
    streetNumber: Number,
    streetName: String,
    ZIPcode: Number,
    city:String,
    longitude:Number,
    latitude:Number
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
    phoneNumber:Number,
    rating:{score:Number,number:Number},
    birthDate:{type:Date,
      },
   
    gender:{
        type :String,
        required:false,
    },
    graduationYear:Number,
    address:AddressSchema,
    bloodType:String,
    patientsNumber:Number,
},{timestamps:true})

// static create an account method
DoctorSchema.statics.signup = async function(firstName, familyName, email, password, speciality, phoneNumber, birthDate, gender, graduationYear, address, bloodType) {
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
  const doctor = await this.create({firstName, familyName, email,password:hash, speciality, phoneNumber, rating, birthDate, gender, graduationYear, address, bloodType})

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