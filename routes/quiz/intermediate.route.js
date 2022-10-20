const express = require("express");
const intermediateQuizController = require("../../controllers/quizController/intermediate.controller");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router
  .route("/intermediate/quiz/:id")
  .get(verifyToken, intermediateQuizController.getIntermediateQuizQuestion);

module.exports = router;
