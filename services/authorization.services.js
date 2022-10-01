const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/Users");

exports.registerService = async (hashedPassword, data) => {
  const newUser = new User({
    name: data.name,
    email: data.email,
    designation: data.designation,
    password: hashedPassword,
  });

  const user = await newUser.save();

  return user;
};

exports.loginService = async (data) => {
  const user = await User.find({ email: data.email });
  const name = user[0].name;
  const email = user[0].email;
  const designation = user[0].designation;
  const userData = { name, email, designation };
  if (user && user.length > 0) {
    const isValidPassword = await bcrypt.compare(
      data.password,
      user[0].password
    );
    if (isValidPassword) {
      // generate token
      const token = jwt.sign(
        {
          name: user[0].name,
          userId: user[0]._id,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return { userData, token };
    }
  }
};
