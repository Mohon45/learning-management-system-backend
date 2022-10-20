const mongoose = require("mongoose");

// schema design
const IntermediateSchema = mongoose.Schema(
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

const Intermediate = mongoose.model("Intermediate", IntermediateSchema);

module.exports = Intermediate;
