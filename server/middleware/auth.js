const jwt=require('jsonwebtoken')

function authDoctor (req,res,next){
    try{
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = jwt.verify(token, process.env.secret_string);
    if (!verified?._id.doctor){
        return res.status(401).json({ errorMessage: "Unauthorized" });
    }
    req.user = verified._id.doctor;

    next();
    }catch(err){

        res.status(401).json({error:"Unauthorized"})
    }
}
function authPatient (req,res,next){
    try{
        const token = req.cookies.token;
      
        if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });
    
        const verified = jwt.verify(token, process.env.secret_string);

        if (!verified?._id.patient){
            return res.status(401).json({ errorMessage: "Unauthorized" });
        }
        req.user = verified._id.patient;
        next();
    }catch(err){

        res.status(401).json({error:"Unauthorized"})
    }
}

module.exports={authDoctor,authPatient}