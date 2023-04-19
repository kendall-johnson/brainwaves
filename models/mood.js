const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  emotions: {
    type: String,
    required: true,
  },
  triggers: {
    type: String,
    required: true,
  },
  reflection: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Mood", MoodSchema);
