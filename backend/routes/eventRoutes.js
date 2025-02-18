const express=require("express");
const router = express.Router();
const {getEvents,getTotalEvents,createEvent,getAllEvents,getEvent,deleteEvent,updateEvent}=require("../controller/eventController");

router.get("/",getEvents);
router.get("/totalevents",getTotalEvents);
router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router; 






