const HomeProduct = require("../models/homeNewProductsModel");

const getAllHomeProducts = async (req, res) => {
  try {
    const allProducts = await HomeProduct.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const getSingHomeProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ error: "Not Found!" });
  }

  try {
    const singleProduct = await HomeProduct.findById(id);
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const createHomProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(501).json({ error: "All fields are required" });
  }

  try {
    const createdProduct = await HomeProduct.create({ name, price, image });
    res.status(200).json(createdProduct);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const deleteHomeProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ error: "Not Found!" });
  }

  try {
    const deletedProduct = await HomeProduct.findByIdAndDelete(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const updateHomeProduct = async (req, res) => {
  const { id } = req.params;

  const { name, price, image } = req.body;

  const updatedproduct = {};

  if (name) {
    updatedproduct.name = name;
  }
  if (price) {
    updatedproduct.price = price;
  }
  if (image) {
    updatedproduct.image = image;
  }

  try {
    const updatedHomeProduct = await HomeProduct.findByIdAndUpdate(
      { _id: id },
      updatedproduct
    );

    res.status(200).json(updatedHomeProduct);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  getAllHomeProducts,
  getSingHomeProduct,
  createHomProduct,
  deleteHomeProduct,
  updateHomeProduct,
};
