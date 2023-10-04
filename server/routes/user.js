const express=require("express");
const router=express.Router();
const {users, posts} =require("../models")


router.post("/login",async(req,res)=>{
   const {email,password}=req.body;
    const User=await users.findOne({
      where:{email:email}
    });
    if(User){
      if(password===User.password){
         console.log("login sucees");
         res.json(User)
      }else{
         console.log("details are wrong")
         res.json("details are wrong")
      }
    }
    
    })
    
    
    
    router.post("/register",async(req,res)=>{
    const user=req.body
   //  console.log(user)
      const newUser= await users.create(user)
      const token=users.getJWTtoken(newUser);
      const options={
         expires:new Date(Date.now()+1*24*60*60*1000),
         httpOnly:true
      }
      res.status(200).cookie("token",token,options).json({success:true,newUser,token})
    })


    
    module.exports=router