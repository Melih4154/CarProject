const express = require("express");
const UserController = require("../controllers/UserController");
const { authenticateToken } = require("../middleware/authenticate");

const router = express.Router();

router.route("/").get(UserController.getProfile);
router.route("/").post(authenticateToken, UserController.profileUpdate);

module.exports = router;
