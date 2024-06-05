const jwt=require('jsonwebtoken');

const generateToken=(user)=>{
    const payload={
        user:{
            id:user.id
        }
    };
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'24h'});
};

module.exports=generateToken;