const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true

    },

    email: {

        type: String,
        required: true

    },

    phone: {

        type: String,
        required: true

    },

    test: {

        type: String,
        required: true

    },

    date: {

        type: String,
        required: true

    },
    status: {

    type: String,
    default: "Pending"

}
});

module.exports = mongoose.model("Appointment", appointmentSchema);