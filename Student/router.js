const express = require("express");
const multer = require("multer");
const students = require("./model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const getData = await students.create({
      name: req.body.name,
      course: req.body.course,
      present: req.body.present,
    });
    res.status(201).json({
      message: "created successfully",
      data: getData,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      data: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getData = await students.findById(req.params.id);
    res.status(202).json({
      message: "found successfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const getData = await students.find();
    res.status(202).json({
      message: "found successfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const getData = await students.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "updated successfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const getData = await students.findByIdAndRemove(req.params.id, req.body);
    res.status(200).json({
      message: "found successfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error,
    });
  }
});

module.exports = router;
