const BaseService = require("../BaseService");
const BaseModel = require("../../models/Demage/Status");

class DemageService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new DemageService();
