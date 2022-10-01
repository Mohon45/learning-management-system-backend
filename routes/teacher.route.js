const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher.controller");

router.route("/teachers").get(teacherController.getTeachers);

// router
//   .route("/:id")
//   .patch(teacherController.updateProductById)
//   .delete(teacherController.deleteProductById);

module.exports = router;
