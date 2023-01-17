const express = require("express");
const AuthController = require("../controllers/AuthController");
const validate = require("../middleware/validate");
const schemas = require("../validations/AuthValidation");

const router = express.Router();

router
  .route("/register")
  .post(
    validate(schemas.registerUserValidation),
    AuthController.registerIndividual
  );
router
  .route("/register/company")
  .post(
    validate(schemas.registerUserValidation),
    AuthController.registerCompany
  );
router
  .route("/")
  .post(validate(schemas.loginUserValidation), AuthController.login);

module.exports = router;
