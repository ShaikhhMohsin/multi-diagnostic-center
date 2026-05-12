const express = require("express");

const router = express.Router();

const User = require("../models/User");

/* REGISTER USER */

router.post("/register", async (req, res) => {

    try{

        const { name, email, password } = req.body;

        const newUser = new User({

            name,
            email,
            password

        });

        await newUser.save();

        res.status(201).json({

            message: "User Registered Successfully"

        });

    }

    catch(error){

        res.status(500).json({

            error: error.message

        });

    }

});
router.post("/login", async (req, res) => {

    try{

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){

            return res.status(404).json({

                message: "User not found"

            });

        }

        if(user.password !== password){

            return res.status(401).json({

                message: "Invalid password"

            });

        }

        res.status(200).json({

            message: "Login Successful"

        });

    }

    catch(error){

        res.status(500).json({

            error: error.message

        });

    }

});
module.exports = router;