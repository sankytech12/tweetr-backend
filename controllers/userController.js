const bcrypt=require('bcryptjs');
const User=require('../models/user');
const generateToken=require('../services/authService');

const registerUser=async(req,res)=>{
    const {username,password}=req.body;

    try{
        let user=await User.findOne({username});
        if(user){
            return res.status(400).json({msg:'User already exists'});
        }

        user=new User({
            username,
            password: await bcrypt.hash(password,8)
        });

        await user.save();

        const token=generateToken(user);

        res.json({token});
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const loginUser=async(req,res)=>{
    const {username,password}=req.body;

    try{
        let user=await User.findOne({username});
        if(!user){
            return res.status(400).json({msg:'Invalid username'});
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Incorrect password'});
        }

        const token=generateToken(user);

        res.json({token});
    }catch(err){
        console.error(err.message);
        res.staus(500).send('Server error');
    }
};

module.exports={registerUser,loginUser};