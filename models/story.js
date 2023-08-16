const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "story Title is required"],
  },
  description: {
    type: String,
    required: [true, "story Description is Needed"],
  },
  image: {
    type: String,
  },
  tag: {
    type: String,
    enum: ["nature", "lifestyle", "sport", "technology", "others"],
    required: [true, "story Tag is required"],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "please provide a user"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("story", storySchema);
