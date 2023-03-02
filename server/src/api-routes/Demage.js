const express = require("express");
const DemageController = require("../controllers/DemageController");
const {
  authenticateToken,
  isUser,
  isCompany,
} = require("../middleware/authenticate");

const validate = require("../middleware/validate");
const schemas = require("../validations/DemandValidation");
const idChecker = require("../middleware/idChecker");

const router = express.Router();

router.route("/").post(
  authenticateToken,
  //[authenticateToken, isUser],
  //validate(schemas.createValidation),
  DemageController.create
);

router.route("/").get(
  authenticateToken,
  //[authenticateToken, isUser],
  DemageController.getAll
);

router.route("/:demage_id").get(
  //[authenticateToken, isCompany],
  authenticateToken,
  DemageController.getByDemageId
);

// router
//   .route("/make-comment/:demand_id")
//   .post(
//     idChecker("demand_id"),
//     authenticateToken,
//     validate(schemas.makeComment),
//     DemandController.makeComment
//   );

module.exports = router;
