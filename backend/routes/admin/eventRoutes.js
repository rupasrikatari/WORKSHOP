const express=require("express");
const router = express.Router();
const {getEvents}=require("../../controller/admin/eventController");

router.get("/",getEvents);

module.exports = router; 