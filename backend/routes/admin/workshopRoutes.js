const express = require("express");
const {
  createWorkshop,
  getAllWorkshops,
  getWorkshop,
  updateWorkshop,
  deleteWorkshop,
  scheduleWorkshop,
} = require("../../controller/admin/workshopController");

const router = express.Router();

// CRUD operations
router.post("/", createWorkshop);
router.get("/", getAllWorkshops);
router.get("/:id", getWorkshop);
router.put("/:id", updateWorkshop);
router.delete("/:id", deleteWorkshop);

// Schedule workshop
// router.patch("/:id/schedule", scheduleWorkshop);

module.exports = router;
