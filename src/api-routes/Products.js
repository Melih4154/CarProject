const express = require("express");
const ProductController = require("../controllers/ProductController");
const { authenticateToken } = require("../middleware/authenticate");

const router = express.Router();

router.route("/").get(authenticateToken, ProductController.getAll);
// TODO: add admin control for addProduct
router.route("/").post(ProductController.addProduct);

module.exports = router;
