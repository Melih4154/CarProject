const express = require("express");
const UserController = require("../controllers/UserController");
const {
  authenticateToken,
  isCompany,
  isUser,
} = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const schemas = require("../validations/UserValidation");
const idChecker = require("../middleware/idChecker");

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

router
  .route("/make-comment/:company_id")
  .post(
    idChecker("company_id"),
    [authenticateToken, isUser],
    validate(schemas.makeComment),
    UserController.makeCommentForCompany
  );

router
  .route("/update-password")
  .patch(
    authenticateToken,
    validate(schemas.updatePassword),
    UserController.updatePassword
  );

router
  .route("/:company_id")
  .get(
    idChecker("company_id"),
    [authenticateToken, isUser],
    UserController.getCompnayProfile
  );

module.exports = router;
