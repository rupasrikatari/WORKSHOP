const express = require('express');
const connectDB= require('./config/db');
const cors=require("cors");

const dotenv =require('dotenv');
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

// connectDb
connectDB();


const eventRoutes=require("./routes/eventRoutes")


// Routes
app.use("/api/v1/events", eventRoutes);

module.exports=app