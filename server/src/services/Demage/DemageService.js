const BaseService = require("../BaseService");
const BaseModel = require("../../models/Demage/Demage");

class DemageService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  getAll(where) {
    return this.BaseModel.find(where || {})
      .populate({
        path: "user_id",
        select: "user_name full_name id_number",
      })
      .populate({
        path: "personel",
        select: "user_name full_name id_number"
      })
      // .populate({
      //   path: "vehicle_id",
      //   select: "number_plate",
      // });
  }

  findOne(where) {
    return this.BaseModel.findOne(where)
      .populate({
        path: "user_id",
        select: "user_name id_number",
      })
      .populate({
        path: "vehicle_id",
        select:
          "brand model year engine_number number_plate usage vehicle_chassis_no",
      })
      .populate({
        path: "registrant",
        select: "user_name",
      })
      .populate({
        path: "personel",
        select: "user_name",
      });
  }
}

module.exports = new DemageService();
