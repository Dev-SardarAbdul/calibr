const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const heroSlidesRoute = require("./routes/heroRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/heroSlides", heroSlidesRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Databse connected`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
