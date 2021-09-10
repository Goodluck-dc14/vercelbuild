require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("./Student/Router");
const port = process.env.PORT || 6001;
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Database is connected successfully");
  })

  .once("error", () => {
    console.log("Failed to connect to the database");
  });

app.get("/", async (req, res) => {
  res.status(200).send("This is a musical API");
});

app.use(express.json());
app.use("/Musicals/api", path);

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
