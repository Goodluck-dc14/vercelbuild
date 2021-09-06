require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 6000;
const path = require("./Student/router");
MONGODB_URI =
  "mongodb+srv://t62xbdtv8YyUmtj3:t62xbdtv8YyUmtj3@cluster0.zqyac.mongodb.net/MealDB?retryWrites=true&w=majority";
const app = express();

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .on("open", () => {
    console.log("database connected successfully");
  })
  .once("error", () => {
    console.log("failed while connecting to the database");
  });

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("creating a student api");
});

app.use("/student/api", path);

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
