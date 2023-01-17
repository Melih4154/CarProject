const express = require("express");
const DemandController = require("../controllers/DemandController");
const {
  authenticateToken,
  isUser,
  isCompany,
} = require("../middleware/authenticate");

const validate = require("../middleware/validate");
const schemas = require("../validations/DemandValidation");
const idChecker = require("../middleware/idChecker");

const router = express.Router();

router
  .route("/")
  .post(
    [authenticateToken, isUser],
    validate(schemas.createValidation),
    DemandController.create
  );

router
  .route("/demandsByUser")
  .get([authenticateToken, isUser], DemandController.getDemandByUser);

router.route("/").get([authenticateToken, isCompany], DemandController.getAll);

router
  .route("/make-comment/:demand_id")
  .post(
    idChecker("demand_id"),
    authenticateToken,
    validate(schemas.makeComment),
    DemandController.makeComment
  );

module.exports = router;
