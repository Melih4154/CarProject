const BaseService = require("./BaseService");
const BaseModel = require("../models/User/Individual");

class IndividualService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new IndividualService();
