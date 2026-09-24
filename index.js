let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproute=require('./routes/emp_route');

mongoose.connect("mongodb://localhost:27017/hrmanagement")
 .then(()=>console.log("MongoDB connected successfully"))
 .catch((err)=>console.log(err));
app.use(express.json()); //used to collect input from UI as json data

app.use("/api/emp",emproute);
//localhost:3000/api/emp/register =>post
//localhost:3000/api/emp/login =>post
//localhost:3000/api/emp/viewtask =>get
//localhost:3000/api/emp/updateprofile =>patch


//run server
app.listen(3000,()=>{   
    console.log("Server is listening on port 3000");
});
