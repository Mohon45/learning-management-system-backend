const {
  getuniversityQuizQuestionService,
} = require("../../services/quizService/university.services");

exports.getUniversityQuizQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getuniversityQuizQuestionService(id);

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
