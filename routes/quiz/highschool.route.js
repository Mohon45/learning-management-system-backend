const express = require("express");
const highSchoolQuizController = require("../../controllers/quizController/highschool.controller");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router
  .route("/high-school/quiz/:id")
  .get(verifyToken, highSchoolQuizController.getHighSchoolQuizQuestion);

module.exports = router;
