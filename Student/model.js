const mongoose = require("mongoose");
const students = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    present: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("student", students);
