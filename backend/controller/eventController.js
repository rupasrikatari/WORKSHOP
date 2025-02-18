const Event=require("../models/event");



exports.getEvents=async(req,res)=>{

    try{
        const events=await Event.find();
        res.status(200).json(events);

    }catch(e){
        console.log(e);
        res.status(500).json({message:"Internal Server Error", error:e.message});
    }

}


// Create a new Event
exports.createEvent = async (req, res) => {
  try {
    // Extracting fields from req.body
    const { title, startTime, endTime, image } = req.body;

    // Validation: Check if required fields are present
    if (!title || !startTime || !endTime || !image) {
      return res.status(400).json({ message: "Title, Start Time, End Time, and Image are required." });
    }

    // Creating a new event from request body
    const event = new Event(req.body);
    
    // Saving event to database (Fixed `await Event.save();` issue)
    await event.save();

    res.status(201).json({ message: "Event created successfully", event });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
    console.log(err);
  }
};
// getTotalEvents

exports.getTotalEvents=async(req,res)=>{
    try{
      const totalEvents=await Event.find().countDocuments();
      res.status(200).json({total:totalEvents});
  
      }catch(e){
        res.status(500).json({message:"Internal server error",error:e.message});
        console.log(e);
      }
    };
  
// Get all Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Get a specific Event
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Update an Event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
    console.log(event);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event updated successfully", event });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Delete an Event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};



