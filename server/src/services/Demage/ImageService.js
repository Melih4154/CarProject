const BaseService = require("../BaseService");
const BaseModel = require("../../models/Demage/Image");

class ImageService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new ImageService();
