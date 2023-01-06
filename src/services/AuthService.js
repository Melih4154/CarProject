const BaseService = require("./BaseService");
const BaseModel = require("../models/User");

class AuthService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new AuthService();
