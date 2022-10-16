const User = require("../models/Users");

exports.getUserByIdService = async (userId, queries) => {
  const user = await User.findOne({ _id: userId });
  user.password = undefined;
  return user;
};

exports.updateUserService = async (userId, data) => {
  const result = await User.updateOne({ _id: userId }, data, {
    runValidators: true,
  });

  return result;
};
