const BaseService = require("./BaseService");
const BaseModel = require("../models/Demand");

class DemandService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  getAll(where) {
    return BaseModel.find(where || {})
      .populate({
        path: "user_id",
        select: "user_name full_name city",
      })
      .populate({
        path: "vehicle_id",
        select:
          "brand model year vehicle_inspection_date oil gear km licence_photo vehicle_chassis_no",
      })
      .populate({
        path: "product_id",
        select: "product_name",
      });
  }
}

module.exports = new DemandService();
