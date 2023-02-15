const BaseService = require("../BaseService");
const BaseModel = require("../../models/Demage/Car");

class CarService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new CarService();
