const BaseService = require("../BaseService");
const BaseModel = require("../../models/Demage/Demage");

class DemageService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  getAll(where) {
    return this.BaseModel.find(where || {}).populate({
      path: "personel",
      select: "user_name full_name id_number",
    });
    // .populate({
    //   path: "vehicle_id",
    //   select: "number_plate",
    // });
  }

  findOne(where) {
    return this.BaseModel.findOne(where)
      .populate({
        path: "personel",
        select: "user_name full_name id_number",
      });
  }
}

module.exports = new DemageService();
