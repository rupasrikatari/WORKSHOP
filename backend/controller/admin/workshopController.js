const Workshop = require("../../models/admin/workshop");
const { validateWorkshop } = require("../../utils/validation");

// Create a new workshop
exports.createWorkshop = async (req, res) => {
  try {
    const { error } = validateWorkshop(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const workshop = new Workshop(req.body);
    await workshop.save();
    res.status(201).json({ message: "Workshop created successfully", workshop });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Get all workshops
exports.getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.status(200).json(workshops);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Get a specific workshop
exports.getWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (!workshop) return res.status(404).json({ message: "Workshop not found" });
    res.status(200).json(workshop);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Update a workshop
exports.updateWorkshop = async (req, res) => {
  try {
    const { error } = validateWorkshop(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workshop) return res.status(404).json({ message: "Workshop not found" });
    res.status(200).json({ message: "Workshop updated successfully", workshop });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Delete a workshop
exports.deleteWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndDelete(req.params.id);
    if (!workshop) return res.status(404).json({ message: "Workshop not found" });
    res.status(200).json({ message: "Workshop deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Schedule or update workshop timing
exports.scheduleWorkshop = async (req, res) => {
  try {
    const { startDateTime, endDateTime } = req.body;
    const workshop = await Workshop.findById(req.params.id);
    if (!workshop) return res.status(404).json({ message: "Workshop not found" });

    workshop.startDateTime = startDateTime;
    workshop.endDateTime = endDateTime;
    await workshop.save();

    res.status(200).json({ message: "Workshop timing updated", workshop });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};
