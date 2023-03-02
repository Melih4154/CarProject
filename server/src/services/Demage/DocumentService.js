const BaseService = require("../BaseService");
const BaseModel = require("../../models/Demage/Document");

class DemageService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new DemageService();