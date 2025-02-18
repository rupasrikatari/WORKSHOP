const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String},
    keyLearnings: [{ type: String }], // List of key learnings
    speakerName: { type: String},
    speakerDescription: { type: String},
    speakerRole: [{ type: String}], // List of speaker roles
    image: { type: String, required: true },
    date: { type: Date },
    day: { type: String},
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    mode: { type: String, enum: ["Online", "Offline", "Hybrid"] },
    address: { type: String}, // Required only for Offline & Hybrid events
    targetedUsers: [{ type: String }], // Optional targeted user groups
    registrations: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
