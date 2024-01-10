const express = require("express");
const {
  getAllHomeProducts,
  getSingHomeProduct,
  createHomProduct,
  updateHomeProduct,
  deleteHomeProduct,
} = require("../controllers/homeNewProducts");

const router = express.Router();

router.get("/", getAllHomeProducts);

router.get("/:id", getSingHomeProduct);

router.post("/", createHomProduct);

router.put("/:id", updateHomeProduct);

router.delete("/:id", deleteHomeProduct);

module.exports = router;
