const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* ROUTES */

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((error) => {

    console.log(error);

});

/* TEST ROUTE */

app.get("/", (req, res) => {

    res.send("Backend Server Running");

});

/* PORT */

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});