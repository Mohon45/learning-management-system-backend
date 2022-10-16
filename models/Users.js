const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// schema design
const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a Valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email Address is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: "Password {VALUE} is not strong enough.",
      },
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    designation: {
      type: String,
      required: true,
    },
    teachingSubjects: {
      type: String,
    },
    class: {
      type: String,
    },
    teachingClass: {
      type: String,
    },
    currentEmployee: {
      type: String,
    },
    educationalQualifications: {
      type: String,
    },
    image: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    school: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

usersSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    //  only run if password is modified, otherwise it will change every time we save the user!
    return next();
  }
  const password = this.password;

  const hashedPassword = bcrypt.hashSync(password);

  this.password = hashedPassword;

  next();
});

usersSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
