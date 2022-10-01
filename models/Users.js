const mongoose = require("mongoose");
// schema design
const UsersSchema = mongoose.Schema(
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
      required: [true, "Please Provide a Valid email name"],
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
    password: {
      type: String,
      required: true,
    },
    teachingSubjects: {
      type: Array,
    },
    teachingClass: {
      type: Array,
    },
    currentEmployee: {
      type: String,
    },
    position: {
      type: String,
    },
    educationalQualifications: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Users", UsersSchema);

module.exports = Product;
