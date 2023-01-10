const express = require("express");
const OfferController = require("../controllers/OfferController");
const { authenticateToken } = require("../middleware/authenticate");

const router = express.Router();

router
  .route("/make-comment/:offer_id")
  .post(authenticateToken, OfferController.makeComment);

module.exports = router;
