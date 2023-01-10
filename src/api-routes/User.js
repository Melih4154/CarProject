const express = require("express");
const UserController = require("../controllers/UserController");
const { authenticateToken } = require("../middleware/authenticate");

const router = express.Router();

router.route("/").get(UserController.getProfile);
router.patch("/").patch(authenticateToken, UserController.profileUpdate);
router
  .route("/update-products")
  .patch(authenticateToken, UserController.updateProduct);

module.exports = router;
