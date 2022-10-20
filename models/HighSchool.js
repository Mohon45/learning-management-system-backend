const mongoose = require("mongoose");

// schema design
const HighSchoolSchema = mongoose.Schema(
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

const HighSchool = mongoose.model("HighSchool", HighSchoolSchema);

module.exports = HighSchool;
