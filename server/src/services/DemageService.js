const BaseService = require("./BaseService");
const BaseModel = require("../models/Demage/Demage");

class DemageService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  
}

module.exports = new DemageService();