const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// schema design
const messageSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Users", messageSchema);

module.exports = Message;
