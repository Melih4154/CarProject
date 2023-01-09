const BaseService = require("./BaseService");
const BaseModel = require("../models/Demand");

class DemandService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new DemandService();
