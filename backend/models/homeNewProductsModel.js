const mongoose = require("mongoose");

const homeProductsModal = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/calibr-37b27.appspot.com/o/slide1.png?alt=media&token=09d2d4bb-7425-44fe-b870-e326814c0303",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeProduct", homeProductsModal);
