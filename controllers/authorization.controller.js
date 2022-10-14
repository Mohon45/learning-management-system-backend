const {
  signupService,
  findUserByEmail,
} = require("../services/authorization.services");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    const user = await signupService(req.body);

    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      status: "success",
      message: "Successfully signed up",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't signed up this user",
      error,
    });
  }
};

// exports.register = async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const result = await registerService(hashedPassword, req.body);

//     res.status(200).json({
//       status: "success",
//       message: "User Successfully Register!",
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "can't Register the user!",
//       error: error.message,
//     });
//   }
// };

// // exports.login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     if (!email || !password) {
// //       return res.status(401).json({
// //         status: "fail",
// //         message: "Please provide your credentials",
// //       });
// //     }
// //     const user = await findUserByEmail(email);
// //     if (!user) {
// //       return res.status(401).json({
// //         status: "fail",
// //         message: "No user found. please create an account",
// //       });
// //     }
// //     const isValidPassword = bcrypt.compare(password, user.password);

// //     if (!isValidPassword) {
// //       return res.status(401).json({
// //         status: "fail",
// //         message: "Password is not correct",
// //       });
// //     }
// //     const token = jwt.sign(
// //       {
// //         email: user.email,
// //         name: user.name,
// //       },
// //       process.env.JWT_SECRET_KEY,
// //       {
// //         expiresIn: "1h",
// //       }
// //     );

// //     res.status(200).json({
// //       status: "success",
// //       message: "User Successfully Loging!",
// //       data: { user, token },
// //     });
// //   } catch (error) {
// //     res.status(400).json({
// //       status: "fail",
// //       message: "can't Login the user!",
// //       error: error.message,
// //     });
// //   }
// };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};
