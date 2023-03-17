require('dotenv').config()
//express app

const express =require('express')
const app = express()
const cors = require('cors');
cookieParser=require('cookie-parser');
app.use(cookieParser());
app.use(cors());
//import mongoose
const mongoose = require('mongoose')

//import routers 
const visitRoutes=require('./routes/visitsRoutes')
const authRoutes=require('./routes/authRoutes')
const ratingRoutes=require('./routes/ratingRoutes')
const appointmentRoutes=require('./routes/appointmentRoutes')


//middleware
app.use(express.json())
app.use((req, res,next)=>{
     console.log(req.path ,req.method)
    next()
})
 
//routes
app.use('/api/visits',visitRoutes)
app.use('/api',authRoutes)
app.use('/api/rating',ratingRoutes)
app.use('/api/appointment',appointmentRoutes)
//connect to db
mongoose.connect(process.env.db_uri).then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log('listening...',process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})