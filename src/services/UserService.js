const BaseService = require("./BaseService");
const BaseModel = require("../models/User/User");

class UserService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new UserService();
