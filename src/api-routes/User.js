const express = require("express");
const UserController = require("../controllers/UserController");
const { authenticateToken, isCompany } = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const schemas = require("../validations/UserValidation");

const router = express.Router();

router.route("/").get(authenticateToken, UserController.getProfile);
router
  .route("/")
  .patch(
    authenticateToken,
    validate(schemas.userValidation),
    UserController.profileUpdate
  );
router
  .route("/update-products")
  .patch([authenticateToken, isCompany], UserController.updateProduct);

module.exports = router;
