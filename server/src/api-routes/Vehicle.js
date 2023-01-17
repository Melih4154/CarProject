const express = require("express");
const VehicleController = require("../controllers/VehicleController");
const { authenticateToken, isUser } = require("../middleware/authenticate");

const validate = require("../middleware/validate");
const schemas = require("../validations/VehicleValidation");

const router = express.Router();

router.route("/").get([authenticateToken, isUser], VehicleController.getAll);
router
  .route("/")
  .post(
    [authenticateToken, isUser],
    validate(schemas.createValidation),
    VehicleController.addVehicle
  );

module.exports = router;
