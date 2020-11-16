const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  course: { type: String, required: true },
  instructor: { type: String, required: true },
  time: { type: String, required: true },
  link: { type: String, required: true },
});

const Meeting = mongoose.model("Meeting", MeetingSchema);

module.exports = Meeting;
