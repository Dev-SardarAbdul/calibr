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
    const newSlide = await HeroSlide.create({ topText, name, price });
    res.status(200).json(newSlide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSlide = async (req, res) => {
  const { id } = req.params;

  try {
    await HeroSlide.findByIdAndDelete(id);
    res.status(200).json({ message: "Slide deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSlide = async (req, res) => {
  const { id } = req.params;
  const { topText, name, price } = req.body;

  try {
    const updatedSlide = await HeroSlide.findByIdAndUpdate(
      { _id: id },
      {
        topText,
        name,
        price,
      },
      { new: true }
    );

    res.status(200).json(updatedSlide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSlides,
  createSlide,
  deleteSlide,
  updateSlide,
};
