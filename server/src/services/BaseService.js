BaseModel = null;

class BaseService {
  constructor(model) {
    this.BaseModel = model;
  }

  getAll(where) {
    return this.BaseModel.find(where || {});
  }

  create(data) {
    return this.BaseModel(data).save();
  }

  findOne(where) {
    return this.BaseModel.findOne(where);
  }

  update(id, data) {
    return this.BaseModel.findByIdAndUpdate(id, data, { new: true });
  }

  updateWhere(where, data) {
    return this.BaseModel.findOneAndUpdate(where, data, { new: true });
  }

  delete(id) {
    return this.BaseModel.findByIdAndDelete(id);
  }
}

module.exports = BaseService;
