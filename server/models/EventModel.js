const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: { type: String, trim: true },
    start:{type: String, trim: true},
    end:{type: String, trim: true},
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;