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
    image: {
      require: true,
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/calibr-37b27.appspot.com/o/slide1.png?alt=media&token=09d2d4bb-7425-44fe-b870-e326814c0303",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeroSlide", heroSchema);
