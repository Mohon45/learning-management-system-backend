const Intermediate = require("../../models/Intermediate");

exports.getIntermediateQuizQuestionService = async (id) => {
  const result = await Intermediate.find({ classId: id });

  return result;
};
