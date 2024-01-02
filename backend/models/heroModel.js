const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    topText: {
      require: true,
      type: String,
    },
    name: {
      require: true,
      type: String,
    },
    price: {
      require: true,
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeroSlide", heroSchema);
