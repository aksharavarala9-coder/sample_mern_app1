let mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
    name:String,
    emailid:{
        type:String,
        unique:true
    },
   password:String,
   role:{
    type:String,
    enum:["HR","EMPLOYEE"]
    }
});