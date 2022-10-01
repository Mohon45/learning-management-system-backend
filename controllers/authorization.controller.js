const bcrypt = require("bcrypt");
const {
  registerService,
  loginService,
} = require("../services/authorization.services");

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await registerService(hashedPassword, req.body);

    res.status(200).json({
      status: "success",
      message: "User Successfully Register!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't Register the user!",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await loginService(req.body);

    res.status(200).json({
      status: "success",
      message: "User Successfully Loging!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't Login the user!",
      error: error.message,
    });
  }
};
