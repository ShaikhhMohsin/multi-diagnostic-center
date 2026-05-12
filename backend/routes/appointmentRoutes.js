const express = require("express");

const router = express.Router();

const Appointment = require("../models/Appointment");

/* BOOK APPOINTMENT */

router.post("/book", async (req, res) => {

    try{

        const { name, email, phone, test, date } = req.body;

        const newAppointment = new Appointment({

            name,
            email,
            phone,
            test,
            date

        });

        await newAppointment.save();

        res.status(201).json({

            message: "Appointment Booked Successfully"

        });

    }

    catch(error){

        res.status(500).json({

            error: error.message

        });

    }

});

/* GET ALL APPOINTMENTS */

router.get("/", async (req, res) => {

    try{

        const appointments = await Appointment.find();

        res.status(200).json(appointments);

    }

    catch(error){

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;