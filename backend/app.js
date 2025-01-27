const express = require('express');
const connectDB= require('./config/db');

const dotenv =require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// connectDb
connectDB();


const workshopRoutes = require("../backend/routes/admin/workshopRoutes");



// Routes
app.use("/api/workshops", workshopRoutes);






module.exports=app