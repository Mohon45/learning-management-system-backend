const mongoose = require("mongoose");

// schema design
const PrimarySchema = mongoose.Schema(
  {
    classId: {
      type: Number,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    incorrectAnswers: [
      {
        type: String,
        required: true,
      },
    ],
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Primary = mongoose.model("Primary", PrimarySchema);

module.exports = Primary;
