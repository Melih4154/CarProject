const express = require("express");
const DocumentController = require("../controllers/DocumentController");
const { authenticateToken } = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const schemas = require("../validations/DemandValidation");
const idChecker = require("../middleware/idChecker");

const router = express.Router();

router.route("/:status/:demage_id").post(
  authenticateToken,
  //[authenticateToken, isUser],
  //validate(schemas.createValidation),
  DocumentController.create
);

// router.route("/").get(
//  // authenticateToken,
//   //[authenticateToken, isUser],
//   DemageController.getAll
// );

// router.route("/:demage_id").get(
//   //[authenticateToken, isCompany],
//   authenticateToken,
//   DemageController.getByDemageId
// );

// router
//   .route("/make-comment/:demand_id")
//   .post(
//     idChecker("demand_id"),
//     authenticateToken,
//     validate(schemas.makeComment),
//     DemandController.makeComment
//   );

module.exports = router;
