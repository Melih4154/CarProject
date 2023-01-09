const BaseService = require("./BaseService");
const BaseModel = require("../models/User/Company");

class CompanyService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new CompanyService();
