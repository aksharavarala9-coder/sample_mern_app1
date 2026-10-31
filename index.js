
let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');

let app = express();

app.use(cors());
app.use(express.json());

// IMPORT ROUTES
let emproutes = require('./routes/emp_route');

// DATABASE CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/sample_mern_app1")
.then(() => {

    console.log("MongoDB connected successfully!");

    // EMPLOYEE ROUTES
    app.use("/api/emp", emproutes);

    // START SERVER
    app.listen(3000, () => {
        console.log("Server listening on port 3000");
    });

})
.catch((err) => {

    console.log("MongoDB connection error:", err);

});
