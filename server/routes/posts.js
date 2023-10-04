const express=require("express");
const router=express.Router();
const {posts,users} =require("../models");
const   jwt=require('jsonwebtoken')

const { where,Op } = require("sequelize");


router.get("/",async(req,res)=>{
   const {token}=req.cookies
   const decodedId=jwt.verify(token,"bfwihebfihbr3hfbrj")
   const Allposts=await posts.findOne({where:{user_id:decodedId.id}});
res.json(Allposts)
})



router.post("/",async(req,res)=>{
const post=req.body;
const {token}=req.cookies
const decodedId=jwt.verify(token,"bfwihebfihbr3hfbrj")
const find_user=await users.findOne({where:{id:decodedId.id}});
if(find_user){
   post.user_id=decodedId.id;
   await posts.create(post)
   res.json(post)
}else{
   res.json("user does not exis")
}

   
})
module.exports=router