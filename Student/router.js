const express = require("express");
const Musics = require("./Model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const getData = await Musics.create({
      name: req.body.name,
      title: req.body.title,
    });
    res.status(201).json({
      message: "Found successfully",
      data: getData,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      data: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const getData = await Musics.find();
    res.status(200).json({
      message: "Found successfully",
      data: getData,
    });
  } catch (error) {
    res.status(401).json({
      message: "error",
      data: error,
    });
  }
});

module.exports = router;
