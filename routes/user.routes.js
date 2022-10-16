const express = require("express");
const router = express.Router();
const uploader = require("../middleware/uploader");
const verifyToken = require("../middleware/verifyToken");

const userController = require("../controllers/user.controller");

router.route("/user/:id").get(verifyToken, userController.getUser);
router
  .route("/user/update/:id")
  .patch(verifyToken, uploader.array("image"), userController.UpdateUser);

module.exports = router;
