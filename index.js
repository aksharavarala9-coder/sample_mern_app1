let express=require('express');
let mongoose=require('mongoose');

let app=express();

let emproutes=require('./routes/emp_route');

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sample_mern_app1")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("MongoDB connection error:", err);
});

app.use("/api/emp",emproutes);

// localhost:3000/api/emp/register =>post
// localhost:3000/api/emp/login =>post
// localhost:3000/api/emp/viewtask =>get
// localhost:3000/api/emp/updateprofile =>patch

app.listen(3000,()=>{
    console.log("server listening on port 3000");
});