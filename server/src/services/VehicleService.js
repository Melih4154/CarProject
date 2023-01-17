const BaseService = require("./BaseService");
const BaseModel = require("../models/Vehicle");

class VehicleService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new VehicleService();
