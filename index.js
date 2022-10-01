const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const teacherRoute = require("./routes/teacher.route");
const userRoute = require("./routes/authorization.route");

// database connections
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m0coh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// Mongoose Connect
mongoose
  .connect(process.env.DATABASE_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/etutors/", teacherRoute);
app.use("/api/v1/etutors/", userRoute);

app.get("/", (req, res) => {
  res.send("E-Tutors Server is Running!");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

app.all("*", (req, res) => {
  res.send("No Route Found.");
});
