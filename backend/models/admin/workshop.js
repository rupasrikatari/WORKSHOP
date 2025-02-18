const mongoose = require("mongoose");

const WorkshopSchema = new mongoose.Schema({
  topic: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  about: { type: [String], required: true },
  aboutInstructor: { type: [String], required: true },
  masterClassFor: { type: [String], required: true },
  testimonials: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Testimonial" },
      image: { type: String },
      text: { type: String },
    },
  ],
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  targetingUsers: {
    type: [String],
    enum: ["College students", "School students", "Professionals", "Government exam candidates"],
    required: true,
  },
  venue: {
    type: {
      mode: { type: String, enum: ["online", "offline"], required: true },
      address: { type: String },
    },
    required: true,
  },
});

module.exports = mongoose.model("Workshop", WorkshopSchema);
