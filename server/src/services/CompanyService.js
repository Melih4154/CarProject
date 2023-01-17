const BaseService = require("./BaseService");
const BaseModel = require("../models/User/Company");

class CompanyService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  findOne(where) {
    return this.BaseModel.find(where || {})
      .populate({
        path: "products",
        select: "product_name",
      })
      .populate({
        path: "comments",
        populate: [{ path: "user_id", select: "user_name" }],
      });
  }
}

module.exports = new CompanyService();
