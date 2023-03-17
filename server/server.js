require('dotenv').config()
//express app

const express =require('express')
const app = express()
const cors = require('cors');
app.use(cors());
//omport mongoose
const mongoose = require('mongoose')
//import routers 
const visitRoutes=require('./routes/visitsRoutes')



//middleware
app.use(express.json())
app.use((req, res,next)=>{
     console.log(req.path ,req.method)
    next()
})
 
//routes
app.use('/api/visits',visitRoutes)


//connect to db
mongoose.connect(process.env.db_uri).then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log('listening...',process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})