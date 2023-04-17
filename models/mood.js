const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Mood", MoodSchema);
