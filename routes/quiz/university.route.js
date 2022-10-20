const express = require("express");
const universityQuizController = require("../../controllers/quizController/university.controller");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router
  .route("/university/quiz/:id")
  .get(verifyToken, universityQuizController.getUniversityQuizQuestion);

module.exports = router;
