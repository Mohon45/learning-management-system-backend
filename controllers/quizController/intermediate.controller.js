const {
  getIntermediateQuizQuestionService,
} = require("../../services/quizService/intermediate.services");

exports.getIntermediateQuizQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getIntermediateQuizQuestionService(id);

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
