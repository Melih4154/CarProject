const express = require("express");
const VehicleController = require("../controllers/VehicleController");
const { authenticateToken } = require("../middleware/authenticate");

const router = express.Router();

router.get("/", VehicleController.getAll);
router.route("/").post(authenticateToken, VehicleController.addVehicle);

module.exports = router;
