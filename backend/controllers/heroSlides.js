const HeroSlide = require("../models/heroModel");

const getAllSlides = async (req, res) => {
  const heroSlide = await HeroSlide.find();
  res.status(200).json(heroSlide);
};

const createSlide = async (req, res) => {
  const { topText, name, price, fetchedImage } = req.body;

  if (!topText || !name || !price || !fetchedImage) {
    return res.status(500).json({ message: "All fields are required!" });
  }

  try {
    const newSlide = await HeroSlide.create({
      topText,
      name,
      price,
      image: fetchedImage,
    });
    res.status(200).json(newSlide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSlide = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSlide = await HeroSlide.findByIdAndDelete(id);
    res.status(200).json(deletedSlide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSlide = async (req, res) => {
  const { id } = req.params;
  const { topText, name, price, fetchedImage } = req.body;

  const updatedFields = {};

  if (topText) {
    updatedFields.topText = topText;
  }

  if (name) {
    updatedFields.name = name;
  }

  if (price) {
    updatedFields.price = price;
  }

  if (fetchedImage) {
    updatedFields.image = fetchedImage;
  }

  try {
    const updatedSlide = await HeroSlide.findByIdAndUpdate(
      { _id: id },
      updatedFields,
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
