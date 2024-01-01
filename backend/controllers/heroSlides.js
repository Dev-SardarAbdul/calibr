const mognoose = require("mongoose");

const getAllSlides = async (req, res) => {
  res.json({ mssg: "Get All slides" });
};

const createSlide = async (req, res) => {
  res.json({ mssg: "Create slide" });
};

const deleteSlide = async (req, res) => {
  res.json({ mssg: "Delete slide" });
};

const updateSlide = async (req, res) => {
  res.json({ mssg: "update slide" });
};

module.exports = {
  getAllSlides,
  createSlide,
  deleteSlide,
  updateSlide,
};
