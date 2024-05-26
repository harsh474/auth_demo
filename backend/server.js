const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT;
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()) ;
app.use((req, res, next) => {
    console.log("Request is made");
    console.log("Host name - " + req.hostname);
    console.log("Path - " + req.path);
    console.log("Method - " + req.method);
    next();
});


// 
const authRouter = require('../backend/routes/authRouter')
app.use("/api/user",authRouter)
// 
app.use(cookieParser()) ;
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB database connection established");
        app.listen(port, () => console.log(`Listening on port: ${port}!`));
    })
    .catch((err) => {
        console.log("Error connecting with the MongoDB database: " + err);
    });
