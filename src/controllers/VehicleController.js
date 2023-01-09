const httpStatus = require("http-status");
const VehicleService = require("../services/VehicleService");

class ProductController {
  getAll(req, res) {
    VehicleService.getAll({ user_id: req.user?._id })
      .then((vehicle) => res.status(httpStatus.OK).send(vehicle))
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu" })
      );
  }

  addVehicle(req, res) {
    req.body.user_id = req.user;
    VehicleService.create(req.body)
      .then((vehicle) => res.status(httpStatus.CREATED).send(vehicle))
      .catch((err) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "User Eklenirken bir hata oluştu.." })
      );
  }
}

module.exports = new ProductController();
