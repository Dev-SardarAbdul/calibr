const express = require("express");
const {
  getAllSlides,
  createSlide,
  deleteSlide,
  updateSlide,
} = require("../controllers/heroSlides");

const router = express.Router();

router.get("/", getAllSlides);

router.post("/", createSlide);

router.delete("/:id", deleteSlide);

router.put("/:id", updateSlide);

module.exports = router;
