const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher.controller");
const verifyToken = require("../middleware/verifyToken");

router.route("/teachers").get(verifyToken, teacherController.getTeachers);

module.exports = router;
