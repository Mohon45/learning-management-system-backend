const {
  updateUserService,
  getUserByIdService,
} = require("../services/user.services");
const { uploadImage } = require("../utils/cloudinary");

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const queries = {};
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
      console.log(fields);
    }
    const result = await getUserByIdService(id, queries);

    res.status(200).json({
      status: "success",
      message: "Sucessfully get the data",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const imgUrl = await uploadImage(req.files[0].path);
    const image = imgUrl.secure_url;

    const newUser = { ...req.body, image };

    // save or create
    const result = await updateUserService(id, newUser);

    res.status(200).json({
      status: "success",
      messgae: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};
