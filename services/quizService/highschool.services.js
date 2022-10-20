const HighSchool = require("../../models/HighSchool");

exports.getHighSchoolQuizQuestionService = async (id) => {
  const result = await HighSchool.find({ classId: id });

  return result;
};
