const {
  getPrimaryQuizQuestionService,
} = require("../../services/quizService/primary.services");

exports.getPrimaryQuizQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getPrimaryQuizQuestionService(id);

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
