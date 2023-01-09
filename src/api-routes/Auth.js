const express = require("express");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.route("/register").post(AuthController.registerIndividual);
router.route("/register/company").post(AuthController.registerCompany);
router.route("/").post(AuthController.login);

module.exports = router;
