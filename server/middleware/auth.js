const jwt=require('jsonwebtoken')

function authDoctor (req,res,next){
    try{
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = jwt.verify(token, process.env.secret_string);
    req.user = verified.user;

    next();
    }catch(err){

        res.status(401).json({error:"Unauthorized"})
    }
}
function authPatient (req,res,next){
    try{

    }catch(err){

        res.status(401).json({error:"Unauthorized"})
    }
}

module.exports=authDoctor,authPatient