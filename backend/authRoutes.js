const express = require("express");

const router = express.Router();

const User = require("../models/User");

/* REGISTER */

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

module.exports = router;