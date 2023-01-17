const httpStatus = require("http-status");
const DemandService = require("../services/DemandService");
const UserService = require("../services/UserService");

class DemandController {
  create(req, res) {
    req.body.user_id = req.user;
    DemandService.create(req.body)
      .then((demand) => res.status(httpStatus.CREATED).send(demand))
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }

  getDemandByUser(req, res) {
    DemandService.getAll({ user_id: req.user?._id })
      .then((demands) => {
        res.status(httpStatus.OK).send(demands);
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }

  getAll(req, res) {
    UserService.findOne({ _id: req.user?._id })
      .then((user) => {
        const products = user.products;
        return DemandService.getAll({
          city: user.city,
          product_id: products,
        })
          .then((demands) => res.status(httpStatus.OK).send(demands))
          .catch((e) =>
            res
              .status(httpStatus.INTERNAL_SERVER_ERROR)
              .send({ error: "Bir hata oluştu." })
          );
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu..." })
      );
  }

  makeComment(req, res) {
    DemandService.findOne({ _id: req.params.demand_id })
      .then((demand) => {
        const comment = {
          ...req.body,
          created_at: new Date(),
          user_id: req.user,
        };

        demand.comments.push(comment);
        demand
          .save()
          .then((demand) => res.status(httpStatus.OK).send(demand))
          .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "bir hata oluştu..." })
      );
  }
}

module.exports = new DemandController();
