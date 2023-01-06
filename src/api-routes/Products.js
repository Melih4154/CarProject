const express = require("express");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.get("/", ProductController.getAll);
router.route("/").post(ProductController.addProduct);

module.exports = router;
