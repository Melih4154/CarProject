const httpStatus = require("http-status");
const CompanyService = require("../services/CompanyService");
const IndividualService = require("../services/IndividualService");
const UserService = require("../services/UserService");

class UserController {
  getProfile(req, res) {
    UserService.findOne({ user_id: req.user?._id })
      .then((user) => res.status(httpStatus.OK).send(user))
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu" })
      );
  }

  profileUpdate(req, res) {
    UserService.findOne({ _id: req.user?._id }).then((user) => {
      if (user.__t == "company") {
        return CompanyService.update(req.user?._id, req.body)
          .then((user) => res.status(httpStatus.OK).send(user))
          .catch((e) =>
            res
              .status(httpStatus.INTERNAL_SERVER_ERROR)
              .send({ error: "Bir hata oluştu" })
          );
      }
      return IndividualService.update(req.user?._id, req.body)
        .then((user) => res.status(httpStatus.OK).send(user))
        .catch((e) =>
          res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({ error: "Bir hata oluştu" })
        );
    });
  }
}

module.exports = new UserController();
