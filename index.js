let express=require('express');
let app=express();
//localhost:3000/addstudents
app.post("/addStudents",(req,res)=>{
    res.send("Student added successfully");
});
//localhost:3000/getstudents
app.get("/getStudents",(req,res)=>{
    res.send(" get students called ");
});
//localhost:3000/updatestudents
app.put("/updateStudents",(req,res)=>{
    res.send(" update students called ");
});

//run server
app.listen(3000,()=>{   
    console.log("Server is listening on port 3000");
});
