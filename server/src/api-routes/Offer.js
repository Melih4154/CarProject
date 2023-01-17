const express = require("express");
const OfferController = require("../controllers/OfferController");
const {
  authenticateToken,
  isCompany,
  isUser,
} = require("../middleware/authenticate");

const validate = require("../middleware/validate");
const schemas = require("../validations/OfferValidation");
const idChecker = require("../middleware/idChecker");

const router = express.Router();

router
  .route("/:demand_id")
  .post(
    idChecker("demand_id"),
    [authenticateToken, isCompany],
    validate(schemas.createValidation),
    OfferController.create
  );

router
  .route("/:demand_id")
  .get(
    idChecker("demand_id"),
    [authenticateToken, isUser],
    OfferController.getOfferByDemand
  );

router
  .route("/")
  .get([authenticateToken, isCompany], OfferController.getOfferByUser);

router
  .route("/make-comment/:offer_id")
  .post(
    idChecker("offer_id"),
    authenticateToken,
    validate(schemas.makeComment),
    OfferController.makeComment
  );

module.exports = router;
