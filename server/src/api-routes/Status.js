const express = require("express");
const StatusController = require("../controllers/StatusController");
const { authenticateToken } = require("../middleware/authenticate");

const router = express.Router();

//router.route("/").get(authenticateToken, StatusController.getAll);
// TODO: add admin control for addProduct
router.route("/").post(StatusController.create);

module.exports = router;