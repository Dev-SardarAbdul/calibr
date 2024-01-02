const mognoose = require("mongoose");
const HeroSlide = require("../models/heroModel");

const getAllSlides = async (req, res) => {
  const heroSlide = await HeroSlide.find();
  res.status(200).json(heroSlide);
};

const createSlide = async (req, res) => {
  const { topText, name, price } = req.body;

  if (!topText || !name || !price) {
    return res.status(500).json({ message: "All fields are required!" });
  }

  try {
  } catch (error) {}
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
