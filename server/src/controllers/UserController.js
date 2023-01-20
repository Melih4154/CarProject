const httpStatus = require("http-status");
const CompanyService = require("../services/CompanyService");
const IndividualService = require("../services/IndividualService");
const UserService = require("../services/UserService");
const {
  hashToPassword,
} = require("../script/utils/helper");

class UserController {
  getProfile(req, res) {
    UserService.findOne({ _id: req.user?._id })
      .then((user) => {
        if (user.__t == "company") {
          return CompanyService.findOne({ _id: user._id })
            .then((user) => res.status(httpStatus.OK).send(user))
            .catch((e) =>
              res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({ error: "Bir hata oluştu" })
            );
        }

        return res.status(httpStatus.OK).send(user);
      })
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

  updateProduct(req, res) {
    CompanyService.findOne({ _id: req.user?._id }).then((user) => {
      CompanyService.update(req.user?._id, req.body)
        .then((userUpdate) => {
          userUpdate.products = user.products.concat(req.body.products);
          userUpdate
            .save()
            .then((updatedUser) => res.status(httpStatus.OK).send(updatedUser))
            .catch((e) =>
              res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({ error: "Bir hata oluştu..." })
            );
        })
        .catch((e) =>
          res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({ error: "Bir hata oluştu..." })
        );
    });
  }

  makeCommentForCompany(req, res) {
    UserService.findOne({ _id: req.params.company_id })
      .then((company) => {
        const comment = {
          ...req.body,
          created_at: new Date(),
          user_id: req.user,
        };

        company.comments.push(comment);
        company
          .save()
          .then((company) => res.status(httpStatus.OK).send(company))
          .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "bir hata oluştu..." })
      );
  }

  getCompnayProfile(req, res) {
    CompanyService.findOne({ _id: req.params.company_id })
      .then((company) => res.status(httpStatus.OK).send(company))
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "bir hata oluştu..." })
      );
  }

  updatePassword(req, res) {
    UserService.findOne({ _id: req.user?._id })
      .then((user) => {
        const oldPassword = hashToPassword(req.body.old_password);
        if (user.password != oldPassword) {
          return res
            .status(httpStatus.BAD_REQUEST)
            .send({ error: "Eski şifreniz yanlış." });
        } else {
          if (req.body.password != req.body.password_again) {
            return res
              .status(httpStatus.BAD_REQUEST)
              .send({ error: "Girilen şifreler aynı değil." });
          } else {
            req.body.password = hashToPassword(req.body.password);
            return UserService.update(user._id, req.body)
              .then((updatedUser) =>
                res.status(httpStatus.OK).send(updatedUser)
              )
              .catch((e) =>
                res
                  .status(httpStatus.INTERNAL_SERVER_ERROR)
                  .send({ error: "bir hata oluştu..." })
              );
          }
        }
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "bir hata oluştu..." })
      );
  }
}

module.exports = new UserController();
