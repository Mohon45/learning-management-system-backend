const {
  getHighSchoolQuizQuestionService,
} = require("../../services/quizService/highschool.services");

exports.getHighSchoolQuizQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getHighSchoolQuizQuestionService(id);

    res.status(200).json({
      status: "success",
      message: "Successfully get the data",
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
