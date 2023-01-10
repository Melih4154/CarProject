const express = require("express");
const DemandController = require("../controllers/DemandController");
const { authenticateToken } = require("../middleware/authenticate");

const router = express.Router();

router.route("/").post(authenticateToken, DemandController.create);
router
  .route("/demandsByUser")
  .get(authenticateToken, DemandController.getDemandByUser);
router.route("/").get(authenticateToken, DemandController.getAll);

router
  .route("/make-comment/:demand_id")
  .post(authenticateToken, DemandController.makeComment);

module.exports = router;
