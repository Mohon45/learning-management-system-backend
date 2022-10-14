const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.name,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "7days",
  });

  return token;
};
