const University = require("../../models/University");

exports.getuniversityQuizQuestionService = async (id) => {
  const result = await University.find({ classId: id });

  return result;
};
