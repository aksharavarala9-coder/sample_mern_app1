
let express = require('express');
let router = express.Router();

let { users } = require('../models/users');
let bcrypt = require('bcrypt');

// EMPLOYEE REGISTRATION
router.post("/register", async (req, res) => {
    try {
        let data = req.body;

        data.password = await bcrypt.hash(data.password, 10);

        let newuser = new users(data);
        let result = await newuser.save();

        res.status(201).send(result);

    } catch (err) {
        console.log("Registration error:", err);
        res.status(500).send({ msg: "Registration failed" });
    }
});

// EMPLOYEE LOGIN
router.post("/login", async (req, res) => {
    try {
        let data = req.body;

        let emailcheck = await users.findOne({
            emailid: data.emailid
        });

        if (emailcheck) {

            let passcheck = await bcrypt.compare(
                data.password,
                emailcheck.password
            );

            if (passcheck) {

                res.send({
                    msg: "login successfull",
                    user: {
                        _id: emailcheck._id,
                        name: emailcheck.name,
                        emailid: emailcheck.emailid,
                        role: emailcheck.role
                    }
                });

            } else {
                res.send({
                    msg: "password is incorrect"
                });
            }

        } else {
            res.send({
                msg: "user not found"
            });
        }

    } catch (err) {
        console.log("Login error:", err);
        res.status(500).send({ msg: "Login failed" });
    }
});

// VIEW TASK
router.get("/viewtask", (req, res) => {
    res.send("viewtask router called");
});

// UPDATE PROFILE
router.patch("/updateprofile/:id", async (req, res) => {
    try {
        let data = req.body;

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        let result = await users.findByIdAndUpdate(
            req.params.id,
            data,
            { new: true }
        );

        res.send(result);

    } catch (err) {
        console.log("Profile update error:", err);
        res.status(500).send({ msg: "Profile update failed" });
    }
});

module.exports = router;
