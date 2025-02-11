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


const workshopRoutes = require("./routes/admin/workshopRoutes");
const eventRoutes=require("./routes/admin/eventRoutes")


// Routes
app.use("/api/v1/workshops", workshopRoutes);
app.use("/api/v1/events", eventRoutes);

module.exports=app