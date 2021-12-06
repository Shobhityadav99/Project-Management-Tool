const mongoose = require("mongoose");
const Project = require("./Project");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 10,
  },
  projects: [{
    ref: 'Project',
    type: mongoose.Types.ObjectId,
  }]
});

module.exports = mongoose.model("User", userSchema);
