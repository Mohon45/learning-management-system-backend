const Primary = require("../../models/Primary");

exports.getPrimaryQuizQuestionService = async (id) => {
  const result = await Primary.find({ classId: id });

  return result;
};
