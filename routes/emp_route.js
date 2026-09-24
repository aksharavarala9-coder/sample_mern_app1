let express=require('express');
let router=express.Router();
//router() used to connect api with common route
let {users}=require('../models/users');

router.post('/register',async (req,res)=>{
    let data=req.body;
    let newuser=new users(data);
    let result=await newuser.save();
    res.send(result);
});

router.post('/login',(req,res)=>{
    res.send("Employee logged in successfully");
});

router.get('/viewtask',(req,res)=>{
    res.send("Employee task viewed successfully");
});

router.patch('/updateprofile',(req,res)=>{
    res.send("Employee profile updated successfully");
});

module.exports=router;
