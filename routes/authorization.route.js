const express = require("express");
const router = express.Router();
const userController = require("../controllers/authorization.controller");

router.route("/user/register").post(userController.signup);
router.route("/user/login").post(userController.login);

module.exports = router;
