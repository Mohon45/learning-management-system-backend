const mongoose = require("mongoose");

// schema design
const UniversitySchema = mongoose.Schema(
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

const University = mongoose.model("University", UniversitySchema);

module.exports = University;
