const BaseService = require("./BaseService");
const BaseModel = require("../models/Offer");

class OfferService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new OfferService();
