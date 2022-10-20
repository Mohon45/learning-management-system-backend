const express = require("express");
const primaryQuizController = require("../../controllers/quizController/primary.controller");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router
  .route("/primary/quiz/:id")
  .get(verifyToken, primaryQuizController.getPrimaryQuizQuestion);

module.exports = router;
